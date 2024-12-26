*PL/SQL: Procedural Language/SQL
<details>Purpose:
Manage data in Oracle databases.
Extend SQL with procedural capabilities (loops, conditional statements, etc.).
Key Features:
Combines SQL for data manipulation with procedural programming.
Enables complex database operations beyond simple SQL queries.
Improves efficiency and performance for database tasks.
Key Feature: Combines SQL (data manipulation) with procedural programming.
Origin: Developed by Oracle in the early 1990s.
Integration: Works seamlessly with Oracle tools like SQL*Plus.
Superset of SQL: Includes all SQL commands and data types.
Anonymous Block: A PL/SQL block without a name.
Components: Includes functions, procedures, triggers, packages, and more.</details>

*The following points should be remembered while writing a PL/SQL program –
<details>
Semicolon Usage:
Semicolon (;) after each SQL statement and PL/SQL control statement.
No semicolon after DECLARE, BEGIN, or EXCEPTION keywords.
Code Planning:
Define clear goals and capabilities before coding.
Use meaningful and descriptive identifiers (variable names, etc.).
Version Control:
Utilize version control systems (like Git) to track code changes.
Security:
Minimize the use of universal variables.
Adhere to the principle of least privilege (grant only necessary permissions).
Transaction Management:
Use COMMIT and ROLLBACK for proper transaction control.</details>

*Features of PL/SQL :
<details>
Platform Independence: Runs on various operating systems (Windows, Linux, etc.).
Error Handling: Provides error checking and user-friendly error messages.
Debugging & Logging: Supports debugging and logging capabilities, including exception handling.
Dynamic SQL Execution: Allows for dynamic execution of SQL statements.
Triggers: Automatically executes stored procedures based on data events (INSERT, UPDATE, DELETE).
Cursor Support: Enables efficient handling of multi-row queries.
Data Declaration: Supports declaration of variables and constants for data storage.</details>

*What do you mean by PL/SQL Architecture?
<details>
PL/SQL Runtime System:

Not an independent product but an engine that executes PL/SQL blocks and subprograms.
Found within the Oracle Server and various Oracle development tools.
PL/SQL Environments:

Oracle Server: Executes PL/SQL within the database itself.
Oracle Tools: Executes PL/SQL within tools like Forms Builder, Reports Builder.
Code Execution:

PL/SQL engine handles the procedural part.
SQL statements are passed to the SQL executor within the Oracle Server.
Single transfer to the server improves performance, especially in client-server networks.
Stored Subprograms: PL/SQL code can be stored as subprograms (functions, procedures) in the database for reuse by multiple applications.</details>

*Advantages of PL/SQL
<details>
Enhanced Performance:

Executes code within the database server, minimizing network traffic.
Reduces round-trip times between the application and database.
Optimizes data retrieval and manipulation.
Increased Productivity:

Reusability of code through stored procedures and functions.
Improved code maintainability and modularity.
Simplified complex database operations.
Object-Oriented Programming (OOP) Support:

Enables encapsulation, inheritance, and polymorphism for better code organization and reusability.
Scalability and Manageability:

Centralized code management within the database.
Easier to maintain and update complex database logic.
Web Application Development:

Supports various web development tools for building dynamic and data-driven web applications.
</details>
*Disadvantages of PL/SQL
<details>
Memory Consumption:

Can consume significant server memory, especially for complex procedures.
Debugging Limitations:

Debugging stored procedures can be challenging compared to other programming languages.
Oracle Dependency:

Primarily designed for Oracle databases, limiting portability to other database systems.
</details>
*PL/SQL Blocks
<details>
Structure: PL/SQL code is organized into blocks.
Components:
Declaration Section:
Declares variables, constants, cursors, and other objects.
Initializes variables if needed.
Executable Section (BEGIN...END):
Contains SQL and PL/SQL statements for data manipulation, retrieval, looping, and branching.
Exception Handling Section (EXCEPTION):
Handles errors that occur during execution (syntax errors, logic errors, validation rule violations).
Termination:
The END keyword marks the end of the PL/SQL block.

*PL/SQL Blocks: Anonymous vs. Named

**1. Anonymous Blocks

Definition: PL/SQL blocks without a header or name.
Structure:
DECLARE section: Declares variables, constants, cursors, etc.
BEGIN section: Contains executable statements (SQL, PL/SQL).
EXCEPTION section: Handles errors.
END;
Execution: Executed once and then discarded.
Example: Your provided example demonstrates finding the maximum of two numbers using an anonymous block.
**2. Named Blocks

Definition: PL/SQL blocks with a header or name.
Types: Functions, procedures, packages, triggers.
Characteristics:
Can be stored in the database for reusability.
Can be called from other PL/SQL blocks.
Improve code organization and maintainability.
Example: Your provided example demonstrates finding the maximum of two numbers using a named block (a function).
**Key Differences

Feature    Anonymous Block    Named Block
Header    No header    Has a header (function, procedure, etc.)
Reusability    Not reusable    Reusable
Storage    Not stored in database    Can be stored in database
Calling    Executed directly    Can be called from other blocks

In Summary

Anonymous blocks are suitable for simple, one-time operations.
Named blocks are advantageous for complex logic, code reusability, and improved code maintainability.
</details>


