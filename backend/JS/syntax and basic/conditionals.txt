Sure! Here's a concise and well-structured summary of the **JavaScript if-else and switch statements** in `.md` (Markdown) format:

---

```markdown
# JavaScript Conditional Statements

JavaScript provides several ways to perform different actions based on conditions:

## 🔸 Types of Conditional Statements

- `if` – Executes code block if the condition is true.
- `else` – Executes code block if the `if` condition is false.
- `else if` – Tests a new condition if the previous one is false.
- `switch` – Selects one of many blocks of code to execute based on a value.

---

## ✅ if Statement

**Syntax:**
```js
if (condition) {
  // code to run if condition is true
}
```

**Example:**
```js
if (hour < 18) {
  greeting = "Good day";
}
```

---

## ✅ else Statement

**Syntax:**
```js
if (condition) {
  // code if condition is true
} else {
  // code if condition is false
}
```

**Example:**
```js
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

---

## ✅ else if Statement

**Syntax:**
```js
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition1 is false and condition2 is true
} else {
  // code if both conditions are false
}
```

**Example:**
```js
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

---

## ✅ switch Statement

**Syntax:**
```js
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // default code block
}
```

### Example:
```js
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  // ...
  case 6:
    day = "Saturday";
}
```

---

## 🔹 Keywords

### 🔸 `break`
- Exits the switch block.
- Prevents fall-through to other cases.

### 🔸 `default`
- Runs if no cases match.
- Not required to be the last case but should include `break`.

---

## 📌 Special Notes

- Cases use **strict comparison (`===`)** — types must match.
- Multiple cases can share the same code block:
```js
switch (day) {
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
}
```

---

## 💡 Randomized Example:
```js
let text;
if (Math.random() < 0.5) {
  text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
} else {
  text = "<a href='https://wwf.org'>Visit WWF</a>";
}
document.getElementById("demo").innerHTML = text;
```

---
```

Let me know if you'd like a downloadable `.md` file or notes on any other topic!