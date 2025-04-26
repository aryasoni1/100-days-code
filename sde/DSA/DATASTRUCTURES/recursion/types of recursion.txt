```markdown
# Types of Recursions

## What is Recursion?
Recursion is a process in which a function calls itself directly or indirectly. Recursive algorithms are used to solve problems that can be broken down into smaller subproblems, such as the Towers of Hanoi, Tree Traversals, DFS of Graphs, etc.

## Types of Recursions

### 1. Direct Recursion
Direct recursion occurs when a function calls itself directly.

#### a. Tail Recursion
- In tail recursion, the recursive call is the last statement in the function.
- After making the recursive call, no additional operations are performed.
- **Example:**
  ```python
  def fun(n): 
      if (n > 0): 
          print(n, end=" ") 
          fun(n - 1)  # Last statement in the function
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

**Comparison with Loop:**
- When converted to a loop, space complexity reduces to O(1), making loops more efficient in terms of memory usage.
  
#### b. Head Recursion
- In head recursion, the recursive call is the first statement in the function.
- All operations are performed after the recursive call returns.
- **Example:**
  ```python
  def fun(n): 
      if (n > 0):  
          fun(n - 1)  # First statement
          print(n, end=" ") 
  ```
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

**Conversion to Loop:**
- Head recursion can be converted to a loop, but it’s less efficient than tail recursion in terms of memory.

### 2. Tree Recursion
- A function makes multiple recursive calls, branching into more than one recursive call.
- **Example:**
  ```python
  def fun(n): 
      if (n > 0):  
          print(n, end=" ")
          fun(n - 1)  # First recursive call
          fun(n - 1)  # Second recursive call
  ```
- **Time Complexity:** O(2^n)
- **Space Complexity:** O(n)

### 3. Nested Recursion
- A recursive function calls itself with the result of another recursive call as its argument.
- **Example:**
  ```python
  def fun(n): 
      if (n > 100): 
          return n - 10
      return fun(fun(n + 11))  # Recursion inside recursion
  ```
- **Example Output:** `91`
- **Time Complexity:** Can vary based on the depth of recursion.
- **Space Complexity:** O(n)

### 4. Indirect Recursion
- In indirect recursion, multiple functions call each other in a circular manner.
- **Example:**
  ```python
  def funA(n): 
      if (n > 0): 
          print(n, end='') 
          funB(n - 1)  # Fun(A) calls fun(B)

  def funB(n): 
      if (n > 1): 
          print(n, end='') 
          funA(n // 2)  # Fun(B) calls fun(A)
  
  funA(20)  # Output: 20 19 9 8 4 3 1
  ```

---

## Summary of Recursion Types

| **Type**           | **Characteristics**                                                            | **Time Complexity** | **Space Complexity** |
|--------------------|---------------------------------------------------------------------------------|---------------------|----------------------|
| **Tail Recursion**  | Recursive call is the last statement.                                           | O(n)                | O(n)                 |
| **Head Recursion**  | Recursive call is the first statement.                                          | O(n)                | O(n)                 |
| **Tree Recursion**  | Multiple recursive calls are made.                                              | O(2^n)              | O(n)                 |
| **Nested Recursion**| Recursion inside recursion.                                                     | Varies              | O(n)                 |
| **Indirect Recursion** | Functions call each other in a cycle.                                         | Varies              | O(n)                 |

---

## Key Takeaways
- **Tail Recursion:** More efficient in terms of space when compared to head recursion but still requires stack memory.
- **Head Recursion:** All operations happen after the recursive calls, making it less efficient than tail recursion.
- **Tree Recursion:** Involves multiple recursive calls, resulting in exponential time complexity.
- **Nested Recursion:** Involves recursion within recursion, which can lead to complex time complexities based on the depth.
- **Indirect Recursion:** Functions call each other recursively, often forming a cycle.

```