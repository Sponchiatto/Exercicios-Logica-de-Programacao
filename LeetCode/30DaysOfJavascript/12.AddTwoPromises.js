// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

// What are asynchronous functions?
// Asynchronous functions, often denoted with the async keyword in JavaScript, allow non-blocking execution of code.
// They work well with asynchronous operations, enabling the program to continue executing other tasks while
// waiting for asynchronous tasks to complete. The async functions return Promises, making it easier to work with
// asynchronous code using features like await.

// What is the Promise.all method?
// The Promise.all(iterable) method returns a single Promise that resolves when all promises in the iterable argument
// are resolved or when the iterable passed as an argument does not contain promises. It is rejected with the reason of the
// first promise that was rejected.

// What is Promise.resolve?
// The Promise.resolve(value) method returns a Promise object that is resolved with the passed value. If the
// value is thenable (e.g., has a then method), the returned promise will "follow" that thenable, adopting its final state.
// If the value is a promise, the object will be the result of the Promise.resolve call; otherwise, the promise will
// be fulfilled with the value.

// When to use Promises?
// Use Promises when dealing with asynchronous operations, such as network requests, database access, file reading,
// among others. They are useful when you need to handle code that cannot be executed immediately and may take some time
// to complete.

// Where to use Promises?
// Promises are useful in asynchronous environments, such as web development (for handling HTTP requests,
// asynchronous event handling in the browser), in Node.js servers (for I/O operations), and in any situation where
// non-blocking operations are necessary.

// How to use them?
// To create a Promise, you can use the new Promise() constructor, passing an executor function with the resolve
// and reject parameters. Inside this function, you perform the asynchronous logic and, upon completion, call resolve
// if the operation is successful or reject if an error occurs. To consume a Promise, use .then() to handle the result
// when it is resolved and .catch() to handle potential errors.

// When not to use Promises?
// Avoid using Promises when the code is purely synchronous, without asynchronous operations. Promises add
// complexity and may be unnecessary if there is no real benefit in dealing with asynchronous operations. Additionally,
// in simpler situations, the use of callbacks can be more direct and clear.

const addTwoPromises = async function (promise1, promise2) {
  try {
    const [result1, result2] = await Promise.all([promise1, promise2]);

    if (typeof result1 !== "number" || typeof result2 !== "number") {
      throw new Error("The results must be numbers");
    }

    const sum = result1 + result2;

    return Promise.resolve(sum);
  } catch (error) {
    return Promise.reject(error);
  }
};

// Generate delayed promises, using setTimeout function, with event resolve(value/number) and delay (time in ms)
function createDelayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Example
const promise1 = createDelayedPromise(10, 1000); // Result 5 após 1 seconds
const promise2 = createDelayedPromise(4, 2000); // Result 10 após 2 seconds

addTwoPromises(promise1, promise2)
  .then((result) => {
    console.log("Sum:", result); // Print "Sum: 15" after 2 seconds
  })
  .catch((error) => {
    console.error("Sum:", error);
  });
