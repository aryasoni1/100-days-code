Here’s a clean, beginner-friendly `.md` formatted note on **OOP in Python – Classes & Objects**:

---

# 🧱 **2. Object-Oriented Programming (OOP) in Python**

> Build **scalable**, **reusable**, and **modular** code using classes and objects.

---

## 🧠 What is OOP?

OOP is a way of structuring code around **objects** — collections of **data (attributes)** and **behaviors (methods)**.

---

## 📦 **1. Classes & Objects**

### 🔹 Class: A blueprint for creating objects

### 🔹 Object: An instance of a class

---

### ✅ Define a Class

```python
class Person:
    def __init__(self, name, age):  # Constructor
        self.name = name
        self.age = age

    def greet(self):
        print(f"Hello, my name is {self.name}.")
```

---

### 🧪 Create Objects (Instances)

```python
p1 = Person("Alice", 30)
p2 = Person("Bob", 25)

p1.greet()  # Hello, my name is Alice.
p2.greet()  # Hello, my name is Bob.
```

---

## 🔑 Key Concepts

| Concept      | Description                              |
| ------------ | ---------------------------------------- |
| `__init__()` | Constructor, runs when object is created |
| `self`       | Refers to the instance itself            |
| Method       | Function defined inside a class          |
| Attribute    | Variable bound to an object              |

---

## 💬 Example with Attributes and Methods

```python
class Car:
    def __init__(self, brand, year):
        self.brand = brand
        self.year = year

    def display_info(self):
        print(f"{self.brand} - {self.year}")

car1 = Car("Toyota", 2020)
car1.display_info()
```

---

## 🔧 Object Modification

```python
car1.year = 2022      # Update attribute
print(car1.year)

del car1.year         # Delete attribute
```

---

Let me know if you'd like the next OOP topic:
**2. Inheritance**, **3. Encapsulation**, or **4. Polymorphism**.
