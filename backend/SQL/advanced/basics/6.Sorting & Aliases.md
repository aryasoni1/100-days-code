Here are the notes in `.md` format for **Sorting & Aliases** in SQL:

---

# 🔤 Sorting & Aliases in SQL

Sorting results and using aliases helps make queries readable and results organized.

---

## 🗂️ `ORDER BY`

Used to sort the result set.

```sql
SELECT name, salary
FROM employees
ORDER BY salary DESC;
```

* `ASC` = Ascending (default)
* `DESC` = Descending

Sort by multiple columns:

```sql
ORDER BY department ASC, salary DESC;
```

---

## 🏷️ `AS` (Aliases)

Renames columns or tables temporarily in the query result.

```sql
SELECT name AS employee_name, salary AS monthly_salary
FROM employees;
```

Alias for tables:

```sql
SELECT e.name, d.name
FROM employees AS e
JOIN departments AS d ON e.dept_id = d.id;
```

* Improves readability
* Shortens query length

---

## 🎛️ `CASE` Expression

Implements conditional logic in SQL.

```sql
SELECT name,
       salary,
       CASE 
         WHEN salary >= 100000 THEN 'High'
         WHEN salary >= 50000 THEN 'Medium'
         ELSE 'Low'
       END AS salary_range
FROM employees;
```

* Acts like `if/else`
* Returns a value based on conditions

---

## 💡 Tips

* Always use `AS` to make output clear
* `ORDER BY` works with column names, aliases, or index (`ORDER BY 2`)
* `CASE` can be used in `SELECT`, `WHERE`, `ORDER BY`

---

Would you like to continue with `Subqueries & CTEs` next?
