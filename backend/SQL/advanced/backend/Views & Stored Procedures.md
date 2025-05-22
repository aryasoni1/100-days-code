Here are the `.md` notes for **Views & Stored Procedures**:

---

# 🔄 Views & Stored Procedures in SQL

Views and stored procedures are powerful tools in SQL that help manage and organize complex queries and business logic.

## 🖥️ Views in SQL

A **view** is a virtual table based on the result of a query. It allows you to encapsulate complex queries, which makes them reusable and simplifies data retrieval.

### Why Use Views?

* **Encapsulation**: Hide complex queries behind a simple interface.
* **Data Security**: Restrict user access to specific columns or rows of a table by defining views.
* **Simplicity**: Simplify complex joins and aggregations into a single object.
* **Reusability**: A view can be queried just like a regular table, reducing redundancy.

### Creating a View

```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

### Example

```sql
CREATE VIEW employee_details AS
SELECT e.name, e.department, e.salary
FROM employees e
WHERE e.salary > 50000;
```

Now, you can use the `employee_details` view to query employee details:

```sql
SELECT * FROM employee_details;
```

### Modifying a View

If you need to modify an existing view, you must drop and recreate it.

```sql
DROP VIEW view_name;
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name;
```

---

## 📝 Stored Procedures in SQL

A **stored procedure** is a precompiled collection of one or more SQL statements that can be executed by a database server. Stored procedures encapsulate logic and make it reusable, modular, and easy to maintain.

### Why Use Stored Procedures?

* **Encapsulation**: Store complex business logic within the database.
* **Performance**: Stored procedures are precompiled, which makes execution faster.
* **Security**: Stored procedures can be used to restrict direct access to underlying data.
* **Maintainability**: Updates to business logic are centralized and easier to maintain.

### Creating a Stored Procedure

```sql
CREATE PROCEDURE procedure_name (parameter1 data_type, parameter2 data_type)
BEGIN
    SQL statements;
END;
```

### Example

```sql
CREATE PROCEDURE GetEmployeeDetails (IN emp_id INT)
BEGIN
    SELECT name, department, salary
    FROM employees
    WHERE employee_id = emp_id;
END;
```

### Executing a Stored Procedure

```sql
CALL GetEmployeeDetails(1);
```

This would retrieve the details of the employee with `employee_id = 1`.

### Modifying a Stored Procedure

To modify a stored procedure, you need to drop and recreate it:

```sql
DROP PROCEDURE IF EXISTS procedure_name;
CREATE PROCEDURE procedure_name (parameters) BEGIN ... END;
```

---

## ✨ Key Differences Between Views and Stored Procedures

| Feature            | Views                                    | Stored Procedures                        |
| ------------------ | ---------------------------------------- | ---------------------------------------- |
| **Purpose**        | Virtual table for simplified queries     | Encapsulated business logic              |
| **Usage**          | Querying like a table                    | Executing SQL logic                      |
| **Data Retrieval** | Direct query result                      | Can have input/output parameters         |
| **Performance**    | Can be slower due to real-time execution | Faster due to precompiled logic          |
| **Modify Data**    | Not directly modifiable (only select)    | Can modify data (INSERT, UPDATE, DELETE) |
| **Reusability**    | Yes (simplifies complex queries)         | Yes (encapsulates logic for reuse)       |

---

## 💡 Example of Combining Views and Stored Procedures

1. **Create a View** to simplify data retrieval:

   ```sql
   CREATE VIEW employee_details AS
   SELECT name, department, salary
   FROM employees
   WHERE salary > 50000;
   ```

2. **Create a Stored Procedure** to interact with the view:

   ```sql
   CREATE PROCEDURE GetEmployeeSalary (IN dept_name VARCHAR(50))
   BEGIN
       SELECT * 
       FROM employee_details
       WHERE department = dept_name;
   END;
   ```

3. **Call the Stored Procedure** to get results:

   ```sql
   CALL GetEmployeeSalary('Sales');
   ```

This will return all employees in the "Sales" department with a salary greater than 50,000.

---

## 🚨 Important Notes:

* **Views** are useful for simplifying complex queries, but they cannot accept parameters or modify data directly.
* **Stored Procedures** are ideal for complex logic that involves input parameters, decision-making, or modifying the data.
* **Performance**: Using views in certain cases may lead to performance issues due to the real-time computation of complex queries, whereas stored procedures are precompiled for faster execution.

---

Let me know if you'd like to dive deeper into any specific area related to views or stored procedures!
