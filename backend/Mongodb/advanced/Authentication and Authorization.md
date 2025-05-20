Here's a beginner-friendly, Markdown-formatted note on **Authentication and Authorization** using MongoDB:

---

# 🔐 Authentication & Authorization with MongoDB

---

## 🧾 Overview

Authentication = **Who are you?**
Authorization = **What can you access?**

MongoDB works seamlessly with **Passport.js**, **JWT**, and **RBAC (Role-Based Access Control)** for secure web applications.

---

## 🔑 Use MongoDB with Passport.js

### 📁 User Schema (Mongoose)

```js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, default: 'user' }, // roles: 'user', 'admin'
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model('User', userSchema);
```

---

### 🛡️ Local Strategy with Passport.js

```js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');

passport.use(new LocalStrategy(
  async (username, password, done) => {
    const user = await User.findOne({ username });
    if (!user) return done(null, false);

    const isMatch = await bcrypt.compare(password, user.password);
    return done(null, isMatch ? user : false);
  }
));
```

> Store sessions using `express-session`, or go stateless with JWT.

---

## 🔐 Use JWT (JSON Web Token)

### 🧬 Generate Token

```js
const jwt = require('jsonwebtoken');

const token = jwt.sign({ userId: user._id, role: user.role }, 'secret-key', {
  expiresIn: '1h',
});
```

### ✅ Verify Token Middleware

```js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'secret-key', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
```

---

## 🔒 Role-Based Access Control (RBAC)

Store `role` in MongoDB document (e.g., `"admin"`, `"editor"`, `"user"`)

### 🎯 Middleware Example

```js
function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.sendStatus(403); // Forbidden
    }
    next();
  };
}
```

```js
app.get('/admin', authenticateToken, authorizeRoles('admin'), (req, res) => {
  res.send('Welcome Admin');
});
```

---

## 🧠 Summary

| Concept          | Tool/Method                        |
| ---------------- | ---------------------------------- |
| Authentication   | Passport.js, JWT                   |
| Authorization    | RBAC using `role` field in MongoDB |
| Secure Passwords | Hash with `bcrypt`                 |
| JWT Auth         | Stateless, scalable token auth     |

---

## ✅ Best Practices

* Always **hash passwords** with bcrypt
* Use **HTTPS** and secure headers
* Store JWT secret in **environment variables**
* Limit token lifespan (`expiresIn`)
* Add **rate limiting** to auth endpoints

---

Let me know if you'd like this in a full working Express + MongoDB auth boilerplate!
