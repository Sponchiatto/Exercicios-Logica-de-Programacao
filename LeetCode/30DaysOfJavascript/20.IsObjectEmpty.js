// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.
// var isEmpty = function (obj) {
//   return Object.keys(obj).length === 0;
// };

const isEmpty = function (input) {
  if (typeof input === "object" && !Array.isArray(input)) {
    return Object.keys(input).length === 0;
  }

  if (Array.isArray(input)) {
    return input.length === 0;
  }

  return false;
};

console.log(isEmpty({})); // true
console.log(isEmpty({ 1: "Juseph", 2: "Cadura" })); // false
console.log(isEmpty([])); // true
console.log(isEmpty([1, 2, 3, 4, 5])); // false
console.log(isEmpty("uma string qualquer")); // false
