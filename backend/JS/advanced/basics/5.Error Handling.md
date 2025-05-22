Here are your **Markdown (.md)** formatted notes on **Error Handling** in JavaScript:

---

# 📝 JavaScript Error Handling

Error handling is essential in JavaScript to manage runtime errors, providing users with helpful messages and preventing the app from crashing unexpectedly.

---

## 🔹 **`try...catch` Block**

The `try...catch` statement allows you to test a block of code for errors, and catch any errors that occur during execution.

### Syntax:

```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Code to run if an error occurs
}
```

* **`try`**: Wraps code that may throw an error.
* **`catch`**: Catches any error thrown within the `try` block and executes the code in the `catch` block.

### Example:

```javascript
try {
  let result = 10 / 0;  // This won't throw an error, but gives Infinity
  console.log(result);
} catch (error) {
  console.log("An error occurred:", error);  // If error occurs, catch block will run
}
```

---

## 🔹 **`finally` Block**

The `finally` block is optional. It runs after the `try` block and `catch` block (if any), regardless of whether an error was thrown or not.

### Syntax:

```javascript
try {
  // Code that might throw an error
} catch (error) {
  // Code to run if an error occurs
} finally {
  // Code that always runs
}
```

* **`finally`**: Always runs after the `try` block finishes, no matter if the error is caught or not.

### Example:

```javascript
try {
  console.log("This is a try block");
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("This will always run, no matter what");
}
```

### Output:

```
This is a try block
Infinity
This will always run, no matter what
```

---

## 🔹 **`throw` Statement**

The `throw` statement allows you to create custom errors. You can throw an error manually when a certain condition is met.

### Syntax:

```javascript
throw new Error("Custom error message");
```

* **`throw`**: Creates and throws an error. This can be a string, number, or any object, but it's typically an `Error` object.

### Example:

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be 18 or older.");
  }
  console.log("You are eligible.");
}

try {
  checkAge(16);
} catch (error) {
  console.log(error.message);  // Output: You must be 18 or older.
}
```

---

## 📚 **Summary**

* **`try...catch`**: Used to handle errors by trying a block of code and catching errors if they occur.
* **`catch`**: Catches any errors that occur in the `try` block and allows you to handle them.
* **`finally`**: Executes after `try` and `catch`, regardless of whether an error occurred.
* **`throw`**: Allows you to throw custom errors with a specified message.

---

Feel free to ask if you need further clarification or more examples!
