// A jail has a number of prisoners and a number of treats to pass out to them.
// Their jailer decides the fairest way to divide the treats is to seat the prisoners around a circular
// table in sequentially numbered chairs. A chair number will be drawn from a hat.
// Beginning with the prisoner in that chair, one candy will be handed to each prisoner
// sequentially around the table until all have been distributed.

// The jailer is playing a little joke, though. The last piece of candy looks like all the others,
// but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

// Example
// n = 4
// m = 6
// s = 2

// There are 4 prisoners, 6 pieces of candy and distribution starts at chair 2. The prisioners arrange themselves in
// seats numbered 1 to 4. Prisoners receive candy at positions 2,3,4,1,2,3. The prisioner to be warned sits in chair
// number 3.

function saveThePrisoner(n, m, s) {
  // A cadeira inicial onde começa a distribuição dos doces
  const initialChair = s;

  // Calcula o número restante de doces após a distribuição completa de n doces (o resto da divisão de m por n)
  const remasnescente = m % n;

  // Se a soma da cadeira inicial e o número restante de doces menos um for um múltiplo de n
  if ((remasnescente + initialChair - 1) % n == 0) {
    // Retorna n, que significa que o último doce será entregue ao último prisioneiro (n)
    return n;
  } else {
    // Caso contrário, retorna o índice do prisioneiro que receberá o último doce
    return (remasnescente + initialChair - 1) % n;
  }
}

// Definição dos valores de n, m e s
const n = 7; // Número de prisioneiros
const m = 19; // Número de doces
const s = 2; // Cadeira inicial

// Imprime o resultado da função para os valores fornecidos
console.log(saveThePrisoner(n, m, s));


// Solution 2
function saveThePrisoner(n, m, s) {
  // Calcula a posição do prisioneiro que receberá o último doce
  // Usando a fórmula (m - 1 + s) % n para ajustar a posição
  // Se o resultado for 0, retorna n; caso contrário, retorna o valor calculado
  return (m - 1 + s) % n || n;
}

// Razão do -1
// Se simplesmente somarmos m a s, estaríamos contando a cadeira s duas vezes 
// (uma vez no início e uma vez na soma). Então, para ajustar essa contagem, 
// subtraímos 1 de m.