// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
// It can resolve any value.

// Define an asynchronous function called sleep that returns a promise
async function sleep(millis) {
  // Returns a new promise with delayedresolve and reject as callback functions
  return new Promise((delayedresolve, reject) => {
    // Check if millis is not a number or is NaN, reject the promise with an error
    if (typeof millis !== "number" || isNaN(millis)) {
      reject(new Error("Invalid argument. Expected a number."));
    } else {
      // Set a timeout to resolve the promise after the specified time in millis
      setTimeout(delayedresolve, millis);
    }
  });
}

// Record the current time in milliseconds
let t = Date.now();
// Call the sleep function with an argument of 100 milliseconds
sleep(100).then(() => console.log(Date.now() - t));
// When the promise is resolved, log the difference between the current time and the recorded time (should be approximately 100)
