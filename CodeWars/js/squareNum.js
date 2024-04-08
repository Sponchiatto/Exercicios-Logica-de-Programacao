//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because

// Obs:
// valorInicial
// Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função callback.
// Se nenhum valorInicial é fornecido, o primeiro elemento do array será usado como o valor inicial
// do acumulador e o valorAtual não será lido. Chamar reduce() em uma array vazia sem valor inicial
// retornará um erro.

function squareSum(numbers) {
  // Usa o método map() para calcular o quadrado de cada número
  const squaredNumbers = numbers.map(number => Math.pow(number, 2));
  
  // Usa o método reduce() para somar os quadrados dos números
  const sum = squaredNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return sum;
}

const array1 = [1, 2, 3, 4,5];
console.log(squareSum(array1));

// Solution 2
function squareSum(numbers) {
  var sum = 0;
  numbers.forEach(function (n) {
    sum += n * n;
  });
  return sum;
}

