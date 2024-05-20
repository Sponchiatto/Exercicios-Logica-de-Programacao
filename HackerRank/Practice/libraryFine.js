function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (
    (y1 < y2) ||
    (y1 === y2 && m1 < m2) ||
    (y1 === y2 && m1 === m2 && d1 <= d2)
  ) {
    return 0;
  }

  // If the book is returned after the expected return day but still within the same calendar month and year
  if (y1 === y2 && m1 === m2 && d1 > d2) {
    return 15 * (d1 - d2);
  }

  // If the book is returned after the expected return month but still within the same calendar year
  if (y1 === y2 && m1 > m2) {
    return 500 * (m1 - m2);
  }

  // If the book is returned after the calendar year in which it was expected
  if (y1 > y2) {
    return 10000;
  }
}

// Primeiro valor é a data de retorno - 1
// Segundo valor é a data limite - 2

console.log(libraryFine(9, 6, 2022, 6, 6, 2022));

