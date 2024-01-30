const array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

// O método reduce() executa uma função reducer (fornecida por você)
// para cada elemento do array, resultando num único valor de retorno.

const contagem = array1.reduce((count, element) => {
  if (element === true) {
    return count + 1;
  } else {
    return count;
  }
}, 0);

console.log(contagem);

// function countSheeps(arrayOfSheeps) {: This line declares the function named countSheeps with a single parameter, 
//     arrayOfSheeps, which is an array containing the sheep presence information (true for present, false for not present).

// arrayOfSheeps.filter(Boolean): The filter() method is called on the arrayOfSheeps parameter. 
// This method creates a new array with all elements that pass the test implemented by the provided function. 
// In this case, the provided function is Boolean. When an element is passed to the Boolean function, 
// it returns true for truthy values and false for falsy values. In our context, true values will pass the test (indicating present sheep) while false, null, and undefined values will not pass the test (indicating missing sheep or bad values).

// .length;: After the filter() method creates a new array containing only the present sheep (true values), 
// the length property is accessed to determine the total number of present sheep.

// return ...;: Finally, the function returns the calculated length of the filtered array, which represents the total number of sheep present.

// ==========================================================

function countSheeps() {
  return console.log(array1.filter(Boolean).length);
}

countSheeps(array1);
