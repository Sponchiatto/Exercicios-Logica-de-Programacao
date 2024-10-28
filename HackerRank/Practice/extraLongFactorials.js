function extraLongFactorials(n) {
  let result = BigInt(1); // Inicializa o resultado como BigInt(1)
  let bigN = BigInt(n); // Converte o número de entrada para BigInt

  while (bigN > BigInt(1)) {
    result *= bigN; // Multiplica o resultado pelo valor atual de bigN
    bigN--; // Decrementa bigN
  }

  return result;
}

const n = 30;
console.log(extraLongFactorials(n));
