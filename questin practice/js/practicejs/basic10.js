//Declare a variable and assign your name to it
let name = "arya";
const name2 = "amit";
//Write a function to check if a number is even or odd.

function isEven(num) {
  return num % 2 == 0;
}
console.log(isEven(4)); // Output: Even
console.log(isEven(7)); // Output: Odd

//Create a function that returns the factorial of a number.
// factorial, denoted by n!, is the product of all positive integers from 1 to n.
function factorial(n) {
  if (n < 0) return undefined; // Factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120
//Write a program to reverse a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"
//Use switch to display a day name based on number input (1 = Monday).
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number";
  }
}

// Example usage:
console.log(getDayName(1)); // Monday
console.log(getDayName(5)); // Friday
console.log(getDayName(9)); // Invalid day number

//Write a function that returns the largest number from an array.
function findLargestNumber(arr) {
  return Math.max(...arr);
}
// Example usage:
console.log(findLargestNumber([3, 7, 2, 9, 4])); // 9
console.log(findLargestNumber([-5, -2, -10])); // -2
console.log(findLargestNumber([])); // null

//Create a function that adds all numbers in a list using reduce().
//reduce() takes a callback function that receives an accumulator and the current item.
//It sums them up starting with an initial value of 0.
//Finally, it returns the total sum of all elements.
function sumNumbers(arr) {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
}

// Example usage:
console.log(sumNumbers([1, 2, 3, 4])); // Output: 10
console.log(sumNumbers([10, -5, 7])); // Output: 12
console.log(sumNumbers([])); // Output: 0
//Use for...of to iterate over an array and log each item.
const fruits = ["apple", "bana", "cud"];
for (const fruit of fruits) {
  console.log(fruit);
}
//Demonstrate hoisting with var, let, and const.
console.log(a); // Output: undefined (var is hoisted but not initialized yet)
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// console.log(c); // ReferenceError: Cannot access 'c' before initialization

var a = 10;
let b = 20;
const c = 30;

console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); // Output: 30

//Use a try...catch block to catch division-by-zero errors.

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    return a / b;
  } catch (error) {
    return error.message; // Or handle error however you want
  }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Division by zero is not allowed!
