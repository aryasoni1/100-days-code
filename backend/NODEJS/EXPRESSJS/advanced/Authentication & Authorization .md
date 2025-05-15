Here are **detailed and simplified notes in `.md` format** on **Authentication & Authorization** including JWT, RBAC, and OAuth2 using Passport.js.

---

# 🔐 Authentication & Authorization Notes

---

## 📌 Key Concepts

### 🔑 Authentication

Verifying **who the user is** (e.g., login using email & password).

### 🛡 Authorization

Determining **what the user can access** (e.g., only admins can delete users).

---

## 🔒 JWT-Based Authentication (with `jsonwebtoken`)

### ✅ What is JWT?

* **JWT** = JSON Web Token
* A secure way to transmit user data as a JSON object
* Commonly used for **stateless authentication**

### 🔁 Flow of JWT Authentication

1. User logs in with credentials
2. Server validates and generates a **token**
3. Token is sent to the client
4. Client stores token (usually in `localStorage` or `cookies`)
5. Client sends token in headers for protected routes

### 📦 Installation

```bash
npm install jsonwebtoken bcryptjs
```

### 🧪 Example

#### 🔐 Generate JWT on Login

```js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const user = { id: 1, email: "test@example.com", password: "hashed_password" };

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
};
```

#### ✅ Verify JWT Middleware

```js
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};
```

#### 🔐 Protect a Route

```js
app.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Access granted', userId: req.user.id });
});
```

---

## 🧑‍💼 Role-Based Access Control (RBAC)

### ✅ What is RBAC?

* Users are assigned **roles** (e.g., `admin`, `user`, `editor`)
* Roles determine access level to routes/resources

### 🧪 RBAC Middleware Example

```js
const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};
```

### 🔐 Use RBAC in Routes

```js
app.delete('/admin/delete-user', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'User deleted by admin' });
});
```

---

## 🔗 OAuth2 Authentication (with `passport` and `passport-google-oauth20`)

### ✅ What is OAuth2?

* A secure authorization framework
* Used to **log in with third-party providers** like Google, GitHub, Facebook

### 📦 Installation

```bash
npm install passport passport-google-oauth20
```

### 📁 Project Structure

```
project/
│
├── auth/
│   └── google.js
├── app.js
```

### ⚙️ `auth/google.js`

```js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: 'GOOGLE_CLIENT_ID',
  clientSecret: 'GOOGLE_CLIENT_SECRET',
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  // Save or find user in DB here
  return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
```

### 📄 `app.js`

```js
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth/google'); // load Google strategy

const app = express();
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/profile');
  });

app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) return res.redirect('/');
  res.send(`Hello ${req.user.displayName}`);
});

app.listen(3000, () => console.log('Server running'));
```

---

## 🧠 Summary

| Feature               | Tool/Library                          |
| --------------------- | ------------------------------------- |
| JWT Auth              | `jsonwebtoken`                        |
| Password Hashing      | `bcryptjs`                            |
| Role Access           | Custom middleware                     |
| OAuth2 (Google Login) | `passport`, `passport-google-oauth20` |

---

Let me know if you want this exported to a file or need examples with a real database (like MongoDB).
