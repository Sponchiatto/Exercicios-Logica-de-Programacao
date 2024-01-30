// 1 - Using Number()

const stringToNumber = (str) => Number(str);

// 2 - using parseInt() - Obs: parses a string and returns a whole number. 
// Spaces are allowed. Only the first number is returned. if you parse a decimal number, it will be rounded Off
// to the nearest integer value and that value is converted to string

const stringToNumber2 = (str) => parseInt(str);

// 3 - using unary operator (+)

const stringToNumber3 = (str) => +str;

// 4 - using parseFloat() - Obs: parses a string and returns a number. 
// Spaces are allowed. Only the first number is returned.

const stringToNumber4 = (str) => parseFloat(str); 

// 5 - Using Math.floor()
// The Math.floor() function returns the largest integer less than or equal to a given number. 
// This can be little tricky with decimal numbers since it will return the value of the nearest integer as Number.

const stringToNumber5 = (str) => Math.floor(str);

// 6 = Multiply with number

const stringToNumber6 = (str) => str*1;

// 7. Double tilde (~~) Operator

const stringToNumber7 = (str) => ~~str;