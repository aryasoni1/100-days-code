
<h1>datastructures</h1>
Here's a summary of the page on Python Strings:
Overview
	• Strings: Sequences of characters enclosed in quotes (single, double, or triple).
	• Immutability: Strings cannot be changed after creation.
Creating Strings
	• Use single (') or double (") quotes.
	• Multi-line strings use triple quotes (''' or """).
Accessing Characters
	• Use indexing (starting from 0) to access individual characters.
	• Negative indexing allows access from the end of the string.
String Slicing
	• Extract a portion of a string using string[start:end].
	• Supports negative indexing and step values.
Common String Methods
	• len(): Returns the length of the string.
	• upper() and lower(): Convert to uppercase or lowercase.
	• strip(): Removes leading and trailing whitespace.
	• replace(): Replaces a substring with another.
Concatenation and Repetition
	• Use + to concatenate strings.
	• Use * to repeat strings.
String Formatting
	• f-strings: Embed expressions inside string literals using {}.
	• format(): Another method to include variables in strings.
Membership Testing
	• Use in to check if a substring exists within a string.
Would you like more details on any specific section?
Sure! Here are examples for each topic related to Python strings:
Creating Strings
# Single and double quotes
single_quote_str = 'Hello'
double_quote_str = "World"
# Triple quotes for multi-line strings
multi_line_str = '''This is a
multi-line string.'''
Accessing Characters
# Indexing
string = "Python"
print(string[0])  # Output: P
print(string[-1]) # Output: n
String Slicing
# Slicing
string = "Hello, World!"
print(string[0:5])   # Output: Hello
print(string[7:])    # Output: World!
print(string[-6:])   # Output: World!
print(string[::2])   # Output: Hlo ol!
Common String Methods
# len()
string = "Python"
print(len(string))  # Output: 6
# upper() and lower()
print(string.upper())  # Output: PYTHON
print(string.lower())  # Output: python
# strip()
string_with_spaces = "  Hello  "
print(string_with_spaces.strip())  # Output: Hello
# replace()
print(string.replace("P", "J"))  # Output: Jython
Concatenation and Repetition
# Concatenation
str1 = "Hello"
str2 = "World"
print(str1 + " " + str2)  # Output: Hello World
# Repetition
print(str1 * 3)  # Output: HelloHelloHello
String Formatting
# f-strings
name = "Alice"
age = 30
print(f"My name is {name} and I am {age} years old.")  # Output: My name is Alice and I am 30 years old.
# format() method
print("My name is {} and I am {} years old.".format(name, age))  # Output: My name is Alice and I am 30 years old.
Membership Testing
# in keyword
string = "Hello, World!"
print("Hello" in string)  # Output: True
print("Python" in string) # Output: False
Feel free to ask if you need more details or have any other questions!













Sure! Here's a brief summary of the page:
Python Lists Overview
	• Dynamic Sized Array: Lists in Python can grow and shrink dynamically.
	• Mixed Data Types: Lists can store items of different types, including other lists.
	• Mutable and Ordered: Lists can be modified, and they maintain the order of elements.
Key Operations
	• Creating Lists: Using square brackets or the list() constructor.
	• Accessing Elements: Using indexing, starting from 0.
	• Adding Elements: Using append(), extend(), and insert().
	• Updating Elements: By accessing elements via their index.
	• Removing Elements: Using remove(), pop(), and del statement.
	• Iterating Over Lists: Using loops to perform operations on each item.
Special Features
	• Nested Lists: Lists within lists, useful for representing matrices or tables.
	• Storing References: Lists store references to objects, not the objects themselves.
Would you like more details on any specific section?

Sure! Let's break down the key points about Python lists and provide code examples for each.
Python Lists Overview
	1. Dynamic Sized Array: Lists in Python can grow and shrink dynamically.
   my_list = [1, 2, 3]
   my_list.append(4)  # List becomes [1, 2, 3, 4]
   my_list.pop()      # List becomes [1, 2, 3]
	1. Mixed Data Types: Lists can store items of different types, including other lists.
   mixed_list = [1, "hello", 3.14, [5, 6, 7]]
	1. Mutable and Ordered: Lists can be modified, and they maintain the order of elements.
   ordered_list = [10, 20, 30]
   ordered_list[1] = 25  # List becomes [10, 25, 30]
Key Operations
	1. Creating Lists: Using square brackets or the list() constructor.
   list1 = [1, 2, 3]
   list2 = list((4, 5, 6))
	1. Accessing Elements: Using indexing, starting from 0.
   first_element = list1[0]  # 1
	1. Adding Elements: Using append(), extend(), and insert().
   list1.append(4)          # List becomes [1, 2, 3, 4]
   list1.extend([5, 6])     # List becomes [1, 2, 3, 4, 5, 6]
   list1.insert(1, 1.5)     # List becomes [1, 1.5, 2, 3, 4, 5, 6]
	1. Updating Elements: By accessing elements via their index.
   list1[2] = 2.5  # List becomes [1, 1.5, 2.5, 3, 4, 5, 6]
	1. Removing Elements: Using remove(), pop(), and del statement.
   list1.remove(1.5)  # List becomes [1, 2.5, 3, 4, 5, 6]
   list1.pop(2)       # List becomes [1, 2.5, 4, 5, 6]
   del list1[0]       # List becomes [2.5, 4, 5, 6]
	1. Iterating Over Lists: Using loops to perform operations on each item.
   for item in list1:
       print(item)
Special Features
	1. Nested Lists: Lists within lists, useful for representing matrices or tables.
   nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	1. Storing References: Lists store references to objects, not the objects themselves.
   a = [1, 2, 3]
   b = a
   b.append(4)  # Both 'a' and 'b' become [1, 2, 3, 4]
Would you like more details on any specific section or further examples?
















Detailed Summary of Python Tuples
Overview
	• Immutable Ordered Collection: Tuples are similar to lists but cannot be changed after creation.
	• Mixed Data Types: Tuples can hold elements of different types.
Creating Tuples
	• Using Parentheses: Elements are placed inside parentheses, separated by commas.
  tup = (1, 2, 3)
	• Using Built-in Functions: Convert other data types to tuples.
  tup = tuple([1, 2, 3])
Accessing and Modifying Tuples
	• Indexing and Slicing: Access elements using indices, similar to lists.
  first_element = tup[0]
  sliced_tuple = tup[1:3]
	• Tuple Unpacking: Assign elements to multiple variables.
  a, b, c = tup
Operations on Tuples
	• Concatenation: Combine tuples using the + operator.
  tup1 + tup2
	• Slicing: Create a new tuple from a subset of elements.
  sliced = tup[1:4]
	• Deleting Tuples: Entire tuples can be deleted using del.
  del tup
Built-in Methods and Functions
	• Methods: count() and index().
  tup.count(1)
  tup.index(2)
	• Functions: len(), max(), min(), sum(), sorted().
  len(tup)
  max(tup)
Tuples vs Lists
	• Immutability: Tuples are immutable, lists are mutable.
	• Performance: Tuples are generally faster for iteration and access.
	• Use Cases: Tuples for fixed collections, lists for dynamic collections.
Would you like more details on any specific section?

Sure! Here are examples for each section of the detailed summary on Python tuples:
Creating Tuples
	1. Using Parentheses:
   tup = (1, 2, 3)
	1. Using Built-in Functions:
   tup = tuple([1, 2, 3])
Accessing and Modifying Tuples
	1. Indexing and Slicing:
   first_element = tup[0]  # Accessing the first element
   sliced_tuple = tup[1:3]  # Slicing the tuple
	1. Tuple Unpacking:
   a, b, c = tup  # Unpacking the tuple into variables
Operations on Tuples
	1. Concatenation:
   tup1 = (1, 2)
   tup2 = (3, 4)
   combined = tup1 + tup2  # Result: (1, 2, 3, 4)
	1. Slicing:
   tup = (1, 2, 3, 4, 5)
   sliced = tup[1:4]  # Result: (2, 3, 4)
	1. Deleting Tuples:
   tup = (1, 2, 3)
   del tup  # Deletes the entire tuple
Built-in Methods and Functions
	1. Methods:
   tup = (1, 2, 2, 3)
   count_of_twos = tup.count(2)  # Result: 2
   index_of_two = tup.index(2)  # Result: 1
	1. Functions:
   tup = (1, 2, 3)
   length = len(tup)  # Result: 3
   maximum = max(tup)  # Result: 3
   minimum = min(tup)  # Result: 1
   total = sum(tup)  # Result: 6
   sorted_tup = sorted(tup)  # Result: [1, 2, 3]
Tuples vs Lists
	1. Immutability:
   tup = (1, 2, 3)
   # tup[0] = 4  # This will raise an error because tuples are immutable
	1. Performance:
   import timeit
list_time = timeit.timeit(stmt="[1, 2, 3, 4, 5]", number=1000000)
   tuple_time = timeit.timeit(stmt="(1, 2, 3, 4, 5)", number=1000000)
print(f"List creation time: {list_time}")
   print(f"Tuple creation time: {tuple_time}")
	1. Use Cases:
   # Tuples for fixed collections
   coordinates = (10.0, 20.0)
# Lists for dynamic collections
   shopping_list = ["apples", "bananas", "carrots"]
   shopping_list.append("dates")
Would you like more examples or details on any specific section?












Detailed Summary of Python Dictionaries
Overview
	• Key-Value Pairs: Python dictionaries store data in key-value pairs. Keys must be unique and immutable, while values can be of any data type and can be duplicated.
	• Ordered: From Python 3.7 onwards, dictionaries maintain the order of items.
	• Case Sensitivity: Keys are case-sensitive.
Creating Dictionaries
	• Using Curly Braces: 
  d1 = {1: 'Geeks', 2: 'For', 3: 'Geeks'}
	• Using dict() Constructor:
  d2 = dict(a="Geeks", b="for", c="Geeks")
Accessing Dictionary Items
	• Using Keys:
  d = {"name": "Alice", 1: "Python", (1, 2): [1, 2, 4]}
  print(d["name"])  # Output: Alice
	• Using get() Method:
  print(d.get("name"))  # Output: Alice
Adding and Updating Items
	• Adding New Key-Value Pairs:
  d["age"] = 22
	• Updating Existing Values:
  d[1] = "Python dict"
Removing Dictionary Items
	• Using del:
  del d["age"]
	• Using pop():
  val = d.pop(1)
	• Using clear():
  d.clear()
	• Using popitem():
  key, val = d.popitem()
Iterating Through a Dictionary
	• Iterate Over Keys:
  for key in d:
      print(key)
	• Iterate Over Values:
  for value in d.values():
      print(value)
	• Iterate Over Key-Value Pairs:
  for key, value in d.items():
      print(f"{key}: {value}")
Nested Dictionaries
	• Example:
  d = {1: 'Geeks', 2: 'For', 3: {'A': 'Welcome', 'B': 'To', 'C': 'Geeks'}}
Would you like more details or examples on any specific section?

Sure! Let's dive into the details of some common dictionary methods in Python:
1. dict.clear()
	• Description: Removes all items from the dictionary.
	• Example:
  d = {"name": "Alice", "age": 25}
  d.clear()
  print(d)  # Output: {}
2. dict.copy()
	• Description: Returns a shallow copy of the dictionary.
	• Example:
  d = {"name": "Alice", "age": 25}
  d_copy = d.copy()
  print(d_copy)  # Output: {'name': 'Alice', 'age': 25}
3. dict.fromkeys()
	• Description: Creates a new dictionary with keys from an iterable and values set to a specified value.
	• Example:
  keys = ['a', 'b', 'c']
  d = dict.fromkeys(keys, 0)
  print(d)  # Output: {'a': 0, 'b': 0, 'c': 0}
4. dict.get()
	• Description: Returns the value for a specified key if the key is in the dictionary; otherwise, returns a default value.
	• Example:
  d = {"name": "Alice", "age": 25}
  age = d.get("age", "Not Found")
  print(age)  # Output: 25
5. dict.items()
	• Description: Returns a view object that displays a list of dictionary's key-value tuple pairs.
	• Example:
  d = {"name": "Alice", "age": 25}
  items = d.items()
  print(items)  # Output: dict_items([('name', 'Alice'), ('age', 25)])
6. dict.keys()
	• Description: Returns a view object that displays a list of all the keys in the dictionary.
	• Example:
  d = {"name": "Alice", "age": 25}
  keys = d.keys()
  print(keys)  # Output: dict_keys(['name', 'age'])
7. dict.pop()
	• Description: Removes the specified key and returns the corresponding value. If the key is not found, it returns a default value.
	• Example:
  d = {"name": "Alice", "age": 25}
  age = d.pop("age", "Not Found")
  print(age)  # Output: 25
  print(d)    # Output: {'name': 'Alice'}
8. dict.popitem()
	• Description: Removes and returns the last inserted key-value pair as a tuple.
	• Example:
  d = {"name": "Alice", "age": 25}
  item = d.popitem()
  print(item)  # Output: ('age', 25)
  print(d)     # Output: {'name': 'Alice'}
9. dict.setdefault()
	• Description: Returns the value of a key if it is in the dictionary. If not, inserts the key with a specified value.
	• Example:
  d = {"name": "Alice"}
  age = d.setdefault("age", 25)
  print(age)  # Output: 25
  print(d)    # Output: {'name': 'Alice', 'age': 25}
10. dict.update()
	• Description: Updates the dictionary with elements from another dictionary object or from an iterable of key-value pairs.
	• Example:
  d = {"name": "Alice"}
  d.update({"age": 25, "city": "New York"})
  print(d)  # Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}
11. dict.values()
	• Description: Returns a view object that displays a list of all the values in the dictionary.
	• Example:
  d = {"name": "Alice", "age": 25}
  values = d.values()
  print(values)  # Output: dict_values(['Alice', 25])
Would you like more examples or details on any specific method?












Detailed Summary of Python Sets
Overview
	• Unordered Collection: Python sets are unordered collections of unique items.
	• Mutable: Sets can be modified after creation.
	• No Duplicates: Sets automatically remove duplicate items.
Creating Sets
	• Using Curly Braces:
  set1 = {1, 2, 3, 4}
	• Using set() Function:
  set1 = set("GeeksForGeeks")
  set2 = set(["Geeks", "For", "Geeks"])
Properties
	• Unordered: The order of elements is not preserved.
	• Unindexed: Sets do not support indexing.
	• Mutable: Elements can be added or removed.
Adding Elements
	• Using add():
  set1.add(4)
	• Using update():
  set1.update([5, 6])
Accessing Elements
	• Using Loops:
  for item in set1:
      print(item)
	• Using in Keyword:
  if "Geeks" in set1:
      print("Found")
Removing Elements
	• Using remove():
  set1.remove(3)
	• Using discard():
  set1.discard(4)
	• Using pop():
  set1.pop()
	• Using clear():
  set1.clear()
Frozen Sets
	• Immutable Sets:
  fset = frozenset([1, 2, 3, 4, 5])
Typecasting
	• Converting Lists, Strings, and Dictionaries to Sets:
  set1 = set([1, 2, 3, 3, 4, 5])
  set2 = set("GeeksforGeeks")
  set3 = set({1: "One", 2: "Two"})
Advantages
	• Unique Elements: Automatically removes duplicates.
	• Fast Membership Testing: Efficient for checking if an item exists.
	• Mathematical Operations: Supports union, intersection, and difference.
Disadvantages
	• Unordered: Cannot rely on the order of elements.
	• Limited Functionality: Fewer methods compared to lists.
	• Memory Usage: Can consume more memory than lists.
Would you like more details on any specific section?

Python Set Methods and Important Points
Set Methods
	1. add()
		○ Description: Adds an element to the set.
		○ Example:
 set1 = {1, 2, 3}
 set1.add(4)
 print(set1)  # Output: {1, 2, 3, 4}
	2. update()
		○ Description: Updates the set with the union of itself and others.
		○ Example:
 set1 = {1, 2, 3}
 set1.update([4, 5])
 print(set1)  # Output: {1, 2, 3, 4, 5}
	3. remove()
		○ Description: Removes the specified element. Raises a KeyError if the element is not found.
		○ Example:
 set1 = {1, 2, 3}
 set1.remove(2)
 print(set1)  # Output: {1, 3}
	4. discard()
		○ Description: Removes the specified element. Does not raise an error if the element is not found.
		○ Example:
 set1 = {1, 2, 3}
 set1.discard(2)
 print(set1)  # Output: {1, 3}
	5. pop()
		○ Description: Removes and returns an arbitrary element from the set. Raises a KeyError if the set is empty.
		○ Example:
 set1 = {1, 2, 3}
 element = set1.pop()
 print(element)  # Output: 1 (or any other element)
 print(set1)     # Output: {2, 3}
	6. clear()
		○ Description: Removes all elements from the set.
		○ Example:
 set1 = {1, 2, 3}
 set1.clear()
 print(set1)  # Output: set()
	7. union()
		○ Description: Returns a new set with elements from the set and all others.
		○ Example:
 set1 = {1, 2, 3}
 set2 = {3, 4, 5}
 set3 = set1.union(set2)
 print(set3)  # Output: {1, 2, 3, 4, 5}
	8. intersection()
		○ Description: Returns a new set with elements common to the set and all others.
		○ Example:
 set1 = {1, 2, 3}
 set2 = {2, 3, 4}
 set3 = set1.intersection(set2)
 print(set3)  # Output: {2, 3}
	9. difference()
		○ Description: Returns a new set with elements in the set that are not in the others.
		○ Example:
 set1 = {1, 2, 3}
 set2 = {2, 3, 4}
 set3 = set1.difference(set2)
 print(set3)  # Output: {1}
	10. symmetric_difference()
		○ Description: Returns a new set with elements in either the set or the others but not in both.
		○ Example: python set1 = {1, 2, 3} set2 = {2, 3, 4} set3 = set1.symmetric_difference(set2) print(set3) # Output: {1, 4} 
Important Points
	1. Unordered Collection: Sets do not maintain any order of elements.
	2. Unique Elements: Sets automatically remove duplicate items.
	3. Mutable: Elements can be added or removed from a set.
	4. Efficient Membership Testing: Checking if an item exists in a set is very fast.
	5. Mathematical Operations: Sets support operations like union, intersection, and difference, which are useful for various applications.
Would you like more details or examples on any specific method or point?












Detailed Summary of Python Lists, NumPy Arrays, and Python Arrays
Python Lists
	• Dynamic Typing: Python lists can hold elements of different types in the same list.
  a = [1, "Hello", [3.14, "world"]]
	• Dynamic Resizing: Lists are dynamically resized, allowing you to add or remove elements without declaring the size upfront.
  a.append(2)  # List becomes [1, "Hello", [3.14, "world"], 2]
	• Built-in Methods: Lists come with numerous built-in methods for easy manipulation, such as append(), remove(), sort(), and reverse().
  a.remove(2)  # List becomes [1, "Hello", [3.14, "world"]]
NumPy Arrays
	• Multi-dimensional Support: NumPy arrays can handle more than one dimension, making them suitable for matrix operations.
  import numpy as np
  arr2d = np.array([[1, 2], [3, 4]])
	• Broad Broadcasting Capabilities: Perform operations between arrays of different sizes and shapes.
  arr = np.array([1, 2, 3, 4])
  print(arr * 2)  # Output: [2, 4, 6, 8]
	• Efficient Storage and Processing: NumPy arrays are stored more efficiently than Python lists and provide optimized performance for numerical operations.
  print(arr2d * 2)  # Output: [[2, 4], [6, 8]]
Python Arrays
	• Homogeneous Elements: Arrays must have all elements of the same type, making them memory-efficient.
  import array as arr
  a = arr.array('i', [1, 2, 3])
	• Creating Arrays: Use the array module to create arrays with specified data types.
  a.append(5)  # Array becomes array('i', [1, 2, 3, 5])
	• Accessing and Modifying Elements: Access elements using indexing and modify them by reassigning values.
  print(a[0])  # Output: 1
  a[2] = 6  # Array becomes array('i', [1, 2, 6, 5])
	• Removing Elements: Use remove(), pop(), and slicing to manage array elements.
  a.remove(2)  # Array becomes array('i', [1, 6, 5])
Would you like more details or examples on any specific section?
. Operations on Arrays:
• Adding Elements: Using append() and insert() methods.
• Accessing Elements: Using index numbers.
• Removing Elements: Using remove() and pop() methods.
• Slicing: Extracting specific ranges of elements.
• Searching and Updating: Using index() and direct assignment.
• Reversing and Extending: Using reverse() and extend() methods.
This page provides a comprehensive guide on using arrays and lists in Python, highlighting their differences, use cases, and various operations.

Sure! Here are some examples and code snippets for working with Python lists, NumPy arrays, and Python arrays:
1. Python Lists
Example:
# Creating a list
my_list = [1, 2, 3, 'a', 'b', 'c']
# Adding elements
my_list.append(4)
my_list.insert(2, 'inserted')
# Removing elements
my_list.remove('a')
popped_element = my_list.pop(3)
# Sorting and reversing
my_list.sort()  # Note: This will raise an error if list contains mixed types
my_list.reverse()
print(my_list)
2. NumPy Arrays
Example:
import numpy as np
# Creating a NumPy array
my_array = np.array([1, 2, 3, 4, 5])
# Element-wise operations
my_array = my_array * 2
# Multi-dimensional array
matrix = np.array([[1, 2, 3], [4, 5, 6]])
# Accessing elements
element = matrix[1, 2]
print(my_array)
print(matrix)
print(element)
3. Python Arrays
Example:
import array as arr
# Creating an array of integers
my_array = arr.array('i', [1, 2, 3, 4, 5])
# Adding elements
my_array.append(6)
my_array.insert(2, 7)
# Removing elements
my_array.remove(3)
popped_element = my_array.pop(1)
# Accessing elements
element = my_array[2]
print(my_array)
print(element)
These examples demonstrate how to create, manipulate, and perform operations on Python lists, NumPy arrays, and Python arrays. Let me know if you need more details or have any specific questions!


















List Comprehension in Python
1. Introduction:
	• Definition: List comprehension is a concise way to create lists by applying an expression to each item in an existing iterable.
	• Benefits: Cleaner and more readable code compared to traditional looping techniques.
2. Syntax:
	• Format: [expression for item in iterable if condition]
		○ expression: Transformation or value to include in the new list.
		○ item: Current element from the iterable.
		○ iterable: Sequence or collection (e.g., list, tuple, set).
		○ if condition (optional): Filtering condition for including items.
3. Comparison with For Loop:
	• For Loop: Requires multiple lines to create a new list by iterating and adding elements.
	• List Comprehension: Achieves the same task in a single line, making the code simpler and easier to read.
4. Examples:
	• Basic Example: Squaring elements in a list.
  a = [2, 3, 4, 5]
  res = [val ** 2 for val in a]
  print(res)  # Output: [4, 9, 16, 25]
	• With Conditionals: Filtering even numbers from a list.
  a = [1, 2, 3, 4, 5]
  res = [val for val in a if val % 2 == 0]
  print(res)  # Output: [2, 4]
5. Advanced Usage:
	• Nested Loops: Generating coordinate pairs for a grid.
  coordinates = [(x, y) for x in range(3) for y in range(3)]
  print(coordinates)  # Output: [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
	• Flattening Lists: Converting a list of lists into a single list.
  mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  res = [val for row in mat for val in row]
  print(res)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
This page provides a comprehensive guide on using list comprehensions in Python, highlighting their syntax, benefits, and various use cases.

Sure! Here are some more examples of list comprehensions with different conditions:
1. Filtering Odd Numbers:
# List of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# List comprehension to filter odd numbers
odd_numbers = [num for num in numbers if num % 2 != 0]
print(odd_numbers)  # Output: [1, 3, 5, 7, 9]
2. Converting Strings to Uppercase:
# List of strings
words = ['hello', 'world', 'python', 'list', 'comprehension']
# List comprehension to convert strings to uppercase
uppercase_words = [word.upper() for word in words]
print(uppercase_words)  # Output: ['HELLO', 'WORLD', 'PYTHON', 'LIST', 'COMPREHENSION']
3. Squaring Even Numbers:
# List of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# List comprehension to square even numbers
squared_evens = [num ** 2 for num in numbers if num % 2 == 0]
print(squared_evens)  # Output: [4, 16, 36, 64, 100]
4. Extracting Vowels from a String:
# Input string
sentence = "List comprehensions are powerful!"
# List comprehension to extract vowels
vowels = [char for char in sentence if char.lower() in 'aeiou']
print(vowels)  # Output: ['i', 'o', 'e', 'e', 'i', 'o', 'a', 'e', 'o', 'e', 'u']
5. Creating a Dictionary from Two Lists:
# Two lists
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']
# List comprehension to create a dictionary
dictionary = {keys[i]: values[i] for i in range(len(keys))}
print(dictionary)  # Output: {'name': 'Alice', 'age': 25, 'city': 'New York'}
These examples demonstrate various ways to use list comprehensions with different conditions and transformations. Let me know if you need more examples or have any specific questions!








