/**
 * Encontra a combinação mais cara de teclado e drive USB sem exceder o orçamento.
 *
 * Principais conceitos:
 * 1. Classificação para otimizar a busca
 * 2. Uso de dois ponteiros para encontrar a combinação ótima
 *
 * @param {number[]} keyboards - Preços dos teclados disponíveis
 * @param {number[]} drives - Preços dos drives USB disponíveis
 * @param {number} b - Orçamento disponível
 * @returns {number} - Maior soma de preços de um teclado e um drive USB dentro do orçamento, ou -1 se não houver combinação válida
 */

function getMoneySpent(keyboards, drives, b) {
  // Ordena os teclados em ordem crescente
  keyboards.sort((a, b) => a - b);
  // Ordena os drives em ordem decrescente
  drives.sort((a, b) => b - a);

  let max = -1; // Inicializa o valor máximo como -1 (nenhuma combinação encontrada)
  let i = 0; // Ponteiro para teclados
  let j = 0; // Ponteiro para drives

  // Percorre os teclados e drives com dois ponteiros
  while (i < keyboards.length && j < drives.length) {
    let sum = keyboards[i] + drives[j];
    // Verifica se a combinação atual está dentro do orçamento
    if (sum <= b) {
      // Atualiza o valor máximo se a combinação atual for maior que o valor máximo atual
      max = Math.max(max, sum);
      i++; // Move para o próximo teclado
    } else {
      j++; // Move para o próximo drive
    }
  }

  return max; // Retorna o maior valor encontrado dentro do orçamento ou -1 se nenhuma combinação for válida
}

const budget = 60;
const keyboards = [40, 50, 60];
const drives = [5, 8, 12];

console.log(getMoneySpent(keyboards, drives, budget)); // Saída: 58
