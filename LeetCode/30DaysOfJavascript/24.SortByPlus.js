// An array of numbers
const numbers = [10, 5, 20, 1, 2];

// Using the sort method directly (with the default string comparison)
// This can lead to unexpected results for numbers.
const sortedNumbers = numbers.sort();

// Output: [1, 10, 2, 20, 5]
console.log("Using sort directly", sortedNumbers);

// Using a function to sort numerical results correctly
// The provided function (a, b) => a - b ensures a correct numeric sort order.
const sortedNumbersFunc = numbers.sort((a, b) => a - b);

// Output: [1, 2, 5, 10, 20]
console.log("Using a function to sort numerical results", sortedNumbersFunc);
