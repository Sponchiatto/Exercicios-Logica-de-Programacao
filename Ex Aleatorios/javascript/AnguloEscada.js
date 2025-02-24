function verificarEstabilidadeEscada() {
  console.log("=== VERIFICAÇÃO DE ESTABILIDADE DA ESCADA ===");

  // Entrada do ângulo
  const angulo = parseInt(
    prompt("Digite o ângulo oposto ao cateto formado pela escada (em graus):")
  );

  // Verificação do ângulo e estabilidade
  if (angulo <= 45) {
    console.log("RISCO DE ESTABILIDADE HORIZONTAL");
  } else if (angulo >= 46 && angulo <= 60) {
    console.log("POSIÇÃO ESTÁVEL");
  } else if (angulo >= 61 && angulo < 89) {
    console.log("RISCO DE ESTABILIDADE VERTICAL");
  } else {
    console.log("Ângulo inválido! O ângulo deve estar entre 0º e 89º.");
  }
}

// Executar o programa
verificarEstabilidadeEscada();
