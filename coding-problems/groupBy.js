/**
 * Link: https://leetcode.com/problems/group-by/
 * Problem level: Medium
 * @param {*} arr
 * @param {*} fn
 */
function groupBy(arr, fn) {
  return arr.reduce((acc, cur) => {
    const key = fn(cur);
    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(cur);
    return acc;
  }, {});
}

/**
 * Testing
 */
function tester() {
  const input = [{ id: "1" }, { id: "1" }, { id: "2" }];

  const inputFn = (item) => item.id;
  console.log("output >> ", groupBy(input, inputFn));
}

tester();
