Here are your **Markdown (.md)** formatted notes on **Database Integration in Node.js**:

---

# 🗄️ Database Integration in Node.js

Node.js supports both SQL and NoSQL databases. Popular tools include:

* **Mongoose** for MongoDB
* **pg** for PostgreSQL
* **Knex.js** for query building
* **Prisma** as a TypeScript-first ORM

---

## 📦 MongoDB with `mongoose`

### Installation

```bash
npm install mongoose
```

### Basic Usage

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Create
const newUser = new User({ name: 'Alice', email: 'alice@example.com' });
newUser.save();

// Read
User.find({ name: 'Alice' });

// Update
User.updateOne({ name: 'Alice' }, { $set: { name: 'Alicia' } });

// Delete
User.deleteOne({ name: 'Alicia' });
```

---

## 🐘 PostgreSQL with `pg`

### Installation

```bash
npm install pg
```

### Basic Usage

```js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432,
});

pool.query('SELECT * FROM users', (err, res) => {
  console.log(res.rows);
});
```

---

## 🧱 SQL Query Building with `knex.js`

### Installation

```bash
npm install knex
```

### Setup

```js
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'mydb',
  },
});
```

### Basic Operations

```js
// Insert
await knex('users').insert({ name: 'Bob' });

// Select
const users = await knex('users').select('*');

// Update
await knex('users').where({ name: 'Bob' }).update({ name: 'Robert' });

// Delete
await knex('users').where({ name: 'Robert' }).del();
```

---

## ⚙️ ORM with Prisma

### Installation

```bash
npm install prisma --save-dev
npx prisma init
```

### Define Schema (`prisma/schema.prisma`)

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

### Generate Client & Use

```bash
npx prisma generate
```

```js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const users = await prisma.user.findMany();
```

---

## ✅ Choosing the Right Tool

| Tool     | Best For                         |
| -------- | -------------------------------- |
| Mongoose | NoSQL MongoDB apps               |
| pg       | Raw SQL access to PostgreSQL     |
| Knex.js  | SQL builders with flexibility    |
| Prisma   | Type-safe modern ORM for SQL DBs |

---

Let me know if you'd like boilerplate setup examples or comparison charts!
