const games = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];

// Minha solução
function points(games) {
  // Use o método map() para criar um novo array com os elementos separados
  const pontuacoes = games.map((elemento) => {
    // Use o método split(":") para dividir cada elemento
    const partes = elemento.split(":");

    const x = parseInt(partes[0]); // Pontuação da nossa equipe
    const y = parseInt(partes[1]); // Pontuação do adversário

    // const pontuacao = 0;
    // if (x > y) pontuacao = 3; // Vitória
    // else if (x < y) pontuacao = 0; // Derrota
    // else if (x === y) pontuacao = 1; // Empate

    const pontuacao = x > y ? 3 : x < y ? 0 : 1;

    return pontuacao;
  });

  let total = pontuacoes.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return total;
}

// points(games);

// Solução do ChatGpt
function points(games) {
  return games.reduce((total, elemento) => {
    const [x, y] = elemento.split(":").map(Number);
    return total + (x > y ? 3 : x === y ? 1 : 0); // + é uma operador de adição. 
    // Serve para somar o valor calculado condicional à variável total.
  }, 0);
}

const totalPontuacao = points(games);
console.log(totalPontuacao); // Isso imprimirá o resultado no consolec
