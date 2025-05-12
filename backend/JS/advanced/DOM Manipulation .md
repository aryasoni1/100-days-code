Here are your **Markdown (.md)** formatted notes on **DOM Manipulation** in JavaScript:

---

# 📝 JavaScript DOM Manipulation

DOM (Document Object Model) manipulation is the process of modifying the structure, style, or content of a web page using JavaScript.

---

## 🔹 **`getElementById`**

The `getElementById()` method is used to select an HTML element by its `id` attribute. It returns the first element with the specified `id`.

### Syntax:

```javascript
let element = document.getElementById("id");
```

* **Returns**: The element with the given `id`, or `null` if no element is found.

### Example:

```javascript
let header = document.getElementById("main-header");
header.innerText = "New Header Text";  // Change the text content of the header
```

---

## 🔹 **`querySelector`**

The `querySelector()` method returns the first element that matches the specified CSS selector(s).

### Syntax:

```javascript
let element = document.querySelector("selector");
```

* **Returns**: The first element that matches the selector or `null` if no match is found.

### Example:

```javascript
let button = document.querySelector(".submit-btn");
button.style.backgroundColor = "blue";  // Change the button's background color
```

* You can use any valid CSS selector with `querySelector`, e.g., `#id`, `.class`, `div`, etc.

---

## 🔹 **`innerText`**

The `innerText` property represents the "rendered" text content of an element. It allows you to get or set the visible text of an element.

### Syntax:

```javascript
let text = element.innerText; // Get text content
element.innerText = "New Text"; // Set text content
```

* **Usage**: Ideal for working with visible text content inside an element (ignores HTML tags).

### Example:

```javascript
let paragraph = document.querySelector("p");
console.log(paragraph.innerText);  // Logs the text inside the <p> element
paragraph.innerText = "Updated Paragraph Text";  // Update the text inside <p>
```

---

## 🔹 **`innerHTML`**

The `innerHTML` property allows you to get or set the HTML content inside an element, including tags.

### Syntax:

```javascript
let htmlContent = element.innerHTML;  // Get HTML content
element.innerHTML = "<p>New content</p>";  // Set HTML content
```

* **Usage**: Ideal for getting or setting HTML content, including child elements and tags.

### Example:

```javascript
let div = document.querySelector(".content");
console.log(div.innerHTML);  // Logs the HTML inside the <div> element
div.innerHTML = "<h1>New HTML Content</h1>";  // Set new HTML content
```

---

## 🔹 **`classList`**

The `classList` property provides methods to manipulate the classes of an element. It is a read-only property that returns a live DOMTokenList collection of the class attributes.

### Syntax:

```javascript
element.classList.add("class-name");   // Add a class
element.classList.remove("class-name");  // Remove a class
element.classList.toggle("class-name");  // Toggle class (add if not present, remove if present)
element.classList.contains("class-name");  // Check if class exists
```

* **Usage**: Useful for adding/removing CSS classes dynamically.

### Example:

```javascript
let box = document.querySelector(".box");
box.classList.add("highlight");  // Add a class
box.classList.remove("hidden");  // Remove a class
if (box.classList.contains("highlight")) {
  console.log("The box is highlighted.");
}
box.classList.toggle("active");  // Toggle class
```

---

## 📚 **Summary**

* **`getElementById`**: Selects an element by its `id`.
* **`querySelector`**: Selects the first element that matches a CSS selector.
* **`innerText`**: Gets or sets the visible text content of an element.
* **`innerHTML`**: Gets or sets the HTML content inside an element, including tags.
* **`classList`**: Provides methods for adding, removing, or toggling classes on an element.

---

Feel free to ask if you need further examples or clarifications!
