// Given a function fn, return a new function that is identical to the original function except
// that it ensures fn is called at most once.

// 	• The first time the returned function is called, it should return the same result as fn.
//  • Every subsequent time it is called, it should return undefined.

// Some Concepts

// Using true or false is a common approach to controlling the execution of your code, being able to 
// control states and execution of your code.

// The operator ! in JavaScript it is the logical negation operator. When placed before an expression, 
// inverts the Boolean value of the expression. That is, if the expression is true, ! makes it false, 
// and if the expression is false, ! makes it true.

const once = function (fn) {
  let hasBeenCalled = false;
  let result;
  return function (...args) {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined
