// You are given two non-empty linked lists representing two non-negative integers. The digits are stored
// in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum
// as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = function (l1, l2) {
  // Initialize an empty array to store the result
  let result = [];
  // Initialize the carry to 0
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
