Here’s a **comprehensive breakdown of all key data-structure topics** you should master for FAANG-level SDE interviews, organized by category:

---

### 1. Linear Structures  
- **Arrays**  
  - Fixed vs. Dynamic arrays  
  - Multidimensional arrays  
  - Common operations: traversal, insertion, deletion  
  - In-place vs. out-of-place transforms  

- **Linked Lists**  
  - Singly, Doubly, & Circular  
  - Operations: insert, delete, reverse, detect/remove cycle (Floyd’s)  
  - Advanced: merge two sorted lists, copy list with random pointer, skip-list basics  

- **Stacks & Queues**  
  - Stack via array/linked list  
  - Queue, Circular queue, Deque  
  - Monotonic stacks/queues, Min-stack, Max-stack  
  - Implementing one via the other  

---

### 2. Trees & Hierarchical Structures  
- **Binary Trees**  
  - Traversals: preorder, inorder, postorder, level-order  
  - Height, depth, diameter, mirror  
  - Serialization / deserialization  

- **Binary Search Trees (BSTs)**  
  - Insert, delete, search  
  - Inorder successor/predecessor  
  - Validate BST, kth smallest/largest  

- **Balanced Trees**  
  - AVL trees (rotations, height balancing)  
  - Red-Black trees (color properties, rotations)  

- **Tries (Prefix Trees)**  
  - Insert, search, delete  
  - Wildcard matching, autocomplete/suggestions  
  - Compressed trie (Radix tree) basics  

- **Heaps**  
  - Min-heap, max-heap via array  
  - Operations: push, pop, heapify  
  - Applications: priority queue, heap-sort, k-select  

- **Segment Trees & Fenwick Trees (BIT)**  
  - Range queries & updates  
  - Lazy propagation (segment tree)  
  - Point update vs. range update variants  

---

### 3. Hashing Structures  
- **Hash Tables**  
  - Separate chaining vs. open addressing  
  - Collision resolution: linear probing, quadratic probing, double hashing  
  - Designing good hash functions  

- **Bloom Filters**  
  - Bit arrays & multiple hash functions  
  - False positives vs. false negatives  
  - Use-cases and trade-offs  

---

### 4. Graph Structures  
- **Graph Representations**  
  - Adjacency list, adjacency matrix, edge list  
  - Weighted vs. unweighted, directed vs. undirected  

- **Disjoint Set Union (Union-Find)**  
  - Union by rank/size, path compression  
  - Applications: connected components, Kruskal’s MST  

- **Specialized Graphs**  
  - Sparse vs. dense graphs  
  - Implicit graphs (grid as graph)  

---

### 5. Advanced & Specialized  
- **Skip Lists**  
  - Probabilistic balancing  
  - Search, insert, delete in expected O(log n)  

- **Suffix Structures**  
  - Suffix array basics  
  - Suffix automaton / tree (conceptual overview)  

- **Interval Trees & Range Trees**  
  - Storing intervals & querying overlaps  
  - KD-trees (for k-dimensional points)  

- **LRU Cache Design**  
  - Combining hash map + doubly linked list  

---

### 6. Memory & Persistence  
- **Persistent Data Structures**  
  - Functional trees, path-copying techniques  
- **External & B-Trees**  
  - Disk-oriented trees, paging, and caching basics  

---

### 7. Miscellaneous & System-Design Prep  
- **Bloom filters** (already above)  
- **LRU / LFU caches**  
- **Trie + bitwise tries** (for IP routing)  
- **Time-based key-value stores**  
- **Concurrency-safe structures** (lock-free queues, read-copy-update)  

---

**Next Steps & Resources**  
- **Practice Patterns:** Implement each from scratch, then solve 3–5 LeetCode / GFG problems per structure.  
- **Tracker Sheet:** Keep a spreadsheet with columns: Topic → Implemented? → Key Problems → Notes.  
- **Further Reading:**  
  - *“Introduction to Algorithms”* (CLRS) chapters on each DS  
  - *“Algorithms”* by Robert Sedgewick (Princeton)  
  - Neetcode / Striver YouTube playlists for hands-on walkthroughs  

Let me know if you’d like a **study roadmap with milestones**, a **tracker template**, or curated **problem lists** for each category!