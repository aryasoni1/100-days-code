Of course! Here’s your notes content properly formatted in **Markdown (.md)**:

---

# JavaScript Errors: Throw, Try...Catch...Finally

## Overview
- **try** defines a block of code to run (to try).
- **catch** defines a block of code to handle any error.
- **finally** defines a block of code to run regardless of the result.
- **throw** defines a custom error.

---

## Errors Will Happen
When executing JavaScript code, different types of errors can occur:
- Coding errors
- Wrong input
- Other unforeseen events

Example (deliberate error):

```html
<p id="demo"></p>

<script>
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
</script>
```

JavaScript catches the error (`adddlert` not defined) and executes the `catch` block.

---

## JavaScript try and catch Syntax

```javascript
try {
  // Block of code to try
}
catch(err) {
  // Block of code to handle errors
}
```

- **try** tests a block of code for errors.
- **catch** handles the error.

---

## JavaScript Throws Errors
- JavaScript stops and generates an error message when an error occurs (throws an exception).
- An **Error object** is created with:
  - `name`
  - `message`

---

## The throw Statement
Allows creating custom errors.

You can throw:
- A string
- A number
- A boolean
- An object

Example:

```javascript
throw "Too big";    // throw a text
throw 500;          // throw a number
```

---

## Input Validation Example

```html
<!DOCTYPE html>
<html>
<body>

<p>Please input a number between 5 and 10:</p>

<input id="demo" type="text">
<button type="button" onclick="myFunction()">Test Input</button>
<p id="p01"></p>

<script>
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>

</body>
</html>
```

---

## HTML Validation Alternative

```html
<input id="demo" type="number" min="5" max="10" step="1">
```

Modern browsers also use HTML validation based on attributes.

---

## The finally Statement
Ensures a block of code runs **after** try and catch, **regardless** of the result.

Syntax:

```javascript
try {
  // Block of code to try
}
catch(err) {
  // Block of code to handle errors
}
finally {
  // Block of code to execute regardless of try/catch result
}
```

Example:

```javascript
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if(x.trim() == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
  }
  catch(err) {
    message.innerHTML = "Error: " + err + ".";
  }
  finally {
    document.getElementById("demo").value = "";
  }
}
```

---

## The Error Object
Provides details about the error.

Properties:
| Property | Description |
|:---------|:------------|
| `name` | Sets or returns an error name |
| `message` | Sets or returns an error message (string) |

---

## Error Name Values

| Error Name | Description |
|:-----------|:------------|
| EvalError | Error in the `eval()` function |
| RangeError | Number "out of range" |
| ReferenceError | Illegal reference |
| SyntaxError | Syntax mistake |
| TypeError | Type mismatch |
| URIError | Error in `encodeURI()` or `decodeURI()` |

### Examples:

**EvalError**  
(Not usually thrown anymore)

**RangeError**

```javascript
let num = 1;
try {
  num.toPrecision(500);
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
```

**ReferenceError**

```javascript
let x = 5;
try {
  x = y + 1;
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
```

**SyntaxError**

```javascript
try {
  eval("alert('Hello)");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
```

**TypeError**

```javascript
let num = 1;
try {
  num.toUpperCase();
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
```

**URIError**

```javascript
try {
  decodeURI("%%%");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
```

---

## Non-Standard Error Object Properties
(Not recommended for public websites)

| Property | Browser |
|:---------|:--------|
| fileName | Mozilla |
| lineNumber | Mozilla |
| columnNumber | Mozilla |
| stack | Mozilla |
| description | Microsoft |
| number | Microsoft |

---

Would you also like me to organize it into a downloadable `.md` file if needed? 🚀