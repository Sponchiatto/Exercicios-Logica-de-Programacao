// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume
// that the majority element always exists in the array.

const majorityElement = function (nums) {
  let count = 0;
  let major = null;
  for (let num of nums) {
    if (count === 0) {
      major = num;
    }
    count += num === major ? 1 : -1;
  }

  // Verifying if the major is the majority element
  count = 0;
  for (let num of nums) {
    if (num === major) {
      count++;
    }
  }
  console.log("Count of majors", count);
  return major;
};

// Example usage:
const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(majorityElement(nums));

// Second Solution
var majorityElement2 = function (nums) {
  let count = 0;
  let element = 0;

  for (let num of nums) {
    if (count === 0) {
      element = num;
      count = 1;
    } else if (element === num) {
      count++;
    } else {
      count--;
    }
  }

  return element;
};

// Example usage:
const nums2 = [3, 2, 4, 2, 2];
console.log("Solution 2", majorityElement2(nums2));
