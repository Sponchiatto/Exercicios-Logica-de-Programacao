// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by 
// continuously following the next pointer. Internally, pos is used to denote the index of the node that 
// tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

//Main Concept
// The Floyd's Tortoise and Hare Algorithm, also known as the "two pointers" technique,
// is used to detect cycles in linked lists. It works by initializing two pointers,
// often called the "tortoise" and the "hare", and advancing them through the list
// at different speeds. If there is a cycle in the list, the hare will eventually
// catch up to the tortoise, indicating the presence of a cycle. This algorithm has
// a time complexity of O(n) and a space complexity of O(1), making it efficient
// for cycle detection.

// Function to detect a cycle in a linked list
const hasCycle = (head) => {
  // Initialize two pointers, fast and slow, both starting at the head of the linked list
  let fast = head; // Fast pointer moves two steps at a time
  while (fast && fast.next) {
    // Traverse the linked list until the fast pointer reaches the end or encounters a null node
    head = head.next; // Move the slow pointer one step forward
    fast = fast.next.next; // Move the fast pointer two steps forward
    // If the slow pointer equals the fast pointer at any point, it means there's a cycle in the linked list
    if (head === fast) return true; // Return true indicating the presence of a cycle
  }
  // If the loop completes without detecting a cycle, return false
  return false; // Indicates no cycle found in the linked list
};

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Creating a linked list with a cycle
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

// Building the linked list: 1 -> 2 -> 3 -> 4 -> 1 (cycle)
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1; // Creating a cycle

console.log("Linked list with cycle:");
console.log(hasCycle(node1)); // Should print true

// Creating a linked list without a cycle
const nodeA = new ListNode(1);
const nodeB = new ListNode(2);
const nodeC = new ListNode(3);
const nodeD = new ListNode(4);

// Building the linked list: 1 -> 2 -> 3 -> 4 (without cycle)
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;

console.log("Linked list without cycle:");
console.log(hasCycle(nodeA)); // Should print false
