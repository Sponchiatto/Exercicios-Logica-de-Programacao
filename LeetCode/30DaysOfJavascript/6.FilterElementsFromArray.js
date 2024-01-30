// 	Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// 	The fn function takes one or two arguments:

// 	arr[i] - number from the arr
// 	i - index of arr[i]
// 	filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i)
// evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method

// ===================================================================================================================
// Loop For
  // const filter = function (arr, fn) {
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (fn(arr[i], i)) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // };

// ===================================================================================================================
// Usando Array.reduce
  // const filter = function (arr, fn) {
  //   return arr.reduce((result, value, index) => {
  //     if (fn(value, index)) {
  //       result.push(value);
  //     }
  //     return result;
  //   }, []);
  // };

// ===================================================================================================================
// Usando Array.forEach
  // var filter = function (arr, fn) {
  //   const result = [];
  //   arr.forEach((value, index) => {
  //     if (fn(value, index)) {
  //       result.push(value);
  //     }
  //   });
  //   return result;
  // };

// ===================================================================================================================
//  Usando Array.map
  // var filter = function (arr, fn) {
  //   return arr
  //     .map((value, index) => {
  //       if (fn(value, index)) {
  //         return value;
  //       }
  //     })
  //     .reduce((result, value) => {
  //       if (value !== undefined) {
  //         result.push(value);
  //       }
  //       return result;
  //     }, []);
  // };

// ===================================================================================================================
// Usando Array.flatMap()
  // The flatMap() method first maps each element using a mapping function and then flattens the result into a new array.
  // It's identical to a map followed by a flat of depth 1, but flatMap is quite useful and merges both into a slightly
  // more efficient method.
  // var filter = function (arr, fn) {
  //   return arr.flatMap((i, j) => (fn(i, j) ? [i] : []));
  // };

const isPar = function (numero) {
  return numero % 2 === 0;
};

// Using filter method
// The filter() method creates a new array with all the elements that passed the test implemented
// by the specific function.
const filter = function (arr, fn) {
  // Use filter to create a new array with elements that satisfy the filtering condition
  const filteredArr = arr.filter((value, index) => fn(value, index));

  // Return the filtered array
  return filteredArr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultadoFiltrado = filter(arr, isPar);

console.log(resultadoFiltrado);
