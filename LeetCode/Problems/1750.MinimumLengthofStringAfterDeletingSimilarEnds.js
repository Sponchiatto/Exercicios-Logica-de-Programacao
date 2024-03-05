// Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm
// on the string any number of times:

// Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
// Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
// The prefix and the suffix should not intersect at any index.
// The characters from the prefix and suffix must be the same.
// Delete both the prefix and the suffix.

// Return the minimum length of s after performing the above operation any number of times (possibly zero times).

// Main Concept
// "The code utilizes the 'two pointers' technique, where two pointers traverse the string simultaneously from both ends,
//  identifying and removing equal characters from the ends until they differ or converge. This approach efficiently 
//  finds the minimum substring needed to transform the string into a palindrome."

// Function to find the minimum length of substring to remove
const minimumLength = function (s) {
  let left = 0; // Pointer starting from the left end of the string
  let right = s.length - 1; // Pointer starting from the right end of the string

  // Loop while left pointer is less than right pointer and characters at both pointers are equal
  while (left < right && s[left] === s[right]) {
    let char = s[left]; // Store the character at the left pointer

    // Move left pointer to the right until a different character is encountered
    while (left <= right && s[left] === char) {
      left++;
    }

    // Move right pointer to the left until a different character is encountered
    while (right >= left && s[right] === char) {
      right--;
    }
  }

  // Return the length of the substring that needs to be removed
  return right - left + 1;
};

// Example usage
console.log(minimumLength("ca")); // Output: 2
console.log(minimumLength("cabaabac")); // Output: 0
console.log(minimumLength("aabccabba")); // Output: 3
