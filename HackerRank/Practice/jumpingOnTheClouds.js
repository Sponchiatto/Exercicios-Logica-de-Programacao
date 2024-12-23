// Uma criança está brincando de pular em nuvens. Nesse jogo temos nuvens em sequência, que podem ser trovoadas ou cúmulos.
// O personagem deve pular de nuvem em nuvem até chegar novamente ao início.
// Array de clouds: c
// Energy level e = 100
// O personagem começa em nuvem 0 e usa 1 unidade de energia para fazer um pulo de distância k para a nuvem c[(i + k) % n]
// Se pousar numa nuvem de trovão, c[i] = 1 sua energia diminui em 2. O jogo terminaa quando o personagem pousar de volta
// na nuvem 0.

// Exemplo c =[0,0,1,0]
// k = 2

function jumpingOnClouds(c, k) {
  let e = 100; // Energia inicial
  let n = c.length; // Tamanho do array
  let i = 0; // Índice inicial

  do {
    // Atualizando o índice circular
    i = (i + k) % n;

    // Exibindo informações para entender o que está acontecendo
    console.log(
      `Índice: ${i}, Nuvem: ${
        c[i] === 0 ? "Nuvem normal" : "Nuvem de trovão"
      }, Energia antes: ${e}`
    );

    // Reduzindo energia
    e--;

    // Se for uma nuvem de trovão, perde mais energia
    if (c[i] === 1) {
      e -= 2; // Perde energia extra se for nuvem de trovão
      console.log(`Nuvem de trovão! Energia após: ${e}`);
    } else {
      console.log(`Energia após: ${e}`);
    }
  } while (i !== 0);

  // Resultado final da energia
  return e;
}


const c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
const k = 3;

console.log(jumpingOnClouds(c, k));
