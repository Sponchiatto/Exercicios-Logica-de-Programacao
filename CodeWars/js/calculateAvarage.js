// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.
function findAverage(array) {
  const initialValue = 0;

  if (!array.length) {
    return 0;
  }

  const avarage =
    array.reduce(
      (accumulator, currentVal) => accumulator + currentVal,
      initialValue
    ) / array.length;

  return avarage;
}

console.log(findAverage([1, 2, 3]));
