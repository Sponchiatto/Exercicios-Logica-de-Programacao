// An arcade game player wants to climb to the top of the leaderboard and track their ranking.
// The game uses Dense Ranking, so its leaderboard works like this:

//     - The player with the highest score is ranked 1 number on the leaderboard.
//     - Players who have equal scores receive the same ranking number, and the next player(s)
//     receive the immediately following ranking number.
// Exemple:
// ranked = [100,90,90,80]
// player = [70,80,105]
// The ranked palyers will have ranks 1,2,2,3. If the players scores are 70, 80 and 105, their rankings after each game are
// 4th, 3rd, 1st; Return [4,3,1]

function climbingLeaderboard(ranked, player) {
  // Remove duplicate scores from ranked array to create a unique leaderboard
  let uniqueRanked = [...new Set(ranked)];
  let result = [];

  // Iterate through each player's score to determine their rank
  player.forEach(score => {
    // Initialize pointers for binary search
    let left = 0;
    let right = uniqueRanked.length - 1;

    // Perform binary search to find the position for the current score
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      // Check if the player's score matches the midpoint score in uniqueRanked
      if (uniqueRanked[mid] === score) {
        left = mid; // Found exact match
        break;
      } 
      // If the player's score is lower, search in the right half
      else if (uniqueRanked[mid] > score) {
        left = mid + 1;
      } 
      // If the player's score is higher, search in the left half
      else {
        right = mid - 1;
      }
    }

    // Append the player's rank (index + 1) to the result array
    result.push(left + 1);
  });

  return result; // Return the array with ranks for each player's score
}


const ranked = [100, 90, 90, 80];
const player = [70, 80, 105];

console.log(climbingLeaderboard(ranked, player));
