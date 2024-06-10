function palindromo(s) {
  let len = s.length;
  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindromo("aabbccdde"));
console.log(palindromo("racecar")); // Output: true
console.log(palindromo("madam")); // Output: true
console.log(palindromo("hello")); // Output: false