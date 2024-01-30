// Esse método não considerado anos com mais de 4 digitos
function century(year) {

  // Essa cláusula é para a faixa de anos entre 1 e 100 que corresponde ao século 1
  if (year >= 1 && year <= 100) {
    return 1;
  }

  // Todo ano com resto 0, tem como século seus dois primeiros digitos. Caso o resto não seja 0,
  // é os dois primeiros digitos +1
  if (year % 100 === 0) {

    // toString Retorna uma string representando o objeto
    // substring método de string que retorna parte dessa string, delimitada pelo index.
    const yearString = year.toString();
    const firstTwoDigits = yearString.substring(0, 2);

    // parseInt analisa um argumento string e retorna um inteiro na base especificada.
    return parseInt(firstTwoDigits, 10);

  } else {
    const yearString = year.toString();
    const firstTwoDigits = yearString.substring(0, 2);
    const century = parseInt(firstTwoDigits, 10) + 1;

    return century;
  }
}

// Esse método considera anos com mais de 4 digitos
function century(year) {
  if (year >= 1 && year <= 100) {
    return 1;
  }

  numberOfDigits = year.toString().length;

  if (year % 100 === 0) {

    // O -2 é porque, um ano com 4 digitos, utiliza os dois primeiros que corresponde ao século, com 5 dígitos é a mesma lógica)
    centuryDigits = year.toString().substring(0, numberOfDigits - 2);
  } else {
    centuryDigits = year.toString().substring(0, numberOfDigits - 2);
    centuryDigits = (parseInt(centuryDigits, 10) + 1).toString();
  }

  return parseInt(centuryDigits, 10);
}


// E essa é a resposta mais simples de todas... puta que o pariu
const century = (year) => Math.ceil(year / 100);

