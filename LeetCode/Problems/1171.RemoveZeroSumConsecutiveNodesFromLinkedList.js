// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes
// that sum to 0 until there are no such sequences.

// After doing so, return the head of the final linked list.  You may return any such answer.

// (Note that in the examples below, all sequences are serializations of ListNode objects.)

// Example 1:

// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.

const removeZeroSumSublists = function (head) {
  // Create a dummy node with value 0
  const dummy = new ListNode(0);
  // Point the dummy node to the head of the original list
  dummy.next = head;
  // Initialize the prefix sum to 0
  let prefix_sum = 0;
  // Create an object to store prefix sums and their corresponding nodes
  const prefix_sums = { 0: dummy };
  // Initialize a pointer to traverse the list
  let current = head;

  // Traverse the list
  while (current) {
    // Update the prefix sum
    prefix_sum += current.val;
    // Check if the current prefix sum already exists in the prefix_sums object
    if (prefix_sum in prefix_sums) {
      // If it exists, find the node where the sum equals the current prefix sum
      let to_delete = prefix_sums[prefix_sum].next;
      // Calculate the temporary sum for deletion
      let temp_sum = prefix_sum + to_delete.val;
      // Traverse from the node to delete until reaching the current node
      while (to_delete !== current) {
        // Delete each prefix sum encountered during traversal
        delete prefix_sums[temp_sum];
        // Move to the next node
        to_delete = to_delete.next;
        // Update the temporary sum
        temp_sum += to_delete.val;
      }
      // Remove the sublist with zero sum
      prefix_sums[prefix_sum].next = current.next;
    } else {
      // If the prefix sum doesn't exist, add it to the prefix_sums object
      prefix_sums[prefix_sum] = current;
    }
    // Move to the next node
    current = current.next;
  }

  // Return the modified list without zero-sum sublists
  return dummy.next;
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Função para criar uma lista encadeada a partir de um array
function createLinkedList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Função para imprimir uma lista encadeada
function printLinkedList(head) {
  let current = head;
  let result = "";
  while (current) {
    result += current.val + " -> ";
    current = current.next;
  }
  result += "null";
  console.log(result);
}

// Teste da função removeZeroSumSublists
let arr = [1, 2, -3, 3, 1];
let head = createLinkedList(arr);
console.log("Lista original:");
printLinkedList(head);
let result = removeZeroSumSublists(head);
console.log("Lista após remoção de sublistas com soma zero:");
printLinkedList(result);
