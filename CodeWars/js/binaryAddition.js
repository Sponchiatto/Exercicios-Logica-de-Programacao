// Solution 1
function addBinary(a, b) {
  let sum = a + b;
  divRest = "";
  while (sum > 0) {
    divRest = (sum % 2) + divRest;
    sum = Math.floor(sum / 2);
  }
  return divRest;
}

//Solution 2
function addBinary(a, b) {
  return (a + b).toString(2);
}

console.log(addBinary(5, 9));
