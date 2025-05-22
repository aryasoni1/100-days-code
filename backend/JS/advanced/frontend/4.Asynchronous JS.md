Here are your **Markdown (.md)** formatted notes on **Asynchronous JavaScript**:

---

# 📝 Asynchronous JavaScript

Asynchronous JavaScript allows you to perform long-running operations, such as network requests or timers, without blocking the execution of the rest of the code. This is essential for creating interactive and responsive applications.

---

## 🔹 **Callbacks**

A **callback** is a function that is passed into another function as an argument and is executed after the completion of an operation.

### Example:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 2000); // Simulate async operation
}

fetchData((message) => {
  console.log(message);  // Output after 2 seconds: "Data fetched!"
});
```

* **Drawback of Callbacks**: Callbacks can lead to "callback hell" when multiple asynchronous operations are nested, making the code harder to read and maintain.

---

## 🔹 **Promises**

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are an improvement over callbacks, enabling better error handling and chaining.

### States of a Promise:

* **Pending**: Initial state, neither fulfilled nor rejected.
* **Fulfilled**: The operation completed successfully.
* **Rejected**: The operation failed.

### Example:

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((result) => console.log(result))  // Output: "Operation successful"
  .catch((error) => console.error(error));  // If rejected: "Operation failed"
```

* **`then()`**: Executes when the promise is fulfilled.
* **`catch()`**: Executes if the promise is rejected.

---

## 🔹 **`async/await`**

`async/await` is a modern syntax for handling asynchronous operations. `async` is used to define a function that returns a promise, and `await` is used inside an `async` function to pause execution until the promise is resolved.

### Example:

```javascript
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  console.log(data);
}

fetchData();
```

* **`async`**: Makes a function return a promise.
* **`await`**: Pauses the execution of the function until the promise is resolved or rejected.

### Error Handling with `async/await`:

You can use `try...catch` blocks to handle errors when using `async/await`.

```javascript
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

---

## 🔹 **Fetch API**

The **Fetch API** is a modern browser API for making HTTP requests, replacing older methods like `XMLHttpRequest`.

### Example (GET Request):

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

* **`fetch()`** returns a **promise** that resolves with the `Response` object representing the response to the request.
* The `response.json()` method parses the JSON body of the response.

### Example (POST Request):

```javascript
const postData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title: "New Post", body: "Post content" }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};

postData();
```

---

## 📚 **Summary**

* **Callbacks**: Functions passed as arguments to handle asynchronous operations but can lead to callback hell.
* **Promises**: Handle asynchronous operations with better chaining and error handling using `.then()` and `.catch()`.
* **`async/await`**: Syntactic sugar for working with promises, making asynchronous code look synchronous and easier to handle with `try...catch`.
* **Fetch API**: A modern method for making HTTP requests, supporting both `GET` and `POST` requests, and returning promises.

---

Let me know if you need further clarification or additional examples!
