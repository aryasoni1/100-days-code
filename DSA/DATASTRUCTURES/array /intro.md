Here are concise, well-structured notes in `.md` (Markdown) format covering the important points from the Array Data Structure guide:

---

# 📚 Array Data Structure Notes

_Last Updated: 13 Apr, 2025_

## 📌 Introduction
- Arrays store items (primitives or references) at **contiguous memory locations**.
- Fundamental linear data structure used to build: `Stack`, `Queue`, `Deque`, `Graph`, `Hash Table`.

## ✅ Advantages
- **Random Access**: O(1) time to access i-th element.
- **Cache Friendly**: Locality of reference due to contiguous memory allocation.

## ❌ Limitations
- Not efficient for:
  - Insertion/Deletion in the middle.
  - Searching in unsorted arrays.

---

## 🧱 Basic Terminologies
- **Index**: Starts from `0`.
- **Element**: Actual data stored.
- **Length**: Number of elements.

---

## 🧠 Memory Representation
- Elements stored **sequentially in memory**, allowing fast access.

---

## 🧾 Declaration and Initialization (Python Example)

```python
# Declaration
arr = []

# Initialization
int_arr = [1, 2, 3, 4, 5]
char_arr = ['a', 'b', 'c']
float_arr = [1.0, 2.0, 3.0]
```

---

## ❓ Why Use Arrays?
- Efficiently manage **large number of variables** using a single variable name.

---

## 🧮 Types of Arrays

### 🔢 By Size
1. **Fixed Size**: Cannot resize.
   ```python
   arr = [0] * 5
   ```
2. **Dynamic Size**: Grows/shrinks as needed.
   ```python
   arr = []
   ```

### 🔲 By Dimensions
1. **1-D Array**: Linear layout.
2. **2-D Array (Matrix)**: Rows & Columns.
3. **3-D Array**: Array of matrices.

---

## ⚙️ Operations on Arrays

### 1. 🔁 Traversal
- **Sequential**: Left to right.
- **Reverse**: Right to left.

```python
for i in arr:
    print(i)
```

### 2. ➕ Insertion
- Insert element and **shift** subsequent elements.
- Types:
  - Beginning
  - Specific Index
  - End (easiest in dynamic arrays)

```python
arr.insert(2, 25)  # Insert at index 2
```

### 3. ➖ Deletion
- Remove element and **shift** remaining elements left.
- Types:
  - Beginning
  - Specific Index
  - End

```python
arr.pop(2)  # Remove element at index 2
```

### 4. 🔍 Searching

#### 🔹 Linear Search
- Check each element.
- Time: O(n)

```python
target = 30
for i in range(len(arr)):
    if arr[i] == target:
        print("Found at", i)
```

#### 🔸 Binary Search
- Only for **sorted arrays**.
- Time: O(log n)

```python
import bisect
index = bisect.bisect_left(arr, 30)
```

---

## 📘 Next Topics
- Applications of Arrays
- Advantages & Disadvantages

---

Let me know if you want me to add those next sections too (`Applications`, `Advantages`, `Disadvantages`).