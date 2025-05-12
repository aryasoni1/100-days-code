Here are your **Markdown (.md)** formatted notes on **Control Structures** in JavaScript:

---

# 📝 JavaScript Control Structures

Control structures in JavaScript are used to control the flow of execution in a program based on certain conditions or loops. This includes conditional statements and loops.

---

## 🔹 **Conditional Statements**

Conditional statements allow us to execute different blocks of code based on certain conditions.

### 1. **`if` Statement**

* Executes a block of code if a specified condition is `true`.

```javascript
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
```

### 2. **`else` Statement**

* Executes a block of code if the condition in the `if` statement is `false`.

```javascript
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

### 3. **`else if` Statement**

* Used when there are multiple conditions to check.

```javascript
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
```

### 4. **`switch` Statement**

* Executes one of several blocks of code based on the value of an expression.

```javascript
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

---

## 🔹 **Loops**

Loops are used to repeatedly execute a block of code.

### 1. **`for` Loop**

* The most commonly used loop, executes a block of code a specified number of times.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i); // Prints numbers from 0 to 4
}
```

### 2. **`while` Loop**

* Repeats a block of code as long as a specified condition evaluates to `true`.

```javascript
let i = 0;
while (i < 5) {
  console.log(i); // Prints numbers from 0 to 4
  i++;
}
```

### 3. **`do...while` Loop**

* Similar to the `while` loop, but guarantees at least one iteration, as the condition is evaluated after the block of code executes.

```javascript
let i = 0;
do {
  console.log(i); // Prints numbers from 0 to 4
  i++;
} while (i < 5);
```

---

## 📚 **Summary**

* **Conditional Statements**:

  * Use `if` to check a condition.
  * Use `else` for an alternative condition when `if` is `false`.
  * Use `else if` to check multiple conditions.
  * Use `switch` for matching an expression with multiple potential values.

* **Loops**:

  * **`for` loop**: Iterate a specific number of times.
  * **`while` loop**: Continue iterating while a condition is true.
  * **`do...while` loop**: Similar to `while`, but guarantees at least one execution.

These control structures are key to making decisions and repeating actions in your code. Let me know if you need more details!

---

Feel free to let me know if you'd like to explore any topic further.
