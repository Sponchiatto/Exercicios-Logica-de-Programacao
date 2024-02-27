// Given a string s, find the length of the longest
// substring
// without repeating characters.

//Using "Sliding Window" algorithm
// The sliding window algorithm is a technique for finding a subarray or substring within an array or string 
// that satisfies a specific condition. It involves creating a window (or range) over the input data 
// and moving that window throughout the data to find the desired result efficiently.
//
// In this algorithm:
// - We maintain a window (or range) that represents a contiguous subarray of the input array.
// - Initially, the window is defined as empty or covering only one element.
// - We then extend or shrink the window based on certain conditions until we find a solution.
// - The window "slides" through the array, and at each step, we update our solution if necessary.
//
// In the context of this code:
// - The sliding window algorithm is used to efficiently find the longest substring without repeating characters.
// - The "window" here is the substring itself.
// - We maintain a "start" and "end" index that defines the current window.
// - We expand the window by moving the "end" index until we encounter a repeating character.
// - Once we find a repeating character, we shrink the window from the "start" index until the repeating character is no longer in the window.
// - We keep track of the maximum length of the non-repeating substring encountered so far.
// - This process continues until we have traversed the entire input string.
function lengthOfLongestSubstring(s) {
  // Initializing an empty set to store unique characters
  //The Set object allows you to store single values ​​of any type, from primitive values ​​to object references.
  let set = new Set();
  // Initializing the starting index of the substring and the maximum size as zero
  let left = 0;
  let maxSize = 0;

  // Checking if the string is empty or has only one character
  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  // Iterating through the string
  for (let i = 0; i < s.length; i++) {
    // Checking if the current character is already in the set

    while (set.has(s[i])) {
      // If it is, remove characters from the left until there are no more repetitions
      set.delete(s[left]); // Remove the leftmost character from the set

      left++; // Move the left pointer to the right
    }
    // Adding the current character to the set
    set.add(s[i]);

    // Calculating the size of the current substring and updating the maximum size
    maxSize = Math.max(maxSize, i - left + 1);
  }
  // Returning the maximum size of the substring without repeating characters
  return maxSize;
}

// Example usage:
const s = "abcabcbb";
console.log("Resultado final: ", lengthOfLongestSubstring(s)); // Output: 3 (substring is "abc")
