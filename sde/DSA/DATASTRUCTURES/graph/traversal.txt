Here are the notes in `.md` (Markdown) format for **Graph Traversal – DFS and BFS**:

---

```markdown
# 📘 Graph Traversal Notes

## ✅ Traversal Overview
- **Graph traversal**: Visiting all the nodes/vertices in a graph systematically.
- **Purpose**: Basis for most Graph algorithms.
- **Two main types**:
  - Depth First Search (DFS)
  - Breadth First Search (BFS)

---

## 🔍 Depth First Search (DFS)

### ✔ Characteristics:
- Goes deep along one path before backtracking.
- Implemented using **recursion** or an explicit **stack**.
- Utilizes the **call stack** in recursion.

### ✔ How It Works:
1. Start at a vertex.
2. Mark it visited.
3. Recursively visit all unvisited adjacent vertices.

### ✔ Example DFS (Undirected Graph):

```python
def dfs_util(self, v, visited):
    visited[v] = True
    print(self.vertex_data[v], end=' ')
    for i in range(self.size):
        if self.adj_matrix[v][i] == 1 and not visited[i]:
            self.dfs_util(i, visited)

def dfs(self, start_vertex_data):
    visited = [False] * self.size
    start_vertex = self.vertex_data.index(start_vertex_data)
    self.dfs_util(start_vertex, visited)
```

---

## 🌐 Breadth First Search (BFS)

### ✔ Characteristics:
- Visits all neighbors of a vertex before moving deeper.
- Implemented using a **queue**.

### ✔ How It Works:
1. Put starting vertex in the queue.
2. While the queue is not empty:
   - Dequeue vertex.
   - Visit it.
   - Enqueue all unvisited adjacent vertices.

### ✔ Example BFS:

```python
def bfs(self, start_vertex_data):
    queue = [self.vertex_data.index(start_vertex_data)]
    visited = [False] * self.size
    visited[queue[0]] = True

    while queue:
        current_vertex = queue.pop(0)
        print(self.vertex_data[current_vertex], end=' ')
        for i in range(self.size):
            if self.adj_matrix[current_vertex][i] == 1 and not visited[i]:
                queue.append(i)
                visited[i] = True
```

---

## 📎 DFS and BFS on Directed Graphs

- In **directed graphs**, only one direction is allowed.
- Modify `add_edge()` to **not add the reverse edge**:

```python
def add_edge(self, u, v):
    self.adj_matrix[u][v] = 1  # Directed edge only
```

- DFS and BFS implementations **remain the same**.

---

## 🧠 Key Points

| Feature        | DFS                           | BFS                           |
|----------------|-------------------------------|-------------------------------|
| Data Structure | Stack (or recursion)          | Queue                         |
| Traversal Type | Deep                         | Broad                         |
| Implementation | Recursive or stack-based      | Iterative using queue         |
| Good for       | Pathfinding, topological sort | Shortest path in unweighted graph |
| Complexity     | O(V + E)                      | O(V + E)                      |

---

## 📌 Sample Graph Initialization (7 Vertices)
```python
g = Graph(7)
g.add_vertex_data(0, 'A')
g.add_vertex_data(1, 'B')
g.add_vertex_data(2, 'C')
g.add_vertex_data(3, 'D')
g.add_vertex_data(4, 'E')
g.add_vertex_data(5, 'F')
g.add_vertex_data(6, 'G')
```

### Add Edges (Directed):
```python
g.add_edge(3, 0)  # D -> A
g.add_edge(3, 4)  # D -> E
g.add_edge(4, 0)  # E -> A
g.add_edge(0, 2)  # A -> C
g.add_edge(2, 5)  # C -> F
g.add_edge(2, 6)  # C -> G
g.add_edge(5, 1)  # F -> B
g.add_edge(1, 2)  # B -> C
```

---

## 🖨 Sample Output
```plaintext
Depth First Search starting from vertex D:
D A C F B G E

Breadth First Search starting from vertex D:
D A E C F G B
```

---
```

Let me know if you'd like a downloadable `.md` file or notes for the next topic in graph algorithms (like Dijkstra's, topological sort, etc.)!