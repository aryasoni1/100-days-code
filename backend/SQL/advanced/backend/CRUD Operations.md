Here are the `.md` notes for **CRUD Operations**:

---

# 🛠️ CRUD Operations in SQL

CRUD operations are the fundamental operations to interact with a database. They correspond to **Create**, **Read**, **Update**, and **Delete**.

---

## 🚀 CRUD Operations Overview

| Operation  | SQL Command | Description                  |
| ---------- | ----------- | ---------------------------- |
| **Create** | `INSERT`    | Adds new records to a table  |
| **Read**   | `SELECT`    | Retrieves data from a table  |
| **Update** | `UPDATE`    | Modifies existing records    |
| **Delete** | `DELETE`    | Removes records from a table |

---

## ✨ Create (INSERT)

Adds a new record into a table.

```sql
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);
```

### Example:

```sql
INSERT INTO users (name, email, age)
VALUES ('John Doe', 'john.doe@example.com', 30);
```

---

## 🔍 Read (SELECT)

Retrieves data from one or more tables.

```sql
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column;
```

### Example:

```sql
SELECT name, email
FROM users
WHERE age > 18
ORDER BY name;
```

* **`WHERE`**: Filter results based on conditions.
* **`ORDER BY`**: Sort results.

---

## 🔄 Update (UPDATE)

Modifies existing records in a table.

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

### Example:

```sql
UPDATE users
SET age = 31
WHERE name = 'John Doe';
```

* **`WHERE`**: Specifies the records to update (be cautious with updates without a `WHERE` clause).

---

## ❌ Delete (DELETE)

Removes records from a table.

```sql
DELETE FROM table_name
WHERE condition;
```

### Example:

```sql
DELETE FROM users
WHERE age < 18;
```

* **`WHERE`**: Defines the records to delete (be cautious with deletions without a `WHERE` clause).

---

## ⚠️ Important Notes:

* **Always back up data** before performing `DELETE` or `UPDATE` operations.
* **Avoid modifying multiple rows unintentionally**. Ensure the `WHERE` clause is specific enough.

---

Would you like sample queries for more complex `CRUD` operations or examples on joining tables with `CRUD`?
