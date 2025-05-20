Here’s a clear and beginner-friendly `.md` formatted note on the **Core OOP Principles: Encapsulation, Inheritance, and Polymorphism** in Python:

---

# 🧠 **OOP Principles in Python**

> Take your Python skills beyond basic classes — learn how to **encapsulate**, **reuse**, and **extend** logic the right way.

---

## 🔒 **1. Encapsulation**

**Hide internal details and expose only what’s necessary.**

* Protects data from unauthorized access.
* Achieved using private variables/methods (convention: `_` or `__`).

```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # private

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

acc = BankAccount("Alice", 1000)
acc.deposit(200)
print(acc.get_balance())  # ✅ 1200
# print(acc.__balance)   ❌ Error (private)
```

---

## 👪 **2. Inheritance**

**Child classes inherit properties and methods from a parent class.**

* Promotes **code reusability**.
* Use `super()` to call parent methods.

```python
class Animal:
    def speak(self):
        print("Some generic sound")

class Dog(Animal):
    def speak(self):
        print("Woof!")

class Cat(Animal):
    def speak(self):
        print("Meow")

d = Dog()
c = Cat()
d.speak()  # Woof!
c.speak()  # Meow
```

---

## 🌀 **3. Polymorphism**

**Same method name behaves differently based on the object.**

* Method overriding (as above) is one way.
* Works great with loops and functions.

```python
animals = [Dog(), Cat()]

for animal in animals:
    animal.speak()  # Calls appropriate method based on object
```

> This is **polymorphism** in action: one interface, many forms.

---

## ✅ Summary

| Principle     | What it Does                         |
| ------------- | ------------------------------------ |
| Encapsulation | Hides internal details of an object  |
| Inheritance   | Reuses code from a parent class      |
| Polymorphism  | Methods behave differently by object |

---

Let me know if you'd like to continue with:

* **Abstraction in OOP**
* **Composition vs Inheritance**
* **Real-world OOP project structure**

Or dive into **OOP + Python Modules and Packages** next!
