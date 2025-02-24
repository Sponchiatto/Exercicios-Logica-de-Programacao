const piramidadeAstericos = (andares) => {
  for (let i = 0; i < andares; i++) {
    // Imprime os espaços antes dos asteriscos
    for (let j = 0; j < andares - i - 1; j++) {
      process.stdout.write(" ");
    }

    // Imprime os asteriscos
    for (let k = 0; k < 2 * i + 1; k++) {
      process.stdout.write("*");
    }

    // Pula para a próxima linha
    process.stdout.write("\n");
  }
};

numeroAndares = 6;
piramidadeAstericos(numeroAndares);
