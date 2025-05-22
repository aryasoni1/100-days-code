Here are the `.md` notes for **Schema Design**:

---

# 🗃️ Schema Design in SQL

Designing an efficient database schema is critical for data integrity, performance, and scalability. This involves setting up tables, selecting data types, defining keys, and structuring data relationships properly.

---

## 🧱 Basic Components

### 📋 Tables

* Represent entities like `users`, `orders`, `products`.
* Contain rows (records) and columns (fields).

### 🔤 Data Types

| Type                | Description                       |
| ------------------- | --------------------------------- |
| `INT`               | Whole numbers                     |
| `VARCHAR(n)`        | Strings with length limit         |
| `TEXT`              | Long-form strings                 |
| `BOOLEAN`           | True/false values                 |
| `DATE`, `TIMESTAMP` | Time-based fields                 |
| `DECIMAL(p,s)`      | Fixed-point numbers (e.g., money) |

---

## 🔑 Keys

### Primary Key

* Uniquely identifies each row.
* Must be `NOT NULL` and unique.

```sql
id INT PRIMARY KEY
```

### Foreign Key

* Creates a link between two tables.
* Enforces referential integrity.

```sql
user_id INT REFERENCES users(id)
```

---

## 📐 Normalization

Normalization reduces data redundancy and improves data integrity.

### 1NF (First Normal Form)

* Eliminate repeating groups.
* Ensure each field contains atomic values.

### 2NF (Second Normal Form)

* Remove partial dependencies.
* Every non-key column must depend on the entire primary key.

### 3NF (Third Normal Form)

* Remove transitive dependencies.
* Non-key columns should not depend on other non-key columns.

---

## ⚙️ Indexing Strategies

* **Indexes** improve query speed for large datasets.
* Automatically created on primary/foreign keys.

```sql
CREATE INDEX idx_email ON users(email);
```

* Use on columns frequently used in:

  * `WHERE`
  * `JOIN`
  * `ORDER BY`
  * `GROUP BY`

**Note**: Over-indexing slows down writes (INSERT, UPDATE, DELETE).

---

## 🧩 Example ER Diagram

```
Users
-----
id (PK)
name
email

Orders
-------
id (PK)
user_id (FK) → Users.id
order_date
total
```

---

Would you like a visual ERD diagram template or sample SQL schema code to go with this?
