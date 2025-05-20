Here's a beginner-friendly, Markdown-formatted note on **Indexing & Performance** in MongoDB:

---

# ⚡ Indexing & Performance in MongoDB

---

## 🧾 Why Indexing?

Indexes improve **query speed** by allowing MongoDB to **quickly locate data** without scanning the entire collection.

---

## 🛠️ Creating Indexes

### 🔹 Basic Index

```js
db.users.createIndex({ email: 1 });
```

* `1` = ascending order
* `-1` = descending order
* ✅ Helps speed up queries like:

  ```js
  db.users.find({ email: "user@example.com" });
  ```

---

### 🔹 Compound Index (Multiple Fields)

```js
db.orders.createIndex({ userId: 1, date: -1 });
```

* Useful when querying with both fields:

  ```js
  db.orders.find({ userId: "123" }).sort({ date: -1 });
  ```

---

### 🔹 Text Index (for search)

```js
db.articles.createIndex({ title: "text", body: "text" });
```

* Then query using `$text`:

```js
db.articles.find({ $text: { $search: "mongodb indexing" } });
```

---

### 🔹 Geospatial Index

```js
db.places.createIndex({ location: "2dsphere" });
```

* Use for location-based queries (e.g., nearby places):

```js
db.places.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [lng, lat] },
      $maxDistance: 1000,
    },
  },
});
```

---

## 🧪 Analyze Query Performance

### 📊 Use `explain()`

```js
db.users.find({ email: "test@example.com" }).explain("executionStats");
```

* Shows whether the query used an **index**, how many documents were scanned, etc.

---

## 🚫 Avoid Full Collection Scans

* If no index is used, MongoDB must **scan every document** = ❌ Slow
* Use **covered queries** to improve efficiency:

```js
db.products.createIndex({ category: 1, price: 1 });

db.products.find({ category: "books" }, { price: 1, _id: 0 });
```

* ✅ The index covers both the **filter** and **projected fields**

---

## 🧠 Summary

| Type            | Use Case                                        |
| --------------- | ----------------------------------------------- |
| Single Field    | Search/filter by one field                      |
| Compound        | Filter + sort by multiple fields                |
| Text            | Full-text search in strings                     |
| Geospatial      | Location-based queries                          |
| Covered Queries | Use only indexed fields to avoid document scans |

---

## ✅ Best Practices

* Only index fields you **query or sort frequently**
* Avoid **too many indexes** (they slow down writes)
* Use **compound indexes** for combined queries
* Regularly check performance using `.explain()`

---

Let me know if you want a real example with performance benchmarks or a sample dataset to experiment with!
