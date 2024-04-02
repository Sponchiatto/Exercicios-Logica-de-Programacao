// Function to convert DNA to RNA
function DNAtoRNA(dna) {
  // Use the replace method to iterate over each character in the DNA string
  return dna.replace(/./g, function (c) {
    // For each character 'c', replace it with its RNA equivalent from the pairs table
    return DNAtoRNA.pairs[c];
  });
}

// Table of DNA to RNA base pairs
DNAtoRNA.pairs = {
  G: "G", // Guanine (G) remains the same in RNA
  C: "C", // Cytosine (C) remains the same in RNA
  A: "A", // Adenine (A) remains the same in RNA
  T: "U", // Thymine (T) is replaced with Uracil (U) in RNA
};

//Solution 2
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// Teste da função
console.log(DNAtoRNA("ATTGC")); // Deve retornar "TAACG"
console.log(DNAtoRNA("GTAT")); // Deve retornar "CATA"
