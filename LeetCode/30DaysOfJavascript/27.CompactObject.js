// Given an object or array obj, return a compact object. A compact object is the same as the original object,
// except with keys containing falsy values removed. This operation applies to the object and any nested objects.
// Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value)
// returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
const compactObject = function (obj) {
  // If obj is null, return null
  if (obj === null) return null;

  // If obj is an array, filter out falsy values and map each element to compactObject
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  
  // If obj is not an object, return obj
  if (typeof obj !== "object") return obj;

  // Initialize an empty object to store the compacted result
  const compacted = {};

  // Iterate over each key in obj
  for (const key in obj) {
    // Recursively call compactObject on the value of the current key
    let value = compactObject(obj[key]);
    // If the value is truthy, add it to the compacted object with the current key
    if (value) compacted[key] = value;
  }

  // Return the compacted object
  return compacted;
};

// Examples
const example1 = [null, 0, false, 1];
const example2 = { a: null, b: [false, 1] };
const example3 = [null, 0, 5, [0], [false, 16]];

console.log(compactObject(example1)); // Output: [1]
console.log(compactObject(example2)); // Output: {"b": [1]}
console.log(compactObject(example3)); // Output: [5, [], [16]]
