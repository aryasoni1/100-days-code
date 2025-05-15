Here’s your Markdown-formatted note on **Handling Requests** in **Next.js API Routes**, including request parsing and middleware for authentication:

---

# 📥 Handling Requests in Next.js API Routes

---

## 🧾 Why Handle Requests?

When a request hits your API route, you often need to:

* Read query parameters (`?id=123`)
* Access request body (POST/PUT)
* Check request method (GET/POST/DELETE)
* Add authentication/authorization logic

---

## 🔍 Request Handling in `pages/api/`

### 📄 Common Request Properties

```js
export default function handler(req, res) {
  const { method, query, body } = req;

  if (method === 'POST') {
    // Access POST data
    const { name } = body;
    res.status(200).json({ message: `Hello, ${name}` });
  } else if (method === 'GET') {
    // Access query params like ?user=John
    const { user } = query;
    res.status(200).json({ user });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
```

### ✅ Key Properties

| Property     | Purpose                       |
| ------------ | ----------------------------- |
| `req.method` | HTTP method (GET, POST, etc.) |
| `req.query`  | Query string parameters       |
| `req.body`   | POST/PUT request body (JSON)  |

---

## 🔐 Authentication Middleware Example

Use middleware to **protect routes** or verify users.

### 📁 `/lib/auth.js`

```js
export function requireAuth(req, res, next) {
  const token = req.headers.authorization;

  if (!token || token !== 'Bearer my-secret-token') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next(); // Continue to handler
}
```

> 🔧 In `pages/api`, `next` must be simulated since it's not Express.

---

### 🔐 Applying Middleware in `pages/api/`

```js
import { requireAuth } from '../../lib/auth';

export default function handler(req, res) {
  requireAuth(req, res, () => {
    res.status(200).json({ message: 'You are authorized!' });
  });
}
```

---

## 🔐 Middleware in `app/api/` (App Router)

You can use Web API methods instead of `req/res`.

```js
export async function GET(request) {
  const auth = request.headers.get('authorization');

  if (auth !== 'Bearer my-secret-token') {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  return Response.json({ message: 'Authorized!' });
}
```

---

## 🧠 Summary

| Concept          | Use Case                                    |
| ---------------- | ------------------------------------------- |
| `req.query`      | Get values from query strings               |
| `req.body`       | Access request body (POST, PUT)             |
| `req.method`     | Handle logic based on HTTP method           |
| Middleware       | Add auth checks or shared logic             |
| `app/api/` style | Use modern `Request` and `Response` objects |

---

## ✅ Best Practices

* Validate and sanitize inputs (`req.body`, `req.query`).
* Always check `req.method` to prevent invalid access.
* Create reusable **middleware** for auth, logging, etc.
* Never expose secrets in frontend — use headers/env vars.
* Use tools like **Zod**, **Joi**, or **Yup** for request validation.

---

Let me know when you're ready for the next note — I’ve got you covered!
