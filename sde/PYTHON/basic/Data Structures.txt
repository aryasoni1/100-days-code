Here’s a clear and beginner-friendly `.md` note on **Data Structures in Python**:

---

# 🧱 **Python Data Structures**

> Learn Python's core data structures to efficiently **store**, **access**, and **manipulate** data.

---

## 📋 **1. Lists**

Ordered, mutable collections (can change).

```python
fruits = ["apple", "banana", "mango"]
```

### ✅ Common Methods

```python
fruits.append("orange")     # Add to end
fruits.pop()                # Remove last item
fruits.remove("banana")     # Remove by value
fruits.sort()               # Sort list
```

Access elements with indexing:

```python
print(fruits[0])  # apple
```

---

## 📦 **2. Tuples**

Ordered, **immutable** collections (cannot change).

```python
point = (3, 4)
```

Use when data **should not be modified**.

---

## 🔢 **3. Sets**

Unordered, unique items only.

```python
numbers = {1, 2, 2, 3}
print(numbers)  # {1, 2, 3}
```

### ✅ Set Methods

```python
numbers.add(4)
numbers.remove(2)
numbers.union({5, 6})
numbers.intersection({3, 4})
```

Useful for **eliminating duplicates**.

---

## 📚 **4. Dictionaries**

Key-value pairs (unordered).

```python
person = {
  "name": "Alice",
  "age": 30
}
```

### ✅ Dictionary Methods

```python
person["name"]          # Access value
person.get("age")       # Safe access
person.keys()           # Get all keys
person.values()         # Get all values
person.items()          # Get key-value pairs
```

---

## 🧠 Summary Table

| Structure  | Ordered | Mutable | Unique Values | Syntax           |
| ---------- | ------- | ------- | ------------- | ---------------- |
| List       | ✅ Yes   | ✅ Yes   | ❌ No          | `[]`             |
| Tuple      | ✅ Yes   | ❌ No    | ❌ No          | `()`             |
| Set        | ❌ No    | ✅ Yes   | ✅ Yes         | `{}` or `set()`  |
| Dictionary | ❌ No    | ✅ Yes   | Keys = Unique | `{ key: value }` |

---

## 🧪 Pro Tip

You can mix and nest data types:

```python
students = [
  {"name": "Alice", "marks": [90, 85]},
  {"name": "Bob", "marks": [75, 80]}
]
```

---

Let me know if you want the next topic: **Error Handling**, **OOP**, or **File I/O**!
