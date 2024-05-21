// Um novo produto, é anunciado para 5 pessoas
// No primeiro dia, metade dessas 5 pessoas (2) gostam desse produto e cada uma manda para mais 3 pessoas
// No começo do segundo dia, 2 x 3 = 6 pessoas recebem o anúncio.
// Cada dia, (recipients/2) gostam do anúncio e vão compartilhar com 3 amigos no dia seguinte.
// Determine quantas pessoas gostaram do anúncio ao fim do dia desde seu lançamento.

// Usando for
//   for (let day = 1; day <= n; day++) {
//     let liked = Math.floor(shared / 2); // Metade das pessoas que receberam o anúncio gostam dele
//     total_liked += liked; // Adiciona o número de pessoas que gostaram ao total
//     shared = liked * 3; // Cada pessoa que gostou compartilha com 3 amigos
//   }

function viralAdvertising(n) {
  let liked = 0, // Variável para armazenar o número de pessoas que gostaram do anúncio em um dia específico
    shared = 5, // Inicialmente, o anúncio é compartilhado com 5 pessoas
    total = 0; // Variável para armazenar o número total de pessoas que gostaram do anúncio até o momento

  // Executa o loop até que n chegue a 0 (ou seja, executa n dias)
  while (n--) {
    // Calcula o número de pessoas que gostaram do anúncio no dia atual
    liked = Math.floor(shared / 2); // Metade das pessoas que receberam o anúncio gostam dele (arredondando para baixo)

    // Calcula o número de pessoas que compartilharão o anúncio no próximo dia
    shared = liked * 3; // Cada pessoa que gostou compartilha com 3 amigos

    // Atualiza o total de pessoas que gostaram do anúncio
    total += liked; // Adiciona o número de pessoas que gostaram no dia atual ao total
  }

  // Retorna o número total de pessoas que gostaram do anúncio após n dias
  return total;
}


const n = 3;
console.log(viralAdvertising(n));
