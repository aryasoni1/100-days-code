Here's a beginner-friendly, Markdown-formatted note on **Environment Variables** in **Next.js**:

---

# 🔐 Environment Variables in Next.js

---

## 🧾 What Are Environment Variables?

Environment variables let you **store configuration data securely** — such as API keys, database URLs, and secrets — **outside your codebase**.

---

## 📁 Common `.env` Files

| File Name         | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `.env.local`      | Your **local development config** (✅ secret) |
| `.env`            | Shared defaults (safe to commit, if generic) |
| `.env.production` | Used in production deployments               |

> ❗ **Never commit `.env.local`** — it’s for secrets!

---

## 🔧 Example `.env.local`

```env
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/mydb
SECRET_KEY=supersecret
```

---

## 🌐 Access in Code

### ✅ Client-Side

Prefix with `NEXT_PUBLIC_` to expose it to the browser:

```js
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

### 🔒 Server-Side Only

Omit the prefix to **keep secret keys server-only**:

```js
const dbUrl = process.env.DATABASE_URL; // Only accessible on the server
```

---

## 🧪 Usage Example

```js
// In a Next.js API route or getServerSideProps
export async function getServerSideProps() {
  const secret = process.env.SECRET_KEY;
  return { props: { msg: `Your key is ${secret}` } };
}
```

---

## 📦 Best Practices

* ✅ Use `.env.local` for all sensitive data
* 🚫 Never expose secrets to the frontend
* ✅ Use `NEXT_PUBLIC_` only for safe public variables
* 🔐 Don’t push `.env.local` to GitHub (add to `.gitignore`)

---

## 🧠 Summary

| Variable Type    | Prefix         | Scope             |
| ---------------- | -------------- | ----------------- |
| Public (client)  | `NEXT_PUBLIC_` | Frontend + Server |
| Private (server) | *(no prefix)*  | Server only       |

---

Let me know if you'd like a `.env` template for your Next.js + MongoDB or Prisma project!
