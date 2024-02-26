// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// Main Concepts

// Using indices to control the current position: The code uses the variable currentRow to determine which row the
//next character should be inserted into.

// Alternating between directions: The code uses the variable goingUp (or goingDown, depending on the implementation)
// to alternate between ascending and descending directions along the rows of the zigzag pattern.

// Updating indices based on direction: Depending on the current direction (up or down), the code increments or
// decrements the row index (currentRow) to ensure that characters are inserted into the correct row.
function convert(s, numRows) {
  // If there's only one row, return the original string
  if (numRows === 1) return s;

  // Initialize an array of strings to represent the rows in the zigzag pattern
  //JavaScript's Array object is a global object used in constructing 'arrays': high-level list-like objects.
  // The fill() method fills all array values ​​from the starting index to an ending index with a static value.
  const rows = new Array(numRows).fill("");
  // Initialize the current row to 0
  let currentRow = 0;

  // Initialize a boolean flag to indicate whether we're going down or up in the zigzag pattern
  let goingUp = false;

  // Loop through each character in the input string
  for (let i = 0; i < s.length; i++) {
    // Append the current character to the string in the current row
    rows[currentRow] += s[i];
    // If we've reached the top or bottom row, reverse the direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingUp = !goingUp;
    }

    // Move to the next row, either up or down depending on the direction
    // goingUp start as false, so it will go down and add plus one, when goingUp changes to true, it starts to
    // go Up and minus 1.
    currentRow += goingUp ? 1 : -1;
  }

  // Join all the rows together to form the resulting string
  // The join() method joins all the elements of an array (or an array-like object) into a string and
  //returns this string.
  return rows.join("");
}

// Example usage:
const input = "PAYPALISHIRING";
const numRows = 3;
console.log(convert(input, numRows));


