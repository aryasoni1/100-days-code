Here’s your detailed and beginner-friendly Markdown note on **Rate Limiting & Middleware** in **Next.js**:

---

# 🚦 Rate Limiting & Middleware in Next.js

---

## 🧾 What is Rate Limiting?

**Rate limiting** controls how many requests a user/client can make in a set time to:

* Prevent abuse or DDoS attacks
* Protect API/server resources
* Enforce fair usage

---

## 🧩 Implementing Middleware in Next.js

Middleware runs **before a request** hits your API route or page — perfect for:

* Rate limiting
* Auth checks
* Logging

---

## ⚙️ 1. Using Middleware in App Router (`middleware.js`)

### 📄 `middleware.js` Example (Basic Logging)

```js
import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log('Request made to:', request.nextUrl.pathname);
  return NextResponse.next();
}
```

Place this at the **project root** (or inside `/src` if using `src/` layout).

> 🔁 Runs on **all routes** by default (you can limit it with `matcher`)

---

## 🚫 2. Rate Limiting with Memory Store (Simple)

```js
// lib/rate-limit.js

const rateLimit = (() => {
  const requests = new Map();

  return function limit(ip, limit = 5, window = 60_000) {
    const now = Date.now();
    const entry = requests.get(ip) || { count: 0, lastTime: now };

    if (now - entry.lastTime > window) {
      entry.count = 1;
      entry.lastTime = now;
    } else {
      entry.count++;
    }

    requests.set(ip, entry);
    return entry.count <= limit;
  };
})();
```

### 📄 Use in API Route

```js
import rateLimit from '../../lib/rate-limit';

export default function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  if (!rateLimit(ip)) {
    return res.status(429).json({ message: 'Too many requests' });
  }

  res.status(200).json({ message: 'Success' });
}
```

---

## 🛠️ 3. Using Third-Party Rate Limiter (like `rate-limiter-flexible`)

```bash
npm install rate-limiter-flexible
```

### 📄 Setup with Redis or Memory

```js
import { RateLimiterMemory } from 'rate-limiter-flexible';

const limiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 60, // per 60 seconds
});

export default async function handler(req, res) {
  try {
    await limiter.consume(req.headers['x-forwarded-for'] || req.socket.remoteAddress);
    res.status(200).json({ message: 'Allowed' });
  } catch {
    res.status(429).json({ message: 'Too many requests' });
  }
}
```

---

## ❌ Error Handling Middleware

Create reusable error-handling logic:

```js
// lib/api-wrapper.js

export function withErrorHandling(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
}
```

### 📄 Use it in Routes

```js
import { withErrorHandling } from '../../lib/api-wrapper';

async function myHandler(req, res) {
  throw new Error('Something failed!');
}

export default withErrorHandling(myHandler);
```

---

## 🧠 Summary

| Feature        | Purpose                                   |
| -------------- | ----------------------------------------- |
| Middleware     | Pre-process requests (e.g., auth/logging) |
| Rate Limiting  | Limit API calls to prevent abuse          |
| Error Handling | Catch and handle API exceptions           |
| Libraries      | `rate-limiter-flexible`, Redis, etc.      |

---

## ✅ Best Practices

* Always rate-limit **public APIs** (login, register, etc.).
* Use **Redis-based rate limiters** for production scalability.
* Centralize **error handling** for cleaner APIs.
* Add **status codes** and helpful error messages.
* Avoid storing rate-limiting state in memory in serverless apps.

---

Want to go deeper with Redis-backed middleware, IP blocking, or Edge Middleware? Just ask for the next topic!
