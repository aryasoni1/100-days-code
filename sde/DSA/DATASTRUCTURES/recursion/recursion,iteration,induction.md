Here are the **important notes** on the topics of **Recursion vs Iteration** and **Recursion vs Induction** in `.md` (Markdown) format:

---

```markdown
# 📘 Recursion vs Iteration

**Last Updated:** 22 May, 2023

## ✅ Definitions

- **Recursion**: A function that calls itself to solve sub-instances of a problem.
- **Iteration**: Repeated execution of a set of statements using loops.

---

## 🔍 Code Example: Factorial

### ➤ Using Recursion

```python
def factorialUsingRecursion(n):
    if n == 0:
        return 1
    return n * factorialUsingRecursion(n - 1)
```

### ➤ Using Iteration

```python
def factorialUsingIteration(n):
    res = 1
    for i in range(2, n + 1):
        res *= i
    return res
```

---

## ⏱️ Time and Space Complexity

| Approach     | Time Complexity | Space Complexity         |
|--------------|------------------|---------------------------|
| Recursion    | Exponential (O(2^n) in some cases) | O(n) due to call stack |
| Iteration    | Linear (O(n))    | O(1)                      |

---

## ⚖️ Comparison Table

| Property              | Recursion                                       | Iteration                                      |
|-----------------------|-------------------------------------------------|------------------------------------------------|
| Definition            | Function calls itself                           | Loop executes repeatedly                       |
| Application           | Functions                                       | Loops                                          |
| Termination           | Base case                                       | Termination condition in loop                  |
| Code Size             | Smaller code                                    | Larger code                                    |
| Time Complexity       | Can be high (e.g., exponential)                 | Generally lower                                |
| Space Complexity      | Higher due to stack                             | Lower                                          |
| Speed                 | Slower (overhead of function calls)             | Faster (no overhead)                           |
| Memory                | More memory due to stack                        | Less memory                                    |
| Overhead              | High (function call stack)                      | None                                           |
| Infinite Repetition   | Risk of stack overflow                          | Can cause infinite loop, less dangerous        |

---

## 📌 Usage Considerations

- Use **recursion** when:
  - Problem has a naturally recursive structure (trees, graphs, etc.)
  - Code simplicity is preferred over performance

- Use **iteration** when:
  - Time and space efficiency is crucial
  - Avoiding function call overhead is important

---

# 🧠 Recursion vs Induction

**Last Updated:** 01 Aug, 2024

## 📖 Definitions

- **Recursion**: Programming method where a function solves a problem by calling itself.
- **Induction**: Mathematical technique to prove a statement for all natural numbers.

---

## 📚 Structure

### Recursion
- **Base Case**: Terminates the recursive calls.
- **Recursive Step**: Breaks the problem and calls the function again.

### Induction
- **Base Step**: Prove for initial value (e.g., n = 1).
- **Inductive Step**: Assume true for `n = k`, prove for `n = k+1`.

---

## ✏️ Example

### Recursion
```text
F(n) = F(n-1) + F(n-2)
Base: F(0) = 0, F(1) = 1
```

### Induction
Prove: F(n) ≤ 2^n  
1. Base Case: F(1) = 1 ≤ 2  
2. Assume F(k) ≤ 2^k  
3. Show F(k+1) ≤ 2^(k+1)

---

## ⚖️ Comparison Table

| Property              | Recursion                                             | Induction                                       |
|-----------------------|-------------------------------------------------------|-------------------------------------------------|
| Purpose               | Define and solve problems                             | Prove mathematical statements                   |
| Method                | Function calls itself repeatedly                      | Assumes for n, proves for n+1                   |
| Direction             | Works from `n` to base case                           | Works from base case to `n+1`                   |
| Components            | Base case, Recursive step                             | Base step, Inductive step                       |
| Use                   | Coding / Algorithm design                             | Mathematical proofs                             |
| Assumption            | No assumption made                                    | Assumption used for induction                   |
| Output                | Computes result                                       | Validates correctness                           |
| Risk of Infinity      | Yes, without base case                                | No such risk                                    |

---

## 📝 Conclusion

- **Recursion** is practical in coding; **Induction** is theoretical in math.
- Use recursion for solving, induction for proving.
- Both share similar structural logic but are applied in different domains.

```

---

Let me know if you’d like these in PDF or with visual flowcharts added!