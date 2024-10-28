function findDigits(n) {
  // Converte o número n para uma string, divide em caracteres e cria um array com eles
  const digits = n.toString().split("");

  // Mapeia cada caractere para um número usando Number, resultando em um array de dígitos reais
  const realDigits = digits.map(Number);

  // Inicializa um contador para contar quantos dígitos são divisores de n
  let count = 0;

  // Loop através de cada dígito no array realDigits
  for (let i = 0; i < realDigits.length; i++) {
    // Verifica se o dígito não é zero e se é um divisor de n (sem deixar resto)
    if (realDigits[i] !== 0 && n % realDigits[i] === 0) {
      // Se as condições forem verdadeiras, incrementa o contador
      count++;
    }
  }

  // Retorna o total de dígitos que são divisores de n
  return count;
}

// Define uma variável n com o valor 10
const n = 10;

// Chama a função findDigits com n e imprime o resultado no console
console.log(findDigits(n)); // Espera-se que a saída seja 1, pois apenas 1 é um divisor de 10
