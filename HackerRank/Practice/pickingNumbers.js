// Dada uma matriz de inteiros, encontre a submatriz mais longa onde a diferença absoluta entre quaisquer
// dois elementos seja menor ou igual a 1

// Example
// a = [1,1,2,2,4,4,5,5,5]
// There are two subarrays meeting the criterion: [1,1,2,2] and [4,4,5,5,5]. The maximum length subarray has 5 elements.

// Function Description

// pickingNumbers has the following parameter(s):
//     int a[n]: an array of integers

// Returns
//     int: the length of the longest subarray that meets the criterion

// Input Format

// The first line contains a single integer
// n, the size of the array a.
// The second line contains space-separated integers, each an a.

function pickingNumbers(a) {
  // Objeto para armazenar a contagem de cada número no array
  const count = {};

  // Loop para preencher o objeto 'count' com a frequência de cada número em 'a'
  for (const number of a) {
    // Incrementa a contagem do número atual; se não existir, inicia com 1
    count[number] = (count[number] || 0) + 1;
  }

  // Exibe o objeto 'count' no console para visualização
  console.log(count);

  // Variável para armazenar o comprimento máximo encontrado das submatrizes válidas
  let maxLength = 0;

  // Itera sobre cada chave (número) no objeto 'count'
  for (const number in count) {
    // Calcula o comprimento da submatriz formada pelo número atual e o número seguinte
    // currentLength inclui a contagem do número atual e, se existir, a do próximo número (number + 1)
    const currentLength = count[number] + (count[Number(number) + 1] || 0);
    console.log(currentLength);
    // Atualiza 'maxLength' se 'currentLength' for maior
    maxLength = Math.max(maxLength, currentLength);
    console.log(maxLength);
  }

  // Retorna o comprimento da submatriz mais longa que satisfaz o critério
  return maxLength;
}

a = [4, 6, 5, 3, 3, 1];
console.log(pickingNumbers(a)); // 3
