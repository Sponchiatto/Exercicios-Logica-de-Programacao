// Given an integer array arr and a mapping function fn, return a new array with a
// transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

// ===================================================================================================================

const fn = function (n) {
  return n * n;
};

// An array containing numeric values
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ===================================================================================================================

// A function named 'mapSubstitue' that takes an array 'arr' and a function 'fn'
const mapSubstitue = function (arr, fn) {
  // An array to store the transformed values
  const transformedArr = [];

  // Loop through each element of the input array
  for (let i = 0; i < arr.length; i++) {
    // Apply the provided function 'fn' to each element and store the result in the new array
    transformedArr[i] = fn(arr[i], i);
  }

  // Return the array with transformed values
  return transformedArr;
};

// Undefined function 'fn' used in the mapSubstitue function call, causing an error
// A proper function should be defined before using it in the mapSubstitue function call
const resultado = mapSubstitue(arr, fn);

// Display the result, which is currently undefined due to the error
console.log("Using For:", resultado);

// ==================================================================================================================

// Using method map
// Syntax map(callbackFn, thisArg)
function applyTransformation(arr, fn) {
  // Use map to apply the transformation function to each element
  const transformedArr = arr.map((value, index) => fn(value, index));

  // Return the array with transformed values
  return transformedArr;
}

const transformationMap = applyTransformation(arr, fn);
console.log("Using Map:", transformationMap);
