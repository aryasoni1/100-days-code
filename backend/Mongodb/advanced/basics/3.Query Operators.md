Here’s your beginner-friendly, Markdown-formatted note on **MongoDB Query Operators**:

---

# 🔍 MongoDB Query Operators

---

## 🧾 What Are Query Operators?

Query operators in MongoDB allow you to **filter documents** based on conditions like comparisons, logic, array values, or element properties.

They are used inside queries like:

```js
db.collection.find({ field: { $operator: value } });
```

---

## 🔢 **Comparison Operators**

| Operator | Meaning               | Example Usage                             |
| -------- | --------------------- | ----------------------------------------- |
| `$eq`    | Equals                | `{ age: { $eq: 25 } }`                    |
| `$gt`    | Greater than          | `{ age: { $gt: 18 } }`                    |
| `$gte`   | Greater than or equal | `{ age: { $gte: 21 } }`                   |
| `$lt`    | Less than             | `{ age: { $lt: 30 } }`                    |
| `$lte`   | Less than or equal    | `{ age: { $lte: 40 } }`                   |
| `$ne`    | Not equal             | `{ status: { $ne: 'inactive' } }`         |
| `$in`    | Matches any in array  | `{ name: { $in: ['Alice', 'Bob'] } }`     |
| `$nin`   | Not in array          | `{ city: { $nin: ['London', 'Paris'] } }` |

---

## ⚙️ **Logical Operators**

| Operator | Meaning                     | Example                                                    |
| -------- | --------------------------- | ---------------------------------------------------------- |
| `$or`    | Any of the conditions match | `{ $or: [ { age: { $lt: 18 } }, { age: { $gt: 60 } } ] }`  |
| `$and`   | All conditions must match   | `{ $and: [ { age: { $gt: 18 } }, { age: { $lt: 65 } } ] }` |
| `$not`   | Reverses the condition      | `{ age: { $not: { $gt: 30 } } }`                           |

---

## 🧬 **Element Operators**

| Operator  | Meaning               | Example                        |
| --------- | --------------------- | ------------------------------ |
| `$exists` | Field exists or not   | `{ email: { $exists: true } }` |
| `$type`   | Match field data type | `{ age: { $type: "number" } }` |

> You can use `"string"`, `"number"`, `"array"`, etc.

---

## 🧮 **Array Operators**

| Operator     | Meaning                                                  | Example                                            |
| ------------ | -------------------------------------------------------- | -------------------------------------------------- |
| `$all`       | Array contains **all values**                            | `{ tags: { $all: ['node', 'js'] } }`               |
| `$elemMatch` | Match **at least one element** that meets all conditions | `{ scores: { $elemMatch: { $gt: 80, $lt: 90 } } }` |
| `$size`      | Match arrays with specific length                        | `{ tags: { $size: 3 } }`                           |

---

## 🧠 Summary

| Type       | Operators                        |
| ---------- | -------------------------------- |
| Comparison | `$eq`, `$gt`, `$lt`, `$in`, etc. |
| Logical    | `$or`, `$and`, `$not`            |
| Element    | `$exists`, `$type`               |
| Array      | `$all`, `$elemMatch`, `$size`    |

---

## ✅ Best Practices

* Combine operators to build **complex queries**.
* Use `$elemMatch` for nested arrays with multiple conditions.
* Always index commonly queried fields for **performance**.

---

Want examples using these operators in real-world Mongoose queries or nested document structures? Let me know!
