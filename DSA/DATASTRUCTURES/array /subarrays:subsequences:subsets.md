Here are the **important notes** from the topic *"Subarrays, Subsequences, and Subsets in Array"* in **`.md` (Markdown)** format:

---

```markdown
# Subarrays, Subsequences, and Subsets in Array

**Last Updated**: 15 Jan, 2024

---

## 📌 What is a Subarray?

- A **subarray** is a **contiguous** part of an array.
- For an array of size `n`, total number of **non-empty subarrays** = `n*(n+1)/2`.

### 🔹 Example:
For array `[1, 2, 3, 4]`, the 10 non-empty subarrays are:
```
(1), (2), (3), (4), (1,2), (2,3), (3,4), (1,2,3), (2,3,4), (1,2,3,4)
```

---

## 📌 What is a Subsequence?

- A **subsequence** is a sequence derived by deleting **zero or more elements** from the array, **without changing the order**.
- For an array of size `n`, total number of **non-empty subsequences** = `2^n - 1`.

### 🔹 Example:
For array `[1, 2, 3, 4]`, the 15 non-empty subsequences are:
```
(1), (2), (3), (4),
(1,2), (1,3), (1,4),
(2,3), (2,4), (3,4),
(1,2,3), (1,2,4), (1,3,4), (2,3,4),
(1,2,3,4)
```

---

## 📌 What is a Subset?

- A **subset** is a set formed by taking **some or all elements** of another set.
- A set `A` is a subset of set `B` if **every element of A is also in B**.
- Notation: `A ⊆ B`

### 🔹 Example:
Let:
```
Set_A = {m, n, o, p, q}
Set_B = {k, l, m, n, o, p, q, r}
```
Then:  
`A ⊆ B`

---

## 🧠 Quick Recap

| Concept     | Definition                              | Order Preserved | Contiguous | Total Count (non-empty)   |
|-------------|------------------------------------------|------------------|------------|----------------------------|
| Subarray    | Continuous part of array                 | ✅ Yes           | ✅ Yes     | `n*(n+1)/2`               |
| Subsequence | Derived by deleting elements (order same)| ✅ Yes           | ❌ No      | `2^n - 1`                 |
| Subset      | Any group of elements from a set         | ❌ Not required  | ❌ No      | `2^n - 1` (for sets)      |

---
```

Let me know if you want a visual diagram or explanation in another format like PDF or HTML!