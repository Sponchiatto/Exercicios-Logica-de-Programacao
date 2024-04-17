// Given five positive integers, find the minimum and maximum values that can be calculated by summing
//exactly four of the five integers. Then print the respective minimum and maximum values as a single line of
//two space-separated long integers.

// Example
// The minimum sum is  and the maximum sum is . The function prints
// 16 24
// Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):
// arr: an array of  integers
// Print
// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

function miniMaxSum(arr) {
  // Sort the input array in ascending order
  const sortedArray = arr.sort();

  // Calculate the sum of the four smallest numbers, excluding the smallest one
  const minSum = sortedArray.slice(0, 4).reduce((acc, curr) => acc + curr, 0);

  // Calculate the sum of the four largest numbers, excluding the largest one
  const maxSum = sortedArray.slice(1).reduce((acc, curr) => acc + curr, 0);

  // Print the results
  console.log(minSum, maxSum);
}

arr = [3, 1, 5, 7, 9];
miniMaxSum(arr);
