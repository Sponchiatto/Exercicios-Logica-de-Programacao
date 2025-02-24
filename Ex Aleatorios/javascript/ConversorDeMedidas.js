// Conversor de Medidas em JavaScript
function conversorDeMedidas() {
  console.log("=== SISTEMA CONVERSOR DE MEDIDAS ===");
  console.log("Escolha o tipo de conversão:");
  console.log("MOEDA - Centavos para Reais ou vice-versa");
  console.log("MEDIDA - Centímetros para Metros ou vice-versa");
  console.log("CAPACIDADE - Mililitros para Litros ou vice-versa");
  console.log("PESO - Gramas para Quilos ou vice-versa");

  const tipo = prompt(
    "Digite o tipo de conversão (MOEDA, MEDIDA, CAPACIDADE, PESO):"
  ).toUpperCase();
  console.log("Digite 'C' para converter do menor para maior unidade.");
  console.log("Digite 'D' para converter do maior para menor unidade.");
  const direcao = prompt(
    "Digite a direção de conversão (C ou D):"
  ).toUpperCase();
  const valor = parseFloat(prompt("Digite o valor a ser convertido:"));

  let resultado;

  if (tipo === "MOEDA") {
    if (direcao === "C") {
      resultado = valor / 100;
      console.log(`Resultado: ${resultado} Reais`);
    } else {
      resultado = valor * 100;
      console.log(`Resultado: ${resultado} Centavos`);
    }
  } else if (tipo === "MEDIDA") {
    if (direcao === "C") {
      resultado = valor / 100;
      console.log(`Resultado: ${resultado} Metros`);
    } else {
      resultado = valor * 100;
      console.log(`Resultado: ${resultado} Centímetros`);
    }
  } else if (tipo === "CAPACIDADE") {
    if (direcao === "C") {
      resultado = valor / 1000;
      console.log(`Resultado: ${resultado} Litros`);
    } else {
      resultado = valor * 1000;
      console.log(`Resultado: ${resultado} Mililitros`);
    }
  } else if (tipo === "PESO") {
    if (direcao === "C") {
      resultado = valor / 1000;
      console.log(`Resultado: ${resultado} Quilos`);
    } else {
      resultado = valor * 1000;
      console.log(`Resultado: ${resultado} Gramas`);
    }
  } else {
    console.log("Tipo de conversão inválido. Tente novamente.");
  }
}

// Executar o conversor
conversorDeMedidas();
