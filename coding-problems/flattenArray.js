/**
 * Link: https://leetcode.com/problems/flatten-deeply-nested-array/
 * Level: Medium
 * @param {Array} arr
 * @param {Number} depth
 * @returns
 */
const flatRecursive = function (arr, depth) {
  if (depth == 0) return arr.slice();

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const nested = flat(arr[i], depth - 1);
      result.push(...nested);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

const flatIterative = (arr, depth) => {
  let hasNestedArray = true;
  let queue;
  let currentDepth = 0;

  // Continue flattening while there are nested array elements and the current depth is less than the specified depth
  while (hasNestedArray && currentDepth < depth) {
    hasNestedArray = false;
    queue = [];

    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        queue.push(...arr[i]); // If the element is an array, spread its elements into the queue
        hasNestedArray = true; // Set the flag to indicate the presence of nested array elements
      } else {
        queue.push(arr[i]); // If the element is not an array, push it into the queue
      }
    }

    arr = [...queue]; // Replace the original array with the elements in the queue
    currentDepth++; // Increment the depth counter
  }

  return arr; // Return the flattened array
};
