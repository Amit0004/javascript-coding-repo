const CustomLoggerFactory = require("./custom-logger");

const logger = CustomLoggerFactory.getLoggerInstance();
const logger2 = CustomLoggerFactory.getLoggerInstance();

// logger.streamLogs(1000, () => console.log("Streaming logs"));
logger.publishLog(() => console.log("client published logs"));
logger.publishLog(() => {
  throw Error("test");
});

console.log("Failed logs logger 1 >> ", logger.getFailedLogs());
console.log("Failed logs logger 2 >> ", logger2.getFailedLogs());

// setTimeout(() => {
//   logger.clearLogStream();
// }, 10000);
