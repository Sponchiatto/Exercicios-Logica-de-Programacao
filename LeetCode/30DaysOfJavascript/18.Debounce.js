// Why use Debouncing?

// Have you ever come across a situation where a function has been called multiple times in a short space of time, 
// causing performance issues or unexpected behavior? This is a common problem in JavaScript, especially when working 
// with events like scrolling, resizing, or scanning.

// Fortunately, there is a simple technique called “debouncing” that can help you control the frequency of 
// function calls and avoid these problems.

// Given a function fn and a time in milliseconds t, return a debounced version of that function.

// A debounced function is a function whose execution is delayed by t milliseconds and whose execution
// is cancelled if it is called again within that window of time. The debounced function should also receive the passed
// parameters.

// For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls
// would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would
// be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.

const debounce = function (fn, t) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
};

// Your original function
function myFunction(param) {
  console.log("Function called with parameter:", param);
}

// Create a debounced version of myFunction with a time of 50ms
const debouncedFunction = debounce(myFunction, 50);

// Call the debounced function multiple times
debouncedFunction("First call");
debouncedFunction("Second call");
debouncedFunction("Third call");
// debouncedFunction("Fourth call");
// debouncedFunction("Fifth call");
// debouncedFunction("Sixth call");
