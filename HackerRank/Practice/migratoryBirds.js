// Given an array of bird sightings where every element represents a bird type id, determine the id of the
// most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest
//of their ids.

// Example
// arr = [1,1,2,2,3]

// There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type 1.

// Esta função recebe um array de identificações de pássaros e retorna o tipo de pássaro mais comum.
function migratoryBirds(arr) {
  // Ordena o array de identificações de pássaros.
  arr.sort();

  // Inicializa variáveis para contagem do número de ocorrências consecutivas de um tipo de pássaro,
  // o número máximo de ocorrências consecutivas e o tipo de pássaro correspondente.
  let count = 1, // Inicia a contagem com 1, pois já temos pelo menos um pássaro na lista.
    max = 0, // Inicializa o número máximo de ocorrências consecutivas como 0.
    el; // Inicializa a variável que armazenará o tipo de pássaro mais comum.

  // Loop para percorrer o array de identificações de pássaros.
  for (let i = 1; i < arr.length; i++) {
    // Verifica se o pássaro atual é o mesmo que o pássaro anterior.
    if (arr[i] === arr[i - 1]) {
      // Se for, incrementa a contagem de ocorrências consecutivas desse tipo de pássaro.
      count++;
    } else {
      // Se não for, reinicia a contagem para o pássaro atual.
      count = 1;
    }

    // Verifica se a contagem atual é maior que o número máximo de ocorrências consecutivas encontrado até agora.
    if (count > max) {
      // Se for, atualiza o número máximo de ocorrências consecutivas e armazena o tipo de pássaro correspondente.
      max = count;
      el = arr[i];
    }
  }

  // Retorna o tipo de pássaro mais comum.
  return el;
}


const arr = [1, 1, 2, 2, 3];
console.log(migratoryBirds(arr));
