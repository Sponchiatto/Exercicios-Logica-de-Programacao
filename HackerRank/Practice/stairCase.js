// Staircase detail
// This is a staircase of size :
//    #
//   ##
//  ###
// ####
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size .
// Function Description
// Complete the staircase function in the editor below.
// staircase has the following parameter(s):
// int n: an integer
// Print a staircase as described above.

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const hashes = "#".repeat(i);
    console.log(spaces + hashes);
  }
}

// Exemplo de uso:
staircase(4);
