Here are the notes in `.md` format for **Working with APIs that Use SQL**:

---

# 🌐 Working with APIs That Use SQL

Interacting with APIs that return SQL query results (typically in JSON) is common in full-stack apps, especially for dashboards, admin panels, and data-heavy views.

---

## 📦 SQL Results as JSON

APIs often return data from SQL databases as JSON:

```json
[
  {
    "id": 1,
    "name": "Alice",
    "score": 95
  },
  {
    "id": 2,
    "name": "Bob",
    "score": 88
  }
]
```

### 🔧 Frontend Usage:

* Render JSON data into:

  * **Tables**
  * **Charts (e.g., Chart.js, Recharts)**
  * **Cards / Lists**

```js
fetch('/api/students')
  .then(res => res.json())
  .then(data => renderTable(data));
```

---

## 🔄 Pagination with `LIMIT` & `OFFSET`

To avoid loading all data at once, SQL supports pagination:

```sql
SELECT * FROM students
ORDER BY score DESC
LIMIT 10 OFFSET 20;
```

* `LIMIT`: max number of records
* `OFFSET`: how many records to skip

### 🔄 Example: Page 3 with 10 items/page

```sql
LIMIT 10 OFFSET 20
```

### 🔄 Backend API Example (Node.js + Express)

```js
app.get('/api/students', async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const students = await db.query(
    'SELECT * FROM students LIMIT $1 OFFSET $2',
    [limit, offset]
  );

  res.json(students.rows);
});
```

---

## 💡 Tips

* Always `ORDER BY` for consistent pagination.
* Use total count queries (`COUNT(*)`) to build paginators.
* Consider using cursors (e.g. `WHERE id > last_id`) for scalable pagination.

---

Want to continue with **Subqueries & CTEs** next?
