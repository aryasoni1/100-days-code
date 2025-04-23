```markdown
# Python Sets

## Key Properties of Sets:
- **No duplicate elements**: Duplicates are automatically removed. 
- **Unordered collection**: No specific order when accessing items; items cannot be accessed using indexes.
- **Efficient operations**: Utilizes hashing, making search, insert, and delete operations faster than lists.
- **Mutable**: Elements can be added or removed, but the individual items cannot be modified once inserted.

## Type Casting with Python Set:
- Convert other collections to a set using `set()`.

```python
# Typecasting list to set
s = set(["a", "b", "c"])
```

## Checking Uniqueness and Immutability:
- **Uniqueness**: Sets do not allow duplicate elements.
- **Immutability**: While the set itself is mutable, individual items cannot be changed once added.

```python
s = {"Geeks", "for", "Geeks"}  # Duplicates are removed
s[1] = "Hello"  # Raises TypeError
```

## Heterogeneous Elements:
- Sets can store different data types such as integers, strings, booleans, etc.

```python
s = {"Geeks", "for", 10, 52.7, True}
```

## Frozen Sets:
- **Frozen Set**: An immutable set, created using `frozenset()`. It doesn’t allow modification after creation.
  
```python
fs = frozenset(["e", "f", "g"])
fs.add("h")  # Raises an error
```

## Internal Working of Sets:
- Internally implemented using a **hash table** with dummy variables, optimizing for fast access times.

## Set Operations:

### Adding Elements:
- Use `set.add()` to insert elements.

```python
people = {"Jay", "Idrish", "Archi"}
people.add("Daxit")
```

### Union Operation:
- Combines two sets and removes duplicates.
- Can be done with `union()` or `|` operator.

```python
set1 = {"Jay", "Idrish"}
set2 = {"Archi", "Karan"}
result = set1.union(set2)  # Using union()
result = set1 | set2       # Using | operator
```

### Intersection Operation:
- Finds common elements between two sets.
- Can be done with `intersection()` or `&` operator.

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
result = set1.intersection(set2)  # Using intersection()
result = set1 & set2              # Using & operator
```

### Difference of Sets:
- Finds elements in the first set but not in the second set.
- Can be done with `difference()` or `-` operator.

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}
result = set1.difference(set2)  # Using difference()
result = set1 - set2            # Using - operator
```

### Clearing a Set:
- Clears all elements in the set using `clear()`.

```python
set1 = {1, 2, 3}
set1.clear()  # Empties the set
```

## Time Complexity of Set Operations:
| Operation                       | Average Case | Worst Case |
|----------------------------------|--------------|------------|
| Membership Check (`x in s`)      | O(1)         | O(n)       |
| Union (`s1 | s2`)                | O(len(s1) + len(s2)) | N/A |
| Intersection (`s1 & s2`)         | O(min(len(s1), len(s2))) | O(len(s1) * len(s2)) |
| Difference (`s1 - s2`)           | O(len(s1))   | O(len(s1)) |
| Adding elements (`add()`)        | O(1)         | O(n)       |
| Multiple intersections (`s1 & s2 & ... & sn`) | (n-1) * O(l) | N/A |

## Set Operators:
- **Membership operators**: `in`, `not in`
- **Equality**: `==`, `!=`
- **Subset and Superset**: `<=`, `<`, `>=`, `>`

```python
s1 <= s2   # s1 is a subset of s2
s1 | s2    # Union of s1 and s2
s1 & s2    # Intersection of s1 and s2
```
```