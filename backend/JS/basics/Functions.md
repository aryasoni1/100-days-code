Here are your **Markdown (.md)** formatted notes on **Functions** in JavaScript:

---

# 📝 JavaScript Functions

Functions are essential in JavaScript for code reusability and structuring. Functions can be declared in several ways and can accept parameters, return values, and be used in various contexts.

---

## 🔹 **Function Declaration**

A function declaration defines a function with a specified name and block of code. It can be called before it’s declared (hoisting).

### Syntax:

```javascript
function functionName(parameters) {
  // code to be executed
}
```

### Example:

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice"); // Output: Hello, Alice
```

---

## 🔹 **Function Expression**

A function expression creates a function as part of an expression, often assigned to a variable. It cannot be called before it is defined (no hoisting).

### Syntax:

```javascript
const functionName = function(parameters) {
  // code to be executed
};
```

### Example:

```javascript
const greet = function(name) {
  console.log("Hello, " + name);
};

greet("Bob"); // Output: Hello, Bob
```

---

## 🔹 **Arrow Functions**

Arrow functions are a shorter syntax for writing functions and do not have their own `this` context, inheriting it from the surrounding context.

### Syntax:

```javascript
const functionName = (parameters) => {
  // code to be executed
};
```

### Example:

```javascript
const greet = (name) => {
  console.log("Hello, " + name);
};

greet("Charlie"); // Output: Hello, Charlie
```

* For single parameters, you can omit the parentheses.
* If the function body has a single return statement, you can omit the curly braces and `return` keyword.

### Shortened Syntax:

```javascript
const greet = name => console.log("Hello, " + name);

greet("Diana"); // Output: Hello, Diana
```

---

## 🔹 **Default Parameters**

Default parameters allow you to set default values for function parameters if no value or `undefined` is passed.

### Syntax:

```javascript
function functionName(parameter = defaultValue) {
  // code
}
```

### Example:

```javascript
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet(); // Output: Hello, Guest
greet("Eve"); // Output: Hello, Eve
```

---

## 🔹 **Rest Parameters**

Rest parameters allow you to represent an indefinite number of arguments as an array. It must be the last parameter.

### Syntax:

```javascript
function functionName(...args) {
  // args is an array containing all arguments passed
}
```

### Example:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50
```

---

## 🔹 **Spread Syntax**

Spread syntax allows you to expand an array or object into individual elements or properties. It is used when calling functions or spreading elements in arrays/objects.

### Syntax:

```javascript
functionName(...array);
```

### Example:

```javascript
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // Spread arr into new array
console.log(newArr); // Output: [1, 2, 3, 4, 5]
```

It can also be used to merge arrays or clone them.

```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4]
```

---

## 📚 **Summary**

* **Function Declarations**: Define a named function that can be called before or after it’s declared (due to hoisting).
* **Function Expressions**: Define a function assigned to a variable, which cannot be called before it's declared.
* **Arrow Functions**: Shorter syntax with lexical `this`, perfect for concise functions.
* **Default Parameters**: Provide default values for function parameters if no argument is passed.
* **Rest Parameters**: Capture multiple arguments as an array, useful when you don't know how many arguments will be passed.
* **Spread Syntax**: Expand arrays or objects into individual elements or properties.

---

Let me know if you need further clarification on any topic!
