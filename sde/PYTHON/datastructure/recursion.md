Here are the **important notes** from the topic *"Recursion in Python"* in **`.md` (Markdown)** format:

---

```markdown
# Recursion in Python

**Last Updated**: 20 Mar, 2025

---

## 🧠 What is Recursion?

- **Recursion** is when a function calls itself **directly or indirectly**.
- Useful for solving problems by **breaking them into subproblems**.
- Common in problems like:
  - Factorials
  - Fibonacci sequence
  - Tree/graph traversals

---

## 📌 Recursive Function Syntax in Python

```python
def recursive_function(parameters):
    if base_case_condition:
        return base_result
    else:
        return recursive_function(modified_parameters)
```

---

## 🧪 Basic Example: Factorial

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))  # Output: 120
```

- **Base Case**: `n == 0`, return 1
- **Recursive Case**: `n * factorial(n-1)`

---

## 🧬 Base Case and Recursive Case

### 🔹 Base Case
- Condition to stop recursion.
- Prevents infinite loop.
- Example: `if n == 0: return 0`

### 🔹 Recursive Case
- Function calls itself with a **simpler argument**.
- Must progress toward the base case.

---

## 🧮 Example: Fibonacci

```python
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))  # Output: 55
```

- Two base cases: `n == 0` and `n == 1`
- Recursive case adds `fibonacci(n-1)` and `fibonacci(n-2)`

---

## 🔁 Types of Recursion

| Type              | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Tail Recursion**| Recursive call is the **last operation** in the function.                   |
| **Non-Tail Recursion** | Recursive call is followed by some operation, so the function must wait. |

### ✅ Tail Recursion Example

```python
def tail_fact(n, acc=1):
    if n == 0:
        return acc
    else:
        return tail_fact(n-1, acc * n)
```

### ❌ Non-Tail Recursion Example

```python
def nontail_fact(n):
    if n == 1:
        return 1
    else:
        return n * nontail_fact(n-1)
```

---

## 🔄 Recursion vs Iteration

| Feature          | Recursion                                 | Iteration                               |
|------------------|--------------------------------------------|------------------------------------------|
| Style            | Function calls itself                     | Uses loops (for, while)                 |
| Memory           | Uses stack memory (more overhead)         | Less memory usage                       |
| Performance      | Can be slower (overhead of calls)         | Generally faster                        |
| Readability      | More readable for tree/graph problems     | Can be verbose                          |

---

## ✅ Advantages of Recursion

- Clean and elegant solutions.
- Better suited for **naturally recursive problems**.
- Code length is often reduced.

---

## ❌ Disadvantages of Recursion

- High **memory usage** due to stack frames.
- **Slower** execution due to repeated function calls.
- Risk of **stack overflow** if recursion depth is too high.

---

## 📝 Summary

- Recursion involves a **base case** and a **recursive case**.
- Python doesn't optimize tail recursion, unlike some other languages.
- Use recursion when it simplifies problem-solving and logic building.
```

---

Let me know if you'd like this exported to a PDF or need diagrams and flow illustrations!