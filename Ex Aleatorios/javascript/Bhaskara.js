// Função para calcular Bhaskara
function calcularBhaskara(a, b, c) {
  // Calcula o delta
  const delta = Math.pow(b, 2) - 4 * a * c;
  console.log(`Delta: ${delta}`);

  if (delta > 0) {
    // Duas raízes reais
    const raizDelta = Math.sqrt(delta);
    const formula1 = (-b + raizDelta) / (2 * a);
    const formula2 = (-b - raizDelta) / (2 * a);
    console.log(`Soluções: ${formula1} e ${formula2}`);
    alert(`Delta: ${delta}\nSoluções: ${formula1} e ${formula2}`);
  } else if (delta === 0) {
    // Uma única raiz real
    const formula1 = -b / (2 * a);
    console.log(`Solução única: ${formula1}`);
    alert(`Delta: ${delta}\nSolução única: ${formula1}`);
  } else {
    // Sem raízes reais
    console.log("Delta é negativo, não há soluções reais.");
    alert(`Delta: ${delta}\nDelta é negativo, não há soluções reais.`);
  }
}

// Solicita os valores ao usuário
const a = parseFloat(prompt("Escolha um número para a: "));
const b = parseFloat(prompt("Escolha um número para b: "));
const c = parseFloat(prompt("Escolha um número para c: "));

// Valida os valores e chama a função
if (a !== 0 && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
  calcularBhaskara(a, b, c);
} else {
  alert(
    "Por favor, insira valores válidos e certifique-se de que 'a' não seja zero."
  );
  console.log("Entrada inválida.");
}
