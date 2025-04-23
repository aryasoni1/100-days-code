Here are your **important notes in Markdown (`.md`) format** for JavaScript concepts including `apply()`, `bind()`, `this`, scope, closures, etc.:

---

# JavaScript Advanced Functions & Closures

## 📌 `apply()` Method

### 🔁 Method Reuse with `apply()`
- Allows a method from one object to be used by another.
- Similar to `call()`.

```js
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
};

person.fullName.apply(person1); // "Mary Doe"
```

### 🔄 Difference Between `call()` and `apply()`
- `call()` takes arguments **separately**.
- `apply()` takes arguments **as an array**.

```js
person.fullName.call(person1, "Oslo", "Norway");
person.fullName.apply(person1, ["Oslo", "Norway"]);
```

### 🔍 Example: Max from Array
```js
Math.max(1, 2, 3); // 3
Math.max.apply(null, [1, 2, 3]); // 3
Math.max.apply(Math, [1, 2, 3]); // 3
```

> `null` or any other value can be used as the context when it's not needed.

---

## 📌 `bind()` Method

### 🔗 Method Borrowing
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName = person.fullName.bind(member); // borrow method
```

### 🧠 Preserving `this` in Callbacks
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
};

// Incorrect: 'this' is lost
setTimeout(person.display, 3000);

// Correct: 'this' is preserved
let display = person.display.bind(person);
setTimeout(display, 3000);
```

---

## 📌 `this` Keyword

- Refers to different objects depending on context:

| Context                         | `this` refers to           |
|-------------------------------|----------------------------|
| Object method                 | The object itself          |
| Alone                         | Global object (`window`)   |
| Function (non-strict mode)    | Global object              |
| Function (strict mode)        | `undefined`                |
| In event                      | HTML element               |
| With `call()`, `apply()`, `bind()` | Explicitly set object |

---

## 📌 JavaScript Scope

### 🌐 Global Variables
- Declared outside functions.
- Accessible everywhere.

```js
let a = 4;
function myFunction() {
  return a * a;
}
```

### 🔒 Local Variables
- Declared inside functions.
- Private to that function.

```js
function myFunction() {
  let a = 4;
  return a * a;
}
```

> Global and local variables with the same name are different.

---

## 📌 Closures in JavaScript

### 🔁 The Counter Problem
```js
let counter = 0;
function add() {
  counter += 1;
}
```

> Problem: Anyone can change the global `counter`.

### ❌ Local Counter Not Working
```js
function add() {
  let counter = 0;
  counter += 1;
  return counter;
}
```

> Resets every time the function is called.

### ✅ Closure Solution
```js
function myCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}

const add = myCounter();
add(); // 1
add(); // 2
add(); // 3
```

> `counter` is private, accessed only through the inner function.

---

## 📌 Why Use Closures?

- Create **private variables**.
- **Preserve state** between calls.
- Used in:
  - Currying
  - Memoization
  - Factory functions

> Modern JS uses `let`, `const`, classes, and modules which reduce the need for closures.

---

Let me know if you'd like this as a downloadable `.md` file too!