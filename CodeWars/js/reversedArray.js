function digitize(n) {
  // Converte o número para uma string e depois para um array de caracteres
  const digitsArray = Array.from(n.toString());

  // reverse() Inverte o array de caracteres. Obs: reverse is destructive, ou seja, altera o array original
  const reversedArray = digitsArray.reverse();

  // Converte os caracteres de volta para números inteiros
  // map() invoca uma função callback passada por argumento para cada elemento do Array e devolve um novo Array
  const reversedIntegers = reversedArray.map((digit) => parseInt(digit));

  console.log(reversedIntegers);
}


// Second
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
