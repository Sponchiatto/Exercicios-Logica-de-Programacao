// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// - The length of the segment matches Ron's birth month, and,
// - The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example:
// s = [2,2,1,3,2]
// d = 4
// m = 2

// Lily wants to find segments summing to Ron's birth day, d = 4  with a length equalling his birth month, m = 2.
// In this case, there are two segments meeting her criteria: [2,2] and [1,3].

function birthday(s, d, m) {
  console.log(s);

  let splitArr = [];

  for (let i = 0; i < s.length; i++) {
    splitArr.push(s.slice(i, s.length));
  }
  console.log(splitArr);

  let filteredByM = splitArr.filter((e) => {
    return e.length >= m;
  });

  console.log(filteredByM);

  let possible = [];

  filteredByM.forEach((e) => {
    let test = e.slice(0, m);

    console.log(test);

    if (test.reduce((acc, value) => acc + value) === d) {
      possible.push(test);
    }
  });
    console.log(possible);
    return possible.length;
}

const s = [2, 2, 1, 3, 2];
const d = 4;
const m = 2;

console.log(birthday(s, d, m));
