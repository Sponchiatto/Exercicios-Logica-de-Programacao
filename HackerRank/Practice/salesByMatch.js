// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock, determine how many pairs of socks
// with matching colors there are.

// Exemplo
// n = 7
// Input: [1,2,1,2,1,3,2]
// Output: 2

// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color.
// The number of pairs is 2.

function sockMerchant(n, ar) {
  // Inicializa a variável 'count' para contar o número total de pares
  let count = 0;

  // Inicializa um objeto vazio 'obj' para armazenar a contagem de cada cor de meia
  let obj = {};

  // Percorre o array 'ar' para contar a ocorrência de cada cor de meia
  for (let i = 0; i < n; i++) {
    // Verifica se a cor da meia (ar[i]) já existe como uma chave no objeto 'obj'
    if (obj[ar[i]]) {
      // Se a cor já existe, incrementa a contagem dessa cor em 1
      obj[ar[i]] += 1;
    } else {
      // Se a cor não existe, cria uma nova chave para essa cor e define seu valor como 1
      obj[ar[i]] = 1;
    }
  }

  // Percorre cada chave no objeto 'obj' para calcular o número de pares de cada cor
  for (let key in obj) {
    // Para cada cor, divide a contagem por 2 e arredonda para baixo para obter o número de pares
    count += Math.floor(obj[key] / 2);
  }

  // Retorna o número total de pares de meias
  return count;
}


const n = 7;
const ar = [1, 2, 1, 2, 1, 3, 2];
console.log(sockMerchant(n, ar));

// Conceitos-Chave

// Contagem de Ocorrências Usando um Objeto:

    // O código utiliza um objeto (obj) para armazenar a frequência de cada cor de meia.
    // Este é um exemplo de um histograma ou mapa de frequência, onde a chave é a cor da meia e 
    //o valor é a contagem de meias dessa cor.

// Iteração Sobre uma Estrutura de Dados:

    // O código faz uso de loops (for e for...in) para percorrer tanto o array de entrada (ar) 
    // quanto as propriedades do objeto (obj).
    // A iteração é fundamental para processar cada elemento do array e para calcular o número de pares.

// Arredondamento e Inteiros:

    // A função Math.floor é utilizada para arredondar para baixo o resultado da divisão da contagem de meias por 2. 
    //Isso é crucial para obter o número de pares completos de cada cor.
    // Este uso de divisão inteira e arredondamento é um conceito comum na contagem de pares ou grupos em programação.

// Acumulação de Resultados:

    // A variável count é usada para acumular o número total de pares de meias.
    // Este padrão de acumulação é um conceito básico de agregação em algoritmos, 
    //onde resultados parciais são somados para obter um resultado final.