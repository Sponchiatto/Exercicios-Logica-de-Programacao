function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zeros = 0;
  const n = arr.length;
  for (let i of arr) {
    if (i > 0) positive++;
    else if (i < 0) negative++;
    else zeros++;
  }
  const positiveRatio = (positive / n).toFixed(6);
  const negativeRatio = (negative / n).toFixed(6);
  const zerosRatio = (zeros / n).toFixed(6);
    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zerosRatio); b
  return [positiveRatio, negativeRatio, zerosRatio];
}
arr = [1, 1, 0, -1, -1];
console.log(plusMinus(arr));
