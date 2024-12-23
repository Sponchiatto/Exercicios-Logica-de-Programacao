// Watson gosta de desafiar as habilidades matemáticas de Sherlock.
// Ele fornecerá um valor inicial e final que descreve um intervalo de números inteiros,
// inclusive os pontos finais. Sherlock deve determinar o número de inteiros quadrados dentro desse intervalo.

function squares(a, b) {
  let start = Math.ceil(Math.sqrt(a));
  let end = Math.floor(Math.sqrt(b));
  let count = end - start + 1;
  return count;
}

const a = 24;
const b = 49;

console.log(squares(a, b));
