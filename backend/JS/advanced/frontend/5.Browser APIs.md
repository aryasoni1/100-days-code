Here are your **Markdown (.md)** formatted notes on **Browser APIs**:

---

# 📝 Browser APIs

Browser APIs are built-in JavaScript interfaces provided by web browsers, allowing you to interact with various browser features such as local storage, geolocation, and the clipboard.

---

## 🔹 **LocalStorage & SessionStorage**

Both **LocalStorage** and **SessionStorage** are part of the Web Storage API, which allows you to store data in the user's browser.

### **LocalStorage**

* Stores data with **no expiration time**. Data persists even after the browser is closed and reopened.
* The data is stored in key-value pairs as strings.

#### Example (LocalStorage):

```javascript
// Save data to localStorage
localStorage.setItem("username", "JohnDoe");

// Retrieve data from localStorage
let user = localStorage.getItem("username");
console.log(user);  // Output: "JohnDoe"

// Remove data from localStorage
localStorage.removeItem("username");

// Clear all data from localStorage
localStorage.clear();
```

* **Limitations**: LocalStorage is limited to around 5MB of data.

### **SessionStorage**

* Stores data for the **duration of the page session**. Data is cleared when the browser tab or window is closed.
* Also stores data in key-value pairs, similar to LocalStorage.

#### Example (SessionStorage):

```javascript
// Save data to sessionStorage
sessionStorage.setItem("sessionId", "abc123");

// Retrieve data from sessionStorage
let sessionId = sessionStorage.getItem("sessionId");
console.log(sessionId);  // Output: "abc123"

// Remove data from sessionStorage
sessionStorage.removeItem("sessionId");

// Clear all data from sessionStorage
sessionStorage.clear();
```

* **Limitations**: SessionStorage is cleared when the browser session ends (tab/window closed).

---

## 🔹 **Geolocation API**

The **Geolocation API** allows you to access the user's geographic location.

### Example:

```javascript
// Get the current position of the user
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  },
  (error) => {
    console.error("Error occurred:", error);
  }
);
```

* **Methods**:

  * `getCurrentPosition()`: Returns the current position of the user.
  * `watchPosition()`: Watches for changes to the user's position (continuously).
  * `clearWatch()`: Stops the watch set by `watchPosition()`.

* **Permission**: The user will be prompted for permission to access their location.

---

## 🔹 **Clipboard API**

The **Clipboard API** allows you to interact with the clipboard, enabling copying and pasting of text or data.

### Example (Copy to Clipboard):

```javascript
// Copy text to clipboard
function copyText() {
  navigator.clipboard.writeText("Hello, world!")
    .then(() => {
      console.log("Text copied to clipboard!");
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
}

// Call the function to copy text
copyText();
```

### Example (Paste from Clipboard):

```javascript
// Read text from clipboard
function pasteText() {
  navigator.clipboard.readText()
    .then((text) => {
      console.log("Pasted text:", text);
    })
    .catch((error) => {
      console.error("Failed to read clipboard contents: ", error);
    });
}

// Call the function to read text
pasteText();
```

* **Security**: Clipboard operations are usually triggered by user interaction (e.g., button click).

---

## 📚 **Summary**

* **LocalStorage**: Stores data indefinitely across browser sessions.
* **SessionStorage**: Stores data only for the duration of the browser session.
* **Geolocation API**: Retrieves the user's geographical location with their permission.
* **Clipboard API**: Allows reading from and writing to the clipboard.

---

Let me know if you'd like more details on any of these!
