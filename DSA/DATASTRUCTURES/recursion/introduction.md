Here are the **important notes** from the topic *"Introduction to Recursion"* in **`.md` (Markdown)** format:

---

```markdown
# Introduction to Recursion

**Last Updated**: 30 Dec, 2024

---

## 📌 What is Recursion?

- Recursion is the process where a function calls itself **directly or indirectly**.
- A recursive function solves a small part of the problem and **calls itself** to handle the remaining.
- Requires a **base case** to prevent infinite calls (stack overflow).

---

## 📈 Why Recursion?

- Simplifies **logic building** by breaking down problems.
- Fundamental to **Dynamic Programming**, **Divide and Conquer**, and **Backtracking**.
- Useful in problems like:
  - Tree Traversals (Inorder, Preorder, Postorder)
  - DFS (Graph)
  - Tower of Hanoi

---

## 🪜 Steps in Recursion

1. **Define Base Case** – The simplest case that stops recursion.
2. **Define Recursive Case** – Break the problem into smaller subproblems.
3. **Ensure Termination** – Recursive steps must reach the base case.
4. **Combine Solutions** – Merge results from recursive calls.

---

## 🧮 Example 1: Sum of Natural Numbers (Recursive)

```python
def findSum(n):
    if n == 0:
        return 0
    return n + findSum(n - 1)

print(findSum(5))  # Output: 15
```

---

## 🧮 Example 2: Factorial of a Number

```python
def fact(n):
    if n == 0:
        return 1
    return n * fact(n - 1)

print("Factorial of 5:", fact(5))  # Output: 120
```

---

## ⚠️ Stack Overflow in Recursion

Occurs when:
- Base case is **wrong or missing**.
- Infinite recursive calls consume all stack memory.

```cpp
int fact(int n) {
    if (n == 100)  // wrong base case
        return 1;
    return n * fact(n - 1);  // never reaches 100
}
```

---

## 🔄 Types of Recursion

| Type               | Description                                                 |
|--------------------|-------------------------------------------------------------|
| Direct Recursion   | Function calls itself.                                      |
| Indirect Recursion | Function A calls B, and B calls A (or another that calls A).|

```c
// Direct Recursion
void fun() {
    fun();
}

// Indirect Recursion
void fun1() {
    fun2();
}
void fun2() {
    fun1();
}
```

---

## ➰ Tail vs Non-Tail Recursion

- **Tail Recursion**: Recursive call is the **last operation**.
- Optimized by compilers in some languages.
- Use when recursion doesn’t need to wait on recursive result.

---

## 🧠 How Recursion Uses Memory

- Function calls stored in **call stack** (LIFO).
- Each call creates **new memory frame**.
- Stack grows with each recursive call, shrinks as calls return.

```python
def printFun(test):
    if test < 1:
        return
    print(test, end=" ")
    printFun(test - 1)
    print(test, end=" ")

printFun(3)  # Output: 3 2 1 1 2 3
```

---

## 🔁 Recursion vs Iteration

| Aspect             | Recursion                               | Iteration                               |
|--------------------|------------------------------------------|------------------------------------------|
| Termination        | Base case                               | Loop condition                          |
| Logic              | Smaller problems                        | Loop constructs                         |
| Memory             | Uses call stack                         | No extra memory                         |
| Code               | Shorter                                 | Longer                                  |

---

## 🧮 Example 3: Fibonacci Series

```python
def fib(n):
    if n == 0:
        return 0
    if n == 1 or n == 2:
        return 1
    return fib(n - 1) + fib(n - 2)

for i in range(5):
    print(fib(i), end=" ")
# Output: 0 1 1 2 3
```

---

## ✅ Applications of Recursion

- **Tree/Graph Traversals** – DFS, Tree Traversal.
- **Sorting Algorithms** – Merge Sort, Quick Sort.
- **Divide and Conquer** – Binary Search.
- **Fractals** – Mandelbrot Set.
- **Backtracking** – N-Queens, Sudoku Solver.
- **Memoization** – Store subproblem results.

---

## ⚖️ Recursion: Pros & Cons

### ✅ Advantages:
- Clean and simple code.
- Best suited for problems like Tree traversals, TOH.

### ❌ Disadvantages:
- Higher memory usage.
- Difficult to debug due to multiple call stacks.

---

## 📝 Summary

- Two parts in recursion: **Base Case** and **Recursive Case**.
- Recursion uses stack memory.
- Examples: Factorial, Fibonacci, TOH, Merge Sort.

---
```

Let me know if you want this exported to PDF or need diagram illustrations!