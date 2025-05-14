Here is a `.md` formatted note on **Frontend-Backend Integration: React + Express**:

---

# 🔗 Frontend-Backend Integration (React + Express)

---

## 🎯 Goal

Enable communication between a **React frontend** and an **Express backend** using `fetch` or `axios` for API calls.

---

## 🧱 Typical Project Structure

```
/project-root
  /client         → React app (frontend)
  /server         → Express app (backend)
```

> In development, React runs on `localhost:3000`, Express on `localhost:5000`.

---

## 🚀 Express Backend Setup (server/index.js)

```js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for React frontend
app.use(express.json()); // Parse JSON bodies

app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
```

---

## ⚛️ React Frontend API Call (client/src/App.js)

### 📦 Using `fetch`

```js
useEffect(() => {
  fetch('http://localhost:5000/api/greet')
    .then(res => res.json())
    .then(data => setMessage(data.message));
}, []);
```

### 🔧 Using `axios`

```bash
npm install axios
```

```js
import axios from 'axios';

useEffect(() => {
  axios.get('http://localhost:5000/api/greet')
    .then(res => setMessage(res.data.message));
}, []);
```

---

## 🛡 Handling Credentials (Cookies/Auth)

```js
// Backend
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Frontend
axios.get('http://localhost:5000/api/secure', {
  withCredentials: true
});
```

---

## 📦 Deploying to Production

* Serve frontend from Express:

```js
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
```

---

## 📝 Summary

| Feature                | Tool/Method                      |
| ---------------------- | -------------------------------- |
| Basic API call         | `fetch` / `axios`                |
| JSON body parsing      | `express.json()`                 |
| CORS handling          | `cors` middleware                |
| Authenticated requests | `withCredentials` in axios/fetch |
| Full-stack deployment  | Serve React via Express          |

---

Let me know if you need `.env` setup for API URLs or proxy configurations!
