Here are the notes in `.md` format for **Filtering & Conditions** in SQL:

---

# 🧮 SQL Filtering & Conditions

SQL filtering allows you to refine data retrieval using conditional logic in the `WHERE` clause.

---

## 🔗 `AND`, `OR`, `NOT`

### `AND`: All conditions must be true.

```sql
SELECT * FROM employees
WHERE department = 'Sales' AND salary > 50000;
```

### `OR`: At least one condition must be true.

```sql
SELECT * FROM employees
WHERE department = 'Sales' OR department = 'HR';
```

### `NOT`: Negates a condition.

```sql
SELECT * FROM products
WHERE NOT category = 'Electronics';
```

---

## 📥 `IN`

Matches any value in a list.

```sql
SELECT * FROM customers
WHERE country IN ('USA', 'Canada', 'Mexico');
```

Equivalent to:

```sql
WHERE country = 'USA' OR country = 'Canada' OR country = 'Mexico';
```

---

## 🎯 `BETWEEN`

Checks if a value falls within a range (inclusive).

```sql
SELECT * FROM orders
WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';
```

---

## 🔍 `LIKE`

Pattern matching with wildcards:

* `%` matches any number of characters
* `_` matches a single character

```sql
SELECT * FROM users
WHERE email LIKE '%@gmail.com';
```

Examples:

```sql
LIKE 'A%'      -- Starts with A  
LIKE '%Z'      -- Ends with Z  
LIKE '_b%'     -- Second letter is b
```

---

## ❓ `IS NULL`, `IS NOT NULL`

Check for presence or absence of a value.

```sql
SELECT * FROM employees
WHERE manager_id IS NULL;

SELECT * FROM employees
WHERE manager_id IS NOT NULL;
```

---

## 🔁 Combined Example

```sql
SELECT name, age FROM students
WHERE grade BETWEEN 80 AND 90
  AND city IN ('Delhi', 'Mumbai')
  AND name LIKE 'A%'
  AND status IS NOT NULL;
```

---

Would you like the next notes on `JOINs`, `GROUP BY`, or `Aggregates`?
