Here's a neatly formatted `.md` (Markdown) version of your **cookie-parser** notes:

---

```md
# 🍪 cookie-parser

> Middleware for parsing `Cookie` header and populating `req.cookies`.

---

## 📦 Installation

```bash
npm install cookie-parser
```

---

## 🧰 Usage

```js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Basic usage without secret
app.use(cookieParser());

// With secret for signed cookies
app.use(cookieParser('your-secret-key'));

app.get('/', (req, res) => {
  console.log('Cookies:', req.cookies); // Unsigned cookies
  console.log('Signed Cookies:', req.signedCookies); // Signed cookies
});
```

---

## 🧪 API

### `cookieParser(secret, options)`

Creates a new cookie parser middleware function.

- **`secret`** (optional): A string or array for signing cookies.
  - If not provided, signed cookies are not parsed.
- **`options`**: Passed to `cookie.parse`.
- **`decode`**: Optional function to decode cookie values.

---

## 🔍 How It Works

- Parses `Cookie` header.
- Populates:
  - `req.cookies` → All cookies (plain key-value pairs)
  - `req.signedCookies` → Only valid signed cookies

### Signed Cookies

- Value is prefixed with `s:` (e.g., `s:encryptedValue`)
- If signature fails: value becomes `false`
- If unsigned successfully: appears in `req.signedCookies`

### JSON Cookies

- Value prefixed with `j:` (e.g., `j:{"name":"Arya"}`)
- Automatically parsed using `JSON.parse()`
- If parsing fails, raw value is returned

---

## 🔧 Helper Methods

### `cookieParser.JSONCookie(str)`

Parses a single cookie value as JSON.

```js
cookieParser.JSONCookie('j:{"user":"admin"}');
// Returns: { user: 'admin' }
```

---

### `cookieParser.JSONCookies(cookies)`

Parses all JSON cookies in an object.

```js
cookieParser.JSONCookies({ user: 'j:{"admin":true}' });
// Returns: { user: { admin: true } }
```

---

### `cookieParser.signedCookie(str, secret)`

- Parses a signed cookie string.
- Returns the unsigned value if valid.
- Returns original string if not signed.
- Returns `false` if signature is invalid.

```js
cookieParser.signedCookie('s:abc123.signature', 'secret');
```

---

### `cookieParser.signedCookies(cookies, secret)`

- Processes a cookies object.
- Moves valid signed cookies to a new object.
- Deletes them from the original object.

```js
const result = cookieParser.signedCookies({ token: 's:abc.123' }, 'secret');
```

---

## 🧪 Example

```js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser('mySecret'));

app.get('/', (req, res) => {
  console.log('Cookies:', req.cookies);            // Unsigned cookies
  console.log('Signed Cookies:', req.signedCookies); // Valid signed cookies
});

app.listen(8080);
```

**Curl Example:**

```bash
curl http://127.0.0.1:8080 --cookie "Cho=Kim; Greet=Hello"
```

---

## 📄 License

MIT

---

> 📘 *Note: This page was generated from the `cookie-parser` README.*
```

---

Would you like a downloadable `.md` file or notes for any other Express middleware?