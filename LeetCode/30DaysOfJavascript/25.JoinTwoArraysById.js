// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will
// contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their
// id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in
// ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result
// array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

const join = function (arr1, arr2) {
  const result = {};

  arr1.forEach((item) => {
    result[item.id] = item;
    console.log("Result forEach arr1", result);
    console.log("item", item);
  });

  arr2.forEach((item) => {
    if (result[item.id]) {
      Object.keys(item).forEach((key) => {
        result[item.id][key] = item[key];
        console.log("Key", key);
      });
    } else {
      result[item.id] = item;
    }
    console.log("Result forEach arr2", result);
  });
  return Object.values(result);
};

// Função de teste
const testJoinFunction = () => {
  const arr1 = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
  ];

  const arr2 = [
    { id: 2, age: 30 },
    { id: 3, city: "New York" },
    { id: 4, profession: "Engineer" },
  ];

  const expectedResult = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice", age: 30 },
    { id: 3, name: "Bob", city: "New York" },
    { id: 4, profession: "Engineer" },
  ];

  const result = join(arr1, arr2);

  console.log("Result:", result);
  console.log("Expected Result:", expectedResult);

  // Verificando se os resultados são iguais
  const isEqual = JSON.stringify(result) === JSON.stringify(expectedResult);
  console.log("Test passed:", isEqual ? "Yes" : "No");
};

// Testando a função
testJoinFunction();
