// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function.
// fn takes arguments provided to the time limited function.

// The time limited function should follow these rules:

// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string
// "Time Limit Exceeded".

// Function that imposes a time limit on another function
const timeLimit = function (fn, t) {
  // Returning an asynchronous function that takes variable arguments
  return async function (...args) {
    // Returning a Promise that handles the time limit
    return new Promise((resolve, reject) => {
      // Set a timeout to reject the promise if it takes longer than 't' milliseconds
      const timeOutId = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      // Calling the provided function 'fn' with the given arguments
      fn(...args)
        .then((result) => {
          // If the function succeeds within the time limit, clear the timeout and resolve with the result
          clearTimeout(timeOutId);
          resolve(result);
        })
        .catch((error) => {
          // If the function encounters an error, clear the timeout and reject with the error
          clearTimeout(timeOutId);
          reject(error);
        });
    });
  };
};

// Function that simulates a short operation
const delayedFunction = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operação concluída!");
    }, 1000); // Simulates a 1 second operation
  });
};

// Using the timeLimit function to enforce a 1 second time limit
const timeLimitedFunction = timeLimit(delayedFunction, 2000);

// Testing the function with an execution time within the limit
timeLimitedFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error); // In this example, this block must not be reached in the example
  });

// Testing the function with an execution time that exceeds the limit
const delayedFunctionExceedingLimit = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operação concluída!");
    }, 1500); // Simulates a 1.5 second operation, exceeding the limit
  });
};

const timeLimitedFunctionExceedingLimit = timeLimit(
  delayedFunctionExceedingLimit,
  1000
);

timeLimitedFunctionExceedingLimit()
  .then((result) => {
    console.log(result); // This must not be achieved due to time limit
  })
  .catch((error) => {
    console.error(error); // Should print "Time Limit Exceeded"
  });
