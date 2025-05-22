Here are your **Markdown (.md)** formatted notes on **Scope & Hoisting** in JavaScript:

---

# 📝 JavaScript Scope & Hoisting

Understanding scope and hoisting is crucial for managing variable accessibility and preventing unexpected behavior in JavaScript.

---

## 🔹 **Global vs Local Scope**

* **Global Scope**: Variables declared outside of any function or block are in the global scope. They can be accessed from anywhere in the code.

### Example:

```javascript
let globalVar = "I'm global";

function printGlobal() {
  console.log(globalVar);  // Can access globalVar
}

printGlobal(); // Output: I'm global
```

* **Local Scope**: Variables declared inside a function or block are in the local scope. They are only accessible within that function or block.

### Example:

```javascript
function printLocal() {
  let localVar = "I'm local";
  console.log(localVar);  // Can access localVar within the function
}

printLocal(); // Output: I'm local
// console.log(localVar); // Error: localVar is not defined
```

---

## 🔹 **Lexical Scope**

Lexical scope refers to how variable scope is determined by where the variables and blocks of code are written. In JavaScript, functions are lexically scoped, meaning they can access variables from their outer (enclosing) functions.

### Example:

```javascript
function outer() {
  let outerVar = "I am from outer scope";

  function inner() {
    console.log(outerVar);  // Accesses outerVar due to lexical scoping
  }

  inner(); // Output: I am from outer scope
}

outer();
```

---

## 🔹 **Function vs Block Scope**

* **Function Scope**: Variables declared with `var` are function-scoped, meaning they are accessible within the entire function (including inner blocks), but not outside the function.

### Example:

```javascript
function exampleFunction() {
  var functionScopedVar = "I'm function scoped";
  if (true) {
    var insideIf = "I'm also function scoped";
  }
  console.log(functionScopedVar);  // Accessible
  console.log(insideIf);  // Accessible (due to function scope of var)
}

exampleFunction();
// console.log(functionScopedVar);  // Error: functionScopedVar is not defined outside the function
```

* **Block Scope**: Variables declared with `let` or `const` are block-scoped, meaning they are only accessible within the block in which they are declared (e.g., inside an `if` statement, `for` loop, etc.).

### Example:

```javascript
function exampleBlockScope() {
  if (true) {
    let blockScopedVar = "I'm block scoped";
    const blockScopedConst = "I'm also block scoped";
    console.log(blockScopedVar);  // Accessible within the block
  }

  // console.log(blockScopedVar);  // Error: blockScopedVar is not defined outside the block
  // console.log(blockScopedConst);  // Error: blockScopedConst is not defined outside the block
}

exampleBlockScope();
```

---

## 🔹 **Variable Hoisting**

Hoisting refers to the behavior where variable and function declarations are moved to the top of their respective scopes during the compile phase, before code execution.

### 1. **`var` Hoisting**

* Variables declared with `var` are hoisted to the top of their scope, but only the declaration, not the initialization.

### Example:

```javascript
console.log(a);  // Output: undefined (due to hoisting)
var a = 5;
console.log(a);  // Output: 5
```

* The declaration `var a;` is hoisted to the top, but the assignment `a = 5;` is executed as it appears in the code.

### 2. **`let` and `const` Hoisting**

* Variables declared with `let` and `const` are also hoisted but are placed in a "temporal dead zone" (TDZ) from the start of the block until they are initialized. Accessing them before initialization will throw a `ReferenceError`.

### Example:

```javascript
console.log(b);  // Error: Cannot access 'b' before initialization
let b = 10;
```

```javascript
console.log(c);  // Error: Cannot access 'c' before initialization
const c = 15;
```

---

## 📚 **Summary**

* **Global Scope**: Variables declared outside any function/block, accessible everywhere.
* **Local Scope**: Variables declared inside functions/blocks, accessible only within that function/block.
* **Lexical Scope**: Functions can access variables from their enclosing (outer) scope.
* **Function Scope**: Variables declared with `var` are function-scoped.
* **Block Scope**: Variables declared with `let` or `const` are block-scoped.
* **Hoisting**: Variables and functions are moved to the top of their scope during compilation. `var` declarations are hoisted with undefined values, while `let` and `const` are hoisted but remain in the TDZ until initialization.

---

Let me know if you need more examples or further explanation!
