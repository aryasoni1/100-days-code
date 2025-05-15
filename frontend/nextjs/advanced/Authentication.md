Here’s your Markdown-formatted, beginner-friendly note on **Authentication** in **Next.js**, keeping the same structure:

---

# 🔐 Authentication in Next.js

---

## 🧾 Why Authentication?

Authentication allows you to:

* Verify **who a user is**
* Protect **private pages and API routes**
* Manage **user sessions**

Next.js supports:

* 🔄 **NextAuth.js** – plug-and-play provider-based auth
* 🔐 **Custom JWT-based auth** – full control and flexibility

---

## 🔑 Option 1: NextAuth.js (Recommended for Simplicity)

### 📦 Install NextAuth.js

```bash
npm install next-auth
```

### 📄 Setup API Route

```js
// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});
```

### 🧠 Session in Frontend

```js
import { useSession, signIn, signOut } from 'next-auth/react';

const { data: session } = useSession();

return session ? (
  <>
    <p>Welcome, {session.user.name}</p>
    <button onClick={() => signOut()}>Logout</button>
  </>
) : (
  <button onClick={() => signIn()}>Login</button>
);
```

---

## 🔐 Option 2: Custom JWT Authentication

### 🔧 Login API Route

```js
// pages/api/login.js

import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
}
```

### 📁 Protecting API Routes with Middleware

```js
// lib/auth.js

import jwt from 'jsonwebtoken';

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: 'Missing token' });

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(403).json({ message: 'Invalid token' });
  }
}
```

Use in an API route:

```js
import { verifyToken } from '../../lib/auth';

export default function handler(req, res) {
  verifyToken(req, res, () => {
    res.status(200).json({ message: 'Protected content' });
  });
}
```

---

## 🔐 Session Management

### With NextAuth.js:

* Uses cookies + sessions out of the box
* `useSession()` to access user session
* Sessions auto-refresh and are secure by default

### With JWT:

* Store token in localStorage or HTTP-only cookie
* Attach token to `Authorization` header in API requests
* Handle expiration manually

---

## 🧠 Summary

| Method               | Description                             |
| -------------------- | --------------------------------------- |
| **NextAuth.js**      | Easy to set up, supports many providers |
| **Custom JWT**       | Full control over auth and tokens       |
| **Sessions**         | Managed via cookies or tokens           |
| **Protected Routes** | Restrict access to API/data             |

---

## ✅ Best Practices

* Store secrets in `.env` securely.
* Use **HTTP-only cookies** for safer JWT storage.
* Don’t expose sensitive data in tokens.
* Always validate tokens on the server.
* Use role-based checks for admin/privileged routes.

---

Want to go deeper into protected pages, OAuth setup, or role-based auth? Just ask for the next topic!
