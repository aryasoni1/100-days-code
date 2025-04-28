Of course! Here’s your content carefully organized into **Markdown (.md)** format for clear notes:

---

# Closures and Lexical Scoping in JavaScript

## Closures

A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).  
In JavaScript, **closures** are created every time a function is created, at function creation time.

Closures give a function access to its outer scope, even after the outer function has finished executing.

---

## Lexical Scoping

Lexical scoping means that the accessibility of variables is determined by the position of the variables within the nested functions.

Example:

```javascript
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    console.log(name); // inner function accessing outer variable
  }
  displayName();
}
init();
```

- `displayName()` forms a closure by remembering the `name` variable from its parent `init()`.
- **Lexical** refers to the fact that scoping is based on the source code structure.

---

## Scoping with `let` and `const`

### Before ES6:
- `var` creates function-scoped or global-scoped variables.
- Blocks `{}` **did not** create a new scope.

Example:

```javascript
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x); // x is accessible here
```

### After ES6:
- `let` and `const` introduce **block-scoped** variables.

Example:

```javascript
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x); // ReferenceError: x is not defined
```

- `let` and `const` also introduce **Temporal Dead Zones** (TDZ).
- Modules introduce another new scope in ES6.

---

## Closure Example

```javascript
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc(); // Outputs: Mozilla
```

- `makeFunc()` creates and returns `displayName()`.
- Even after `makeFunc()` finishes execution, `displayName()` still has access to `name` due to the closure.

---

## More Complex Example: Function Factory

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

- `makeAdder(x)` returns a new function each time.
- Each returned function "remembers" the `x` it was created with.

---

## Practical Closures

Closures allow associating data with a function operating on that data.

This is similar to object-oriented programming where an object holds both data and methods.

Example use case: Adjusting text size on a webpage.

CSS:

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

JavaScript:

```javascript
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;
```

HTML:

```html
<button id="size-12">12</button>
<button id="size-14">14</button>
<button id="size-16">16</button>
```

- Each button uses a different closure to change the font size dynamically.

---

# Summary

| Concept        | Explanation                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| Closure        | Function + lexical environment (remember variables even after parent function ends) |
| Lexical Scoping| Variables accessible according to their position in the code                        |
| `var`          | Function or global scoped                                                           |
| `let`, `const` | Block scoped                                                                         |
| Practical Use  | Callback functions, UI event handlers, function factories                           |

---

Would you also like a more visual diagram showing how closures "capture" their variables? 🚀  
(If yes, I can quickly draw one!)


Of course! Here's your content **formatted neatly in Markdown (`.md`)** as you requested:

---

# Emulating Private Methods with Closures in JavaScript

Languages such as Java allow you to declare methods as private. JavaScript, before the introduction of classes, didn’t have a native way to create private methods, but it could **emulate** private methods using **closures**.

Private methods are useful for:
- Restricting access to code
- Managing the global namespace

This pattern is often seen in the **Module Design Pattern**.

## Example: Counter Using Closures

```javascript
const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0
counter.increment();
counter.increment();
console.log(counter.value()); // 2
counter.decrement();
console.log(counter.value()); // 1
```

- `privateCounter` and `changeBy` are **private**.
- `increment`, `decrement`, and `value` form **closures** over the same **lexical environment**.

---

## Creating Independent Counters

```javascript
const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0
counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2
counter1.decrement();
console.log(counter1.value()); // 1
console.log(counter2.value()); // 0
```

- Each counter instance has its own closure and its own private state.

---

## Closure Scope Chain Example

Closures can access variables up their scope chain.

```javascript
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
```

Or written with named functions:

```javascript
const e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      return function sum4(d) {
        return a + b + c + d + e;
      };
    };
  };
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result); // 20
```

---

## Closures Over Block Scope

```javascript
function outer() {
  let getY;
  {
    const y = 6;
    getY = () => y;
  }
  console.log(typeof y); // undefined
  console.log(getY()); // 6
}

outer();
```

---

## Closures Over Module Scope

**myModule.js:**

```javascript
let x = 5;
export const getX = () => x;
export const setX = (val) => {
  x = val;
};
```

**Usage:**

```javascript
import { getX, setX } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```

Closures can also capture **live bindings**:

**myModule.js:**

```javascript
export let x = 1;
export const setX = (val) => {
  x = val;
};
```

**closureCreator.js:**

```javascript
import { x } from "./myModule.js";

export const getX = () => x;
```

**Usage:**

```javascript
import { getX } from "./closureCreator.js";
import { setX } from "./myModule.js";

console.log(getX()); // 1
setX(2);
console.log(getX()); // 2
```

---

# Creating Closures in Loops: Common Mistake

HTML:

```html
<p id="help">Helpful notes will appear here</p>
<p>Email: <input type="text" id="email" name="email" /></p>
<p>Name: <input type="text" id="name" name="name" /></p>
<p>Age: <input type="text" id="age" name="age" /></p>
```

**Incorrect JavaScript:**

```javascript
function showHelp(help) {
  document.getElementById("help").textContent = help;
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function () {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

**Problem**: Due to `var`, all closures share the same `item` reference.

---

## Solutions

### 1. Function Factory

```javascript
function makeHelpCallback(help) {
  return function () {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

### 2. Anonymous Closure (IIFE)

```javascript
function setupHelp() {
  var helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (var i = 0; i < helpText.length; i++) {
    (function (item) {
      document.getElementById(item.id).onfocus = function () {
        showHelp(item.help);
      };
    })(helpText[i]);
  }
}

setupHelp();
```

### 3. Use `let` (Block Scope)

```javascript
function setupHelp() {
  const helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  for (let i = 0; i < helpText.length; i++) {
    const item = helpText[i];
    document.getElementById(item.id).onfocus = () => {
      showHelp(item.help);
    };
  }
}

setupHelp();
```

### 4. Use `forEach`

```javascript
function setupHelp() {
  const helpText = [
    { id: "email", help: "Your email address" },
    { id: "name", help: "Your full name" },
    { id: "age", help: "Your age (you must be over 16)" },
  ];

  helpText.forEach(function (text) {
    document.getElementById(text.id).onfocus = function () {
      showHelp(text.help);
    };
  });
}

setupHelp();
```

---

# Performance Considerations

Each closure stores its own lexical environment, so:

- Avoid unnecessary nested functions.
- Use prototypes for methods instead of defining them inside constructors.

**Bad Example**:

```javascript
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function () {
    return this.name;
  };
  this.getMessage = function () {
    return this.message;
  };
}
```

**Better Approach:**

```javascript
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};
```

- The **prototype** is shared, saving memory and improving performance.

---

Would you also like me to give you a nicely **formatted `.md` file** you can download directly? 📄✨