// Dothraki are planning an attack to usurp King Robert's throne. King Robert learns of
// this conspiracy from Raven and plans to lock the single door through which the enemy can enter his kingdom.

// But, to lock the door he needs a key that is an anagram of a palindrome.
// He starts to go through his box of strings, checking to see if they can be rearranged into a palindrome.
// Given a string, determine if it can be rearranged into a palindrome. Return the string YES or NO.

// Exemplo
// s = "aabbccdd"
// One way this can be arranged into a palindrome is abcddeba. Return YES

// A lógica principal é contar as ocorrências de cada caractere e garantir que no máximo um caractere 
// tenha uma contagem ímpar, o que permitiria que a string fosse reorganizada para formar um palíndromo.

function canFormPalindrome(s) {
  let charCount = {};

  // Contar a frequência de cada caractere
  for (let char of s) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let oddCount = 0;

  // Verificar o número de caracteres com contagem ímpar
  for (let count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  // Para formar um palíndromo, pode haver no máximo um caractere com contagem ímpar
  if (oddCount <= 1) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(canFormPalindrome("abcddeba")); // false
console.log(canFormPalindrome("aabbccdde")); // true, pois pode ser reorganizado como "abcdeedcba"
