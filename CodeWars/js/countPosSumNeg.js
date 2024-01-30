// Utilizando For

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let positiveCount = 0;
  let negativeSum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      positiveCount++;
    } else if (input[i] < 0) {
      negativeSum += input[i];
    }
  }
  return [positiveCount, negativeSum];
}

// Operador ternario

function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}

// Utilizando if 

