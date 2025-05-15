Here’s your beginner-friendly, Markdown-formatted note on **Connecting to Databases** in **Next.js**, following your established format:

---

# 🗃️ Connecting to Databases in Next.js

---

## 🧾 Why Connect a Database?

To build real applications, you need to store and retrieve **dynamic data** like:

* Users
* Products
* Posts
* Messages

Next.js lets you connect to databases via Node.js libraries inside **API routes**.

---

## 🛠️ Popular Database Options

| Tool         | Description                     |
| ------------ | ------------------------------- |
| **Prisma**   | Type-safe ORM for SQL databases |
| **Mongoose** | ODM for MongoDB                 |
| **pg**       | Low-level PostgreSQL driver     |
| **mysql2**   | MySQL client for Node.js        |

---

## 🔗 1. Connecting with **Prisma**

### 📦 Install Prisma + Client

```bash
npm install prisma @prisma/client
npx prisma init
```

### 📄 Example Schema (`prisma/schema.prisma`)

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

### ⚙️ Set up `.env`

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

### 📞 Using Prisma in API Route

```js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}
```

---

## 🔗 2. Connecting with **Mongoose** (MongoDB)

### 📦 Install Mongoose

```bash
npm install mongoose
```

### 📄 Setup Connection Utility (`lib/db.js`)

```js
import mongoose from 'mongoose';

export async function connectDB() {
  if (mongoose.connections[0].readyState) return;

  await mongoose.connect(process.env.MONGODB_URI);
}
```

### 📄 Define a Model (`models/User.js`)

```js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
```

### 📞 Using Mongoose in API Route

```js
import { connectDB } from '../../lib/db';
import User from '../../models/User';

export default async function handler(req, res) {
  await connectDB();
  const users = await User.find();
  res.status(200).json(users);
}
```

---

## 🔗 3. Connecting with **pg** (PostgreSQL)

### 📦 Install `pg`

```bash
npm install pg
```

### 📄 Setup Connection (`lib/db.js`)

```js
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
```

### 📞 Using pg in API Route

```js
import pool from '../../lib/db';

export default async function handler(req, res) {
  const result = await pool.query('SELECT * FROM users');
  res.status(200).json(result.rows);
}
```

---

## 🧠 Summary

| Option       | Use Case                                                |
| ------------ | ------------------------------------------------------- |
| **Prisma**   | Best for SQL (Postgres, MySQL, SQLite) with type safety |
| **Mongoose** | Best for MongoDB + Schema modeling                      |
| **pg**       | Direct access to PostgreSQL                             |
| **mysql2**   | Similar direct access for MySQL                         |

---

## ✅ Best Practices

* Store DB credentials in `.env` (never hard-code).
* Use a separate **lib folder** for DB config and connections.
* Handle DB connections carefully (prevent duplicates in dev).
* Use **ORM/ODM** like Prisma or Mongoose for cleaner code.
* Protect database queries with input validation and sanitization.

---

Ready for the next topic? Just drop the title and I’ll format it like this!
