// We consider two strings to be anagrams of each other if the first string's letters can be rearranged
// to form the second string. In other words, both strings must contain the same exact letters in the
// same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an
// encryption scheme involving two large strings where encryption is dependent on the minimum
// number of character deletions required to make the two strings anagrams. Can you help her find this number?

// Given two strings, s1 and s2, that may not be of the same length, determine the minimum number
// of character deletions required to make s1 and s2 anagrams. Any characters can be deleted
// from either of the strings.

// Example.
// s1 = abc
// s2 = amop

// The only characters that match are the a's so we have to remove bc from s1 and mnop from s2 for a total of 6 deletions.
function contarFrequencias(s) {
  const frequencias = {}; // Inicializa um objeto vazio para armazenar as frequências

  for (let char of s) {
    // Itera sobre cada caractere da string `s`
    if (frequencias[char]) {
      // Se o caractere já existe como uma chave no objeto `frequencias`
      frequencias[char]++; // Incrementa o valor associado a essa chave
    } else {
      // Se o caractere não existe no objeto `frequencias`
      frequencias[char] = 1; // Adiciona o caractere como uma chave com valor 1
    }
  }

  return frequencias; // Retorna o objeto `frequencias` contendo a contagem de cada caractere
}

function makingAnagrams(s1, s2) {
  // Contar frequências de caracteres em ambas as strings
  const freqS1 = contarFrequencias(s1);
  const freqS2 = contarFrequencias(s2);

  // Inicializar o contador de deleções
  let delecoes = 0;

  // Conjunto de todos os caracteres presentes em ambas as strings
  const allChars = new Set([...Object.keys(freqS1), ...Object.keys(freqS2)]);

  //   console.log(allChars);

  // Calcular o número de deleções necessárias
  for (let char of allChars) {
    const freq1 = freqS1[char] || 0;
    const freq2 = freqS2[char] || 0;
    delecoes += Math.abs(freq1 - freq2);
  }
  return delecoes;
}

s1 = "bacdc";
s2 = "dcbad";

console.log(makingAnagrams(s1, s2));
