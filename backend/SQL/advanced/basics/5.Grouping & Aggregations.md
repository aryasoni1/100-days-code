Here are the notes in `.md` format for **Grouping & Aggregations** in SQL:

---

# 📊 Grouping & Aggregations in SQL

Aggregation functions allow you to perform calculations on a set of rows, and `GROUP BY` organizes those rows into groups for summarization.

---

## 🧮 Aggregate Functions

| Function  | Description               |
| --------- | ------------------------- |
| `COUNT()` | Counts the number of rows |
| `SUM()`   | Adds up values            |
| `AVG()`   | Calculates average        |
| `MAX()`   | Finds maximum value       |
| `MIN()`   | Finds minimum value       |

```sql
SELECT department, COUNT(*) AS employee_count
FROM employees;
```

---

## 🔗 GROUP BY

Groups rows that have the same values in specified columns into summary rows.

```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;
```

* Every column in `SELECT` not in an aggregate function must appear in `GROUP BY`.

---

## 🎯 HAVING Clause

* Filters groups created by `GROUP BY`.
* Works like `WHERE`, but on aggregated data.

```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;
```

---

## ✅ Example: Sales Summary

```sql
SELECT salesperson_id, SUM(amount) AS total_sales, AVG(amount) AS avg_sale
FROM sales
GROUP BY salesperson_id
HAVING SUM(amount) > 1000;
```

---

## 💡 Notes

* `WHERE` filters **rows** before grouping.
* `HAVING` filters **groups** after aggregation.
* `GROUP BY` is often used with aggregate functions.

---

Would you like notes next on `Subqueries & CTEs` or another topic?
