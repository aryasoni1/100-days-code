Here are the **Express.js Routing** notes in `.md` format:

---

# 🚦 Express.js Routing

Routing refers to defining how an application responds to a client request to a particular endpoint (URL) and HTTP method (GET, POST, etc.).

---

## 🛣️ Static Routes

Used when the URL path is fixed.

```js
app.get('/about', (req, res) => {
  res.send('About Page');
});
```

* Accessible via `http://localhost:3000/about`

---

## 🌀 Dynamic Routes

Used when part of the URL can vary.

```js
app.get('/user/:username', (req, res) => {
  res.send(`User: ${req.params.username}`);
});
```

* `:username` is a **route parameter**
* URL like `/user/john` returns `User: john`

---

## 🧩 Route Parameters

Accessed via `req.params`

```js
app.get('/product/:category/:id', (req, res) => {
  const { category, id } = req.params;
  res.send(`Category: ${category}, ID: ${id}`);
});
```

* `/product/electronics/42` → `Category: electronics, ID: 42`

---

## 🔍 Query Strings

Key-value pairs appended after `?` in URL. Accessed via `req.query`.

```js
app.get('/search', (req, res) => {
  const { q, page } = req.query;
  res.send(`Query: ${q}, Page: ${page}`);
});
```

* `/search?q=express&page=2` → `Query: express, Page: 2`

---

## 🔄 HTTP Method Routes

Express provides methods for all standard HTTP verbs:

```js
app.post('/login', (req, res) => { /* handle login */ });
app.put('/user/:id', (req, res) => { /* update user */ });
app.delete('/user/:id', (req, res) => { /* delete user */ });
```

---

Let me know if you want notes on middleware, error handling, or routers next!
