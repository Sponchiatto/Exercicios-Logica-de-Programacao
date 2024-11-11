// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights,
// and the characters have a maximum height they can jump. There is a magic potion they can take that will
// increase their maximum jump height by 1 unit for each dose. How many doses of the potion must the character
// take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return 0.

function hurdleRace(k, height) {
  const maxHeight = Math.max(...height);

  if (k >= maxHeight) {
    return 0;
  } else {
    return maxHeight - k;
  }
}

const k = 1;
const height = [1, 2, 3, 3, 2];
console.log(hurdleRace(k, height));
