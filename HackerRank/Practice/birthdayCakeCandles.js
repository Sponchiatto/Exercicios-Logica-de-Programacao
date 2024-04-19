// You are in charge of the cake for a child's birthday. You have decided the cake will have one 
// candle for each year of their total age. They will only be able to blow out the tallest of the candles. 
// Count how many candles are tallest.

// Example
// candles = [4,4,1,3]

// The maximum height candles are  units 4 high. There are 2 of them, so return 2.

// This function takes an array of candle heights and returns the count of candles with the maximum height.
function birthdayCakeCandles(candles) {
    // Find the maximum height of candles using the spread operator and Math.max function.
    let maxHeight = Math.max(...candles);
    // Initialize a variable to count candles with maximum height.
    let count = 0;
    // Iterate through the array of candles.
    for (let i=0; i<candles.length; i++) {
        // If the current candle height equals the maximum height, increment the count.
        if (candles[i] === maxHeight) {
            count++;
        }
    }
    // Return the count of candles with maximum height.
    return count;
}

// Example usage of the function with an array of candle heights.
console.log(birthdayCakeCandles([4,4,1,3])); // Output: 2

