// Two words are anagrams of one another if their letters can be rearranged to form the other word.

// Given a string, split it into two contiguous substrings of equal length.
// Determine the minimum number of characters to change to make the two
// substrings into anagrams of one another.

// Example
// s = abccde
// Break s into two parts: 'abc' and 'cde'. Note that all letters have been used,
// the substrings are contiguous and their lengths are equal. Now you can change 'a' and 'b' in
// the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were necessary.

function anagram(s) {
  // Obtém o comprimento da string
  let n = s.length;

  // Se o comprimento da string for ímpar, não é possível dividir em duas partes iguais
  if (n % 2 !== 0) return -1;

  // Calcula o ponto médio da string
  let mid = n / 2;

  // Divide a string em duas metades
  let s1 = s.substring(0, mid);
  let s2 = s.substring(mid, n);

  // Itera através de cada caractere na segunda metade
  s2.split("").forEach((el) => {

    // Verifica se o caractere atual existe na primeira metade
    let test = s1.includes(el);

    // Se o caractere existir, substitui a primeira ocorrência por '0'. Isso impede que numa palavra como:
    // ababbb 
    if (test) {
      s1 = s1.replace(el, 0);
    }
  });

  // Remove todos os '0' da primeira metade
  s1 = s1.split("").filter((el) => el !== "0");

  // Retorna o número de caracteres restantes na primeira metade
  return s1.length;
}

const s = "abccde";
console.log(anagram(s));

// Solução 2
function anagram2(s) {
  let n = s.length;

  if (n % 2 !== 0) return -1;

  let mid = n / 2;

  let s1 = s.substring(0, mid);
  let s2 = s.substring(mid, n);

  let count1 = {};
  let count2 = {};

  for (let i = 0; i < mid; i++) {
    count1[s1[i]] = (count1[s1[i]] || 0) + 1;
    count2[s2[i]] = (count2[s2[i]] || 0) + 1;
  }

  let changes = 0;
  for (let char in count2) {
    if (count2[char] > (count1[char] || 0)) {
      changes += count2[char] - (count1[char] || 0);
    }
  }

  return changes;
}

const s2 = "abccde";
console.log(anagram2(s)); // Output: 2