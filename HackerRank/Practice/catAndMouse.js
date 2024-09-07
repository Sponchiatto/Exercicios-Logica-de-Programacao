// Two cats and a mouse are at various positions on a line. You will be given their starting positions.
// Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and
// the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed
// to move and it will escape while they fight.

// You are given
// queries in the form of x, y, z and representing the respective positions for cats and x,y and z for mouse .
// Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.

// If cat A catches the mouse first, print Cat A.
// If cat B catches the mouse first, print Cat B.

// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

// Example
// x = 2
// y = 5
// z = 4

// The cats are at positions 2 (Cat A) and 5 (Cat B), and the mouse is at position 4. Cat B,
// at position will arrive first since it is only unit away while the other is units away. Return 'Cat B'.

function catAndMouse(x, y, z) {
  const distanceXZ = Math.abs(x - z);
  const distanceYZ = Math.abs(y - z);

  if (distanceXZ > distanceYZ) {
    return "Cat B";
  } else if (distanceXZ < distanceYZ) {
    return "Cat A";
  } else {
    return "Mouse C";
  }

//   return distanceXZ === distanceYZ
//     ? "Mouse C"
//     : distanceXZ < distanceYZ
//     ? "Cat A"
//     : "Cat B";

}

console.log(catAndMouse(2, 5, 4));
