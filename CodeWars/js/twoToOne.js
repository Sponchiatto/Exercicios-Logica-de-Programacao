// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible,
// containing distinct letters - each taken only once - coming from s1 or s2.

//Solution 1
function longest(s1, s2) {
  const combined = s1.concat(s2).split("");
  const uniqueChar = new Set(combined);

  return Array.from(uniqueChar).sort().join("");
}

//Solution 2
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");



a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";

console.log(longest(a, b));
