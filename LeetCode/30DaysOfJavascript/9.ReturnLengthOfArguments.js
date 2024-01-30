// Write a function argumentsLength that returns the count of arguments passed to it.

// Rest Parameters
// Rest parameters in JavaScript allow us to represent an indefinite number of arguments as an array within
// of a function. This allows us to handle multiple arguments without explicitly defining each of them
// in the function signature.

// The rest parameters are indicated by three dots (...) followed by a parameter name in a
// function declaration or function expression.

// brute force method 
// Problem :- we have to pass each value individually & 
// if we have 1000 values in array then 
// we have to pass 1000 arguments in function which is not feasible.
sum(array[0],array[1],array[2],array[3],array[4]);

//spread parameter allows us to pass indefinite number of arguments as an array within a function.
// In the function we can get them as an array and use them as we want.
const argumentsLength = function (...args) {
  return args.length;
};

// Testing
const exemplo1 = argumentsLength(); 
const exemplo2 = argumentsLength(1, 2, 3); 
const exemplo3 = argumentsLength('a', true, 5, { nome: 'Exemplo' });

// Results
console.log(exemplo1); // Deveria imprimir 0
console.log(exemplo2); // Deveria imprimir 3
console.log(exemplo3); // Deveria imprimir 4