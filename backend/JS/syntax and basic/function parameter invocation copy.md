Here are the **important points about JavaScript Function Parameters and Invocation** in `.md` (Markdown) format:

---

# JavaScript Function Parameters and Invocation

## 📌 Function Parameters vs Arguments
- **Parameters**: Named variables in function definitions.
- **Arguments**: Actual values passed to the function when invoked.
  
```js
function myFunction(parameter1, parameter2) {
  // parameters used here
}
myFunction("Hello", "World"); // arguments
```

## ⚠️ Parameter Rules
- No data type declarations for parameters.
- No type checking.
- No check on the number of arguments passed.

## 🧩 Default Parameters

### Pre-ES6 Style:
```js
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
}
```

### ES6 Default Parameter:
```js
function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5); // returns 15
```

## 🌌 Rest Parameters
- Use `...` to handle unlimited arguments as an array.

```js
function sum(...args) {
  let total = 0;
  for (let num of args) total += num;
  return total;
}
sum(1, 2, 3); // returns 6
```

## 📦 The `arguments` Object
- Array-like object holding all passed arguments.
- Not available in arrow functions.

```js
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) max = arguments[i];
  }
  return max;
}
```

## 🧪 Pass by Value
- Primitives are passed by value.
- Modifying them inside a function does not affect the original.

## 🔗 Objects are Passed by Reference
- Changes to object properties inside the function reflect outside the function.

```js
function modify(obj) {
  obj.name = "Updated";
}
```

---

# JavaScript Function Invocation

## 🧠 Function Execution
- Code runs when the function is invoked (not when defined).

## 🧬 Global Invocation
- `this` refers to the **global object** (e.g., `window` in browsers).
- `window.myFunction()` is same as `myFunction()`.

## 👤 Object Method Invocation
- Inside a method, `this` refers to the object that owns the method.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
```

## 🏗 Constructor Invocation
- Use `new` to create object instances from a constructor function.
- `this` refers to the newly created object.

```js
function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}
const p1 = new Person("John", "Doe");
```

---

# JavaScript `call()` Method

## 🔁 Method Reuse with `call()`
- Allows borrowing functions from other objects.

```js
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person1 = { firstName: "John", lastName: "Doe" };
const person2 = { firstName: "Mary", lastName: "Doe" };

person.fullName.call(person1); // "John Doe"
person.fullName.call(person2); // "Mary Doe"
```

### With Arguments
```js
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};

const person1 = { firstName: "John", lastName: "Doe" };

person.fullName.call(person1, "Oslo", "Norway"); // "John Doe, Oslo, Norway"
```

---

Let me know if you want a downloadable `.md` file too!