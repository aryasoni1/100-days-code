Here's a concise set of **JavaScript notes in `.md` format**, focusing on the key differences and features of `var`, `let`, and `const`:

---

```markdown
# JavaScript `var`, `let`, and `const` - Quick Notes

## 1. Introduction
- `let` and `const` were introduced in ES6 (2015).
- `var` existed before ES6.
- `let` and `const` provide **block scope**.
- `var` provides **function/global scope**.

---

## 2. Scope

| Keyword | Scope Type     |
|---------|----------------|
| var     | Function/Global |
| let     | Block           |
| const   | Block           |

- **Block scope** means variables declared inside `{}` are not accessible outside.
- Example:
  ```js
  {
    let x = 10;
  }
  // x is NOT accessible here
  ```

---

## 3. Redeclaration

| Keyword | Redeclaration Allowed? |
|---------|-------------------------|
| var     | ✅ Yes                  |
| let     | ❌ No                   |
| const   | ❌ No                   |

- `let` and `const` prevent accidental redeclaration in the same scope.
  ```js
  let x = 5;
  let x = 6; // ❌ Error
  ```

---

## 4. Reassignment

| Keyword | Reassignment Allowed? |
|---------|------------------------|
| var     | ✅ Yes                |
| let     | ✅ Yes                |
| const   | ❌ No                 |

- `const` variables **cannot** be reassigned:
  ```js
  const PI = 3.14;
  PI = 3.1415; // ❌ Error
  ```

---

## 5. Hoisting

| Keyword | Hoisted | Initialized |
|---------|---------|-------------|
| var     | ✅ Yes  | ✅ Yes      |
| let     | ✅ Yes  | ❌ No       |
| const   | ✅ Yes  | ❌ No       |

- `let` and `const` are hoisted but not initialized (TDZ - Temporal Dead Zone).
  ```js
  console.log(a); // ❌ ReferenceError
  let a = 5;
  ```

---

## 6. Objects and Arrays with `const`

- `const` means the **reference cannot change**, but **contents can**.
  ```js
  const arr = [1, 2];
  arr.push(3); // ✅ Allowed
  arr = [4, 5]; // ❌ Error
  ```

  ```js
  const obj = { name: "John" };
  obj.name = "Doe"; // ✅ Allowed
  obj = { name: "Smith" }; // ❌ Error
  ```

---

## 7. Summary Table

| Feature        | var   | let   | const |
|----------------|-------|-------|--------|
| Scope          | Function | Block | Block  |
| Redeclaration  | ✅ Yes | ❌ No | ❌ No  |
| Reassignment   | ✅ Yes | ✅ Yes | ❌ No  |
| Hoisted        | ✅ Yes | ✅ Yes | ✅ Yes |
| Initialized    | ✅ Yes | ❌ No | ❌ No  |
| Binds `this`   | ✅ Yes | ❌ No | ❌ No  |

---

## 8. Best Practices
- ✅ Use `let` for variables that will change.
- ✅ Use `const` for variables that won’t change (constants, objects, arrays).
- ❌ Avoid `var` unless needed for legacy code.

---

## 9. Browser Support

| Browser     | Version with Support |
|-------------|-----------------------|
| Chrome      | 49                    |
| Edge        | 12                    |
| Firefox     | 36                    |
| Safari      | 11                    |
| Opera       | 36                    |

Note: `let` and `const` are **not supported in IE 11 and below**.

---
```

Let me know if you want this saved as an actual `.md` file or customized for a specific platform like GitHub, Obsidian, or Notion!