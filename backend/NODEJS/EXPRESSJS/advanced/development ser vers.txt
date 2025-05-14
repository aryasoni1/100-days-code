Here are your **Markdown (.md)** formatted notes on **Development Servers** in Node.js and frontend development:

---

# 🚀 Development Servers

Efficient local development requires running lightweight servers to serve frontend assets or simulate backend APIs.

---

## 🔧 Serving Frontend Apps

### Using **Vite** (Recommended for React, Vue, etc.)

* Vite provides a fast dev server with HMR (Hot Module Replacement).

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

* Serves your app at `http://localhost:5173` (default).

---

### Using **Express** to Serve Static Files

You can serve a frontend app using Node.js + Express.

```js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist'))); // serve React/Vite build

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

* Useful when bundling frontend and backend together.

---

## 🧪 Mock APIs for Frontend Testing

Mock APIs simulate backend responses without needing a live server.

### Option 1: Express Server with Mock Data

```js
const express = require('express');
const app = express();

app.get('/api/user', (req, res) => {
  res.json({ name: 'Alice', age: 25 });
});

app.listen(4000, () => {
  console.log('Mock API running at http://localhost:4000');
});
```

* Great for frontend development and integration testing.

### Option 2: Use `json-server` (Zero-config REST API)

```bash
npm install -g json-server
json-server --watch db.json --port 4000
```

**`db.json` Example**:

```json
{
  "users": [
    { "id": 1, "name": "Alice" },
    { "id": 2, "name": "Bob" }
  ]
}
```

---

## ⚙️ Proxy API Requests in Frontend

* To avoid CORS during development:

### Vite (`vite.config.js`):

```js
export default {
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
};
```

### CRA (`package.json`):

```json
"proxy": "http://localhost:4000"
```

---

## ✅ Best Practices

* Keep mock APIs in a separate file/module.
* Use `dotenv` to manage ports and base URLs.
* Automate server start via `concurrently`:

```bash
npm install concurrently --save-dev
```

```json
"scripts": {
  "dev": "concurrently \"npm run backend\" \"npm run frontend\""
}
```

---

Let me know if you want a sample project combining Vite and Express for full-stack dev!
