function aVeryBigSum(ar) {
  // Iniciando soma como BigInt 0
  let sumBigInt = BigInt(0);

  // Percorrendo cada elemento e fazendo a adição dos números.
  for (let i = 0; i < ar.length; i++) {
    sumBigInt += BigInt(ar[i]);
  }

  // Exibir resultado, o toString é para converter de volta para string e evitar saída BigInt.
  // Visto que, nao utiliza-lo pode não formatar corretamente os valores BigInt.
  // Acabando que pode exibir o BigInt como um objeto em vez de número, esse comportamento é para garantir que você
  // Saiba que está lidando com um valor BigInt, que é um representação especial de inteiro que não se comporta como número
  //  Javascript padrão
  console.log(sumBigInt.toString());
  return sumBigInt;
}

// Exemplo de uso:
const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
aVeryBigSum(array);
