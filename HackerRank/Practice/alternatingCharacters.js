// You are given a string containing characters  and  only. Your task is to change it into a
// string such that there are no matching adjacent characters. To do this, you are allowed
// to delete zero or more characters in the string.

// Your task is to find the minimum number of required deletions.

// Example
// s = AABAAB
// Remove an A at positions 0 and 3 to make s - ABAB in 2 deletions

function alternatingCharacters(s) {
  const splittedString = s.split("");
  const N = s.length;
  let deletionCount = 0;

  for (let i = 0; i < N; i++) {
    if (splittedString[i] === splittedString[i + 1]) {
      deletionCount += 1;  
    }  
  }

  return deletionCount;
}

const s = "AABAAB";
console.log(alternatingCharacters(s));
