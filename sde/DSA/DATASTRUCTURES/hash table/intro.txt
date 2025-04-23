Here is a Markdown version of the key points about hash tables:

```markdown
# Hash Table

A **hash table** is a data structure used to insert, look up, and remove key-value pairs quickly. It operates on the hashing concept, where each key is translated by a hash function into a distinct index in an array. This index serves as a storage location for the corresponding value.

## Components of Hashing
- **Hash Function**: Translates keys into array indices.
- **Table**: Array that stores key-value pairs.

## Load Factor
- The **load factor** of a hash table is the ratio of the number of elements to the table's size.
- High load factors can lead to longer search times and collisions.
- A good hash function and resizing of the table can maintain an ideal load factor.

## Hash Function
A **hash function** translates keys into array indices.

### Types of Hashing
- **Integer Universe Assumption**: Assumes keys are integers within a certain range.
- **Hashing by Division**: Uses the remainder when dividing the key by the table size as the index.
- **Hashing by Multiplication**: Multiplies the key by a constant and uses the fractional part of the result to determine the index.

### Criteria for Choosing a Hash Function
- Should distribute keys evenly across the table to minimize collisions.
- Must be computationally efficient.
- Should make it difficult to reverse-engineer the key from its hash value.
- Needs to be flexible as data changes.

## Collision Resolution Techniques
- **Collisions** happen when two keys hash to the same index.

### Types of Collision Resolution
1. **Open Addressing**: Look for the next empty slot. Methods include:
   - **Linear Probing**
   - **Quadratic Probing**
   - **Double Hashing**
2. **Separate Chaining**: Each table slot stores a linked list of keys.
3. **Robin Hood Hashing**: Keys are swapped if a newly inserted key is closer to its ideal slot than the existing key.

## Dynamic Resizing
- Hash tables may resize themselves based on the number of elements, optimizing the load factor and lookup times.

## Example Implementation in Python (Chaining)

```python
BUCKET_SIZE = 7

class Hash(object):
    def __init__(self, bucket):
        self.__bucket = bucket
        self.__table = [[] for _ in range(bucket)]

    def hashFunction(self, key):
        return key % self.__bucket

    def insertItem(self, key):
        index = self.hashFunction(key)
        self.__table[index].append(key)

    def deleteItem(self, key):
        index = self.hashFunction(key)
        if key in self.__table[index]:
            self.__table[index].remove(key)

    def displayHash(self):
        for i in range(self.__bucket):
            print("[%d]" % i, end='')
            for x in self.__table[i]:
                print(" --> %d" % x, end='')
            print()

if __name__ == "__main__":
    a = [15, 11, 27, 8, 12]
    h = Hash(BUCKET_SIZE)

    for x in a:
        h.insertItem(x)

    h.deleteItem(12)
    h.displayHash()
```

### Output:
```
0
1 --> 15 --> 8
2
3
4 --> 11
5
6 --> 27
```

## Complexity Analysis
- **Average-case** for lookup, insertion, and deletion: **O(1)**
- **Worst-case** for lookup, insertion, and deletion: **O(n)** (if all keys hash to the same index)

## Applications of Hash Tables
- **Indexing**: Efficiently store and access indexed data (e.g., search engines).
- **Caching**: Store frequently accessed data in memory for fast retrieval.
- **Cryptography**: Used for digital signatures and data integrity checks.
- **Database Indexing**: Used for fast data retrieval by key values.
```

This Markdown version covers the important points, examples, and applications related to hash tables, including the Python implementation.