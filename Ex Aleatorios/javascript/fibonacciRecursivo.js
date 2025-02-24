const FibonacciRecursive = (n) => {
  // Caso base: se n for 1 ou 2, retornamos os valores diretamente
  if (n === 1) return 0; // O 1º número de Fibonacci é 0
  if (n === 2) return 1; // O 2º número de Fibonacci é 1

  // Caso recursivo: a soma dos dois números anteriores
  return FibonacciRecursive(n - 1) + FibonacciRecursive(n - 2);
};

const n = 10;
console.log(
  `O ${n}º número da sequência de Fibonacci é: ${FibonacciRecursive(n)}`
);
