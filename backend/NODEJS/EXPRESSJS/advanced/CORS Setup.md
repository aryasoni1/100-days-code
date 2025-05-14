Here's a `.md` formatted note on **CORS Setup in Express.js**:

---

# 🌐 CORS Setup in Express.js

---

## 🔍 What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a security feature enforced by browsers. It prevents frontend apps running on one origin (domain, protocol, port) from accessing resources from a different origin without permission.

---

## 🎯 Why Set Up CORS?

To allow frontend applications (like React, Vue, Angular) hosted on different origins (e.g., `http://localhost:3000`) to communicate with your backend API (e.g., `http://localhost:5000`).

---

## ✅ Installing the `cors` Middleware

```bash
npm install cors
```

---

## ⚙️ Basic Setup

```js
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // Enable for all origins

app.get('/api/data', (req, res) => {
  res.json({ message: 'CORS is enabled!' });
});

app.listen(5000);
```

---

## 🔐 Configure Specific Origins

```js
const corsOptions = {
  origin: 'http://localhost:3000', // React app
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // For cookies, authorization headers, etc.
};

app.use(cors(corsOptions));
```

---

## 🚀 Multiple Allowed Origins

```js
const allowedOrigins = ['http://localhost:3000', 'https://myapp.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));
```

---

## 🧪 Example Request from Frontend (React)

```js
fetch('http://localhost:5000/api/data', {
  method: 'GET',
  credentials: 'include', // needed if using cookies
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 📝 Summary

| Purpose                          | Setup                                 |
| -------------------------------- | ------------------------------------- |
| Enable CORS for all origins      | `app.use(cors())`                     |
| Restrict to one origin           | `{ origin: 'http://localhost:3000' }` |
| Allow credentials (cookies/auth) | `{ credentials: true }`               |
| Custom origin logic              | Function inside `origin` key          |

---

Let me know if you want a setup example for CORS with cookies/sessions or in production deployment!
