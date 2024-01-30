// Write a function expect that helps developers test their code. It should take in any value val and return an object
// with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other.
// If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other.
// If they are equal, it should throw an error "Equal".

// Objects
// Objects are defined  by curly braces {} in JavaScript.  They can contain properties which hold key-value pairs.
// These properties are called as name/value pairs.

// What is methods?
// In programming, a method is a function associated with an object or a class. It is a set of instructions that are
// associated with an object and perform a specific action

// When to use methods
// You use methods in programming when you want to encapsulate a set of instructions that are related to a specific
// object or class. Methods provide a way to organize code, promote reusability, and define the behavior of objects.

// Function named 'expect' that takes a value 'val' as an argument
function expect(val) {
  // Returns an object with two methods: 'toBe' and 'notToBe'
  return {
    // Method 'toBe' compares 'val' with an 'expected' value
    toBe: function (expected) {
      // If 'val' is not strictly equal to 'expected', throw an error
      if (val !== expected) {
        throw new Error("Not Equal");
      }
      // If equal, return true
      return true;
    },
    // Method 'notToBe' compares 'val' with an 'expected' value for inequality
    notToBe: function (expected) {
      // If 'val' is strictly equal to 'expected', throw an error
      if (val === expected) {
        throw new Error("Equal");
      }
      // If not equal, return true
      return true;
    },
  };
}

// Example usage:

// Testing equality

// What is try and catch?
// In JavaScript, the try and catch statements are used to handle exceptions.
// The try block contains a set of statements that might potentially throw an exception.
// The catch block is used to catch the exception and execute an alternative set of statements.

try {
  expect(5).toBe(5); // This will not throw an error
  console.log("Test Passed: Numbers are equal");
} catch (error) {
  console.error("Test Failed:", error.message);
}

// Testing non-equality
try {
  expect("Hello").notToBe("World"); // This will not throw an error
  console.log("Test Passed: Strings are not equal");
} catch (error) {
  console.error("Test Failed:", error.message);
}

// Testing equality (expecting an error)
try {
  expect(10).toBe(20); // This will throw an error
  console.log("Test Passed: Numbers are not equal");
} catch (error) {
  console.error("Test Failed:", error.message);
}

// Testing non-equality (expecting an error)
try {
  expect("OpenAI").notToBe("OpenAI"); // This will throw an error
  console.log("Test Passed: Strings are equal");
} catch (error) {
  console.error("Test Failed:", error.message);
}
