Here are your **Markdown (.md)** formatted notes on **NPM & Modules** in Node.js:

---

# 📦 NPM & Modules

## 🔧 What is NPM?

* **NPM (Node Package Manager)** is the default package manager for Node.js.
* Allows you to install, manage, and share reusable code packages.

---

## 🚀 Initializing a Project

### `npm init` (Manual)

```bash
npm init
```

* Prompts you to enter package details (name, version, description, etc.)

### `npm init -y` (Auto)

```bash
npm init -y
```

* Skips prompts and creates a `package.json` with default values.

---

## 📥 Installing Packages

### 🔹 Local Installation (recommended)

```bash
npm install lodash
```

* Installs to `node_modules/`
* Updates `package.json` and `package-lock.json`

### 🔹 Global Installation

```bash
npm install -g nodemon
```

* Installs system-wide, often used for CLI tools

### 🔹 Dev Dependencies

```bash
npm install jest --save-dev
```

* Installs only for development (not in production builds)

---

## 📚 Module Systems

### 🟩 CommonJS (CJS)

* Used by default in Node.js
* Uses `require()` and `module.exports`

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = add;

// app.js
const add = require('./math');
console.log(add(2, 3));
```

---

### 🟦 ES Modules (ESM)

* Modern standard, uses `import/export`
* Requires `"type": "module"` in `package.json`

```js
// math.mjs or with "type": "module"
export function add(a, b) {
  return a + b;
}

// app.mjs
import { add } from './math.mjs';
console.log(add(2, 3));
```

---

## 🔁 CommonJS vs ES Modules

| Feature            | CommonJS             | ES Modules          |
| ------------------ | -------------------- | ------------------- |
| Syntax             | `require`, `exports` | `import`, `export`  |
| Default in Node.js | ✅ Yes                | ❌ No (must opt-in)  |
| Dynamic Imports    | ❌ Not supported      | ✅ Supported         |
| Interoperability   | ✅ Supported w/ care  | ✅ Supported w/ care |

---

## 🧪 Useful Commands

* List installed packages:

  ```bash
  npm list
  ```
* Remove a package:

  ```bash
  npm uninstall package-name
  ```
* Update packages:

  ```bash
  npm update
  ```

---

Let me know if you want notes on creating your own NPM package or handling versioning!
