Here are your **Markdown (.md)** formatted notes on **HTTP & Express in Node.js**:

---

# 🌐 HTTP & Express in Node.js

Node.js allows building web servers using the built-in `http` module or using the popular web framework **Express.js** for more advanced routing and middleware support.

---

## 📦 Native HTTP Module

### ✅ Create a Basic HTTP Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

### Key Features:

* Low-level control
* Built-in with Node.js
* Good for learning basics of HTTP

---

## ⚡ Express.js

### ✅ Setup

```bash
npm install express
```

### ✅ Basic Express Server

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
```

---

## 🔧 Express Features

### Routing

```js
app.get('/about', (req, res) => res.send('About Page'));
app.post('/submit', (req, res) => res.send('Form Submitted'));
```

### Middleware

```js
app.use(express.json()); // Parse JSON body

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

### Static Files

```js
app.use(express.static('public'));
```

---

## 🛠 Use Cases

| Feature              | Native `http` | Express.js |
| -------------------- | ------------- | ---------- |
| Basic server         | ✅             | ✅          |
| Routing              | ❌ (manual)    | ✅          |
| Middleware support   | ❌             | ✅          |
| JSON parsing         | ❌             | ✅          |
| Static file handling | ❌             | ✅          |

---

Let me know if you’d like a complete project example using Express!
