// Given an array of asynchronous functions functions, return a new promise promise. Each function in the
// array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel.
// The resolved value of promise should be an array of all the resolved values of promises in the same order as
// they were in the functions. The promise should resolve when all the asynchronous functions in the array have
// completed execution in parallel.

// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason
// of the first rejection.

// Please solve it without using the built-in Promise.all function.

var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    let hasRejected = false;

    functions.forEach((func, index) => {
      func().then(
        (result) => {
          if (!hasRejected) {
            results[index] = result;
            completed++;
            if (completed === functions.length) {
              resolve(results);
            }
          }
        },
        (error) => {
          if (!hasRejected) {
            hasRejected = true;
            reject(error);
          }
        }
      );
    });
  });
};

// Example 1: Resolving promises in parallel
const asyncFunc1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Result 1"), 1000));
const asyncFunc2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Result 2"), 500));
const asyncFunc3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Result 3"), 200));

const functionsArray1 = [asyncFunc1, asyncFunc2, asyncFunc3];

promiseAll(functionsArray1)
  .then((results) => console.log("Example 1 - Resolved:", results))
  .catch((error) => console.error("Example 1 - Rejected:", error));

// Example 2: Rejecting on the first rejection
const asyncFunc4 = () =>
  new Promise((resolve, reject) => setTimeout(() => reject("Error 1"), 300));
const asyncFunc5 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Result 5"), 700));
const asyncFunc6 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Result 6"), 1000));

const functionsArray2 = [asyncFunc4, asyncFunc5, asyncFunc6];

promiseAll(functionsArray2)
  .then((results) => console.log("Example 2 - Resolved:", results))
  .catch((error) => console.error("Example 2 - Rejected:", error));

// Example 3: Empty array should resolve with an empty array
const functionsArray3 = [];

promiseAll(functionsArray3)
  .then((results) => console.log("Example 3 - Resolved:", results))
  .catch((error) => console.error("Example 3 - Rejected:", error));
