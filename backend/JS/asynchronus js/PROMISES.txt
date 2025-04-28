Here’s your **JavaScript Promises** notes in **Markdown (.md)** format:

---

# JavaScript Promises

## What is a Promise?
- **"Producing code"**: Code that can take some time.
- **"Consuming code"**: Code that must wait for the result.
- A **Promise** is an **Object** that links producing code and consuming code.

---

## JavaScript Promise Object

A **Promise** contains both:
- Producing code
- Calls to consuming code

### Syntax:
```javascript
let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (may take time)

  myResolve(); // When successful
  myReject();  // When error
});

// "Consuming Code" (must wait for the Promise)
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

---

## How Promises Work

| Event    | Call           |
| -------- | -------------- |
| Success  | `myResolve(result value)` |
| Error    | `myReject(error object)` |

---

## Promise Object Properties

A JavaScript Promise object can be:
- **Pending**
- **Fulfilled**
- **Rejected**

The Promise object supports two properties:
- **state** and
- **result**

| State      | Result           |
|------------|------------------|
| "pending"  | undefined         |
| "fulfilled"| a result value    |
| "rejected" | an error object   |

> **Note**:  
> You cannot access `state` and `result` properties directly.  
> Use Promise methods to handle promises.

---

## How to Use a Promise

```javascript
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```

- **Promise.then()** takes two arguments:
  - A callback for **success**.
  - A callback for **failure**.
- Both arguments are optional.

---

## Example: Basic Promise

```javascript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

  // The producing code

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) { myDisplayer(value); },
  function(error) { myDisplayer(error); }
);
```

---

## JavaScript Promise Examples

### Waiting for a Timeout

#### Using Callback:
```javascript
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}
```

#### Using Promise:
```javascript
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});
```

---

### Waiting for a File

#### Using Callback:
```javascript
function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myCallback(req.responseText);
    } else {
      myCallback("Error: " + req.status);
    }
  }
  req.send();
}

getFile(myDisplayer);
```

#### Using Promise:
```javascript
let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "mycar.html");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) { myDisplayer(value); },
  function(error) { myDisplayer(error); }
);
```

---

Would you also like me to create a **quick summary table** of Promises at the end to make your notes even cleaner? 🚀