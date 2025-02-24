// Crie um algoritmo com laços de repetição e vetores que descubra o
// N-ésimo valor da sequência de Fibonacci conforme solicitado pelo usuário.
// Ex.: O usuário deverá pedir o 168º número da sequência e o sistema deverá
// informar qual número é este.

const Fibonacci = (n) => {
  let penultimo = 0; // 1º termo da sequência
  let ultimo = 1; // 2º termo da sequência
  let numero = 0;

  if (n === 1) return 0; // O 1º número de Fibonacci é 0
  if (n === 2) return 1; // O 2º número de Fibonacci é 1

  for (let i = 2; i < n; i++) {
    numero = penultimo + ultimo;
    console.log("Resultado:", numero);
    penultimo = ultimo;
    console.log("penultimo:", penultimo);
    ultimo = numero;
    console.log("ultimo:", ultimo);
    
  }

  return numero;
};

const n = 10;
console.log(`O ${n}º número da sequência de Fibonacci é: ${Fibonacci(n)}`);
