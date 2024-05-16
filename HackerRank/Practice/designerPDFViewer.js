//Quando um bloco de texto contíguo é selecionado em um visualizador de PDF, 
//a seleção é destacada com um retângulo azul.
//Neste visualizador de PDF, cada palavra é destacada de forma independente.

// Há uma lista de 26 alturas de caracteres alinhadas por índice às suas letras. Por exemplo, 
// 'a' está no índice 0 e 'z' está no índice 25. Haverá também uma string. Usando as alturas das letras fornecidas, 
// determine a área mm² do destaque do retângulo assumindo que todas as letras são 1mm largas.

function designerPdfViewer(h, word) {
  // Calcula a largura do texto selecionado, que é simplesmente o número de caracteres na palavra.
  let largura = word.length;
  console.log(largura);

  // Inicializa a variável para armazenar a altura máxima encontrada.
  let alturaMaxima = 0;

  // Itera sobre cada caractere na palavra.
  for (let char of word) {
    // Calcula o índice correspondente no array de alturas `h`.
    // `char.charCodeAt(0)` obtém o código ASCII do caractere.
    // Subtraindo `a`.charCodeAt(0)` (código ASCII de 'a') converte isso em um índice base zero.
    let altura = h[char.charCodeAt(0) - "a".charCodeAt(0)];
    
    // zabc
    console.log(char.charCodeAt(0));
    console.log("a".charCodeAt(0));
    console.log(char.charCodeAt(0) - "a".charCodeAt(0));
    console.log(altura);

    // Se a altura do caractere atual for maior que a `alturaMaxima` armazenada, atualiza `alturaMaxima`.
    if (altura > alturaMaxima) {
      alturaMaxima = altura;
    }
    console.log(alturaMaxima); // Exibe a altura atual para fins de depuração.
  }

  // Calcula a área do retângulo destacado multiplicando a `alturaMaxima` pela `largura`.
  let area = alturaMaxima * largura;

  // Retorna a área calculada.
  return area;
}

// Exemplo de uso da função:
let heights = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
];
let word = "zabc";
console.log(designerPdfViewer(heights, word)); // Output: 9
