/**
 * Link: https://leetcode.com/problems/memoize/
 * Level: Medium
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = [...args].join(".");
    if (key in cache) {
      return cache[key];
    } else {
      return (cache[key] = fn(...args));
    }
  };
}
