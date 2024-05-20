// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// - The length of the segment matches Ron's birth month, and,
// - The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example:
// s = [2,2,1,3,2]
// d = 4
// m = 2

// Lily wants to find segments summing to Ron's birth day, d = 4  with a length equalling his birth month, m = 2.
// In this case, there are two segments meeting her criteria: [2,2] and [1,3].
function birthday(s, d, m) {

  // Array para armazenar todas as subsequências possíveis
  let splitArr = [];

  // Cria todas as subsequências possíveis a partir de cada índice
  for (let i = 0; i < s.length; i++) {
    splitArr.push(s.slice(i, s.length));
  }
  
  // Filtra as subsequências que têm comprimento maior ou igual a 'm'
  let filteredByM = splitArr.filter((e) => { 
    return e.length >= m;
  });

  // Array para armazenar as subsequências válidas que somam 'd'
  let possible = [];

  // Itera sobre as subsequências filtradas
  filteredByM.forEach((e) => {
    // Toma os primeiros 'm' elementos da subsequência
    let test = e.slice(0, m);
    // Verifica se a soma dos elementos da subsequência é igual a 'd'
    if (test.reduce((acc, value) => acc + value, 0) === d) {
      // Se for, adiciona a subsequência ao array de possíveis
      possible.push(test);
    }
  });

  // Retorna o número de subsequências válidas encontradas
  return possible.length;
}

// Teste com a sequência fornecida e parâmetros 'd' e 'm'
const s = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;

console.log(birthday(s, d, m));
