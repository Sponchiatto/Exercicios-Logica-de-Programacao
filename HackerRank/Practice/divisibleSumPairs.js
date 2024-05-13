// Given an array of integers and a positive integer k, determine the number of (i,j) pairs where
// i < j and ar[i] + ar[j] is divisible by k;

// ar = [1,2,3,4,5,6]
// k = 5

// Three pairs meet the criteria: [1,4], [2,3] and [4,6]

// Esta função calcula o número de pares de elementos no array ar,
// cuja soma é divisível por k.
function divisibleSumPairs(n, k, ar) {
  // Inicializa um array para armazenar os pares que satisfazem a condição.
  let pairs = [];
  
  // Loop para iterar sobre todos os elementos do array ar.
  for (let i = 0; i < ar.length; i++) {
    // Loop para iterar sobre todos os elementos subsequentes a ar[i] no array ar.
    for (let j = i + 1; j < ar.length; j++) {
      // Verifica se a soma dos elementos ar[i] e ar[j] é divisível por k.
      if ((ar[i] + ar[j]) % k === 0) {
        // Se a condição for verdadeira, adiciona o par [ar[i], ar[j]] ao array de pares.
        pairs.push([ar[i], ar[j]]);
      }
    }
  }
  // Retorna o número de pares que satisfazem a condição.
  return pairs.length;
}

// Array de entrada.
const ar = [1, 3, 2, 6, 1, 2];
// Tamanho do array.
const n = ar.length;
// Valor k.
const k = 3;

// Chama a função e imprime o resultado.
console.log(divisibleSumPairs(n, k, ar));