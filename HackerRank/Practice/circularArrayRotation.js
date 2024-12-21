function circularArrayRotation(a, k, queries) {
  // Realiza as rotações uma por uma
  while (k > 0) {
    let last = a.pop(); // Remove o último elemento
    a.unshift(last); // Adiciona o elemento no início do array
    k--;
  }

  // Coleta os resultados das consultas
  const result = queries.map((query) => a[query]);

  // Retorna os resultados
  return result;
}

a = [3, 4, 5];
k = 2;
queries = [1, 2];

circularArrayRotation(a, k, queries);

// Chatgpt solution
function circularArrayRotation2(a, k, queries) {
  // Calcula o número de rotações efetivas
  k = k % a.length;

  // Faz a rotação (move o último k elementos para o começo)
  // ...a.slice(-k) pega os últimos elementos do array e coloca na frente
  // ...a.slice(0, a.length - k) pega os últimos elementos do array e coloca no fundo
  let rotatedArray = [...a.slice(-k), ...a.slice(0, a.length - k)];

  // Responde as consultas
  queries.forEach((query) => {
    console.log(rotatedArray[query]);
  });
}

const a2 = [3, 4, 5];
const k2 = 2;
const queries2 = [1, 2];

circularArrayRotation2(a2, k2, queries2);
