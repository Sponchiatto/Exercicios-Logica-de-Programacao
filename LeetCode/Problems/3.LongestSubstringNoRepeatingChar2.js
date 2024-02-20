// Given a string s, find the length of the longest
// substring
// without repeating characters.

var lengthOfLongestSubstring = function (string) {
  let substr = ""; // Initialize an empty string to store the current substring
  let resultArray = []; // Initialize an empty array to store lengths of substrings without duplicates

  // Iterate through each character in the input string
  [...string].forEach((i) => {

    // Check if the current character is not already present in the substring
    if (!substr.includes(i)) {
      // If not present, add the character to the substring
      substr += i;

    } else {
      // If the character is already present in the substring

      // Find the index of the first occurrence of the character in the substring
      const index = substr.match(i);


      // Add the length of the current substring to the result array
      resultArray.push(substr.length);


      // Update the substring to include characters after the first occurrence of the duplicate character
      // The substring() method of String values returns the part of this string from the start index up to and
      //excluding the end index, or to the end of the string if no end index is supplied
      substr = substr.substring(index.index + 1) + i;
    }
  });

  // Add the length of the final substring to the result array
  resultArray.push(substr.length);

  // Return the maximum length from the result array, which represents the longest substring without duplicates

  return Math.max(...resultArray);
};

// Example usage:
const string = "abcadbcbbd";
console.log(lengthOfLongestSubstring(string)); // Output: 3 (substring is "abc")
