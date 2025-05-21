Here’s a beginner-friendly `.md` formatted note on **Decorators** in Python, great for mastering function-level enhancements like logging, authentication, etc.

---

# 🎁 **Python Decorators**

> A **decorator** is a function that **wraps another function** to modify or enhance its behavior **without changing its code**.

---

## 🧠 Why Use Decorators?

* **DRY** code (Don't Repeat Yourself)
* Reusable logic like:

  * Logging
  * Authorization
  * Timing execution
  * Input validation

---

## 🧱 Basic Decorator Structure

```python
def my_decorator(func):
    def wrapper():
        print("Before function runs")
        func()
        print("After function runs")
    return wrapper
```

### ✅ Usage

```python
@my_decorator
def say_hello():
    print("Hello!")

say_hello()
```

🧾 Output:

```
Before function runs
Hello!
After function runs
```

---

## 📥 With Function Arguments

```python
def log_args(func):
    def wrapper(*args, **kwargs):
        print(f"Arguments: {args}")
        return func(*args, **kwargs)
    return wrapper

@log_args
def add(x, y):
    return x + y

add(3, 5)
```

---

## 🔐 Decorator for Authentication

```python
def require_login(func):
    def wrapper(user, *args, **kwargs):
        if not user.get("is_authenticated"):
            return "Access Denied"
        return func(user, *args, **kwargs)
    return wrapper

@require_login
def view_profile(user):
    return f"Welcome {user['name']}"
```

---

## 🪵 Logging Example

```python
def logger(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@logger
def multiply(a, b):
    return a * b
```

---

## 🛠️ Built-in Decorators

* `@staticmethod`
* `@classmethod`
* `@property`

---

## 🧪 Using `functools.wraps`

To preserve the original function’s name, docstring, etc.:

```python
from functools import wraps

def decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper
```

---

## ✅ Summary

| Term              | Meaning                              |
| ----------------- | ------------------------------------ |
| Decorator         | Function that wraps/enhances another |
| `@` Syntax        | Syntactic sugar to apply decorators  |
| `*args, **kwargs` | Makes decorator flexible             |
| `functools.wraps` | Keeps original function metadata     |

---

Let me know if you’d like real-world decorator examples for:

* Flask routes
* Caching with `lru_cache`
* Role-based access control (RBAC)
