Here are well-structured **Monotonic Stack notes** in `.md` (Markdown) format for your reference and study:

---

```markdown
# 📚 Monotonic Stack – Data Structure and Algorithm Notes

## 🔹 What is a Monotonic Stack?

A **Monotonic Stack** is a stack data structure that maintains its elements in a **monotonic (increasing or decreasing)** order. It is commonly used to solve problems efficiently, such as finding the **next greater/smaller element**.

---

## 📈 Types of Monotonic Stack

### ✅ 1. Monotonic Increasing Stack
- Maintains elements in **non-decreasing order** from bottom to top.
- Pop elements from the stack if **greater than** the current element.
- Used to find the **next smaller element**.

**Example:** `1, 3, 10, 15, 17`

**Python Implementation:**
```python
def monotonicIncreasing(nums):
    stack = []
    result = []
    for num in nums:
        while stack and stack[-1] > num:
            stack.pop()
        stack.append(num)
    while stack:
        result.insert(0, stack.pop())
    return result
```

### ✅ 2. Monotonic Decreasing Stack
- Maintains elements in **non-increasing order** from bottom to top.
- Pop elements if **less than** the current element.
- Used to find the **next greater element**.

**Example:** `17, 14, 10, 5, 1`

**Python Implementation:**
```python
def monotonicDecreasing(nums):
    stack = []
    result = []
    for num in nums:
        while stack and stack[-1] < num:
            stack.pop()
        result.append(stack[-1] if stack else -1)
        stack.append(num)
    return result
```

---

## ⚙️ Key Characteristics

- Efficient for **range queries** involving max/min.
- Used when an element is **never reused once popped**.
- Common in problems with **linear time complexity requirements**.

---

## 🧠 When to Use a Monotonic Stack?

### Identify these patterns:
- Nearest greater/smaller element (left/right)
- Element removal after use
- Immediate neighbors required
- Monotonicity maintained across traversal
- Linear time complexity hints

---

## 🔁 General Pattern (Pseudo Code)

```python
stack = []
for i in range(len(arr)):
    while stack and condition(stack[-1], arr[i]):
        stackTop = stack.pop()
        # Use stackTop
    if stack:
        # Use stack[-1] if needed
    stack.append(i)
```

---

## 🚀 Applications of Monotonic Stack

- 🔸 Next Greater/Smaller Element
- 🔸 Maximum Area in Histogram
- 🔸 Maximum Rectangle in Binary Matrix
- 🔸 Stock Span Problem
- 🔸 Sliding Window Max/Min
- 🔸 Expression Evaluation (Balanced/Redundant Brackets)

---

## ✅ Advantages

- Linear time complexity `O(N)`
- Solves problems efficiently related to range-based max/min
- Intuitive once understood with practice

## ❌ Disadvantages

- Requires **additional space** for the stack
- Not intuitive for **beginners**

---

## 🔍 Practice Problems

| Problem | Description |
|--------|-------------|
| Next Greater Element | Find the next greater element for each item |
| Previous Smaller Element | Find the previous smaller |
| Trapping Rain Water | Calculate total trapped water |
| Largest Rectangle in Histogram | Find max area |
| Expression Evaluation | Check for balanced/redundant brackets |
| Stock Span Problem | Span of stock prices |
| Sum of Subarray Minimums | Monotonic stack + dynamic programming |

---

## 🧪 Sample Problem: Next Greater Element

```python
def printNGE(arr, n):
    stack = []
    stack.append(arr[0])
    for i in range(1, n):
        while stack and stack[-1] < arr[i]:
            print(stack.pop(), "-->", arr[i])
        stack.append(arr[i])
    while stack:
        print(stack.pop(), "-->", -1)

# Example
arr = [11, 13, 21, 3]
printNGE(arr, len(arr))
```

### Output:
```
11 --> 13
13 --> 21
3 --> -1
21 --> -1
```

---

## 🔚 Conclusion

Monotonic stacks are a powerful tool for problems involving order, neighbors, and range operations. Recognizing the patterns is the key to mastering them.

```

---

Would you like me to export this as a `.md` file for download or integrate it into a GitHub README-style project?