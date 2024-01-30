// Entretanto, tanto spread(...) quanto apply irão ou falhar ou retornar o resultado errado caso o array 
// tenha muitos elementos, porque eles tentam passar o array de elementos como parâmetros de funções. 
// Veja usando apply e funções embutidas para mais detalhes. A solução com reduce não apresenta esse problema.

var min = function (list) {
  return list[0];
};

var max = function (list) {
  return list[0];
};

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// ========================================================
var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};