// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the
// median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Function to find the median of two sorted arrays
const findMedianSortedArrays = function (nums1, nums2) {
  // Concatenate the two arrays
  const concatArray = nums1.concat(nums2);
  // Sort the concatenated array in ascending order
  concatArray.sort((a, b) => a - b);
  
  const length = concatArray.length;

  if (length % 2 === 0) {
    // If the length is even, the median is the average of the two middle elements
    const midIndex = length / 2;
    return (concatArray[midIndex - 1] + concatArray[midIndex]) / 2;
  } else {
    // If the length is odd, the median is the middle element
    // The Math.floor() static method always rounds down and returns the largest integer
    // less than or equal to a given number
    const midIndex = Math.floor(length / 2);
    
    return concatArray[midIndex];
  }
};

// Test arrays Even
// const nums1 = [1, 3, 5];
// const nums2 = [2, 7, 8];

// Test arrays Odd
const nums1 = [1, 3];
const nums2 = [2, 7, 8];

// Calculate and print the median of the two arrays
console.log(findMedianSortedArrays(nums1, nums2));
