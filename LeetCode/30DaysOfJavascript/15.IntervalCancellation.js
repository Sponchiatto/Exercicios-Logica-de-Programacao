// SetInvertal

// It is a function in JavaScript used to execute a function or a piece of code repeatedly at fixed intervals of time. Here's a more detailed explanation:

// let timerId = setInterval(callback, interval);

// - callback: The function to be performed at each interval.
// - interval: The time, in milliseconds, between function executions.

// It is important to note that using setInterval requires care to avoid problems such as call backlog if the function
// execution takes longer than the specified interval. In some cases, it is preferable to use recursive setTimeout to
// ensure that the next call occurs after the previous execution completes.

// 	let counter = 0;

//   function myCallback() {
//     console.log(`Execução ${counter}`);
//     counter++;

//     if (counter >= 5) {
//       clearInterval(timerId); // Interrompe o intervalo após 5 execuções
//     }
//   }

//   Chama myCallback a cada 1000 milissegundos (1 segundo)
//   let timerId = setInterval(myCallback, 1000);

// Exercise

// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until
// cancelFn is called at cancelTimeMs ms.

const cancellable = function (fn, args, t) {
  fn(...args);
  let timer = setInterval(() => fn(...args), t);
  let cancelFn = () => clearInterval(timer);
  return cancelFn;
};

// Example function to be executed
const exampleFunction = (arg1, arg2) => {
  console.log(`Executing function with arguments: ${arg1}, ${arg2}`);
};

// Set the interval for 1000 milliseconds (1 second)
const interval = 1000;

// Create a cancellable function
const cancelFunction = cancellable(exampleFunction, ["arg1", "arg2"], interval);

// Uncomment the line below to cancel the interval after 5000 milliseconds (5 seconds)
// setTimeout(cancelFunction, 5000);
