/**
 * Build a logger function which sends analytics data to the backend service
 * Triggers:
 * 1. Continuos logging of analytics
 * 2. Can also be called by clients explicitly
 */
let customLoggerInstance = null;
class CustomLogger {
  constructor() {
    if (customLoggerInstance) {
      return customLoggerInstance;
    }
    this.interval = null;
    this.failed = [];
    customLoggerInstance = this;
  }

  streamLogs(delay, loggerFunc) {
    this.interval = setInterval(() => {
      loggerFunc();
    }, delay);
  }

  clearLogStream() {
    clearInterval(this.interval);
  }

  publishLog(loggerFunc) {
    return new Promise((resolve) => {
      try {
        loggerFunc();
        resolve();
      } catch (err) {
        this.failed.push(loggerFunc);
        console.log("failed: ", this.failed);
        resolve();
      }
    });
  }

  getFailedLogs() {
    return this.failed;
  }
}

const CustomLoggerFactory = (function () {
  let instance = null;

  const getLoggerInstance = function () {
    if (instance) {
      return instance;
    } else {
      return new CustomLogger();
    }
  };
  return {
    getLoggerInstance,
  };
})();

module.exports = CustomLoggerFactory;

/** Testing
 *
 */

// const logger = new CustomLogger();
// const logger2 = new CustomLogger();
// logger.streamLogs(1000, () => console.log("Streaming logs"));
// logger.publishLog(() => console.log("client published logs"));
// logger.publishLog(() => {
//   throw Error("test");
// });

// console.log("Failed logs logger 1 >> ", logger.getFailedLogs());
// console.log("Failed logs logger 2 >> ", logger2.getFailedLogs());

// setTimeout(() => {
//   logger.clearLogStream();
// }, 10000);
