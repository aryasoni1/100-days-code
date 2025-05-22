Here are the notes in `.md` format for **Joins & Relationships** in SQL:

---

# 🔗 Joins & Relationships in SQL

Understanding how to relate data across multiple tables using SQL joins is key to working with relational databases.

---

## 🔑 Foreign Keys & Normalization

### **Foreign Key**

* A field in one table that references the primary key of another table.
* Ensures referential integrity between related tables.

```sql
CREATE TABLE orders (
  order_id INT PRIMARY KEY,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

### **Normalization**

* Organizing data into multiple related tables to reduce redundancy.
* **Forms**:

  * 1NF: Eliminate repeating groups
  * 2NF: Eliminate partial dependencies
  * 3NF: Eliminate transitive dependencies

---

## 🤝 Types of Joins

### 1. `INNER JOIN`

Returns rows when there is a match in both tables.

```sql
SELECT customers.name, orders.order_date
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id;
```

### 2. `LEFT JOIN` (or `LEFT OUTER JOIN`)

Returns all rows from the left table, plus matching rows from the right table (or NULLs).

```sql
SELECT customers.name, orders.order_date
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;
```

### 3. `RIGHT JOIN` (or `RIGHT OUTER JOIN`)

Returns all rows from the right table, plus matching rows from the left table (or NULLs).

```sql
SELECT customers.name, orders.order_date
FROM customers
RIGHT JOIN orders ON customers.id = orders.customer_id;
```

### 4. `FULL OUTER JOIN`

Returns all rows from both tables. Rows without matches will have NULLs.

```sql
SELECT customers.name, orders.order_date
FROM customers
FULL OUTER JOIN orders ON customers.id = orders.customer_id;
```

Note: Not all SQL engines (e.g., MySQL) support `FULL OUTER JOIN` directly. You can simulate it with `UNION`.

---

## 📘 Example Use Case

**Tables:**

* `students(student_id, name)`
* `enrollments(student_id, course_id)`
* `courses(course_id, title)`

```sql
SELECT students.name, courses.title
FROM students
INNER JOIN enrollments ON students.student_id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.course_id;
```

---

Would you like notes next on `GROUP BY & Aggregation` or `Subqueries & CTEs`?
