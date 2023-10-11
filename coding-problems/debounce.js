/**
 * Link: https://leetcode.com/problems/debounce/
 * Level: Medium
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};
