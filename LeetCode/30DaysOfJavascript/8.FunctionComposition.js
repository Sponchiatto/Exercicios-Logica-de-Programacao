// 	Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of
// the array of functions.

// 	The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// 	The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

const incremento = (x) => x + 1;
const duplicar = (x) => x * 2;
const pow = (x) => x ** 3;

// Criando uma lista de funções
const funcoes = [incremento, duplicar, pow];

// functions.reduceRight((x, fn) => fn(x), x) applies all matrix functions to the value x. 
// The reduceRight method is used to iterate through the array from right to left and apply each function 
// to the current value.
var compose = function (functions) {
  return (x) => functions.reduceRight((acc, f) => f(acc), x);
};

// Compondo as funções usando a função compose
const funcaoComposta = compose(funcoes);

// Testando a função composta com um valor inicial
const resultado = funcaoComposta(3);

console.log(resultado);
