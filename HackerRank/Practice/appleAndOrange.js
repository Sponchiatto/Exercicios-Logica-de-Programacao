// s,t: area da casa
// a:rvore de macas a esquerda da casa
// b: arvore de laranja a direita da casa
// apple and oranges: dadas listas das distancias em que cada fruta cai da sua respectiva arvore
// encontrar a quantidade de frutas que no fim estao dentro da area da casa.

// Esta função conta o número de maçãs e laranjas que caem dentro de uma área específica
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Define a área da casa com base nas coordenadas s (esquerda) e t (direita)
  const houseArea = [s, t];

  // Função auxiliar para verificar se uma posição está dentro de uma área
  const isInside = (area, pos) => {
    // Verifica se a posição está dentro do intervalo definido pela área
    return pos >= Math.min(...area) && pos <= Math.max(...area);
  };

  // Calcula as posições finais das maçãs e laranjas em relação às árvores
  const appleFinalPositions = apples.map((apple) => apple + a);
  const orangesFinalPositions = oranges.map((orange) => orange + b);

  // Inicializa contadores para o número de maçãs e laranjas dentro da casa
  let applesInsideHouse = 0,
    orangesInsideHouse = 0;

  // Itera sobre as posições finais das maçãs
  appleFinalPositions.forEach((applePosition) => {
    // Verifica se a maçã está dentro da casa e incrementa o contador, se estiver
    if (isInside(houseArea, applePosition)) applesInsideHouse++;
  });

  // Itera sobre as posições finais das laranjas
  orangesFinalPositions.forEach((orangePosition) => {
    // Verifica se a laranja está dentro da casa e incrementa o contador, se estiver
    if (isInside(houseArea, orangePosition)) orangesInsideHouse++;
  });

  // Imprime o número de maçãs e laranjas dentro da casa
  console.log(`${applesInsideHouse}\n${orangesInsideHouse}`);
}


// Definindo os parâmetros
const s = 7; // Coordenada esquerda da casa
const t = 11; // Coordenada direita da casa
const a = 5; // Posição da árvore de maçãs
const b = 15; // Posição da árvore de laranjas
const apples = [2, 3, -1, 5]; // Posições relativas das maçãs em relação à árvore de maçãs
const oranges = [-5, -4, 10]; // Posições relativas das laranjas em relação à árvore de laranjas

// Chamando a função
countApplesAndOranges(s, t, a, b, apples, oranges);
