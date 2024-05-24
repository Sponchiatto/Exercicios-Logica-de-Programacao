// Juninho descobriu várias rochas. Cada rocha é composta por vários elementos,
// e cada elemento é representado por uma letra minúscula latina de 'a' a 'z'.
// Um elemento pode estar presente diversas vezes em uma rocha.
// Um elemento é chamado de "elemento-gema" se ocorrer pelo menos uma vez em cada uma das rochas.

// Dada a lista de rochas com suas composições, você tem que imprimir quantos tipos diferentes
// de elementos-gema Juninho tem.

// Formato de Entrada A primeira linha é constituída por N, o número de rochas. Cada uma das
// próximas N linhas contêm a composição da rocha. Cada composição é constituída
// por letras minúsculas do alfabeto latino.

// Formato de saída Imprima o número de diferentes tipos de elementos-gema que ele tem.

// Exemplo de Entrada
//      3      abcdde      baccd      eeabg

// Exemplo de Saída
//      2

// Explicação Apenas "a", "b" são considerados elementos-gema,
//pois apenas eles estão presentes na composição de todas as rochas.

function gemstones(arr) {
arr.shift();
  const joinedArray = arr.join("");

  const uniqueLetters = [...new Set(joinedArray)];

  let result = uniqueLetters.filter(letter =>
    arr.every((rock) => rock.includes(letter))
  );
 
  return result.length;
 
}

arr = [3, "vtrjvgbj", "mkmjyaeav", "sibzdmsk"];
console.log(gemstones(arr));
