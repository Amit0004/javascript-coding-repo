const fetch = require("fetch");

const cachedApiCall = (timer) => {
  const cache = {};

  return async (url, config = {}) => {
    const key = `${url}${JSON.stringify(config)}`;
    const entry = cache[key];
    if (!entry || new Date.now() > entry.expiry) {
      console.log("Making fresh api call");

      try {
        const res = await fetch(url, config);
        res = await res.json();
        cache[key] = { response: res, expiry: Date.now() + timer };
      } catch (e) {
        console.log("Error while making API call", e);
      }
    }
    return cache[key]?.response ?? "";
  };
};

// Testing
const call = cachedApiCall(1000);

call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log(a)
);

setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log(a)
  );
}, 800);
