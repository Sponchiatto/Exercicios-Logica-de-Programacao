// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//Solution 1
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else if (
    (p1 === "scissors" && p2 === "rock") ||
    (p1 === "paper" && p2 === "scissors") ||
    (p1 === "rock" && p2 === "paper")
  ) {
    return "Player 2 won!";
  } else {
    return "Invalid input. Please use only rock/paper/scissors.";
  }
};

//Solution 2
const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("rock", "scissors")); // Output: "Player 1 won!"

console.log(rps("scissors", "rock")); // Output: "Player 2 won!"

console.log(rps("rock", "rock")); // Output: "Draw!"

console.log(rps("rock", "banana")); // Output: "Invalid input. Please use only rock/paper/scissors."

