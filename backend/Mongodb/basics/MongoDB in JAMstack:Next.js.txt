Here’s your beginner-friendly, Markdown-formatted note on **MongoDB in JAMstack/Next.js**:

---

# 🌐 MongoDB in JAMstack / Next.js

---

## 🧾 Overview

Next.js works great with MongoDB for **server-rendered** and **static websites**. You can fetch data from MongoDB in:

* **API Routes** (e.g., `/api/posts`)
* **Data Fetching Methods** (`getStaticProps`, `getServerSideProps`)
* This enables **SEO-friendly**, dynamic, or static content.

---

## 🔌 Integrate MongoDB in API Routes

### 📁 Example: `/pages/api/posts.js`

```js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db('blog');
  const posts = await db.collection('posts').find().toArray();
  client.close();

  res.status(200).json(posts);
}
```

> 🔐 Use `.env.local` to store your MongoDB URI securely:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/myDB
```

---

## 📄 Use MongoDB with `getServerSideProps()`

For dynamic, server-rendered pages on every request.

```js
export async function getServerSideProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const posts = await db.collection('posts').find().toArray();
  client.close();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
```

✅ Best for pages that need **up-to-date content**.

---

## 🗃️ Use MongoDB with `getStaticProps()`

For generating **static pages at build time**.

```js
export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_URI);
  const db = client.db();
  const posts = await db.collection('posts').find().toArray();
  client.close();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
    revalidate: 60, // ISR: re-generate every 60 seconds
  };
}
```

✅ Great for **blogs, docs, marketing pages**.

---

## 🔍 SEO-Friendly Content

Using MongoDB with `getStaticProps` or `getServerSideProps` means:

* Your pages are **pre-rendered with real content** from the DB
* They are **crawlable by search engines**
* Better **performance and discoverability**

---

## 🧠 Summary

| Feature              | Description                                    |
| -------------------- | ---------------------------------------------- |
| API Routes           | Fetch MongoDB data on-demand via HTTP          |
| `getServerSideProps` | Fetch on every request (SSR)                   |
| `getStaticProps`     | Fetch at build time or with revalidation (ISR) |
| SEO Support          | MongoDB content rendered on the server         |

---

## ✅ Best Practices

* Always **sanitize and validate** data from MongoDB.
* Use a helper for DB connection reuse (e.g., `lib/mongodb.js`).
* Wrap MongoDB calls in **try/catch** for error handling.
* Use **Incremental Static Regeneration (ISR)** for performance + freshness.

---

Want a full Next.js + MongoDB blog example? Just ask!
