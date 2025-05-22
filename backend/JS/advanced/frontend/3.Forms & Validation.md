Here are your **Markdown (.md)** formatted notes on **Forms & Validation** in JavaScript:

---

# 📝 JavaScript Forms & Validation

Forms are essential for gathering user input on websites. Validation ensures the data entered is correct before submission.

---

## 🔹 **Input Validation**

Input validation is the process of ensuring that user-provided data meets certain criteria. This is often done before sending data to the server.

### Common Input Validation Techniques:

* **Required Fields**: Ensure that a field is not left empty.
* **Pattern Matching**: Check if the input follows a specific pattern (e.g., email format).
* **Range Checks**: Validate that numbers or dates fall within a specified range.
* **Custom Validation**: Write custom logic to validate input values based on specific requirements.

### Example:

```javascript
// Check if the email is valid
function validateEmail() {
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}
```

---

## 🔹 **`onsubmit` Event**

The `onsubmit` event is triggered when a form is submitted. You can use this event to run validation functions before allowing the form to be submitted.

### Syntax:

```html
<form onsubmit="return validateForm()">
  <!-- form fields -->
  <input type="submit" value="Submit">
</form>
```

* The `validateForm()` function runs when the form is submitted. If it returns `false`, the form submission is prevented.

### Example:

```html
<form onsubmit="return validateForm()">
  <input type="email" id="email" placeholder="Enter your email">
  <input type="submit" value="Submit">
</form>

<script>
  function validateForm() {
    const email = document.getElementById("email").value;
    if (email === "") {
      alert("Email is required.");
      return false;  // Prevent form submission
    }
    return true;
  }
</script>
```

---

## 🔹 **`preventDefault()`**

The `preventDefault()` method is used to cancel the default behavior of an event. When applied to a form submission event, it prevents the form from being submitted and allows for custom validation logic to be executed.

### Syntax:

```javascript
event.preventDefault();
```

* Use `preventDefault()` inside the `onsubmit` event or any event listener to prevent the default action.

### Example:

```html
<form id="myForm">
  <input type="text" id="username" placeholder="Enter username">
  <input type="submit" value="Submit">
</form>

<script>
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting
    const username = document.getElementById("username").value;
    if (username === "") {
      alert("Username is required!");
    } else {
      alert("Form submitted!");
    }
  });
</script>
```

* In this example, the form submission is prevented, and custom validation is executed.

---

## 📚 **Summary**

* **Input Validation**: Ensure the user enters valid data (e.g., checking if an email matches a pattern).
* **`onsubmit` Event**: Runs when a form is submitted; use it to trigger validation functions.
* **`preventDefault()`**: Stops the form from submitting to allow for custom validation or other actions.

---

Feel free to ask if you need additional details or examples!
