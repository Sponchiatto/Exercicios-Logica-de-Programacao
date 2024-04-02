// Function to find the complement of a DNA strand
function dnaComplement(dna) {
  // Initialize an empty string to store the complement strand
  let complementStrand = "";

  // Iterate over each character in the DNA string
  for (let i = 0; i < dna.length; i++) {
    // Get the current symbol/base in the DNA sequence
    let currentSymbol = dna[i];

    // Determine the complement of the current symbol and append it to the complement strand
    if (currentSymbol === "A") {
      complementStrand += "T"; // Adenine (A) pairs with Thymine (T)
    } else if (currentSymbol === "T") {
      complementStrand += "A"; // Thymine (T) pairs with Adenine (A)
    } else if (currentSymbol === "C") {
      complementStrand += "G"; // Cytosine (C) pairs with Guanine (G)
    } else if (currentSymbol === "G") {
      complementStrand += "C"; // Guanine (G) pairs with Cytosine (C)
    }
  }

  // Return the complement DNA strand
  return complementStrand;
}

//Solution 2
// Function to find the complement of a DNA strand
function DNAStrand(dna) {
  // Use the replace method to iterate over each character in the DNA string
  return dna.replace(/./g, function (c) {
    // For each character 'c', replace it with its complement from the pairs table
    return DNAStrand.pairs[c];
  });
}

// Table of DNA base pairs
DNAStrand.pairs = {
  A: "T", // Adenine (A) pairs with Thymine (T)
  T: "A", // Thymine (T) pairs with Adenine (A)
  C: "G", // Cytosine (C) pairs with Guanine (G)
  G: "C", // Guanine (G) pairs with Cytosine (C)
};

// Teste da função
console.log(dnaComplement("ATTGC")); // Deve retornar "TAACG"
console.log(dnaComplement("GTAT")); // Deve retornar "CATA"
