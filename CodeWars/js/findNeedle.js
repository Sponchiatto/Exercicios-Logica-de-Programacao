// Minha solução
function findNeedle(haystack) {
  // O método indexOf() retorna o primeiro índice em que o elemento 
  // pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
  const findNeedle = haystack.indexOf("needle");
  console.log(`found the needle at position ${findNeedle}`);
}

// Solução otimzada
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

// Solução com arrow function
const findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf("needle")}`;

var haystack_1 = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];

findNeedle(haystack_1);
