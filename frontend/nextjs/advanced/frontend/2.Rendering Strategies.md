Here’s your well-structured and beginner-friendly Markdown note on **Rendering Strategies** in **Next.js**, following your exact format:

---

# 🧠 Rendering Strategies in Next.js

---

## 🧾 What Are Rendering Strategies?

Rendering strategies determine **how and when** a page's content is generated in a Next.js app.

---

## ⚙️ Four Core Strategies

| Strategy                                  | Runs On    | When HTML is Generated          | Best For                                    |
| ----------------------------------------- | ---------- | ------------------------------- | ------------------------------------------- |
| **SSR** (Server-Side Rendering)           | Server     | On every request                | Dynamic, frequently changing data           |
| **SSG** (Static Site Generation)          | Build time | During build                    | Blogs, docs, marketing pages                |
| **ISR** (Incremental Static Regeneration) | Server     | After initial build (on-demand) | Content that changes occasionally           |
| **CSR** (Client-Side Rendering)           | Browser    | After page loads in browser     | Auth pages, dashboards, client-only content |

---

## 🔄 SSR – Server-Side Rendering

* Page is generated **on the server** every time it is requested.

### 📄 Example using `getServerSideProps`

```js
// pages/news.js
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/news');
  const data = await res.json();
  return { props: { data } };
}

export default function News({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

✅ Good for real-time, user-specific, or frequently updated content.

---

## 🧊 SSG – Static Site Generation

* Page is pre-rendered **at build time**.

### 📄 Example using `getStaticProps`

```js
// pages/blog.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/blogs');
  const blogs = await res.json();
  return { props: { blogs } };
}

export default function Blog({ blogs }) {
  return <ul>{blogs.map(b => <li key={b.id}>{b.title}</li>)}</ul>;
}
```

✅ Super fast, great for SEO, ideal for blogs, docs, and landing pages.

---

## 🔁 ISR – Incremental Static Regeneration

* **Hybrid**: Static page generated once, then **revalidated** after a set time.

### 📄 Example using `revalidate`

```js
// pages/blog.js
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/blogs');
  const blogs = await res.json();
  return {
    props: { blogs },
    revalidate: 60, // seconds
  };
}
```

✅ Keeps static speed but updates after a delay — best for CMS-like content.

---

## 🌐 CSR – Client-Side Rendering

* Page loads with minimal content, then fetches data **in the browser**.

### 📄 Example using `useEffect`

```js
// pages/profile.js
import { useEffect, useState } from 'react';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setUser);
  }, []);

  return user ? <h1>Welcome, {user.name}!</h1> : <p>Loading...</p>;
}
```

✅ Great for private/authenticated content or client-only features.

---

## 🧠 Summary

| Strategy | Key Function                    | Runs When        | Use For                            |
| -------- | ------------------------------- | ---------------- | ---------------------------------- |
| **SSR**  | `getServerSideProps`            | On every request | Real-time content, SEO             |
| **SSG**  | `getStaticProps`                | At build time    | Static pages, blogs, docs          |
| **ISR**  | `getStaticProps` + `revalidate` | After delay      | Hybrid CMS-style content           |
| **CSR**  | `useEffect`                     | After page load  | Auth, user dashboards, dynamic UIs |

---

## ✅ Best Practices

* Use **SSG** wherever possible (fastest + SEO)
* Use **SSR** when content must always be up to date
* Use **CSR** for authenticated or interactive dashboards
* Use **ISR** to balance speed with freshness

---

Let me know your next topic — we’re building an awesome knowledge base here!
