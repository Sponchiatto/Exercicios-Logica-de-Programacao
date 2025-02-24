// Função para converter decimal para binário
function decimalParaBinario(decimal) {
  if (isNaN(decimal)) {
    return "Por favor, insira um número válido.";
  }

  return (decimal >>> 0).toString(2); // Converte para binário
}

// Solicita ao usuário um número decimal
const numeroDecimal = parseInt(
  prompt("Digite um número decimal para converter em binário: "),
  10
);

// Verifica e exibe o resultado
if (!isNaN(numeroDecimal)) {
  const numeroBinario = decimalParaBinario(numeroDecimal);
  console.log(
    `O número decimal ${numeroDecimal} em binário é ${numeroBinario}.`
  );
  alert(`O número decimal ${numeroDecimal} em binário é ${numeroBinario}.`);
} else {
  console.log("Entrada inválida. Por favor, insira um número.");
  alert("Entrada inválida. Por favor, insira um número.");
}
