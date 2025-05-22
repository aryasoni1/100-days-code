Here’s your beginner-friendly, Markdown-formatted note on **Routing Basics** in **Next.js**, in the same clear format:

---

# 🧭 Routing Basics in Next.js

---

## 📁 File-Based Routing

Next.js uses the **file system** to handle routing. That means:

> **Each file = a route**

You can define routes inside either:

* `pages/` (classic routing – stable & widely used)
* `app/` (new routing – introduced in Next.js 13+)

---

## 📂 Routing with `pages/` Directory

```
pages/
├── index.js       →  /
├── about.js       →  /about
├── contact.js     →  /contact
```

* Simple and works automatically.
* Every `.js`/`.tsx` file becomes a route.
* Good for beginners and production-ready apps.

---

## 📂 Routing with `app/` Directory (Next.js 13+)

```
app/
├── page.js        → /
├── about/
│   └── page.js    → /about
├── dashboard/
│   ├── layout.js  → layout wrapper
│   └── page.js    → /dashboard
```

* Requires `appDir` to be enabled (default in new apps).
* Supports **layouts**, **templates**, and **server components**.
* More advanced and modular.

> 🧠 Use `pages/` if you want simplicity, `app/` if you're building large apps.

---

## 🔀 Dynamic Routes

Use square brackets `[ ]` in filenames to create **dynamic URLs**.

### Example (pages):

```bash
pages/product/[id].js  →  /product/123
```

```js
// pages/product/[id].js
import { useRouter } from 'next/router';

export default function Product() {
  const router = useRouter();
  return <h1>Product ID: {router.query.id}</h1>;
}
```

### Example (app):

```bash
app/product/[id]/page.js  →  /product/123
```

```js
// app/product/[id]/page.js
export default function Product({ params }) {
  return <h1>Product ID: {params.id}</h1>;
}
```

---

## 🌲 Nested Routes

You can organize pages into subfolders for clean URLs.

### Example (pages):

```
pages/blog/index.js       → /blog
pages/blog/post.js        → /blog/post
```

### Example (app):

```
app/blog/page.js          → /blog
app/blog/post/page.js     → /blog/post
```

You can add `layout.js` files in folders to share common layouts (in `app/` routing).

---

## 🧠 Summary

| Feature            | `pages/` Directory    | `app/` Directory (Next.js 13+) |
| ------------------ | --------------------- | ------------------------------ |
| File-based Routing | ✅ Yes                 | ✅ Yes                          |
| Dynamic Routes     | ✅ `[id].js`           | ✅ `[id]/page.js`               |
| Nested Routes      | ✅ Subfolders          | ✅ Folder + `page.js`           |
| Layouts            | ❌ Manual import       | ✅ Native with `layout.js`      |
| Best For           | Simplicity, stability | Advanced apps, future-ready    |

---

Let me know the next topic — I’m ready when you are!
