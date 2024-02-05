// Esse método considera anos com mais de 4 digitos
function century(year) {
  // Se o ano for entre 1 e 100 (inclusive), retorna o século 1
  if (year >= 1 && year <= 100) {
    return 1;
  }

  // Obtém o número de dígitos no ano
  numberOfDigits = year.toString().length;

  // Se o ano for divisível por 100
  if (year % 100 === 0) {
    // Os dois primeiros dígitos representam o século
    // (-2) porque um ano com 4 dígitos utiliza os dois primeiros que correspondem ao século
    // Com 5 dígitos, a lógica é a mesma
    centuryDigits = year.toString().substring(0, numberOfDigits - 2);
  } else {
    // Para anos não divisíveis por 100, o século é obtido arredondando para cima
    centuryDigits = year.toString().substring(0, numberOfDigits - 2);
    centuryDigits = (parseInt(centuryDigits, 10) + 1).toString();
  }

  // Retorna o século como um número inteiro
  return parseInt(centuryDigits, 10);
}

// A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".
const century2 = (year) => Math.ceil(year / 100);

// Exemplos usando a função century
console.log(century(2024));  // Deve retornar 21
console.log(century(1776));  // Deve retornar 18
console.log(century(1492));  // Deve retornar 15
console.log(century(1000));  // Deve retornar 10
console.log(century(1));     // Deve retornar 1

// Exemplos usando a função century2
console.log(century2(2024));  // Deve retornar 21
console.log(century2(17765));  // Deve retornar 178
console.log(century2(149224));  // Deve retornar 1493
console.log(century2(1000));  // Deve retornar 10
console.log(century2(135));     // Deve retornar 2