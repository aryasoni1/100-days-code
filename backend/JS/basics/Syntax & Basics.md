Here are your **Markdown (.md)** formatted notes on **Syntax & Basics** in JavaScript:

---

# 📝 JavaScript Syntax & Basics

These are the fundamental elements that make up JavaScript programming, including variable declaration, data types, and operators.

---

## 🔹 **Variables**

JavaScript uses three ways to declare variables:

### 1. **`let`**

* Allows variable re-assignment.
* **Block-scoped**, meaning it is only accessible within the block it is defined.

```javascript
let age = 25;
age = 26; // Re-assignable
```

### 2. **`const`**

* Declares a constant, **cannot be re-assigned**.
* **Block-scoped**.

```javascript
const birthYear = 1996;
birthYear = 1997; // Error: Assignment to constant variable.
```

### 3. **`var`**

* Older way to declare variables.
* **Function-scoped**, meaning it is accessible throughout the entire function in which it's defined.
* **Not recommended** in modern JavaScript due to scoping issues.

```javascript
var name = "Alice";
name = "Bob"; // Re-assignable
```

---

## 🔹 **Data Types**

JavaScript has **seven primitive data types** and **objects**.

### 1. **String**

Represents a sequence of characters.

```javascript
let name = "John Doe";
```

### 2. **Number**

Represents both integer and floating-point numbers.

```javascript
let age = 25;
let temperature = 98.6;
```

### 3. **Boolean**

Represents `true` or `false`.

```javascript
let isActive = true;
let isCompleted = false;
```

### 4. **Null**

Represents the intentional absence of any value.

```javascript
let emptyValue = null;
```

### 5. **Undefined**

Represents an uninitialized variable.

```javascript
let uninitialized;
console.log(uninitialized); // undefined
```

### 6. **Symbol** (ES6)

Represents a unique identifier.

```javascript
let symbol1 = Symbol("description");
```

### 7. **BigInt** (ES11)

Represents large integers beyond the range of `Number`.

```javascript
let bigIntNum = 1234567890123456789012345678901234567890n;
```

---

## 🔹 **Operators**

JavaScript includes various types of operators used for performing operations on variables and values.

### 1. **Arithmetic Operators**

Used for performing basic arithmetic operations.

| Operator | Description         | Example         |
| -------- | ------------------- | --------------- |
| `+`      | Addition            | `5 + 2` → `7`   |
| `-`      | Subtraction         | `5 - 2` → `3`   |
| `*`      | Multiplication      | `5 * 2` → `10`  |
| `/`      | Division            | `5 / 2` → `2.5` |
| `%`      | Modulus (remainder) | `5 % 2` → `1`   |
| `**`     | Exponentiation      | `5 ** 2` → `25` |

### 2. **Logical Operators**

Used to combine or invert boolean values.

| Operator | Description | Example                   |            |        |   |                |
| -------- | ----------- | ------------------------- | ---------- | ------ | - | -------------- |
| `&&`     | Logical AND | `true && false` → `false` |            |        |   |                |
| \`       |             | \`                        | Logical OR | \`true |   | false`→`true\` |
| `!`      | Logical NOT | `!true` → `false`         |            |        |   |                |

### 3. **Comparison Operators**

Used to compare two values.

| Operator | Description              | Example               |
| -------- | ------------------------ | --------------------- |
| `==`     | Equal to (loose)         | `5 == "5"` → `true`   |
| `===`    | Equal to (strict)        | `5 === "5"` → `false` |
| `!=`     | Not equal to (loose)     | `5 != "5"` → `false`  |
| `!==`    | Not equal to (strict)    | `5 !== "5"` → `true`  |
| `>`      | Greater than             | `5 > 3` → `true`      |
| `<`      | Less than                | `5 < 3` → `false`     |
| `>=`     | Greater than or equal to | `5 >= 5` → `true`     |
| `<=`     | Less than or equal to    | `5 <= 3` → `false`    |

---

## 📚 **Summary**

* Use `let` for re-assignable variables, `const` for constants, and `var` for function-scoped variables (avoid if possible).
* JavaScript's primitive data types include **String**, **Number**, **Boolean**, **Null**, **Undefined**, **Symbol**, and **BigInt**.
* Operators in JavaScript include **Arithmetic**, **Logical**, and **Comparison** operators for performing a variety of operations on values.

---

These basics provide a strong foundation for working with JavaScript. Let me know if you need further details!
