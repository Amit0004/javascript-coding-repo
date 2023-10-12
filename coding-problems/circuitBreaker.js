// implement a circuit breaker , that halts the function for x time if it fails for y count

const circuitBreaker = (fn, failureCount, thresholdTime) => {
  let totalFailureCounter = 0;
  let isClosed = false;
  let timeSinceLastFailure = 0;

  return function (...args) {
    if (isClosed) {
      const diff = Date.now() - timeSinceLastFailure;
      if (diff >= thresholdTime) {
        isClosed = false;
      } else {
        console.error("Service unavailable");
        return;
      }
    }

    try {
      const result = fn(...args);
      totalFailureCounter = 0;
      isClosed = false;
      return result;
    } catch (e) {
      totalFailureCounter++;
      timeSinceLastFailure = Date.now();
      if (totalFailureCounter > failureCount) {
        isClosed = true;
      }
      console.log("Error");
    }
  };
};

// Test function
const testFunction = () => {
  let count = 0;

  if (count < 4) {
    count++;
    throw "Failed";
  } else {
    return "Success";
  }
};
let test = testFunction();
let cb = circuitBreaker(test, 3, 200);

cb();
cb();
cb();
cb();
cb();
