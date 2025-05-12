Here are the notes in `.md` format for **Basic Queries** in SQL:

---

# 🧾 SQL Basic Queries

SQL (Structured Query Language) allows for retrieving and filtering data from relational databases using a set of fundamental commands.

---

## 🔍 SELECT

Used to retrieve specific columns from a table.

```sql
SELECT column1, column2 FROM table_name;
-- Selects column1 and column2 from the table
```

To select all columns:

```sql
SELECT * FROM table_name;
```

---

## 📦 FROM

Specifies the table to retrieve the data from.

```sql
SELECT name FROM employees;
```

---

## 🧮 WHERE

Filters rows based on conditions.

```sql
SELECT * FROM products
WHERE price > 100;
```

### Common Operators:

* `=`, `!=`, `<`, `>`, `<=`, `>=`
* `BETWEEN`, `IN`, `LIKE`, `IS NULL`

```sql
SELECT * FROM users
WHERE email LIKE '%@gmail.com';
```

---

## 📊 ORDER BY

Sorts the result set by one or more columns.

```sql
SELECT name, salary FROM employees
ORDER BY salary DESC;
```

* `ASC` → ascending (default)
* `DESC` → descending

---

## 🎯 LIMIT

Restricts the number of rows returned.

```sql
SELECT * FROM customers
LIMIT 5;
```

Useful for pagination:

```sql
SELECT * FROM orders
LIMIT 10 OFFSET 20;
```

---

## 🚫 DISTINCT

Removes duplicate values from the result.

```sql
SELECT DISTINCT department FROM employees;
```

---

## 📝 Example Combined Query

```sql
SELECT DISTINCT name, age FROM students
WHERE grade > 75
ORDER BY age DESC
LIMIT 10;
```

---

Would you like notes next on `JOIN`s or `INSERT/UPDATE/DELETE` operations?
