// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.

// Define a function called countSheep that takes a non-negative integer as input
const countSheep = function (num) {
  // Initialize an empty string to store the result
  let result = '';
  
  // Loop from 1 to the given number (inclusive)
  for (let i = 1; i <= num; i++) {
    // Concatenate the current number followed by " sheep..." to the result string
    result += `${i} sheep...`;
  }
  
  // Return the final result string
  return result;
};

console.log(countSheep(3));
