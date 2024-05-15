// In this challenge, you will determine whether a string is funny or not. To determine whether a string is funny,
// create a copy of the string in reverse e.g. abc -> cba Iterating through each string, compare the absolute difference
// in the ascii values of the characters at positions 0 and 1, 1 and 2 and so on to the end. If the list
// of absolute differences is the same for both strings, they are funny.

// Determine whether a give string is funny. If it is, return Funny, otherwise return Not Funny.

// Valores ASCII dos caracteres:

// a tem valor ASCII 97
// c tem valor ASCII 99
// x tem valor ASCII 120
// z tem valor ASCII 122

// Cálculo das diferenças absolutas para a string original:

// Diferença entre a e c: |97 - 99| = 2
// Diferença entre c e x: |99 - 120| = 21
// Diferença entre x e z: |120 - 122| = 2
// Então, as diferenças absolutas para s = "acxz" são [2, 21, 2].

// A string é invertida e a mesma operação é feita, então é feita a comparação entre as duas strings.

function isFunnyString(s) {
    // Arrays para armazenar as diferenças absolutas dos valores ASCII dos caracteres adjacentes
    const originalDiffs = [];
    const reversedDiffs = [];
    
    // Cria a string invertida
    const reversedString = s.split('').reverse().join('');
    
    // Calcula as diferenças absolutas para a string original
    for (let i = 1; i < s.length; i++) {
        // Pega a diferença absoluta entre os valores ASCII dos caracteres adjacentes na string original
        originalDiffs.push(Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1)));
    }
    
    // Calcula as diferenças absolutas para a string invertida
    for (let i = 1; i < reversedString.length; i++) {
        // Pega a diferença absoluta entre os valores ASCII dos caracteres adjacentes na string invertida
        reversedDiffs.push(Math.abs(reversedString.charCodeAt(i) - reversedString.charCodeAt(i - 1)));
    }
    
    // Compara as diferenças absolutas entre a string original e a invertida
    for (let i = 0; i < originalDiffs.length; i++) {
        // Se qualquer uma das diferenças não for igual, a string não é "Funny"
        if (originalDiffs[i] !== reversedDiffs[i]) {
            return 'Not Funny'; // Retorna "Not Funny" se houver diferença
        }
    }
    
    // Se todas as diferenças forem iguais, a string é "Funny"
    return 'Funny'; // Retorna "Funny" se todas as diferenças forem iguais
}

// Testes
console.log(isFunnyString("acxz"));  // Output: Funny
console.log(isFunnyString("bcxz"));  // Output: Not Funny



