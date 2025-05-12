Here are your **Markdown (.md)** formatted notes on **Authentication & Security in Node.js**:

---

# 🔐 Authentication & Security in Node.js

Secure user authentication is essential in any backend system. Node.js uses libraries like `bcrypt`, `jsonwebtoken`, and `passport` for secure login, password handling, and authorization.

---

## 🔑 Password Hashing with `bcrypt`

`bcrypt` is used to hash passwords before storing them in the database.

### Installation

```bash
npm install bcrypt
```

### Example Usage

```js
const bcrypt = require('bcrypt');
const saltRounds = 10;

const password = 'userPassword123';

// Hashing
bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;

  // Store hash in DB
  console.log('Hashed Password:', hash);
});

// Comparing
bcrypt.compare('userPassword123', hashFromDB, (err, result) => {
  console.log('Password match:', result); // true or false
});
```

---

## 📦 JWT Authentication with `jsonwebtoken`

JWTs are used to sign user sessions and send them securely to clients.

### Installation

```bash
npm install jsonwebtoken
```

### Create and Verify Tokens

```js
const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey';

// Create Token
const token = jwt.sign({ userId: 1 }, secretKey, { expiresIn: '1h' });

// Verify Token
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) return res.sendStatus(403);
  console.log('Decoded JWT:', decoded);
});
```

---

## 🔐 OAuth & Passport.js

`passport` is a flexible authentication middleware for Node.js, supporting OAuth (Google, GitHub, etc.) and local strategies.

### Installation

```bash
npm install passport passport-local
```

### Basic Setup for Local Strategy

```js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((username, password, done) => {
  // Fetch user from DB and compare password
  User.findOne({ username }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);

    bcrypt.compare(password, user.password, (err, res) => {
      if (res) return done(null, user);
      else return done(null, false);
    });
  });
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => done(err, user));
});
```

---

## 🛡 Security Best Practices

* Always hash passwords before storing
* Store JWT secrets securely (env variables)
* Use `helmet` for setting secure HTTP headers
* Enable CORS carefully for frontend/backend communication
* Use HTTPS in production environments

---

Let me know if you'd like a sample Express authentication flow with JWT or Passport setup!
