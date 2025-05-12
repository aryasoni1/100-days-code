Here are the `.md` notes for **Transactions & ACID**:

---

# 🏦 Transactions & ACID in SQL

Transactions in SQL are used to group multiple operations into a single unit of work. This ensures that all operations are completed successfully or, if any part fails, all changes are rolled back to maintain consistency.

## 🔑 ACID Properties

ACID stands for:

1. **Atomicity**: Ensures that all operations in a transaction are treated as a single unit. If one operation fails, the entire transaction is rolled back.
2. **Consistency**: Ensures that the database starts in a consistent state and ends in a consistent state after the transaction.
3. **Isolation**: Ensures that transactions are isolated from each other. Each transaction's operations are not visible to other transactions until it is committed.
4. **Durability**: Ensures that once a transaction is committed, the changes are permanent, even if the database crashes.

---

## 🛠️ SQL Transaction Commands

### `BEGIN` (Start Transaction)

Starts a new transaction. In most SQL engines, this begins a block of operations that can be committed or rolled back.

```sql
BEGIN;
```

### `COMMIT` (Save Changes)

Saves all changes made during the transaction permanently to the database.

```sql
COMMIT;
```

### `ROLLBACK` (Undo Changes)

Undoes any changes made during the current transaction and rolls the database back to its previous consistent state.

```sql
ROLLBACK;
```

---

## 🧪 Isolation Levels

Isolation levels define the degree to which a transaction must be isolated from the others. The following isolation levels are commonly used:

1. **READ UNCOMMITTED**: Allows dirty reads (one transaction can read uncommitted data from another transaction).
2. **READ COMMITTED**: Prevents dirty reads, but non-repeatable reads can occur (data can change between reads within a transaction).
3. **REPEATABLE READ**: Prevents dirty and non-repeatable reads, but phantom reads (inserts) can still occur.
4. **SERIALIZABLE**: Provides the highest isolation level, where transactions are executed in a serial fashion, preventing dirty reads, non-repeatable reads, and phantom reads.

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

---

## 🛑 Example of a Transaction

```sql
BEGIN;

-- First operation: Insert a new user
INSERT INTO users (name, email) 
VALUES ('John Doe', 'john.doe@example.com');

-- Second operation: Update user's age
UPDATE users 
SET age = 30 
WHERE name = 'John Doe';

-- If no errors, commit changes
COMMIT;
```

If there's an error in any part of the transaction:

```sql
ROLLBACK;
```

---

## 🚨 Important Notes:

* **Atomicity** ensures that partial updates are not visible. If a transaction fails, all operations are undone.
* **Isolation** ensures that concurrent transactions do not interfere with each other. This can be managed by setting isolation levels.
* **Durability** ensures that committed data is permanently written, even after a crash.

---

Would you like an example of handling transactions in a specific SQL engine (e.g., MySQL, PostgreSQL) or with specific isolation level adjustments?
