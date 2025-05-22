Here's a concise and well-organized `.md` (Markdown) note version of the `body-parser` documentation you provided:

---

# 🧠 `body-parser` Middleware – Express.js Notes

`body-parser` is Node.js middleware for parsing incoming HTTP request bodies in a middleware before handlers.

> **Note:** `req.body` is user-controlled and **untrusted**. Always validate or sanitize input before using it.

---

## 📦 Installation

```bash
npm install body-parser
```

---

## 🛠️ Basic Usage

```js
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Parse application/json
app.use(bodyParser.json())
```

---

## 🔧 Middleware Functions

### 🔹 `bodyParser.json([options])`
Parses JSON request bodies.

- `inflate`: Accept compressed bodies (`true` by default).
- `limit`: Max size (`default: '100kb'`).
- `reviver`: Custom JSON.parse reviver.
- `strict`: Only accept objects/arrays (`default: true`).
- `type`: Accepted content types.
- `verify`: Custom verification function.

---

### 🔹 `bodyParser.urlencoded([options])`
Parses `application/x-www-form-urlencoded` data.

- `extended`: Use `qs` for parsing rich objects (`true`) or `querystring` (`false`).
- `inflate`: Accept compressed bodies.
- `limit`: Max size.
- `parameterLimit`: Max number of parameters (`default: 1000`).
- `verify`: Custom verification.
- `depth`: Max nested depth (`default: 32`).
- `defaultCharset`, `charsetSentinel`, `interpretNumericEntities`: Charset config.

---

### 🔹 `bodyParser.raw([options])`
Parses request bodies into a raw `Buffer`.

- `inflate`: Accept compressed bodies.
- `limit`: Max size.
- `type`: Accepted content types.
- `verify`: Custom verification.

---

### 🔹 `bodyParser.text([options])`
Parses request bodies into a plain text string.

- `defaultCharset`: Default charset (`utf-8`).
- `inflate`: Accept compressed bodies.
- `limit`: Max size.
- `type`: Accepted content types.
- `verify`: Custom verification.

---

## 📌 Common Errors

| Error Type                        | Status | Description |
|----------------------------------|--------|-------------|
| `encoding.unsupported`           | 415    | Unsupported encoding like gzip if `inflate: false`. |
| `entity.parse.failed`            | 400    | JSON or body content could not be parsed. |
| `entity.verify.failed`           | 403    | Custom verification failed. |
| `request.aborted`                | 400    | Request aborted before completion. |
| `entity.too.large`               | 413    | Body size exceeds `limit`. |
| `request.size.invalid`          | 400    | Content-Length mismatch. |
| `stream.encoding.set`            | 500    | `req.setEncoding` used improperly. |
| `stream.not.readable`           | 500    | Request already read by another middleware. |
| `parameters.too.many`           | 413    | Too many parameters in URL-encoded body. |
| `charset.unsupported`           | 415    | Invalid charset in `Content-Type`. |
| `depth exceeded`                | 400    | Nested object depth exceeded limit. |

---

## 🚀 Examples

### 📄 Top-Level Middleware

```js
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
```

### 🎯 Route-Specific Middleware

```js
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/login', urlencodedParser, (req, res) => {
  if (!req.body.username) return res.sendStatus(400)
  res.send(`Welcome, ${req.body.username}`)
})

app.post('/api/users', jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400)
  // handle user
})
```

### ⚙️ Custom Type Parsers

```js
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))
```

---

## 📚 Multipart Parsing

`body-parser` **does not support multipart**. Use:

- `multer`
- `busboy`
- `formidable`
- `connect-multiparty`

---

## 🔐 Security Note

Always validate and sanitize `req.body` before using values, especially if they are used in:
- Database queries
- File operations
- Eval-like contexts
- Templating

---

Would you like this exported as a `.md` file or used as a cheat sheet PDF?