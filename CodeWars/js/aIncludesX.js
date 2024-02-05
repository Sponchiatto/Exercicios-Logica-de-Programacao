// Function check basically checks whether an element x is present in array (or string) a, 
// returning true if it is and false otherwise.
function check(a, x) {
  return a.includes(x);
}

// Arrow function
// const check = (a, x) => a.includes(x);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const checkingTrue = check(arr, 2);
const checkingFalse = check(arr, 15);

console.log(checkingTrue);
console.log(checkingFalse);
