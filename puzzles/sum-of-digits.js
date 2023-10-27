/**
 * Digital root is the recursive sum of all the digits in a number.
 * Given n, take the sum of the digits of n. 
    If that value has more than one digit, continue reducing in this way 
    until a single-digit number is produced. 
    The input will be a non-negative integer.

    Sample input
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 * Link: https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
 */

function sumOfDigits(n) {
  const digits = String(n).split("");
  if (digits.length === 1) {
    return Number(digits.pop());
  }
  const sum = digits.reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);

  if (String(sum).split("").length > 1) {
    return sumOfDigits(sum);
  } else {
    return sum;
  }
}

function digitRoot(n) {
  if (n < 10) return n;

  return digitRoot(
    n
      .toString()
      .split("")
      .reduce(function (acc, d) {
        return acc + +d;
      }, 0)
  );
}

console.log(sumOfDigits(493193));
console.log(digitRoot(493193));
