// Função para verificar se um número é primo
function verificarPrimo(numero) {
  if (numero <= 1) {
    return false; // Números menores ou iguais a 1 não são primos
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; // Encontrado um divisor, não é primo
    }
  }

  return true; // Número é primo
}

// Solicita o número ao usuário
const numero = parseInt(prompt("Digite um número para verificar se é primo: "));

// Valida se a entrada é um número válido
if (!isNaN(numero)) {
  const ehPrimo = verificarPrimo(numero);

  if (ehPrimo) {
    alert(`${numero} é um número primo.`);
    console.log(`${numero} é um número primo.`);
  } else {
    alert(`${numero} não é um número primo.`);
    console.log(`${numero} não é um número primo.`);
  }
} else {
  alert("Por favor, insira um número válido.");
  console.log("Entrada inválida.");
}
