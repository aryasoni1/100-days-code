Here’s your **Asynchronous JavaScript** notes in **Markdown (.md)** format:

---

# Asynchronous JavaScript

## What is Asynchronous JavaScript?
- **Asynchronous functions** run in parallel with other functions.
- A typical example is **setTimeout()**, where a function is executed after a specified delay.

---

## Example of a Callback in Asynchronous Code

In the previous chapter, we simplified callback functions to demonstrate their syntax.

### Example of a Callback Function:
```javascript
function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```
- **myDisplayer** is a callback function passed as an argument to **myCalculator**.
- In real-world scenarios, **callbacks** are used with **asynchronous functions**.

---

## Using `setTimeout()`
- **setTimeout()** is an asynchronous function that executes a callback after a specified delay.
- It is often used to simulate waiting for a timeout in JavaScript.

### Example:
```javascript
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```
- **myFunction** is used as a callback and passed to **setTimeout()**.
- The function will execute after **3000 milliseconds (3 seconds)**.
  
### Important Note:
- When passing a function as an argument, **do not use parentheses**.
  - Correct: `setTimeout(myFunction, 3000);`
  - Wrong: `setTimeout(myFunction(), 3000);`

---

## Passing an Anonymous Function
- Instead of passing the function's name, you can pass an entire function.

### Example:
```javascript
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
```
- **function(){ myFunction("I love You !!!"); }** is an anonymous callback function.
- It is passed to **setTimeout()** and will execute after **3000 milliseconds**.

---

## Using `setInterval()` for Repeated Tasks
- **setInterval()** allows you to execute a callback function at specified intervals.

### Example:
```javascript
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
```
- **myFunction** is used as a callback passed to **setInterval()**.
- **1000 milliseconds** means the function will execute every second.

---

## Callback Alternatives: Promises
- Asynchronous programming can lead to complex code, especially when using callbacks.
- **Modern JavaScript** avoids deep nesting of callbacks and uses **Promises** instead for better readability and maintainability.

### Note:
- You will learn about **Promises** in the next chapter of this tutorial.

---

Would you like me to prepare the **Promised-based approach** notes or any further detail on the topic?