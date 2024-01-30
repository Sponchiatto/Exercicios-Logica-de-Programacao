// clearTimeout and setTimeout:

// setTimeout is a method in JavaScript used to schedule the execution of a function after a
// specific time interval. It takes two arguments: the function to be executed and the time in
// milliseconds after which the function will be called.

// clearTimeout is used to cancel the execution of a timer created with setTimeout.
// It receives as an argument the ID of the timer that was returned by setTimeout.

// What about setTimeout?:

// The function takes two parameters: a callback function and a delay value in milliseconds.
// The callback function represents the code we want to execute after the delay.

// When we call setTimeout, it registers the callback function and starts a timer. After the specified delay,
// the JavaScript engine adds the callback function to the event queue.

// In case you don't know what an event queue is, the event queue is a data structure that contains tasks to be
// processed by the JavaScript runtime. When the call stack is empty (all synchronous code has finished executing),
// the runtime chooses the next task from the event queue and executes it.

// By using setTimeout, we introduce asynchronous behavior into our code. This means that while the delay is
// counting down, the JavaScript engine can continue executing other code without waiting for
// the setTimeout callback to be invoked AND THIS IS REALLY IMPORTANT.

// And why do we use cleartimeout?

// Well, we need clearTimeout to cancel the scheduled execution before the delay expires.
// We already know that setTimeout returns a unique identifier called timeout ID , right????

// Exercise
// Well, clearTimeout is another built-in function that cancels a timeout previously set with setTimeout. By passing the timeout ID to clearTimeout, we avoid executing the callback function and stop the timer.

// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed
// execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed
// with the provided args as arguments.

const cancellable = function (fn, args, t) {
  const cancelFn = function () {
    clearTimeout(timer);
  };
  const timer = setTimeout(() => {
    fn(...args);
  }, t);
  return cancelFn;
};

// Example function (fn) to be executed
const exampleFunction = (arg1, arg2) => {
  console.log(`Executing function with arguments: ${arg1}, ${arg2}`);
};

// Set the timeout for 3000 milliseconds (3 seconds)
const timeout = 3000;

// Create a cancellable function
const cancelFunction = cancellable(exampleFunction, ["arg1", "arg2"], timeout);
console.log(cancelFunction);

// Uncomment the line below to cancel the execution before the timeout
// cancelFunction();
