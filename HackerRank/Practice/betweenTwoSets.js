// 2 arrays de inteiros
// Condicao 1  Os elementos da primeira matriz são todos fatores do inteiro que está sendo considerado
// Condicao 2  O inteiro sendo considerado é um fator de todos os elementos da segunda matriz

//Esses números são referidos como estando entre as duas matrizes. Determine quantos desses números existem.
// A = [2,6]
// tabuada do 2: 2,4,6,8,10,12
// tabuada do 6: 6,12,18,24

// B = [24,36]
// 24: [1,2,3,4,6,8,12,24]
// 36: [1,2,6,12,18,36]

// Quantos números aparecem em todos esses cálculos?

// Checklist
// Determinar o máximo (limite)
// Criar os arrays das multiplicações
// Criar os arrays das divisões
// Fazer a contagem de cada número
// Contar quantos números apareceram em todas as operações

function getTotal(a, b) {
  // Encontra o maior número no array 'b'
  const largestNumber = Math.max(...b);

  // Array para armazenar valores multiplicados
  const multiplicationArray = [];

  // Para cada elemento em 'a', realiza multiplicação
  a.forEach((value) => {
    let counter = 0;
    // Enquanto o contador for menor que o maior número em 'b'
    while (counter < largestNumber) {
      counter += value; // Incrementa o contador com o valor de 'a'
      multiplicationArray.push(counter); // Adiciona ao array de multiplicação
    }
  });
  console.log(multiplicationArray); // Exibe o array de multiplicação

  // Array para armazenar valores divididos
  const divisionArray = [];

  // Para cada elemento em 'b', realiza divisão
  b.forEach((value) => {
    // Loop para encontrar divisores de 'value'
    for (let i = value; i > 0; i--) {
      // Verifica se 'value' é divisível por 'i'
      if (value % i === 0) {
        divisionArray.push(i); // Adiciona o divisor ao array de divisão
      }
    }
  });
  console.log(divisionArray); // Exibe o array de divisão

  // Combina os arrays de multiplicação e divisão
  const allNumbers = [...multiplicationArray, ...divisionArray];

  // Objeto para armazenar contagens de números
  const obj = {};

  // Conta a frequência de cada número em 'allNumbers'
  allNumbers.forEach((value) => {
    obj[value] = (obj[value] || 0) + 1;
  });

  let counter = 0; // Inicializa o contador

  // Itera sobre as chaves do objeto 'obj'
  Object.keys(obj).forEach((key) => {
    // Se a contagem for igual ao total de elementos em 'a' e 'b'
    if (obj[key] === a.length + b.length) {
      counter++; // Incrementa o contador
    }
  });

  return counter; // Retorna o valor do contador
}

const a = [2, 6];
const b = [24, 36];

console.log(getTotal(a, b));
