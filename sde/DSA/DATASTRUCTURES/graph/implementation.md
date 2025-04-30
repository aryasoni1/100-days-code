Here's your **Graph Implementation notes** in `.md` (Markdown) format, summarizing all important concepts and examples from your input.

---

# 📘 Basic Graph Implementation in Python

## 🧱 Graph using Adjacency Matrix (Non-OOP)

### 📌 Components
- **`vertexData`**: Stores the labels of vertices.
- **`adjacency_matrix`**: 2D array storing edges (1 for edge, 0 for no edge).

### 🔧 Code
```python
vertexData = ['A', 'B', 'C', 'D']

adjacency_matrix = [
    [0, 1, 1, 1],  # A
    [1, 0, 1, 0],  # B
    [1, 1, 0, 0],  # C
    [1, 0, 0, 0]   # D
]

def print_adjacency_matrix(matrix):
    print("\nAdjacency Matrix:")
    for row in matrix:
        print(row)

def print_connections(matrix, vertices):
    print("\nConnections for each vertex:")
    for i in range(len(vertices)):
        print(f"{vertices[i]}: ", end="")
        for j in range(len(vertices)):
            if matrix[i][j]:
                print(vertices[j], end=" ")
        print()
```

---

## 🧱 Graph using Classes (Object-Oriented)

### ✅ Features
- Encapsulates data and behavior.
- Easier to manage algorithms and data.
- Maintains matrix and vertex data internally.

### 🔧 Undirected Graph (Unweighted)
```python
class Graph:
    def __init__(self, size):
        self.adj_matrix = [[0] * size for _ in range(size)]
        self.size = size
        self.vertex_data = [''] * size

    def add_edge(self, u, v):
        if 0 <= u < self.size and 0 <= v < self.size:
            self.adj_matrix[u][v] = 1
            self.adj_matrix[v][u] = 1  # Undirected

    def add_vertex_data(self, vertex, data):
        if 0 <= vertex < self.size:
            self.vertex_data[vertex] = data

    def print_graph(self):
        print("Adjacency Matrix:")
        for row in self.adj_matrix:
            print(' '.join(map(str, row)))
        print("\nVertex Data:")
        for i, data in enumerate(self.vertex_data):
            print(f"Vertex {i}: {data}")
```

### 🔧 Usage
```python
g = Graph(4)
g.add_vertex_data(0, 'A')
g.add_vertex_data(1, 'B')
g.add_vertex_data(2, 'C')
g.add_vertex_data(3, 'D')

g.add_edge(0, 1)  # A - B
g.add_edge(0, 2)  # A - C
g.add_edge(0, 3)  # A - D
g.add_edge(1, 2)  # B - C

g.print_graph()
```

---

## 🧱 Directed & Weighted Graph (OOP)

### 🔧 Modifications
- Replace `0` with `None` initially in matrix.
- Add weight argument in `add_edge`.
- Remove symmetric edge line for directionality.

### 🔧 Code
```python
class Graph:
    def __init__(self, size):
        self.adj_matrix = [[None] * size for _ in range(size)]
        self.size = size
        self.vertex_data = [''] * size

    def add_edge(self, u, v, weight):
        if 0 <= u < self.size and 0 <= v < self.size:
            self.adj_matrix[u][v] = weight  # Directed + weighted

    def add_vertex_data(self, vertex, data):
        if 0 <= vertex < self.size:
            self.vertex_data[vertex] = data

    def print_graph(self):
        print("Adjacency Matrix:")
        for row in self.adj_matrix:
            print(' '.join(str(x) if x is not None else '0' for x in row))
        print("\nVertex Data:")
        for i, data in enumerate(self.vertex_data):
            print(f"Vertex {i}: {data}")
```

### 🔧 Usage
```python
g = Graph(4)
g.add_vertex_data(0, 'A')
g.add_vertex_data(1, 'B')
g.add_vertex_data(2, 'C')
g.add_vertex_data(3, 'D')

g.add_edge(0, 1, 3)  # A -> B (3)
g.add_edge(0, 2, 2)  # A -> C (2)
g.add_edge(3, 0, 4)  # D -> A (4)
g.add_edge(2, 1, 1)  # C -> B (1)

g.print_graph()
```

---

## 📝 Summary

| Graph Type       | Matrix Value   | Directional | Weighted | Symmetry |
|------------------|----------------|-------------|----------|----------|
| Undirected       | 1 or 0         | ❌          | ❌       | ✔️        |
| Directed         | 1 or 0         | ✔️          | ❌       | ❌        |
| Directed + Weighted | Actual weight | ✔️          | ✔️       | ❌        |

---

Let me know if you want the `.md` file download or want traversal notes next (DFS, BFS, etc.)!