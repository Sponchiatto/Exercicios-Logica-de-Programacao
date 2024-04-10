// Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Initialize shortestLength to a large number
  let shortestLength = Infinity;

  // Iterate through each word in the array
  for (let word of words) {
    // Update shortestLength if the current word is shorter
    shortestLength = Math.min(shortestLength, word.length);
  }

  // Return the shortest length found
  return shortestLength;
}

//solution 2
function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

const str = "bitcoin take over the world maybe who knows perhaps";
console.log(findShort(str));
