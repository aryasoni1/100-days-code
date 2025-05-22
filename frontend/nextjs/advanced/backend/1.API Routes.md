Here’s your Markdown-formatted, beginner-friendly note on **API Routes** in **Next.js**, following your existing format:

---

# 🛠️ API Routes in Next.js

---

## 🧾 What Are API Routes?

**API Routes** in Next.js allow you to write **backend code directly in your project** — no separate Express server needed!

You can:

* Handle **form submissions**
* Build **REST APIs**
* Connect to databases or external APIs
* Do server-side logic (auth, etc.)

---

## 📁 File-Based Routing for APIs

Next.js allows two ways to create API routes:

### ✅ In `pages/api/` (default in older versions)

* Create files inside `pages/api/` to define routes.

```bash
pages/api/hello.js ➝ /api/hello
```

### ✅ In `app/api/` (Next.js App Router)

* Works with the new `app/` directory (Next.js 13+).
* Supports edge functions, middlewares, and more flexible handlers.

```bash
app/api/hello/route.js ➝ /api/hello
```

---

## ✍️ Example Using `pages/api/`

```js
// pages/api/hello.js

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from API Route!' });
}
```

📌 This creates an endpoint at `/api/hello`.

---

## ✍️ Example Using `app/api/` (App Router)

```js
// app/api/hello/route.js

export async function GET() {
  return Response.json({ message: 'Hello from App Router API!' });
}
```

📌 Follows the **HTTP method as function** pattern (`GET`, `POST`, etc.)

---

## 🔁 Accessing API Routes (Frontend Example)

```js
useEffect(() => {
  fetch('/api/hello')
    .then(res => res.json())
    .then(data => setMessage(data.message));
}, []);
```

✅ Works just like any REST API call.

---

## ⚙️ Request and Response Objects

### For `pages/api/`

* You get **Node.js style** `req` and `res`:

```js
export default function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    const { name } = req.body;
    res.status(200).json({ message: `Hello, ${name}!` });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
```

### For `app/api/`

* You use `Request` and `Response` from the **Web Fetch API**:

```js
export async function POST(request) {
  const body = await request.json();
  return Response.json({ message: `Hello, ${body.name}` });
}
```

---

## 🧠 Summary

| Feature               | Description                                  |
| --------------------- | -------------------------------------------- |
| `pages/api/`          | API routes using Node-style handlers         |
| `app/api/`            | App Router API using modern Web API handlers |
| `req`, `res`          | Used in `pages/api` routes                   |
| `Request`, `Response` | Used in `app/api` routes                     |
| API Path              | Mirrors file path (e.g., `/api/hello`)       |

---

## ✅ Best Practices

* Use `pages/api/` for simplicity and wide support.
* Use `app/api/` for advanced features like middleware and streaming.
* Separate logic into **services or utils** for cleaner code.
* Use environment variables to store secrets/API keys.
* Validate inputs and handle errors gracefully.

---

Let me know the next topic — happy to keep building your notes set!
