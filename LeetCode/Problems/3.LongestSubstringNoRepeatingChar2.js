// Given a string s, find the length of the longest
// substring
// without repeating characters.

//Main concepts

// Main concepts:
// 1. Iteration over string: Looping through each character in the input string.
// 2. Conditional statement: Checking conditions to determine actions based on whether a character is 
// present in the substring.
// 3. String manipulation: Modifying and extracting substrings using string methods like 
// includes(), match(), and substring().
// 4. Array manipulation: Storing lengths of substrings in an array and finding the maximum length using Math.max().
// 5. forEach loop: Iterating through each character of the string using forEach() method on the spread string.
// 6. Regular expressions: Using match() with a regular expression to find the index of the first 
// occurrence of a character in the substring.
// 7. Spread operator: Spreading the input string into an array of characters for iteration.
// 8. Length calculation: Determining the length of substrings and storing them in an array for further processing.
// 9. Return statement: Returning the maximum length of substrings without duplicates as the result.

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
      // This method is used to search a string for a specified pattern (regular expression) and returns 
      // an array containing the results.
      const index = substr.match(i);

      // Add the length of the current substring to the result array
      resultArray.push(substr.length);

      // Update the substring to include characters after the first occurrence of the duplicate character
      // The substring() method of String values returns the part of this string from the start index up to and
      // excluding the end index, or to the end of the string if no end index is supplied
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
