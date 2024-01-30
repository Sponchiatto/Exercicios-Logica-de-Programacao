// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Traditional func

// Diferença entre ++count e count++
// Ambos são incrementos em unidade
// No caso do ++count (Pré-incremento), o valor da variável é incrementado imediatamente antes de ser usado
// No caso do count++ (Pós-incremento), o valor é usado numa expressão antes de ser incrementado. 

var createCounter = function (init) {
  let presentCount = init;

  function increment() {
    return ++presentCount;
  }

  function decrement() {
    return --presentCount;
  }

  function reset() {
    return (presentCount = init);
  }

  return { increment, decrement, reset };
};

// Arrow function

var createCounter = function (init) {
  let initial = init;
  return {
    increment: () => ++initial,
    decrement: () => --initial,
    reset: () => (initial = init),
  };
};

