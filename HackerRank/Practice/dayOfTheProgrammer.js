// 1700 - 1917 a Russia usava o Julian Calendar e desde 1918 eles usam o Gregorian Calendar
// Essa mudança ocorreu em 1918, quando o próximo dia depois de 31 de janeiro era 14 de fevereiro
// Ou seja, em 14 de fevereiro de 1918 era o 32° dia da russia.

// Tanto julian quanto gregorian, fevereiro é o único mês que tem 29 dias num ano bissexto e 28 dias durante
// os todos os outros anos.

// No calendário Julian, ano bissexto são divísiveis por 4
// No calendário Gregoriano, ano bissexto são divisíveis por:
// - Divisível por 400
// Divisível por 4 e não divísivel por 100.

// Dado um ano, ache a data do 256th dia do ano de acordo com o calendário Russo oficial durante aquela ano.
// E informe no formato data dd.mm.yyyy

function dayOfProgrammer(year) {
  if (year >= 1700 && year <= 2700) {
    // calendario juliano
    if (year >= 1700 && year <= 1917) {
      if (year % 4 === 0) {
        return `12.09.${year}`;
      } else {
        return `13.09.${year}`;
      }
    }
    // 1918
    if (year === 1918) {
        return `26.09.${year}`;
    }

    // calendario gregoriano
    if (year % 4 === 0 && (year % 100 !== 0) || (year % 400 === 0)) {
        return `12.09.${year}`;
    } else {
        return `13.09.${year}`;
    }
    
  } else {
    return "Coloque um ano entre 1700 e 2700";
  }
}

// Exemplos de uso
let years = [1700, 1800, 1900, 1917, 1918, 1920, 2000, 2020, 2400, 2700];
years.forEach(year => {
  console.log(`O Dia do Programador em ${year} é: ${dayOfProgrammer(year)}`);
});