Here’s a **master checklist of algorithm topics** you’ll want to own to crack FAANG-level SDE interviews. I’ve organized them by category, from fundamentals through advanced patterns:

---

## 1. Fundamentals & Problem-Solving Patterns  
- **Time & Space Complexity**  
  - Big O, Ω, Θ notation  
  - Amortized analysis  
  - Recurrence relations (Master Theorem)  

- **Recursion & Recurrence**  
  - Divide-and-conquer templates  
  - Tail vs. non-tail recursion  
  - Recursion tree method  

- **Two-Pointer Technique**  
  - Opposite-end pointers  
  - Fast/slow pointers (cycle detection, midpoint)  

- **Sliding Window**  
  - Fixed-size vs. variable-size windows  
  - Min/Max window, dynamic window adjustments  

- **Divide & Conquer**  
  - Classic examples: mergesort, quickselect  
  - “Search on answer” (binary search on space)  

---

## 2. Sorting & Searching  
- **Elementary Sorts** (for understanding)  
  - Bubble, insertion, selection  

- **Efficient Sorts**  
  - Merge sort, quicksort (with pivot strategies)  
  - Heap sort, counting/radix/bucket sort  

- **Binary Search**  
  - Standard, lower/upper bound  
  - Rotated-array variants, “peak” problems  
  - Search in continuous domains  

---

## 3. Dynamic Programming  
- **Classification**  
  - 1D DP (linear arrays)  
  - 2D DP (grids, strings)  
  - DP on trees  

- **Common Patterns**  
  - “DP on intervals” (matrix chain, burst balloons)  
  - “DP with bitmasks” (TSP)  
  - “DP on subsequences” (LIS, LCS, substring edits)  

- **Optimization Techniques**  
  - Memoization vs. tabulation  
  - Space-optimized rolling arrays  
  - “Convex hull trick” & Knuth’s optimization (advanced)  

---

## 4. Greedy Algorithms  
- **Prototype Problems**  
  - Activity selection, interval scheduling  
  - Huffman coding, fractional knapsack  
  - Jump game, gas station  

- **Proof Strategies**  
  - Exchange arguments  
  - Matroid theory (high-level)  

---

## 5. Backtracking & Branch-and-Bound  
- **Permutation/Combination Generators**  
  - Subsets, permutations, combinations  
  - N-Queens, Sudoku solver  

- **Pruning Techniques**  
  - Constraint propagation  
  - Heuristic ordering  

---

## 6. Graph & Tree Algorithms  
- **Traversal & Search**  
  - BFS, DFS (with parent tracking, orderings)  
  - Topological sort (Kahn’s and DFS)  

- **Shortest Paths**  
  - Dijkstra’s (with heaps)  
  - Bellman-Ford, SPFA  
  - Floyd-Warshall  

- **Minimum Spanning Trees**  
  - Kruskal’s (with DSU)  
  - Prim’s (with priority queue)  

- **Advanced Graphs**  
  - Bidirectional search  
  - A* search (heuristic)  
  - Maximum flow (Edmonds-Karp, Dinic’s)  
  - Matching & network flow applications  

- **Tree-Specific**  
  - Lowest common ancestor (binary lifting)  
  - Tree DP patterns  

---

## 7. Number Theory & Combinatorics  
- **Fundamentals**  
  - GCD/LCM, modular arithmetic  
  - Fast exponentiation, modular inverse  

- **Primes & Factorization**  
  - Sieve of Eratosthenes, segmented sieve  
  - Pollard’s rho (advanced)  

- **Combinatorial Formulas**  
  - nCr, Catalan numbers  
  - Inclusion–exclusion principle  

---

## 8. Bit Manipulation  
- **Bit Tricks**  
  - Masks, setting/clearing/toggling bits  
  - Counting bits (Brian Kernighan’s)  
  - Power-of-two checks  

- **Pattern Problems**  
  - XOR properties (single number, pairs)  
  - Subset enumeration via bitmasks  

---

## 9. Advanced & Specialized Techniques  
- **Data-Structure-Driven**  
  - Segment trees & Fenwick trees (range query/update)  
  - Union-Find / Disjoint set (with path compression)  

- **String Algorithms**  
  - KMP, Z-algorithm, Rabin-Karp  
  - Suffix array/tree fundamentals  
  - Manacher’s (palindromes)  

- **Geometry & Computational**  
  - Convex hull (Graham scan)  
  - Line-sweep, nearest neighbor  

- **Randomized & Probabilistic**  
  - Reservoir sampling  
  - Randomized quicksort/select  

---

## 10. Practice & Integration Patterns  
- **LeetCode “Blind 75” / Neetcode 150**  
- **Striver SDE Sheet**  
- **Project Euler / Competitive Templates**  

---

### 📈 How to Use This List  
1. **Map to Problems**: For each topic pick 5–10 representative problems.  
2. **Implement & Analyze**: Code it yourself; write out time/space proofs.  
3. **Pattern Recognition**: When seeing a new problem, classify by technique first.  
4. **Review & Iterate**: Periodically revisit weak areas and optimize your solutions.  

Feel free to ask for a **study roadmap**, **curated problem lists**, or a **progress tracker template**!