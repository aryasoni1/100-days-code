Here are your notes in `.md` (Markdown) format summarizing **important points on JavaScript Function Definitions**:

---

```markdown
# 🚀 JavaScript Function Definitions

JavaScript functions are blocks of code designed to perform a specific task. They are executed when invoked.

---

## 🔹 Function Declaration

Syntax:
```js
function functionName(parameters) {
  // code to be executed
}
```

- Declared with the `function` keyword.
- Not executed immediately—executed when called.
- No semicolon needed after a function declaration.

Example:
```js
function myFunction(a, b) {
  return a * b;
}
```

---

## 🔹 Function Expression

Functions can be assigned to variables:
```js
const x = function(a, b) { return a * b; };
```

- Anonymous function (no name).
- Must end with a semicolon.
- Called using the variable: `x(4, 3);`

---

## 🔹 Function Constructor

You can create functions using the `Function()` constructor:
```js
const myFunction = new Function("a", "b", "return a * b");
```

- Rarely used. Avoid using `new` for functions.

---

## 🔹 Function Hoisting

- **Declarations are hoisted** — can be called before they appear.
- **Expressions are NOT hoisted**.

Example:
```js
myFunction(5);

function myFunction(y) {
  return y * y;
}
```

---

## 🔹 Self-Invoking Functions

- Functions that run automatically.
- Wrap in parentheses to treat as expression:
```js
(function () {
  let x = "Hello!!";
})();
```

---

## 🔹 Functions as Values

Functions can be:
- Used in expressions
- Assigned to variables

Example:
```js
let x = myFunction(4, 3) * 2;
```

---

## 🔹 Functions Are Objects

- `typeof` returns `"function"`, but functions are objects.
- Have properties and methods:
  - `arguments.length` → number of arguments
  - `toString()` → returns function as string

---

## 🔹 Arrow Functions (ES6+)

Short syntax for function expressions:
```js
const x = (x, y) => x * y;
```

- No `function`, `return`, or `{}` needed (for one-liners).
- Do **not** have their own `this`.
- Not hoisted.
- Use `const` for safety.

Full syntax:
```js
const x = (x, y) => { return x * y };
```

---

## 🔹 Function Syntax Overview

```js
function name(parameter1, parameter2) {
  // code to be executed
}
```

- Parameters are input values.
- Arguments are values passed when calling the function.

---

## 🔹 Invoking Functions

Functions are executed when:
- An event occurs
- Called from code
- Automatically (self-invoked)

---

## 🔹 Returning Values

`return` sends a result back to the caller:
```js
function myFunction(a, b) {
  return a * b;
}
```

---

## 🔹 Why Use Functions?

- **Reusability**: Write once, use many times.
- **Flexibility**: Use same function with different arguments.

---

## 🔹 The `()` Operator

- `myFunction` → refers to the function
- `myFunction()` → calls the function

Example:
```js
let value = toCelsius(77); // calls function
let ref = toCelsius;        // reference only
```

---

## 🔹 Functions as Variable Values

You can directly use a function inside expressions:
```js
let text = "The temperature is " + toCelsius(77) + " Celsius";
```

---

## 🔹 Local Variables

- Declared with `let`, `const`, or `var` inside a function.
- Accessible **only** within that function.

Example:
```js
function myFunction() {
  let carName = "Volvo";
}
```

- Each function has its own local scope.

---

```

Let me know if you'd like this in a downloadable `.md` file or want notes for other topics too!