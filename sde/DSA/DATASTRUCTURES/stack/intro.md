Here’s a concise and well-structured `.md` (Markdown) version of your stack data structure notes:

---

# 📚 Stack Data Structure - Complete Notes

**Last Updated:** 06 Mar, 2025

---

## 🔸 What is a Stack?

- Stack is a **linear data structure** that follows the **LIFO** (Last In First Out) principle.
- **Insertion** and **deletion** happen at **one end only** (the top).

---

## 🧠 Real-World Examples

- A **stack of plates**: Add and remove plates from the top.
- A **shuttlecock box**: Insert and remove shuttlecocks from the same end.

---

## 🖼️ Stack Representation

- The **last pushed** element is the **first to be popped**.

---

## 🧱 Types of Stack

1. **Fixed Size Stack**
   - Has a predefined size.
   - Errors:
     - **Overflow**: Push to a full stack.
     - **Underflow**: Pop from an empty stack.

2. **Dynamic Size Stack**
   - Can grow and shrink dynamically.
   - Typically implemented using a **linked list**.

---

## ⚙️ Basic Operations

| Operation     | Description                                |
|---------------|--------------------------------------------|
| `push()`      | Insert an element                          |
| `pop()`       | Remove the top element                     |
| `top()` / `peek()` | View the top element without removing |
| `isEmpty()`   | Check if the stack is empty                |
| `isFull()`    | Check if the stack is full (for fixed stack) |

---

## 🧮 Algorithms

### 🔹 Push Operation

```text
1. If top == capacity - 1 → Stack Overflow
2. Else:
   - Increment top
   - stack[top] = newElement
```

### 🔹 Pop Operation

```text
1. If top == -1 → Stack Underflow
2. Else:
   - Store top element
   - Decrement top
   - Return stored element
```

### 🔹 Top/Peek Operation

```text
1. If top == -1 → "Stack is empty"
2. Else:
   - Return stack[top]
```

### 🔹 isEmpty Operation

```text
Return (top == -1)
```

### 🔹 isFull Operation (Fixed Stack)

```text
Return (top == capacity - 1)
```

---

## 🛠️ Stack Implementations

1. **Using Array**
2. **Using Linked List**
3. **Using Deque**

---

## 📊 Time & Space Complexity

| Operation      | Time Complexity | Space Complexity |
|----------------|-----------------|------------------|
| `push()`       | O(1)            | O(1)             |
| `pop()`        | O(1)            | O(1)             |
| `top()` / `peek()` | O(1)       | O(1)             |
| `isEmpty()`    | O(1)            | O(1)             |
| `isFull()`     | O(1)            | O(1)             |

---

Let me know if you want a downloadable `.md` file or code implementations too.