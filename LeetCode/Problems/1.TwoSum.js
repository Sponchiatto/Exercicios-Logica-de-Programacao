// Given an array of integers nums and an integer target, return indices of the two numbers such
// that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Main concepts:
// 1. Two Sum algorithm: Finds two numbers in an array that sum up to a target value.
// 2. Hash Table (Object): Used to store numbers and their indices for efficient lookups.
// 3. Array iteration: Looping through each element in the array.
// 4. Complement: Calculating the complement (target - current number) to find the second number.
// 5. Conditional statement: Checking if a complement exists in the hash table.
// 6. Index tracking: Storing the indices of numbers in the hash table.
// 7. Return statement: Returning the indices of the two numbers that sum up to the target.

const twoSum = function (nums, target) {
  // Create an empty object to store the numbers and their indices
  const numIndexMap = {};

  // Iterate through the array of numbers
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement (target - current number)
    // See the complement as the missing number to give the result of the sum
    const complement = target - nums[i];
    
    // Check if the complement exists in the numIndexMap object
    if (numIndexMap.hasOwnProperty(complement)) {
      // If the complement exists, return the indices of the complement and the current number
      return [numIndexMap[complement], i];
    }

    // If the complement doesn't exist, add the current number and its index to the numIndexMap object
    numIndexMap[nums[i]] = i;
  }

  // If no pair of numbers was found, throw an error
  throw new Error("No two sum solution");
};
const nums = [3, 2, 4];
const target = 6;
console.log("Exemple 1", twoSum(nums, target)); // Output: [1,2]

const nums2 = [2, 7, 11, 15];
const target2 = 9;
console.log("Exemple 2", twoSum(nums2, target2)); // Output: [0, 1]

// hasOwnProperty usage
const numIndexMap = { 2: 0, 7: 1, 11: 2 }; // Exemplo de objeto numIndexMap
const complement = 9 - 7; // The complement to the target 9 is the number seven 7
console.log("hasOwnProperty usage", numIndexMap.hasOwnProperty(complement)); // Retorna true, pois o complemento 2 existe como uma chave em numIndexMap
