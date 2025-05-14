Here are the notes for **Request/Response Objects in Express.js** in `.md` format:

---

# 🔄 Express.js Request/Response Objects

Express.js provides two main objects in every route handler:

* `req`: The **request object** — contains info from the client
* `res`: The **response object** — used to send a response back

---

## 📥 Request Object (`req`)

### `req.body`

* Contains data sent in the body (usually from POST/PUT).
* Requires `express.json()` or `express.urlencoded()` middleware.

```js
app.post('/user', (req, res) => {
  console.log(req.body); // { name: "Alice" }
});
```

---

### `req.params`

* Captures route parameters in dynamic routes.

```js
app.get('/user/:id', (req, res) => {
  console.log(req.params.id); // e.g., '123' for /user/123
});
```

---

### `req.query`

* Contains query string parameters from the URL.

```js
app.get('/search', (req, res) => {
  console.log(req.query.q); // e.g., 'books' for /search?q=books
});
```

---

## 📤 Response Object (`res`)

### `res.send()`

* Sends a response of various types (string, object, buffer, etc.).

```js
res.send('Hello World');
res.send({ success: true });
```

---

### `res.status()`

* Sets HTTP status code of the response.

```js
res.status(404).send('Not Found');
```

---

### Common Methods

| Method           | Description                                         |
| ---------------- | --------------------------------------------------- |
| `res.send()`     | Send any type of response                           |
| `res.json()`     | Automatically sets `Content-Type: application/json` |
| `res.status()`   | Sets the status code                                |
| `res.redirect()` | Redirects to another URL                            |
| `res.end()`      | Ends the response without data                      |

---

Let me know if you want a breakdown of file uploads or error handling next!
