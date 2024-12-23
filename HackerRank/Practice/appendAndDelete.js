// Você tem duas strings de letra minuscula. Você pode fazer dois tipos de operações na primeira string:
// 1. Append numa letra minuscula da string ao final da string
// 2. Deletar o último caractere da string. Fazer essa operação numa string vazia resulta numa string vazia.

// Dado um inteiro, k, e duas strings, s e t determine se você pode ou não converter s to t performando exatamente k
// operações em s. Se possível print Sim, se não print Não.

// Exemplo. s = [a,b,c]
// t = [d,e,f]
// k = 6

// Para converter S em T, a gente primeiro deve deletar tudo de S em 3 movimentos. Depois adicionar cada caractere de
// t em ordem. No final do sexto movimento as string serão iguais e então retorna YES.

function appendAndDelete(s, t, k) {
  let commonLength = 0;

  // Encontrar o maior prefixo comum entre s e t
  while (
    commonLength < s.length &&
    commonLength < t.length &&
    s[commonLength] === t[commonLength]
  ) {
    commonLength++;
  }

  // Calcular o número total de operações
  const totalOperations = s.length - commonLength + (t.length - commonLength);
  console.log(totalOperations);

  // Se as operações totais são menores que k e (k - operações totais) é par ou k é suficiente para deletar e adicionar todos os caracteres
  if (
    (totalOperations <= k && (k - totalOperations) % 2 === 0) ||
    k >= s.length + t.length
  ) {
    return "Yes";
  } else {
    return "No";
  }
}

const s = "hacker";
const t = "hack";
const k = 9;

console.log(appendAndDelete(s, t, k));
