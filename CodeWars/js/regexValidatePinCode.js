// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Regular expressions are patterns used to match character combinations in strings. 
// In JavaScript, regular expressions are also objects.
function validatePIN(pin) {
  // Check if the pin contains only digits and has a length of 4 or 6
  if (/^\d{4}$|^\d{6}$/.test(pin)) {
    return true; // Return true if the pin is valid
  } else {
    return false; // Otherwise, return false
  }
}

console.log(validatePIN("1234")); //true
console.log(validatePIN("12345")); //false
console.log(validatePIN("a234")); //false
console.log(validatePIN("1.234")); //false
console.log(validatePIN("-1.234")); //false
console.log(validatePIN("00000000")); //false
