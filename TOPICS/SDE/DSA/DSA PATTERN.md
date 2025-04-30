Here’s a comprehensive checklist of **DSA problem-solving patterns** you’ll want to master for FAANG-level SDE interviews. Think of each pattern as a toolkit—when you see a new problem, first classify it by pattern, then apply your specialized strategy:

---

## 1. Two-Pointer Patterns  
- **Opposite-end pointers** (e.g. “Container With Most Water”)  
- **Fast/slow pointers** (cycle detection, middle of list)  
- **Pair-sum in sorted arrays** (3-sum, 4-sum extensions)  

## 2. Sliding Window  
- **Fixed-size window** (maximum sum of size K)  
- **Variable-size window** (minimum window substring, longest subarray with K distinct)  
- **Dynamic adjustments** (expanding/contracting on condition)  

## 3. Merge Intervals  
- **Sort + sweep** (meeting rooms, insert interval)  
- **Line-sweep** (max concurrent events, skyline problem)  

## 4. Fast Exponentiation & Binary Search on Answer  
- **Exponentiation by squaring** (power(x, n))  
- **Search on answer** (find minimum capacity, “is feasible?” predicate)  
- **Discrete binary search** (rotated arrays, “peak” problems)  

## 5. Recursion & Divide-and-Conquer  
- **Classic D&C** (merge sort, quick sort, count inversions)  
- **Recursion tree** (subset/permutation generation)  
- **“Split problems”** (serialize/deserialize tree, skyline merge)  

## 6. Backtracking & Branch-and-Bound  
- **Permutations/combinations/subsets** (N-Queens, letter case permute)  
- **Constraint pruning** (sudoku, crossword fill)  
- **Heuristic ordering** (choose most constrained variable first)  

## 7. Depth-First Search (DFS) & Breadth-First Search (BFS)  
- **DFS templates** (preorder, postorder, graph cycle detection)  
- **BFS templates** (shortest path in unweighted graph, level order)  
- **State-space search** (word ladder, sliding puzzle)  

## 8. Dynamic Programming Patterns  
- **1D DP** (climbing stairs, house robber)  
- **2D DP** (unique paths, edit distance)  
- **DP on intervals** (matrix chain, burst balloons)  
- **DP on trees** (tree-diameter, rob binary tree)  
- **DP with bitmasking** (TSP, subset-sum variants)  
- **State machine DP** (regex matching, stock buy/sell)  

## 9. Greedy Templates  
- **Activity/interval scheduling**  
- **Huffman-style merges** (connect ropes, merge k lists)  
- **Local optimum proofs** (jump game, gas station)  

## 10. Topological Sort & DAGs  
- **Kahn’s algorithm** (course schedule)  
- **DFS-based ordering** (alien dictionary)  
- **Detect cycles in directed graphs**  

## 11. Union-Find Patterns  
- **Connectivity queries** (friend circles, accounts merge)  
- **Kruskal’s MST**  
- **Dynamic connectivity** (reducing online queries)  

## 12. Bitmasking & Bit Tricks  
- **Subset enumeration** via bits (power set)  
- **XOR-invariants** (single number, pairs)  
- **Mask DP** (TSP, matching)  

## 13. Heap/Priority-Queue Patterns  
- **K-th largest/smallest** (sliding window median)  
- **Merge sorted streams** (merge k lists, skyline)  
- **Top-K frequent elements**  

## 14. Windowed Graphs & Grid-DFS/BFS  
- **Island counting**  
- **0-1 BFS / Deque optimizations**  
- **Multi-source BFS** (rotting oranges)  

## 15. Miscellaneous Patterns  
- **Reservoir sampling** (random node in list)  
- **Reservoir / Reservoir-style** (random pick)  
- **Convex hull & line sweep** (advanced geometry)  

---

### 📚 Integrating Your Practice  
1. **Pattern-based problem sets**: Blind 75, Neetcode 150, Striver’s SDE Sheet.  
2. **Mapping**: Tag each solved problem by its pattern in your tracker.  
3. **Mixed drills**: Force yourself to identify the pattern before coding.  

Use this as your **go-to reference** until pattern recognition feels automatic—then you’ll blow through FAANG puzzles with confidence!