// Given two SVGStringList, determine if they share a common substring. A substring may be as small as one character

// Example

// s1 = "and"
// s2 = "art"
// These share the common substring a
// s1 = "be"
// s2 = "cat"
// These do not share a common substring

// Return YES or NO

// Input Format

// The first line contains a single integer p the number of test cases.

// The following
//  pairs of lines are as follows:

// The first line contains string  s1
// The second line contains string s2

// Solução 1
function twoStrings(s1, s2) {
  const s1splitted = s1.split("");
  const s2splitted = s2.split("");

  for (let i = 0; i < s1splitted.length; i++) {
    for (let j = 0; j < s2splitted.length; j++) {
      if (s1[i] === s2[j]) {
        return "YES";
      }
    }
  }
  return "NO";
}

// Solução 2
function twoStrings(s1, s2) {
  // Convertemos as strings para conjuntos de caracteres para otimizar a verificação
  const set1 = new Set(s1);
  const set2 = new Set(s2);

  // Percorremos o conjunto `set1` para verificar se algum caractere está em `set2`
  for (let char of set1) {
    if (set2.has(char)) {
      return "YES"; // Retorna "YES" se encontrar um caractere comum
    }
  }

  return "NO"; // Retorna "NO" se nenhum caractere comum foi encontrado
}

console.log(twoStrings("hello", "world")); // Saída esperada: "YES" (ambos têm o caractere "o")
console.log(twoStrings("hi", "world")); // Saída esperada: "NO" (não têm caracteres em comum)
console.log(twoStrings("abc", "def")); // Saída esperada: "NO" (não têm caracteres em comum)
console.log(twoStrings("cat", "tac")); // Saída esperada: "YES" (ambos têm os caracteres "c", "a" e "t")
console.log(twoStrings("a", "b")); // Saída esperada: "NO" (nenhum caractere comum)
console.log(twoStrings("apple", "plea")); // Saída esperada: "YES" (ambos têm o caractere "p", "l", "e", etc.)


