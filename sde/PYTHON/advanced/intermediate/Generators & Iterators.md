Here's a beginner-friendly `.md` formatted note on **Generators & Iterators** in Python:

---

# 🔁 **Generators & Iterators in Python**

> Efficiently handle large or infinite sequences using **generators**, **`yield`**, and **iterators**.

---

## 🧱 **What Is an Iterator?**

An **iterator** is an object that can be **looped over**.

### ✅ Key Methods:

* `__iter__()` → returns the iterator object
* `__next__()` → returns the next value

### 🔍 Example:

```python
nums = iter([1, 2, 3])
print(next(nums))  # 1
print(next(nums))  # 2
```

---

## ⚡ **What Is a Generator?**

A **generator** is a **special function** that returns an iterator using the `yield` keyword.

### ✅ Benefits:

* **Memory-efficient** (doesn’t load all items into memory)
* **Lazy evaluation** (values are produced on demand)

---

## 🧪 **Generator Function Example**

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1

for num in countdown(3):
    print(num)
# Output: 3 2 1
```

---

## 🧬 **How `yield` Works**

* Pauses the function
* Remembers its state
* Resumes from the same point on the next `next()` call

---

## 💡 Generator Expression (One-liner)

Similar to list comprehension but lazy:

```python
gen = (x**2 for x in range(5))
print(next(gen))  # 0
print(next(gen))  # 1
```

---

## 🧠 Why Use Generators?

| Feature            | Benefit                          |
| ------------------ | -------------------------------- |
| Lazy evaluation    | Processes one item at a time     |
| Memory-efficient   | Great for large datasets         |
| Infinite sequences | Easily define never-ending loops |

---

## 🧯 Caution

* You can loop through a generator **only once**
* Calling `next()` after exhaustion raises `StopIteration`

---

## ✅ Summary

| Concept        | Keyword/Method         | Purpose                                 |
| -------------- | ---------------------- | --------------------------------------- |
| Iterator       | `__iter__`, `__next__` | Loopable object                         |
| Generator      | `yield`                | Pausable function that returns iterator |
| Generator Expr | `(x for x in ...)`     | Lazy one-liner generator                |

---

Let me know if you'd like follow-up notes on:

* **Coroutines & `send()`**
* **Context managers with generators**
* **Chaining generators for pipelines**
