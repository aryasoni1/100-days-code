Here are your **Markdown (.md)** formatted notes on **Modules**:

---

# 📝 Modules in JavaScript

Modules allow you to split your code into separate files for better maintainability and organization. JavaScript supports two types of module systems: **CommonJS** and **ES Modules (ESM)**.

---

## 🔹 **CommonJS (CJS)**

CommonJS is the module system primarily used in **Node.js** for server-side JavaScript.

### Key Features:

* Uses `require()` to import modules.
* Uses `module.exports` to export modules.

### Example:

#### **Exporting a module (CommonJS)**:

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract,
};
```

#### **Importing a module (CommonJS)**:

```javascript
// app.js
const math = require('./math');

console.log(math.add(2, 3));  // Output: 5
console.log(math.subtract(5, 2));  // Output: 3
```

### Important Notes:

* **Synchronous loading**: `require()` is synchronous, meaning the code execution will pause until the module is loaded.
* **Exports**: You can export variables, functions, and objects with `module.exports`.

---

## 🔹 **ES Modules (ESM)**

ES Modules (ESM) are the official module system in JavaScript, which is supported in modern browsers and Node.js (with `.mjs` extension or `"type": "module"` in `package.json`).

### Key Features:

* Uses `import` to load modules.
* Uses `export` to share code between modules.

### Example:

#### **Exporting a module (ESM)**:

```javascript
// math.mjs
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

#### **Importing a module (ESM)**:

```javascript
// app.mjs
import { add, subtract } from './math.mjs';

console.log(add(2, 3));  // Output: 5
console.log(subtract(5, 2));  // Output: 3
```

### Important Notes:

* **Asynchronous loading**: ES modules are asynchronous, meaning the browser or Node.js handles them in the background, allowing better performance.
* **Static structure**: ES modules are statically analyzable (meaning the imports and exports can be determined at compile time).
* **Named exports**: You can export multiple items individually using `export` (e.g., `export const myFunction = () => {}`).
* **Default exports**: You can export a single item as the default export using `export default`.

---

## 🔹 **Comparison: CommonJS vs. ES Modules**

| Feature                      | CommonJS                           | ES Modules                                                |
| ---------------------------- | ---------------------------------- | --------------------------------------------------------- |
| **Import syntax**            | `const module = require('module')` | `import module from 'module'`                             |
| **Export syntax**            | `module.exports = ...`             | `export default ...` or `export { ... }`                  |
| **Usage**                    | Mainly in Node.js (server-side)    | Supported in modern browsers & Node.js                    |
| **Synchronous/Asynchronous** | Synchronous                        | Asynchronous                                              |
| **File extension**           | `.js`                              | `.mjs` or `.js` with `"type": "module"` in `package.json` |

---

## 🔹 **Mixing CommonJS and ES Modules** (Node.js)

You can use **CommonJS** and **ESM** together in Node.js (with some limitations):

* **Default export** in CommonJS can be used in ESM as the default import.
* **ESM** modules can't directly `require()` CommonJS modules, but they can be `imported`.

### Example:

#### **ESM importing a CommonJS module**:

```javascript
// math.js (CommonJS)
module.exports = { add: (a, b) => a + b };

// app.mjs (ESM)
import math from './math.js';
console.log(math.add(2, 3));  // Output: 5
```

#### **CommonJS importing an ESM module**:

You would need to use `import()` dynamically:

```javascript
// app.js (CommonJS)
(async () => {
  const math = await import('./math.mjs');
  console.log(math.add(2, 3));  // Output: 5
})();
```

---

## 📚 **Summary**

* **CommonJS**: Synchronous, used in Node.js for server-side modules with `require` and `module.exports`.
* **ES Modules (ESM)**: Asynchronous, modern module system with `import` and `export` supported in browsers and Node.js.

---

Let me know if you need any more details or clarifications!
