Here's a beginner-friendly `.md` formatted note on **Exception Handling** in Python:

---

# ⚠️ **Exception Handling in Python**

> Handle errors **gracefully** using `try-except` blocks instead of crashing your program.

---

## 🔍 **Why Exception Handling?**

Without it, errors like dividing by zero or reading a missing file will **crash your program**.

```python
print(10 / 0)  # ZeroDivisionError ❌
```

---

## ✅ **Basic `try-except` Block**

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero!")
```

---

## 🧾 **Catching Multiple Exceptions**

```python
try:
    number = int("abc")
except ValueError:
    print("Invalid number!")
except Exception as e:
    print("Some other error:", e)
```

---

## 🧹 **`finally` Block**

Runs **no matter what**, even if there’s an exception:

```python
try:
    file = open("data.txt")
except FileNotFoundError:
    print("File not found.")
finally:
    print("Execution finished.")
```

> Great for closing files, cleaning up resources, etc.

---

## 🧱 **Custom Exceptions**

Create your own errors using classes:

```python
class NegativeNumberError(Exception):
    pass

def square_root(x):
    if x < 0:
        raise NegativeNumberError("No square root for negative numbers")
    return x ** 0.5

try:
    print(square_root(-4))
except NegativeNumberError as e:
    print(e)
```

---

## 🧠 Summary

| Keyword          | Purpose                              |
| ---------------- | ------------------------------------ |
| `try`            | Wrap risky code                      |
| `except`         | Catch specific or general exceptions |
| `finally`        | Always runs (cleanup/logs)           |
| `raise`          | Manually throw an exception          |
| Custom Exception | Subclass of `Exception`              |

---

Let me know if you want the next topic: **OOP**, **Modules & Packages**, or **Working with APIs**!
