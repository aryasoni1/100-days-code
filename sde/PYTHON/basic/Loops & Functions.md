Here’s a beginner-friendly, Markdown-formatted note on **Loops & Functions** in Python:

---

# 🔁 **Loops & Functions**

> Learn how to **repeat tasks** and **organize logic** using Python's core building blocks.

---

## 🔄 Loops

### 🔁 **For Loop**

Used to iterate over sequences (like lists, strings, or ranges):

```python
for i in range(5):
    print(i)  # 0 to 4
```

Iterating over a list:

```python
fruits = ["apple", "banana", "mango"]
for fruit in fruits:
    print(fruit)
```

---

### 🔂 **While Loop**

Repeats as long as a condition is `True`:

```python
count = 0
while count < 3:
    print("Count is", count)
    count += 1
```

> ⚠️ Be careful of infinite loops with `while`.

---

### 🔃 **Loop Control Statements**

* `break`: exits the loop
* `continue`: skips to the next iteration

```python
for i in range(5):
    if i == 3:
        break
    print(i)
```

---

## 🧮 Functions

### ✅ **Define a Function with `def`**

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))
```

* `return` sends a value back to the caller
* Arguments go inside the parentheses

---

### ⚡ **Lambda (Anonymous) Functions**

Short, one-line functions:

```python
square = lambda x: x * x
print(square(4))  # 16
```

Often used with `map()`, `filter()`, or `sorted()`.

---

### 🔁 **Recursion**

A function that calls itself:

```python
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120
```

> ⚠️ Always include a **base case** to stop recursion!

---

## ✅ Summary

| Concept        | Example / Use                               |
| -------------- | ------------------------------------------- |
| `for` loop     | Iterate fixed times/sequences               |
| `while` loop   | Repeat until a condition fails              |
| `def` function | Reusable block of logic                     |
| `lambda`       | Short, inline function                      |
| Recursion      | Function that solves a subproblem of itself |

---

Let me know if you'd like practice problems or notes on **Lists**, **Dictionaries**, or **Error Handling** next!
