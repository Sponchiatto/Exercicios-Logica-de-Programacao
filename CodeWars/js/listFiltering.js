function filter_list(l) {
  const numbers = l.filter((num) => typeof num === "number");
  return numbers;
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
