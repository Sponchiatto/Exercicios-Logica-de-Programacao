// Write a function createCounter. It should accept an initial integer init. 
// It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function (init) {
  let initial = init;
  return {
    increment: () => ++initial,
    decrement: () => --initial,
    reset: () => (initial = init),
  };
};

// Crie um contador com um valor inicial de 5
const counter = createCounter(5);

// Teste os métodos do contador
console.log(counter.increment()); // Saída esperada: 6
console.log(counter.increment()); // Saída esperada: 7

console.log(counter.decrement()); // Saída esperada: 6

console.log(counter.reset()); // Saída esperada: 5
console.log(counter.increment()); // Saída esperada: 6, pois foi resetado para o valor inicial