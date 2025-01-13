// Ensinando lógica proposicional.
// O objetivo desse algoritmo é converter uma expressão de lógica proposicional em valores finais (verdadeiro/falso)
// Exemplo: ~P v Q, o sistema lerá a expressão, realizará os cálculos e apresenterá verdadeiro ou falso.

function normalizarExpressao(expressao) {
  // Removendo espaços em branco e tratando negação
  expressao = expressao.replace(" ", "").replace(/[~¬]/g, "!");

  return expressao;
}

function avaliarExpressao(expressao) {
  const operadores = {
    "!": (x) => !x, // Negação
    "v": (x, y) => x || y, // Disjunção
    "^": (x, y) => x && y, // Conjunção
  };

  // Função para avaliar o valor de uma variável proposicional
  function avaliarVariavel(variavel) {
    // Podemos definir valores fixos ou passar valores dinamicamente
    // Exemplo fixo: P = true, Q = false
    const valores = {
      P: true,
      Q: true,
    };
    return valores[variavel];
  }

  let pilha = [];

  for (let i = 0; i < expressao.length; i++) {
    const caractere = expressao[i];

    if (caractere === "!" || caractere === "v" || caractere === "^") {
      // Operadores: calculando baseado na pilha de valores
      if (caractere === "!") {
        const valor = pilha.pop();
        pilha.push(operadores[caractere](valor)); // Aplicando negação
      } else {
        const valor2 = pilha.pop();
        const valor1 = pilha.pop();
        pilha.push(operadores[caractere](valor1, valor2)); // Aplicando disjunção ou conjunção
      }
    } else if (/[A-Za-z]/.test(caractere)) {
      // Variáveis proposicionais, como P, Q, etc.
      pilha.push(avaliarVariavel(caractere));
    }
  }
  // A pilha deve ter um único valor, que é o resultado final
  return pilha.pop();
}

function calcularLogica(expressao) {
  // Normalizar e realizar os cálculos
  expressao = normalizarExpressao(expressao);
  const resultado = avaliarExpressao(expressao);

  // Exibir o resultado
  if (resultado) {
    console.log("Resultado: V");
  } else {
    console.log("Resultado: F");
  }
}

const expressao = "~PvQ";

calcularLogica(expressao);
