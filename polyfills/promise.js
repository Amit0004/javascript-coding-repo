function CustomPromise(executor) {
  let onResolve, onReject, isFulfilled, isRejected, isCalled, value;

  function resolve(val) {
    isFulfilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if (typeof onReject === "function") {
      onReject(value);
      isCalled = false;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

/**
 * Testing
 */

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Failed promise");
  }, 100);
});

const promise2 = new CustomPromise((resolve, reject) => {
  reject("success promise");
});

promise
  .then((rs) => console.log("resolved promise"))
  .catch((res) => console.log("rejected promise"));

promise2
  .then((rs) => console.log("resolved promise"))
  .catch((res) => console.log("rejected promise"));
