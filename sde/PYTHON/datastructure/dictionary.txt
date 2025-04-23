```markdown
# Python Dictionaries

## Key Properties of Dictionaries:
- **Key-Value Pairs**: A dictionary stores data as key-value pairs.
- **Mutable**: Dictionaries can be modified after creation (adding, updating, and removing items).
- **Unique Keys**: Keys must be unique. If a duplicate key is added, it will overwrite the previous value.
- **Immutable Keys**: Dictionary keys must be immutable, e.g., strings, numbers, or tuples (not lists).
- **Ordered (Python 3.7 and later)**: Dictionaries maintain insertion order.
- **Case Sensitive**: Keys are case-sensitive, so `'key'` and `'KEY'` are treated as different.

## Creating a Dictionary:
- **Using curly braces `{}`**: Directly define a dictionary with key-value pairs.
- **Using `dict()` constructor**: Can also create a dictionary by passing key-value pairs.

```python
# Using curly braces
d1 = {1: 'Geeks', 2: 'For', 3: 'Geeks'}

# Using dict() constructor
d2 = dict(a = "Geeks", b = "for", c = "Geeks")
```

## Accessing Dictionary Items:
- Use the key inside square brackets `[]` or the `get()` method to access values.

```python
d = {"name": "Alice", 1: "Python", (1, 2): [1, 2, 4]}

# Access using key
print(d["name"])

# Access using get()
print(d.get("name"))
```

## Adding and Updating Dictionary Items:
- Add a new key-value pair or update an existing value using assignment.

```python
d = {1: 'Geeks', 2: 'For', 3: 'Geeks'}

# Adding a new key-value pair
d["age"] = 22

# Updating an existing value
d[1] = "Python dict"
```

## Removing Dictionary Items:
- **`del`**: Removes an item by key.
- **`pop()`**: Removes an item by key and returns its value.
- **`clear()`**: Empties the entire dictionary.
- **`popitem()`**: Removes and returns the last key-value pair.

```python
d = {1: 'Geeks', 2: 'For', 3: 'Geeks', 'age': 22}

# Using del to remove an item
del d["age"]

# Using pop() to remove an item and return the value
val = d.pop(1)

# Using popitem to remove and return the last key-value pair
key, val = d.popitem()

# Clear all items from the dictionary
d.clear()
```

## Iterating Through a Dictionary:
- **Iterate over keys**: Use a `for` loop to iterate through the keys.
- **Iterate over values**: Use `values()` method to iterate through the values.
- **Iterate over key-value pairs**: Use `items()` method to access both keys and values.

```python
d = {1: 'Geeks', 2: 'For', 'age': 22}

# Iterate over keys
for key in d:
    print(key)

# Iterate over values
for value in d.values():
    print(value)

# Iterate over key-value pairs
for key, value in d.items():
    print(f"{key}: {value}")
```

## Nested Dictionaries:
- Dictionaries can contain other dictionaries as values, allowing for nested structures.

```python
d = {1: 'Geeks', 2: 'For', 3: {'A': 'Welcome', 'B': 'To', 'C': 'Geeks'}}
```

## Important Points:
- **Dictionaries are unordered**: They do not maintain any order until Python 3.7, where order is preserved based on insertion.
- **Mutable**: You can change, add, or remove items.
- **Key uniqueness**: If the same key is assigned multiple times, the latest value will overwrite the earlier one.
- **Efficient operations**: Searching, inserting, and deleting elements are efficient due to the underlying hash table structure.
```