Sure! Here's a clean and organized `.md` (Markdown) version of **Cycle Detection in Graphs**:

---

# 🚥 Cycle Detection in Graphs

## 📌 What is a Cycle?
A **cycle** in a graph is a path that starts and ends at the same vertex, where **no edge is repeated**.

- Used in: **Networking**, **Scheduling**, **Circuit Design**, etc.
- Cycle detection helps avoid deadlocks, infinite loops, and incorrect logic flows.

---

## 🔍 Methods of Cycle Detection

### 1. **DFS (Depth First Search)**
DFS is used for both **Undirected** and **Directed** graphs (with variations).

---

### 🔁 DFS Cycle Detection - Undirected Graph

#### ✅ How It Works:
- Start DFS on each **unvisited** vertex (in case graph is not connected).
- Mark vertex as visited.
- If an adjacent vertex is visited **and not the parent**, then a cycle is detected.

#### ✅ Python Code:
```python
def dfs_util(self, v, visited, parent):
    visited[v] = True
    for i in range(self.size):
        if self.adj_matrix[v][i] == 1:
            if not visited[i]:
                if self.dfs_util(i, visited, v):
                    return True
            elif parent != i:
                return True
    return False
```

#### 🧠 Key Points:
- Use a `visited[]` array.
- Track parent to avoid false cycle detection.
- Return `True` if cycle is found, otherwise `False`.

---

### 🔁 DFS Cycle Detection - Directed Graph

#### ✅ How It Works:
- Use two arrays:
  - `visited[]` – to track visited vertices.
  - `recStack[]` – to track the current recursion stack (i.e., the current path).
- If a node is found in `recStack`, a **cycle is detected**.

#### ✅ Python Code:
```python
def dfs_util(self, v, visited, recStack):
    visited[v] = True
    recStack[v] = True
    for i in range(self.size):
        if self.adj_matrix[v][i] == 1:
            if not visited[i]:
                if self.dfs_util(i, visited, recStack):
                    return True
            elif recStack[i]:
                return True
    recStack[v] = False
    return False
```

#### 🧠 Key Points:
- Only detect cycles within the same **DFS path**.
- Avoid false positives due to revisits from other disconnected paths.

---

### 2. **Union-Find (Disjoint Set Union)**

#### ✅ When to Use:
- Only for **Undirected Graphs**.
- Best suited for cycle detection during **edge addition**.

#### ✅ How It Works:
- Initially, each vertex is its own subset.
- For each edge:
  - If both vertices have the same root → **Cycle detected**.
  - Else → **Union** the subsets.

#### ✅ Python Code:
```python
def find(self, i):
    if self.parent[i] == i:
        return i
    return self.find(self.parent[i])

def union(self, x, y):
    x_root = self.find(x)
    y_root = self.find(y)
    self.parent[x_root] = y_root

def is_cyclic(self):
    for i in range(self.size):
        for j in range(i + 1, self.size):
            if self.adj_matrix[i][j]:
                x = self.find(i)
                y = self.find(j)
                if x == y:
                    return True
                self.union(x, y)
    return False
```

#### 🧠 Key Points:
- Use `find()` to find root of the subset.
- Use `union()` to merge two subsets.
- If both ends of an edge belong to the same subset → **Cycle detected**.

---

## 🔚 Summary Table

| Graph Type    | Method       | Data Structures Used            | Notes |
|---------------|--------------|----------------------------------|-------|
| Undirected    | DFS          | `visited[]`, `parent`            | Check if visited neighbor is not the parent |
| Directed      | DFS          | `visited[]`, `recStack[]`        | Track recursion path |
| Undirected    | Union-Find   | `parent[]`                       | Good for edge-based operations |

---

Let me know if you’d like this saved as a `.md` file or want diagrams/visuals too!