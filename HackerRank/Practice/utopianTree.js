// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer,
// its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after
// n growth cycles?

// For example, if the number of growth cycles is n = 5, the calculations are as follows:

// Period  Height
// 0          1
// 1          2
// 2          3
// 3          6
// 4          7
// 5          14

function utopianTree(n) {
  // Start with an initial height of 1 meter for the sapling.
  let height = 1;

  // Loop through each growth cycle up to n.
  for (let i = 0; i < n; i++) {
    // If i is even, it represents spring, and the tree doubles in height.
    if (i % 2 === 0) {
      height *= 2;
    }
    // If i is odd, it represents summer, and the tree grows by 1 meter.
    else {
      height += 1;
    }
  }

  // Return the final height of the tree after n growth cycles.
  return height;
}

console.log(utopianTree(4));
