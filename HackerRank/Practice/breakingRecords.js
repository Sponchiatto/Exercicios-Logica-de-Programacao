// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play.
// She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in
// the first game establish her record for the season, and she begins counting from there.

// A função breakingRecords recebe um array de pontuações de jogos como entrada e retorna um array contendo
// o número de vezes que o recorde mais alto foi quebrado e o número de vezes que o recorde mais baixo foi quebrado.
function breakingRecords(scores) {
  // Inicializa a pontuação mais alta e mais baixa com a pontuação do primeiro jogo
  let pontuacaoMaisAlta = scores[0];
  let pontuacaoMaisBaixa = scores[0];
  // Inicializa contadores para o número de vezes que o recorde mais alto e mais baixo foram quebrados
  let vezesRecordeMaisAltoQuebrado = 0;
  let vezesRecordeMaisBaixoQuebrado = 0;

  // Percorre o array de pontuações a partir do segundo jogo
  for (let i = 1; i < scores.length; i++) {
    const pontuacao = scores[i];
    // Atualiza a pontuação mais alta e mais baixa e os contadores de vezes que os recordes são quebrados
    if (pontuacao > pontuacaoMaisAlta) {
      pontuacaoMaisAlta = pontuacao;
      vezesRecordeMaisAltoQuebrado++;
    }
    if (pontuacao < pontuacaoMaisBaixa) {
      pontuacaoMaisBaixa = pontuacao;
      vezesRecordeMaisBaixoQuebrado++;
    }
  }

  // Retorna um array contendo o número de vezes que o recorde mais alto e mais baixo foram quebrados
  return [vezesRecordeMaisAltoQuebrado, vezesRecordeMaisBaixoQuebrado];
}

// Pontuações de exemplo
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
// Chama a função breakingRecords com as pontuações de exemplo e exibe o resultado no console
console.log(breakingRecords(scores));



