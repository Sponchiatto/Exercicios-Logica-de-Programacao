function piramide() {
  // Loop para imprimir as 6 linhas da pirâmide
  for (let i = 1; i <= 6; i++) {
    // Imprime os espaços antes dos asteriscos
    for (let j = 1; j <= 6 - i; j++) {
      process.stdout.write(" "); // Usa process.stdout.write para evitar quebra de linha
    }

    // Imprime os asteriscos
    for (let k = 1; k <= 2 * i - 1; k++) {
      process.stdout.write("*");
    }

    // Vai para a próxima linha
    console.log(""); // Adiciona a quebra de linha após os asteriscos
  }
}

// Executar a função
piramide();
