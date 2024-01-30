// 	Given an integer array nums, a reducer function fn, and an initial value init, return the final
// result obtained by executing the fn function on each element of the array, sequentially, passing in the return value
// from the calculation on the preceding element.

// 	This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val =
// fn(val, nums[2]), ... until every element in the array has been processed.
// The ultimate value of val is then returned.

// 	If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

// Sample reducer function: multiply each element by 2
const reducerFunction = (accumulator, currentValue) => accumulator * 2;
// Initial value
const initialValue = 1;
// Test array
const testArray = [1, 2, 3, 4, 5];

// LoopFor
// var reduce = function (nums, fn, init) {
//   let acc = init;
//   for (let i = 0; i < nums.length; i++) {
//     acc = fn(acc, nums[i]);
//   }
//   return acc;
// };

// recursion
// var reduce = function (nums, fn, init) {
//   let acc = init;
//   nums.forEach((element) => {
//     acc = fn(acc, element);
//   });
//   return acc;
// };

// Array.reduce
var reduce = function (nums, fn, init) {
  return nums.reduce((acc, element) => fn(acc, element), init);
};

// Call the reduce function
const result = reduce(testArray, reducerFunction, initialValue);

// Display the result
console.log(result);
