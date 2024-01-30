
// Com if ========================
function simpleMultiplication(number) {
  if (number % 2 == 0) {
    return number * 8;
  } else return number * 9;
}

// Com operador ternario ================================
// O operador condicional (ternário) é o único operador JavaScript que possui três operandos. 
// Este operador é frequentemente usado como um atalho para a instrução if.

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}