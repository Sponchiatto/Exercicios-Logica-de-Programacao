// This function finds the longest palindromic substring in a given string.
function longestPalindrome(s) {
  // Check if the input string is null or empty. If so, return an empty string.
  if (s === null || s.length < 1) return "";

  // Initialize variables to store the indices of the longest palindromic substring.
  let start = 0;
  let end = 0;

  // Loop through the characters of the string.
  for (let i = 0; i < s.length; i++) {
    // Expand around the center considering i as the center.
    let len1 = expandAroundCenter(s, i, i);
    // Expand around the center considering i and i+1 as the centers.
    let len2 = expandAroundCenter(s, i, i + 1);
    // Calculate the maximum length of the palindromic substring.
    let len = Math.max(len1, len2);

    // Update the indices of the longest palindromic substring if necessary.
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  // Return the longest palindromic substring found in the original string.
  return s.substring(start, end + 1);
}

// This function expands from a given center in the string to find a palindromic substring.
function expandAroundCenter(s, left, right) {
  // Initialize the ends of the expansion.
  let L = left;
  let R = right;

  // Expand while the characters at the ends are equal and within the string bounds.
  while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
    L--;
    R++;
  }

  // Return the length of the palindromic substring found.
  return R - L - 1;
}

// Example of usage:
let inputString = "babad";
// Find the longest palindromic substring in the input string.
let longestPalindromicSubstring = longestPalindrome(inputString);
// Print the longest palindromic substring.
console.log(longestPalindromicSubstring); // Expected output: "bab" or "aba"
