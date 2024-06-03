/**
 * Encontra a combinação mais cara de teclado e drive USB sem exceder o orçamento.
 *
 * Principais conceitos:
 * 1. Busca exaustiva (força bruta) para encontrar a combinação ótima
 * 2. Aninhamento de loops para percorrer todas as combinações possíveis
 * 3. Comparação e atualização de um valor máximo baseado em uma condição
 *
 * @param {number[]} keyboards - Preços dos teclados disponíveis
 * @param {number[]} drives - Preços dos drives USB disponíveis
 * @param {number} b - Orçamento disponível
 * @returns {number} - Maior soma de preços de um teclado e um drive USB dentro do orçamento, ou -1 se não houver combinação válida
 * 
 * Benefícios da Busca Exaustiva:
Embora a busca exaustiva não seja a abordagem mais eficiente para todos os problemas (especialmente para grandes conjuntos de dados), 
ela é simples de implementar e garante que todas as possíveis combinações sejam consideradas, encontrando sempre a solução ótima dentro 
das limitações do problema.
 */

// A person wants to determine the most expensive computer keyboard and USB drive that
// can be purchased with a give budget.
// Given price lists for keyboards and USB drives and a budget, find the cost to buy them.
// If it is not possible to buy both items,
// return -1.

// Example
// b = 60
// keyboards = [40,50,60]
// drives = [5,8,12]
// The person can buy a 40 keyboard + 12 USB drive = 52 or a 50 keyboard + 8 USB drive = 58.
// Chosse the latter as the more expensive option and return 58.

function getMoneySpent(keyboards, drives, b) {
  let max = -1; // Inicializa o valor máximo como -1 (nenhuma combinação encontrada)

  // Percorre todos os preços dos teclados
  for (let i = 0; i < keyboards.length; i++) {
    // Percorre todos os preços dos drives USB
    for (let j = 0; j < drives.length; j++) {
      // Verifica se a combinação atual está dentro do orçamento
      if (keyboards[i] + drives[j] <= b) {
        // Atualiza o valor máximo se a combinação atual for maior que o valor máximo atual
        max = Math.max(max, keyboards[i] + drives[j]);
      }
    }
  }

  return max; // Retorna o maior valor encontrado dentro do orçamento ou -1 se nenhuma combinação for válida
}

const budget = 60;
const keyboards = [40, 50, 60];
const drives = [5, 8, 12];

console.log(getMoneySpent(keyboards, drives, budget));
