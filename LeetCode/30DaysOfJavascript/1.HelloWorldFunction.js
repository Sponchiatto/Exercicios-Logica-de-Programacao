//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

// Usando Arrow Function
// const createHelloWorld = () => (...args) => "Hello World";

const args = [1, 2, 3, 4, 5];

// Criando uma instância da função retornada por createHelloWorld
const helloWorldFunction = createHelloWorld(args);
console.log(helloWorldFunction);

// Testando a função
const result = helloWorldFunction();

// Verificando o resultado
console.log(result); // Deverá imprimir "Hello World"
