/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

// 1. Using a for loop with operational container:
var map = function (arr, fn) {
  const transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArr[i] = fn(arr[i], i);
  }
  return transformedArr;
};


// 2. Using the forEach method:

var map = function (arr, fn) {
  const transformedArr = [];
  arr.forEach((element, index) => {
    transformedArr[index] = fn(element, index);
  });
  return transformedArr;
};

// 3. Using the reduce method
var map = function (arr, fn) {
  return arr.reduce((transformedArr, element, index) => {
    transformedArr[index] = fn(element, index);
    return transformedArr;
  }, []);
};