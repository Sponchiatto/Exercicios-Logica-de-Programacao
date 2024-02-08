// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the
// actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting
// is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

// Function to flatten a multi-dimensional array up to a specified depth
const flat = function (arr, n) {
  // If depth limit (n) is 0, return the original array
  if (n === 0) {
    return arr;
  }

  // Initialize an empty array to store the flattened result
  let result = [];

  // Log the input array and depth value for debugging
  //   console.log("Arr", arr);
  //   console.log("n value", n);

  // Iterate through each element of the input array
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is an array and depth limit has not been reached
    if (n > 0 && Array.isArray(arr[i])) {
      // Recursively flatten the nested array with reduced depth limit
      result = result.concat(flat(arr[i], n - 1));
      // Log the result of flattening for debugging
      // console.log("Loop For If", result);
    } else {
      // If the element is not an array or depth limit reached, add it to the result array
      result.push(arr[i]);
      // Log the result of adding the element for debugging
      // console.log("Loop For Else", result);
    }
  }

  // Return the flattened result
  return result;
};

const arr = [1, [2, [3, 4]], [5, 6]];

console.log(flat(arr, 2));
