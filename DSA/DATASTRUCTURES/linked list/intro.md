Here's a **Markdown (.md) version** of summarized and important notes for **Linked List – Data Structures and Algorithms**:

---

# 📘 Linked List – Data Structures & Algorithms (Updated: 22 Oct, 2024)

## 🔰 What is a Linked List?

- A **linear data structure** where elements are **not stored in contiguous memory**.
- Each element (called **Node**) contains:
  - **Data**
  - **Pointer/Reference** to the **next node**

```text
[Data | Next] → [Data | Next] → [Data | NULL]
```

---

## 🧩 Basic Terminologies

| Term          | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| `Head`        | Pointer to the first node                                                   |
| `Node`        | Building block containing `data` and `next pointer`                         |
| `Data`        | Actual value stored in the node                                             |
| `Next Pointer`| Points to the next node in the list                                         |
| `Tail`        | Last node in the list. Points to `NULL` or `nullptr`                        |

---

## ⚙️ Importance of Linked List

- **Dynamic Size**: Allocates/deallocates memory at runtime.
- **Efficient Insertion/Deletion**: No shifting needed as in arrays.
- **Better Memory Utilization**: Memory used as required.
- **Used in Advanced DS**: Stack, Queue, HashMap, Graph, etc.

---

## 🔄 Types of Linked List

| Type                  | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| Singly Linked List    | Each node points to the next one.                                           |
| Doubly Linked List    | Each node points to both next and previous nodes.                           |
| Circular Linked List  | Last node points back to the first node forming a circular chain.           |

---

## 🛠️ Basic Operations

### 🔹 Singly Linked List

- **Insertion**
  - At the beginning
  - At the end
  - At a specific position
- **Deletion**
  - From the beginning
  - From the end
  - Specific node
- **Traverse**: Visit all nodes
- **Search**: Find node with specific value

### 🔸 Doubly Linked List

- **Insertion**
  - At beginning
  - After a node
  - Before a node
  - At end
- **Deletion**
  - From beginning
  - From end
  - Specific node
- **Display**: View all elements

### 🔁 Circular Linked List

- **Insertion**
  - In an empty list
  - At beginning
  - At end
  - In between nodes
- **Deletion**
  - From beginning
  - From end
  - Specific node
- **Display**: Visit circularly connected nodes

---

## 🔍 Linked List vs Array

| Feature                  | Array                             | Linked List                       |
|--------------------------|-----------------------------------|-----------------------------------|
| Memory Allocation        | Contiguous                        | Non-contiguous (using pointers)   |
| Size                     | Fixed (or reallocated)            | Dynamic                           |
| Access Time              | O(1) (Random Access)              | O(N) (Sequential Access)          |
| Insertion/Deletion       | Costly (Shift required)           | Efficient (Pointer adjustment)    |
| Memory Wastage           | Possible                          | Minimal                           |

---

## 🧮 Time Complexity Analysis

| Operation                           | Linked List | Array   |
|------------------------------------|-------------|---------|
| Random Access                      | O(N)        | O(1)    |
| Insertion/Deletion at Beginning    | O(1)        | O(N)    |
| Insertion/Deletion at End          | O(N)*       | O(1)    |
| Insertion/Deletion at Random       | O(N)        | O(N)    |

> *O(1) if tail pointer is maintained.

---

## 📌 When to Use Linked List?

- When **frequent insertions/deletions** are required.
- When **dynamic memory** is needed.
- Not suitable for **fast lookups/searches**.

---

## 💬 Conclusion

- Linked List is a versatile and dynamic structure.
- Ideal for scenarios with **frequent data modification**.
- Choose wisely based on **use-case and operation requirements**.

---

Let me know if you'd like this as a `.md` file or converted into a PDF document!