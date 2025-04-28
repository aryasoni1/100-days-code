Sure! Here's a concise and structured version of the important JavaScript syntax points in `.md` (Markdown) format:

---

# JavaScript Syntax Notes

## 📦 Variables
```js
var x;
let y;
const z = 10;
```

- `var`, `let`, `const` are used to declare variables.
- `=` is the assignment operator.

## 🧮 Values

### Literals (Fixed Values)
```js
10.50       // Number
"John Doe"  // String (double quotes)
'John Doe'  // String (single quotes)
```

### Variables (Variable Values)
```js
let x = 5;
let y = 6;
let z = x + y;
```

## ➕ Operators

- **Arithmetic Operators:** `+`, `-`, `*`, `/`
  ```js
  (5 + 6) * 10
  ```

- **Assignment Operator:** `=`
  ```js
  let a = 5;
  ```

## 🧠 Expressions

- An expression is a combination of values, variables, and operators.
  ```js
  5 * 10        // 50
  x * 10        // depends on x
  "John" + " " + "Doe" // "John Doe"
  ```

## 🔑 Keywords

- Used to perform actions:
  ```js
  let x;
  var y;
  const z = 10;
  ```

## 💬 Comments

- **Single-line:** `//`
- **Multi-line:** `/* ... */`
  ```js
  let x = 5; // This is a comment
  /* This is
     a multi-line comment */
  ```

## 🆔 Identifiers / Names

- Can start with:
  - A-Z / a-z
  - `_` (underscore)
  - `$` (dollar sign)

- Cannot start with a number.
- Are **case sensitive**:
  ```js
  let lastName = "Doe";
  let lastname = "Peterson";
  ```

## 🐫 Camel Case

- ❌ Hyphens: `first-name` → invalid
- ✅ Underscore: `first_name`
- ✅ PascalCase: `FirstName`
- ✅ camelCase: `firstName` (common in JS)

## 🔡 Character Set

- JavaScript uses **Unicode**.

---

Let me know if you'd like this saved to a file or need a printable version!