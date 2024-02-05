// Write code that enhances all arrays so that you can call the array.groupBy(fn) method on any array and it will
// return a grouped version of the array.

// A clustered array is an object where each key is the output of fn(arr[i]) and each value is an array containing
// all items in the original array with that key.

// The given callback fn will accept an item in the array and return a string key.

// The order of each list of values ​​must be the order in which the items appear in the array.
// Any order of keys is acceptable.

// Please solve without lodash's _.groupBy function.

// Enhance the Array prototype by adding a groupBy method
Array.prototype.groupByMethod = function (fn) {
  // Use the reduce method to accumulate values into an object
  return this.reduce((grouped, item) => {
    // Calculate the key using the provided callback function
    const key = fn(item);

    // If the key doesn't exist in the object, create an empty array for it
    if (!grouped[key]) {
      grouped[key] = [];
    }

    // Add the current item to the array associated with the key
    grouped[key].push(item);

    // Return the updated grouped object for the next iteration
    return grouped;
  }, {}); // {} is the initial value of the accumulator (grouped), an empty object
};

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = (num) => (num % 2 === 0 ? "even" : "odd");

const groupedNumbers = numbers.groupByMethod(isEven);

console.log(groupedNumbers);
