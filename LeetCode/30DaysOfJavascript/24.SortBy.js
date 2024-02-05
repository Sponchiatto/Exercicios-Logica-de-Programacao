// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those
// numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

// The sortBy function takes an array (arr) and a callback function (fn).
const sortBy = function (arr, fn) {
  // Use the sort method to sort the array.
  const sortedArr = arr.sort((a, b) => {
    // The result of applying the callback function to element 'a'.
    const resultA = fn(a);
    // The result of applying the callback function to element 'b'.
    const resultB = fn(b);

    // The following line ensures a correct numeric sorting order.
    // If resultA is less than resultB, return a negative value.
    // If resultA is greater than resultB, return a positive value.
    // If they are equal, return 0.
    return resultA - resultB;
  });

  // Return the sorted array.
  return sortedArr;
};

// Example usage:
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 28 },
  { name: "Rafael", age: 26 },
  { name: "Renata", age: 32 },
];

// Define a callback function to extract the age property
const getAge = (student) => student.age;

// Use sortBy to sort the array of students based on their ages
const sortedStudents = sortBy(students, getAge);

console.log(sortedStudents);
