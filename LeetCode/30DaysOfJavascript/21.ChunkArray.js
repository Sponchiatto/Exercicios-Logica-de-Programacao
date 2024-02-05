// Given an array arr and a block size, return a fragmented array. A fragmented array contains the original
// elements in arr, but consists of subarrays, each sized in length. The length of the last subarray may be less
// than size if arr.length is not evenly divisible by size.

// You can assume the array is the output of JSON.parse. In other words, JSON is valid.

// Please solve without using lodash's _.chunk function.

const chunck = function (arr, size) {
  let subArray = [];

  for (let i = 0; i < arr.length; i = i + size) {
    subArray.push(arr.slice(i, i + size));
  }
  return subArray;
};

const arr = ["ant", "bison", "camel", "duck", "elephant"];
const size = 2;

const result = chunck(arr, size);
console.log("Result: ", result);
