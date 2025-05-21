Here’s a beginner-friendly `.md` formatted note on **Dunder Methods** (also known as **Magic Methods**) in Python:

---

# ✨ **Dunder Methods in Python (`__add__`, `__len__`, etc.)**

> Dunder = “Double UNDERSCORE” — special methods with names like `__init__`, `__str__`, `__add__`, used to define **object behavior**.

---

## 🔍 **What Are Dunder Methods?**

Dunder (magic) methods let you:

* Customize how your object behaves with built-in Python operations.
* Enable things like `+`, `len()`, `print()`, `==`, and more.

---

## 🧱 **Commonly Used Dunder Methods**

| Method        | Purpose                             | Example Usage             |
| ------------- | ----------------------------------- | ------------------------- |
| `__init__`    | Constructor                         | Called on object creation |
| `__str__`     | String representation (for `print`) | `str(obj)`                |
| `__repr__`    | Official string representation      | `repr(obj)`               |
| `__len__`     | Length of the object                | `len(obj)`                |
| `__add__`     | Define `+` behavior                 | `obj1 + obj2`             |
| `__eq__`      | Equality check with `==`            | `obj1 == obj2`            |
| `__getitem__` | Enable indexing                     | `obj[0]`                  |

---

## 🧪 **Example: Custom Class with Dunder Methods**

```python
class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"{self.title} ({self.pages} pages)"

    def __len__(self):
        return self.pages

    def __add__(self, other):
        return self.pages + other.pages
```

```python
b1 = Book("Python 101", 300)
b2 = Book("Advanced Python", 400)

print(str(b1))       # Python 101 (300 pages)
print(len(b2))       # 400
print(b1 + b2)       # 700
```

---

## 🛠️ **Why Use Dunder Methods?**

* Improve **readability** and **developer experience**
* Integrate custom classes into Python's **standard operations**
* Make classes behave like **built-in types**

---

## ✅ Best Practices

* Use `__str__` for readable strings (for users), `__repr__` for debug output.
* Don’t overuse — only implement dunder methods that improve your object’s **interface**.

---

## 🧠 Pro Tip

Dunder methods power **many Python features**:

* Iteration (`__iter__`, `__next__`)
* Context managers (`__enter__`, `__exit__`)
* Comparisons (`__lt__`, `__gt__`, `__eq__`)

---

Let me know if you want to explore:

* **Custom iteration with `__iter__`**
* **Context managers using `with`**
* **All operator overloads (`__sub__`, `__mul__`, etc.)**
  or deeper Python OOP concepts!
