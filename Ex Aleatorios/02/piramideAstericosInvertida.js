// Função que cria uma pirâmide de asteriscos invertida com o número de andares informado
const piramidadeAstericos = (andares) => {
  // Loop para cada andar (linha) da pirâmide
  for (let i = 0; i < andares; i++) {
    // Imprime os espaços antes dos asteriscos (quanto mais baixo o andar, mais espaços)
    // O número de espaços começa em 0 e aumenta conforme o andar vai descendo.
    for (let j = 0; j < i; j++) {
      process.stdout.write(" "); // Imprime um espaço em branco
    }

    // Imprime os asteriscos para o andar atual
    // O número de asteriscos começa grande e diminui conforme os andares descem
    // Calcula o número de asteriscos para o andar atual: 2 * (andares - i) - 1
    // Exemplo: para o 1º andar (i=0), será 2*6 - 1 = 11 asteriscos.
    for (let k = 2 * (andares - i) - 1; k > 0; k--) {
      process.stdout.write("*"); // Imprime um asterisco
    }

    // Pula para a próxima linha após imprimir os espaços e os asteriscos
    process.stdout.write("\n");
  }
};

// Define o número de andares da pirâmide
numeroAndares = 6;

// Chama a função passando o número de andares para gerar a pirâmide
piramidadeAstericos(numeroAndares);
