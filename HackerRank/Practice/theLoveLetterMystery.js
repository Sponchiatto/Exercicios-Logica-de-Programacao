function theLoveLetterMystery(input) {
  // Separar as linhas da entrada
  let lines = input.trim().split("\n");
  // O primeiro valor é o número de casos de teste
  let T = parseInt(lines[0]);
  // Array para armazenar os resultados de cada caso de teste
  let results = [];

  // Função interna para calcular o número mínimo de operações
  function minOperationsToPalindrome(s) {
    let n = s.length;
    let operations = 0;

    // Iterar até o meio da string
    for (let i = 0; i < Math.floor(n / 2); i++) {
      // Calcular a diferença entre os caracteres simétricos
      let leftChar = s.charCodeAt(i);
      let rightChar = s.charCodeAt(n - i - 1);
      operations += Math.abs(leftChar - rightChar);
    }

    return operations;
  }

  // Processar cada caso de teste
  for (let i = 1; i <= T; i++) {
    let s = lines[i];
    results.push(minOperationsToPalindrome(s));
  }

  // Retornar os resultados como uma string com quebras de linha
  return results.join("\n");
}

// Exemplo de uso:
const input = `3
abc
abcba
abcd`;

console.log(convertToPalindromeOperations(input));
