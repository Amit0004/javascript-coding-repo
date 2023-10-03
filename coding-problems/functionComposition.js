/**
 * Link: https://leetcode.com/problems/function-composition/
 * @param  {...any} functions
 * @returns
 */
const compose =
  (...functions) =>
  (x) =>
    functions.reduceRight((acc, cur) => cur(acc), x);

/**
 * Testing
 */
const fn = compose(
  (x) => x + 1,
  (x) => x * 2
);
console.log("output >> ", fn(2));
