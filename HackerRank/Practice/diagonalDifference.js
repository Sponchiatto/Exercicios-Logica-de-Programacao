function diagonalDifference(arr) {

    // Declarando duas variáveis que armazena a soma dos valores correspondentes a diagonal
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

//   Considerando comprimento total da matriz
  const n = arr.length; 

//   Colocando no loopfor para "varrer" a matriz
  for (let i = 0; i < n; i++) {
    leftDiagonalSum += arr[i][i];
    rightDiagonalSum += arr[i][n - 1 - i];
  }

  return Math.abs(leftDiagonalSum - rightDiagonalSum);
}

// Na primeira iteração (i = 0), leftDiagonalSum recebe arr[0][0] (1) e rightDiagonalSum recebe arr[0][2] (3).
// Na segunda iteração (i = 1), leftDiagonalSum recebe arr[1][1] (5) e rightDiagonalSum recebe arr[1][1] (5).
// Na terceira iteração (i = 2), leftDiagonalSum recebe arr[2][2] (9) e rightDiagonalSum recebe arr[2][0] (9).
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

const result = diagonalDifference(matrix);
console.log(result);
