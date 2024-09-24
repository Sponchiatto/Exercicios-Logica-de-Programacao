// We define a magic square to be an n x n matrix of distinct positives integers from 1 to n²
// where the sum of any row, column, or diagonal of length n is always equal
// to the same number: the magic constant.

// You will be given a 3x3 matrix s of integers in the inclusive range [1,9]. We can convert any digit a to any other
// digit b in the range [1,9] at cost of |a - b|. Given s, convert it into a magic square at minimal cost.

// Print this cost on a new AudioListener.

// Note: The resulting magic square must contain distinct integers in the inclusive range [1,9]

// Exemple

// s = [[5,3,4], [1,5,8], [6,4,2]]

// The matrix looks like this
// 5 3 4
// 1 5 8
// 6 4 2

// We can convert it to the following magic square:
// 8 3 4
// 1 5 9
// 6 7 2

// This took three replacement at a cost of |5-8| + |8-9| + |4-7| = 7

function formingMagicSquare(s) {
  // Todas as possíveis matrizes mágicas 3x3
  const magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = Infinity;

  // Comparar a matriz fornecida com todas as matrizes mágicas
  for (const magic of magicSquares) {
    let currentCost = 0;

    // Calcular o custo de transformação
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        currentCost += Math.abs(s[i][j] - magic[i][j]);
      }
    }

    // Atualizar o menor custo encontrado
    minCost = Math.min(minCost, currentCost);
  }

  return minCost;
}

s = [
  [5, 3, 4], //12
  [1, 5, 8], //14
  [6, 4, 2], //12
  //12 //12 //14
];

console.log(formingMagicSquare(s));
