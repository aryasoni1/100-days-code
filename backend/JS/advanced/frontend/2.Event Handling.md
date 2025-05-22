Here are your **Markdown (.md)** formatted notes on **Event Handling** in JavaScript:

---

# 📝 JavaScript Event Handling

Event handling in JavaScript allows you to respond to user interactions, such as clicks, keyboard inputs, and other actions on the page.

---

## 🔹 **`onclick`**

The `onclick` event handler is a property that allows you to assign a function to be executed when an element is clicked.

### Syntax:

```javascript
element.onclick = function() {
  // Code to execute when the element is clicked
};
```

* **Usage**: Directly assigns a function to be executed when the element is clicked.

### Example:

```javascript
let button = document.getElementById("myButton");
button.onclick = function() {
  alert("Button clicked!");
};
```

* **Note**: This method can only assign a single function at a time. If you assign another function, it will overwrite the previous one.

---

## 🔹 **`addEventListener`**

The `addEventListener()` method attaches an event handler to a specified element, allowing you to listen for specific events like `click`, `keydown`, etc. This method is more flexible than `onclick` because it allows multiple listeners on the same event.

### Syntax:

```javascript
element.addEventListener("event", function, useCapture);
```

* **`event`**: The type of event (e.g., `"click"`, `"keydown"`).
* **`function`**: The function to execute when the event is triggered.
* **`useCapture`** (optional): A boolean that indicates whether the event should be captured during the capturing phase or bubbling phase. The default is `false`, which means the event is handled during the bubbling phase.

### Example:

```javascript
let button = document.querySelector("#myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});
```

* You can also pass `false` or `true` as the third parameter (`useCapture`), but it's optional in most cases.

---

## 🔹 **Event Bubbling & Capturing**

Events in the DOM can propagate in two ways: **bubbling** and **capturing**. This refers to the order in which events are triggered on the target element and its ancestors.

### 1. **Event Bubbling** (default behavior)

* The event starts at the target element and bubbles up to the root of the DOM (from the innermost element to the outermost).
* Events on parent elements are triggered after events on child elements.

### 2. **Event Capturing** (less commonly used)

* The event starts at the root and propagates down to the target element (from outermost element to the innermost).
* To use capturing, set `useCapture` to `true` in `addEventListener`.

### Example of Bubbling (default):

```javascript
document.getElementById("parent").addEventListener("click", function() {
  alert("Parent clicked");
});

document.getElementById("child").addEventListener("click", function() {
  alert("Child clicked");
});
```

* If the child element is clicked, both `Child clicked` and `Parent clicked` will appear due to bubbling.

### Example of Capturing:

```javascript
document.getElementById("parent").addEventListener("click", function() {
  alert("Parent clicked");
}, true);  // Capturing phase

document.getElementById("child").addEventListener("click", function() {
  alert("Child clicked");
});
```

* With `useCapture` set to `true`, the event will be captured at the parent before reaching the child.

---

## 📚 **Summary**

* **`onclick`**: Directly assigns a function to an element for the click event.
* **`addEventListener`**: Allows multiple event handlers for an event on the same element, more flexible than `onclick`.
* **Event Bubbling**: The event triggers from the innermost element outward (default behavior).
* **Event Capturing**: The event triggers from the outermost element inward (requires `useCapture: true`).

---

Feel free to ask if you need additional details or examples!
