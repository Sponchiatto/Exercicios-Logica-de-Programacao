// You are given two non-empty linked lists representing two non-negative integers. The digits are stored
// in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum
// as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Main concepts:
// 1. Add Two Numbers algorithm: Adds two numbers represented as linked lists.
// 2. Linked List: Data structure used to represent numbers as lists of digits.
// 3. Initialization: Initializing variables like the result array and carry.
// 4. Looping: Using a loop to iterate through the linked lists and handle carries.
// 5. Conditional statement: Checking conditions like whether the linked lists have elements or there's a carry.
// 6. Pop(): Removing and returning the last element from a linked list.
// 7. Arithmetic operations: Performing addition and modulus operations to calculate sum and carry.
// 8. Unshift(): Adding elements to the beginning of the result array.
// 9. Return statement: Returning the resulting linked list representing the sum.

// Here is how the carry is used in this code:
// - Initially, the carry is set to 0, indicating there is no carry.
// - During the iteration over the digits of the linked lists, if the sum of the digits
//   plus the carry is greater than 9, the carry is set to 1.
// - The carry is then used in the next iteration to ensure that the next pair
//   of digits is added correctly, taking this carry into account.

const addTwoNumbers = function (l1, l2) {
  // Initialize an empty array to store the result
  let result = [];
  // Initialize the carry to 0
  // This is used to store the value that should be carried to the next position during addition
  let carry = 0;

  // Loop while there are elements in either of the lists or there is a carry
  while (l1.length || l2.length || carry) {
    // Sum the corresponding elements from both lists and the carry
    let sum = (l1.pop() || 0) + (l2.pop() || 0) + carry;
    // Calculate the carry value for the next sum
    carry = sum > 9 ? 1 : 0;
    // Add the least significant digit of the sum to the result list
    result.unshift(sum % 10);
  }

  // Return the resulting list
  return result;
};

const lista1 = [2, 4, 3];
const lista2 = [5, 6, 4];
console.log(addTwoNumbers(lista1, lista2));
