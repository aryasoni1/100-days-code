Here’s your **JavaScript Async and Await** notes in **Markdown (.md)** format:

---

# JavaScript Async and Await

> **"async and await make promises easier to write."**

---

## What is `async`?

- `async` makes a function return a **Promise** automatically.
- Syntax:
  ```javascript
  async function myFunction() {
    return "Hello";
  }
  ```
- Equivalent to:
  ```javascript
  function myFunction() {
    return Promise.resolve("Hello");
  }
  ```

---

## Using a Promise Returned by `async`

```javascript
myFunction().then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

Example:
```javascript
async function myFunction() {
  return "Hello";
}

myFunction().then(
  function(value) { myDisplayer(value); }
);
```

---

## What is `await`?

- The `await` keyword can only be used inside an **async** function.
- It makes JavaScript **wait** until the Promise is resolved.
- Syntax:
  ```javascript
  let value = await promise;
  ```

---

## Example: Basic Await Syntax

```javascript
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

- **Note**: The arguments `resolve` and `reject` are predefined by JavaScript.
- In many cases, we don't need to use `reject`.

---

## Example without `reject`

```javascript
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

---

## Waiting for a Timeout

```javascript
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() { resolve("I love You !!"); }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();
```

---

## Waiting for a File

```javascript
async function getFile() {
  let myPromise = new Promise(function(resolve) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });

  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();
```

---

# Summary

| Keyword | Purpose                                     |
|---------|---------------------------------------------|
| `async` | Makes a function return a Promise           |
| `await` | Pauses execution until a Promise resolves   |

---

Would you also like me to prepare a **full combined `.md` file** including **Asynchronous JavaScript + Promises + Async/Await** for your complete study notes? 🚀  
It'll be super clean and useful for revision!