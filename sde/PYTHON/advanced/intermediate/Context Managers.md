Here’s a beginner-friendly `.md` formatted note on **Context Managers** in Python:

---

# 📦 **Context Managers in Python**

> A **Context Manager** is a way to **manage resources (like files, DB connections, locks)** safely using `with` statements. It ensures setup and cleanup logic is handled automatically.

---

## ✅ Why Use Context Managers?

* Automatically close files
* Handle exceptions gracefully
* Avoid boilerplate try-finally blocks

---

## 🔍 Basic Usage with `with`

```python
with open("example.txt", "r") as file:
    content = file.read()
# file is automatically closed here
```

---

## 🛠️ Create a Custom Context Manager

### Method 1: Using `__enter__` and `__exit__`

```python
class MyManager:
    def __enter__(self):
        print("Entering context")
        return "Resource Ready"

    def __exit__(self, exc_type, exc_value, traceback):
        print("Exiting context")

with MyManager() as resource:
    print(resource)
```

🧾 Output:

```
Entering context  
Resource Ready  
Exiting context
```

### ✅ `__exit__` Parameters:

| Parameter   | Purpose                 |
| ----------- | ----------------------- |
| `exc_type`  | Exception type (if any) |
| `exc_value` | Exception object        |
| `traceback` | Stack trace             |

If you return `True` from `__exit__`, it **suppresses the exception**.

---

## 🔁 Method 2: Using `contextlib`

```python
from contextlib import contextmanager

@contextmanager
def my_context():
    print("Start")
    yield "Resource"
    print("Cleanup")

with my_context() as res:
    print(res)
```

---

## 📘 Real-World Use Cases

* File operations
* Database connections
* Locking (e.g., threading/multiprocessing)
* Temporary environments/config changes

---

## ✅ Summary

| Concept          | Usage Example               |
| ---------------- | --------------------------- |
| `with` statement | Manages setup/teardown      |
| `__enter__()`    | Runs when block starts      |
| `__exit__()`     | Runs when block ends        |
| `contextlib`     | Simpler syntax with `yield` |

---

Let me know if you want examples using:

* File handling
* SQLite DB with context manager
* Thread lock context usage (`threading.Lock`)
