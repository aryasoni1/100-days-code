Here's the Markdown-formatted note for **Form Handling**:

---

# 📝 Form Handling in Web Applications

Forms are essential for collecting and submitting user input to the backend for processing (e.g., login, registration, search).

---

## 🧾 Basic HTML Form Structure

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <button type="submit">Submit</button>
</form>
```

* `action`: URL where the form data is sent.
* `method`: `POST` (for sending data securely) or `GET` (for query parameters).

---

## 📬 Submitting Form to Backend

* Data is submitted via `POST` or `GET`.
* Use `body-parser` (Node.js), `request.form` (Flask), or `req.body` (Express) to retrieve data.

**Example (Express.js)**

```js
app.post('/submit', (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}`);
});
```

---

## 🔒 CSRF Protection

Cross-Site Request Forgery (CSRF) is a security threat where unauthorized commands are transmitted from a user that the web application trusts.

### 🔐 CSRF Token Flow

1. Backend generates a CSRF token.
2. Token is embedded as a **hidden field** in the form.
3. Token is validated server-side on form submission.

```html
<form action="/update-profile" method="POST">
  <input type="hidden" name="_csrf" value="{{csrfToken}}" />
  <input type="text" name="username" />
  <button type="submit">Update</button>
</form>
```

**Node.js with CSRF Middleware:**

```js
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);
```

---

## ✅ Best Practices

* Always validate form input on **client and server**.
* Use proper HTTP methods: `POST`, `PUT`, `DELETE` for data modifications.
* Sanitize input to avoid XSS and injection attacks.
* Use `autocomplete="off"` on sensitive fields if needed.

---

## 📦 Tools and Libraries

* **Express.js** – Handles `req.body` via `body-parser`.
* **Flask** – `request.form`, with CSRF from `flask-wtf`.
* **Django** – Auto-includes CSRF tokens with `{{ csrf_token }}`.
* **Helmet.js** – Adds HTTP security headers (including CSRF safeguards).
* **Form Libraries** – React Hook Form, Formik for client-side handling.

---
