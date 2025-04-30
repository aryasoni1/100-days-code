Here's a concise and well-structured `.md` (Markdown) file of important points on **Stack in Python**:

---

```markdown
# 📚 Stack in Python

_Last Updated: 20 Jun, 2024_

A **Stack** is a linear data structure that follows **LIFO (Last In First Out)** or **FILO (First In Last Out)** principle. Elements are added and removed from one end only (called the top).

---

## 🧠 Core Stack Functions

| Function     | Description                                          | Time Complexity |
|--------------|------------------------------------------------------|-----------------|
| `empty()`    | Returns whether the stack is empty                   | O(1)            |
| `size()`     | Returns the number of elements in the stack          | O(1)            |
| `top()`/`peek()` | Returns the top element of the stack             | O(1)            |
| `push(a)`    | Pushes element `a` onto the stack                    | O(1)            |
| `pop()`      | Removes the top element from the stack               | O(1)            |

---

## ✅ Stack Implementations in Python

### 1. Using `list`

```python
stack = []
stack.append('a')
stack.append('b')
stack.append('c')

stack.pop()  # Removes 'c'
```

- **Pros:** Simple and easy to implement
- **Cons:** May cause performance issues due to memory reallocation

---

### 2. Using `collections.deque`

```python
from collections import deque

stack = deque()
stack.append('a')
stack.append('b')
stack.append('c')
stack.pop()  # Removes 'c'
```

- **Pros:** O(1) operations on both ends, better than list
- **Cons:** Limited to append/pop usage

---

### 3. Using `queue.LifoQueue`

```python
from queue import LifoQueue

stack = LifoQueue(maxsize=3)
stack.put('a')
stack.put('b')
stack.put('c')
stack.get()  # Removes 'c'
```

- **Pros:** Thread-safe (suitable for multi-threaded apps)
- **Cons:** Slightly more verbose

---

### 4. Using Singly Linked List

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.head = Node("head")
        self.size = 0

    def push(self, value):
        node = Node(value)
        node.next = self.head.next
        self.head.next = node
        self.size += 1

    def pop(self):
        if self.size == 0:
            raise Exception("Stack Empty")
        remove = self.head.next
        self.head.next = remove.next
        self.size -= 1
        return remove.value
```

- **Pros:** Dynamic size, O(1) push/pop
- **Cons:** More complex to implement

---

## ✅ Advantages of Stack

- Simple to understand and implement
- Efficient `O(1)` operations for push/pop
- Useful in reversing elements, parsing, and backtracking
- Used in undo/redo features in applications

---

## ⚠️ Drawbacks of Stack

- Limited access (only top element accessible)
- Searching is not efficient (linear time)
- Size restrictions in static implementations

---

```

Let me know if you’d like this converted to a downloadable `.md` file or if you want to add diagrams or visuals!