/**
 * Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript
 *
 * Sample input
 * [] -->  "no one likes this"
 * ["Peter"] -->  "Peter likes this"
 * ["Jacob", "Alex"] -->  "Jacob and Alex like this"
 * ["Max", "John", "Mark"] -->  "Max, John and Mark like this"
 * ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 */

function likes(names) {
  const length = names.length;
  if (length === 0) return "no one likes this";
  if (length === 1) return `${names.pop()} likes this`;
  if (length === 2) return `${names.shift()} and ${names.shift()} like this`;
  if (length === 3)
    return `${names.shift()}, ${names.shift()} and ${names.shift()} like this`;

  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
