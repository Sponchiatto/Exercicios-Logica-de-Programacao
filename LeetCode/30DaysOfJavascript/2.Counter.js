// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more 
// than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

const createCounter = function(n) {
    return () => n++
}

// Creating a counter function with an initial value of 5
const counter = createCounter(5);

// Testing the counter function
console.log(counter()); // Should print 5
console.log(counter()); // Should print 6
console.log(counter()); // Should print 7