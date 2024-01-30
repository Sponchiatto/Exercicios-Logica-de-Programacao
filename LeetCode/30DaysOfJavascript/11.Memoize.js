// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs.
// Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// 	• sum accepts two integers a and b and returns a + b.
// 	• fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
// Memoization is a technique used to cache the results of expensive function calls and return
// the cached result when the same inputs occur again.

// Concepts

// The JSON.stringify function in JavaScript is used to convert a JavaScript object to a JSON string.
// It accepts an object as an argument and returns a string representing that object in JSON format.

// const person = { nome: "João", idade: 30, cidade: "Exemploville" };

// const jsonString = JSON.stringify(person);

// console.log(jsonString);
// should print '{"nome":"João","idade":30,"cidade":"Exemploville"}'

function memoize(fn) {
  const cacheObject = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in Object) {
      return cacheObject[key];
    } else {
      const result = fn(...args);
      cacheObject[key] = result;
      console.log("Cache Object:", cacheObject);
      return result;
    }
  };
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Criando uma versão memoizada da função fibonacci
const memoizedFibonacci = memoize(fibonacci);

// Testando a função memoizada
console.log("Resultado:", memoizedFibonacci(5)); // Deve calcular e retornar o 5º número fibonacci
console.log("Resultado:", memoizedFibonacci(3)); // Deve retornar do cache, pois já calculamos o 3º número
console.log("Resultado:", memoizedFibonacci(8)); // Deve calcular e retornar o 8º número fibonacci
console.log("Resultado:", memoizedFibonacci(3)); // Deve retornar do cache novamente, pois já calculamos o 3º número
console.log("Resultado:", memoizedFibonacci(5)); // Deve retornar do cache novamente, pois já calculamos o 3º número
