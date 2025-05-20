Here’s a beginner-friendly `.md` formatted note on **`__init__`, `__str__`, and `__repr__`** in Python classes:

---

# 🧩 **3. `__init__`, `__str__`, `__repr__` in Python**

> These are **special methods** (a.k.a. “dunder” methods) that help define how your objects are **created and represented**.

---

## ⚙️ `__init__` — Object Constructor

Called **automatically** when a new object is created.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p = Person("Alice", 30)
print(p.name)  # Alice
```

> It’s like a setup function for initializing attributes.

---

## 🖋️ `__str__` — Readable String Representation

Defines **what `print(object)` shows**. Good for **users**.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} is {self.age} years old."

p = Person("Bob", 25)
print(p)  # Bob is 25 years old.
```

---

## 🔍 `__repr__` — Developer-Friendly Representation

Used in the **Python shell/debugging**, or when calling `repr(object)`. Should return a **valid Python expression**, ideally.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return f"Person(name='{self.name}', age={self.age})"

p = Person("Charlie", 40)
print(repr(p))  # Person(name='Charlie', age=40)
```

---

## 📋 `__str__` vs `__repr__`

| Method     | Purpose                         | Used by            |
| ---------- | ------------------------------- | ------------------ |
| `__str__`  | User-friendly display           | `print(obj)`       |
| `__repr__` | Debugging/Logging (unambiguous) | `repr(obj)`, shell |

If only `__repr__` is defined, it will be used as fallback for `print()` too.

---

## ✅ Example: Both Together

```python
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def __str__(self):
        return f"{self.name}: ${self.price}"

    def __repr__(self):
        return f"Product('{self.name}', {self.price})"

item = Product("Laptop", 999)
print(item)       # Laptop: $999
print(repr(item)) # Product('Laptop', 999)
```

---

Let me know if you'd like to move on to:

* **Abstraction & Interfaces**
* **Classmethods vs Staticmethods**
* **Operator Overloading (`__add__`, `__eq__`, etc.)**
  or any Python topic next!
