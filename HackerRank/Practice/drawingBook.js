// A teacher asks the class to open their books to a page number.
// A student can either start turning pages from the front of the book or from the back of the book.
// They always turn pages one at a time. When they open the book,
// page  is always on the right side:

// When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides.
// The last page may only be printed on the front, given the length of the book. If the book is  pages long,
// and a student wants to turn to page , what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

// Given m and p, find and print the minimum number of pages that must be turned in order to arrive at page .

function pageCount(n, p) {
  // Total de páginas no livro
  const totalPages = n;

  // Número de viradas de página a partir da frente
  const turnsFromFront = Math.floor(p / 2);

  // Número de viradas de página a partir de trás
  const turnsFromBack = Math.floor(totalPages / 2) - Math.floor(p / 2);

  // Retorna o menor número de viradas de página
  return Math.min(turnsFromFront, turnsFromBack);
}

console.log(pageCount(5, 4)); // Saída: 0
console.log(pageCount(6, 2)); // Saída: 1

