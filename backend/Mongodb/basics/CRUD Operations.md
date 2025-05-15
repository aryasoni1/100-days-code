Here’s your beginner-friendly, Markdown-formatted note on **CRUD Operations** in **MongoDB**:

---

# 🔧 MongoDB CRUD Operations

---

## 🧾 What is CRUD?

**CRUD** stands for:

* **C**reate → Add new documents
* **R**ead → Retrieve documents
* **U**pdate → Modify documents
* **D**elete → Remove documents

These are the 4 basic operations you’ll use with MongoDB.

---

## 🟢 **Create**

### 📌 `insertOne()`

```js
db.users.insertOne({ name: "Alice", age: 25 });
```

Adds a **single document** to the `users` collection.

---

### 📌 `insertMany()`

```js
db.users.insertMany([
  { name: "Bob", age: 30 },
  { name: "Carol", age: 28 }
]);
```

Adds **multiple documents** at once.

---

## 🔍 **Read**

### 📌 `find()`

```js
db.users.find({ age: { $gt: 25 } });
```

Finds **all matching documents**. Returns a cursor (can be looped).

---

### 📌 `findOne()`

```js
db.users.findOne({ name: "Alice" });
```

Finds **the first document** that matches.

---

### 📌 Projections (select specific fields)

```js
db.users.find({ name: "Alice" }, { name: 1, _id: 0 });
```

Returns only the `name` field, excludes `_id`.

---

## ✏️ **Update**

### 📌 `updateOne()` with `$set`

```js
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
);
```

Updates **one document** where `name` is "Alice".

---

### 📌 `updateMany()` with `$inc`

```js
db.users.updateMany(
  { age: { $lt: 30 } },
  { $inc: { age: 1 } }
);
```

Increments age by 1 for all users younger than 30.

---

### 📌 `$push` (add to array)

```js
db.users.updateOne(
  { name: "Bob" },
  { $push: { hobbies: "reading" } }
);
```

Adds `"reading"` to the `hobbies` array.

---

## 🗑️ **Delete**

### 📌 `deleteOne()`

```js
db.users.deleteOne({ name: "Carol" });
```

Deletes the **first matching document**.

---

### 📌 `deleteMany()`

```js
db.users.deleteMany({ age: { $gt: 30 } });
```

Deletes **all users** older than 30.

---

## 🧠 Summary

| Operation | Command                       | Description                       |
| --------- | ----------------------------- | --------------------------------- |
| Create    | `insertOne()`, `insertMany()` | Add documents                     |
| Read      | `find()`, `findOne()`         | Query documents                   |
| Update    | `updateOne()`, `updateMany()` | Modify fields with `$set`, `$inc` |
| Delete    | `deleteOne()`, `deleteMany()` | Remove documents                  |

---

## ✅ Best Practices

* Always **filter carefully** when using update or delete.
* Use **indexes** for efficient querying (`createIndex`).
* Use **projections** to return only needed fields.
* Validate input if using data from users (prevent injection).

---

Want notes on Mongoose-based CRUD in Node.js or MongoDB query operators like `$in`, `$or`, `$regex`? Just let me know!
