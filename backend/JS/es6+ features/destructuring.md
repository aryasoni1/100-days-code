Here's a concise, well-structured `.md` file of **JavaScript Destructuring** notes, summarizing all key points:

---

```markdown
# JavaScript Destructuring - Quick Notes

## 1. What is Destructuring?
Destructuring is a JavaScript expression that allows unpacking values from arrays, or properties from objects, into distinct variables.

---

## 2. Object Destructuring

### Basic Syntax
```js
const person = { firstName: "John", lastName: "Doe", age: 50 };
let { firstName, lastName } = person;
```

### Order Doesn't Matter
```js
let { lastName, firstName } = person; // Works the same
```

### Default Values
```js
let { country = "US" } = person; // If 'country' is not in the object
```

### Property Aliases (Rename)
```js
let { lastName: name } = person; // `name` is now "Doe"
```

---

## 3. Array Destructuring

### Basic Syntax
```js
const fruits = ["Banana", "Orange", "Apple"];
let [fruit1, fruit2] = fruits;
```

### Skipping Items
```js
let [fruit1, , , fruit2] = ["Banana", "Orange", "Apple", "Mango"];
```

### Specific Index Extraction (Rarely Used)
```js
let { [0]: fruit1, [1]: fruit2 } = fruits;
```

---

## 4. Rest Operator in Destructuring

### Gather Remaining Values
```js
const numbers = [10, 20, 30, 40];
const [a, b, ...rest] = numbers;
// a = 10, b = 20, rest = [30, 40]
```

---

## 5. String Destructuring

### Split Characters
```js
let name = "W3Schools";
let [a1, a2, a3, a4] = name;
// a1 = 'W', a2 = '3', etc.
```

---

## 6. Destructuring with Maps

### Iterating with for...of
```js
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

for (const [key, value] of fruits) {
  console.log(`${key} is ${value}`);
}
```

---

## 7. Swapping Variables

### Swap Without Temp Variable
```js
let firstName = "John";
let lastName = "Doe";
[firstName, lastName] = [lastName, firstName];
// firstName = "Doe", lastName = "John"
```

---

## 8. Notes
- Destructuring **does not mutate** the original object/array.
- Destructuring works on any **iterables**, including arrays, strings, sets, maps.

---
```

Let me know if you'd like to save this as a file or combine it with other JavaScript notes!