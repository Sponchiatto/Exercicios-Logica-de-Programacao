// You are given a string containing characters  and  only. Your task is to change it into a
// string such that there are no matching adjacent characters. To do this, you are allowed
// to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// Example
// s = AABAAB
// Remove an A at positions 0 and 3 to make s - ABAB in 2 deletions

function alternatingCharacters(s) {
  // Divide a string 's' em um array de caracteres
  const splittedString = s.split("");

  // Armazena o comprimento da string
  const N = s.length;

  // Inicializa o contador de deleções
  let deletionCount = 0;

  // Itera sobre cada caractere da string
  for (let i = 0; i < N; i++) {
    // Verifica se o caractere atual é igual ao próximo
    if (splittedString[i] === splittedString[i + 1]) {
      // Se sim, incrementa o contador de deleções
      deletionCount += 1;
    }
  }

  // Retorna o número total de deleções necessárias
  return deletionCount;
}

// Define a string 's' a ser analisada
const s = "AABAAB";

// Imprime o resultado da função para a string 's'
console.log(alternatingCharacters(s));

