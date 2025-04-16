

<h1>functions</h1>
Sure! Here's a summary of the page about the Python def keyword:
Python def Keyword Overview
	• Purpose: Used to define functions in Python, allowing for code reusability and organization.
	• Syntax: 
  def function_name(parameters):
      function_body
Examples and Use Cases
	1. Basic Function Definition:
   def func():
       print("Hello")
   func()  # Output: Hello
	2. Function for Subtraction:
   def subNumbers(x, y):
       return x - y
	3. Prime Numbers Function:
   def fun(n):
       # Code to print first n prime numbers
Advanced Usage
	• Passing Functions as Arguments:
  def fun(func, arg):
      return func(arg)
	• Using *args for Variable Arguments:
  def fun(*args):
      for arg in args:
          print(arg)
	• Using **kwargs for Keyword Arguments:
  def fun(**kwargs):
      for k, val in kwargs.items():
          print(f"{k}: {val}")
Class Methods
	• Defining Methods in Classes:
  class Person:
      def __init__(self, name, age):
          self.name = name
          self.age = age
      def greet(self):
          print(f"Name - {self.name} and Age - {self.age}.")
FAQs
	• Purpose of def: To create reusable blocks of code.
	• Multiple Return Statements: Allowed, but only the first executed return statement is considered.
	• __init__ Method: Constructor method for initializing class attributes.
This page provides a comprehensive guide on using the def keyword in Python, including syntax, examples, and advanced usage scenarios.
Sure! Here are some examples and code snippets based on the summary of the Python def keyword:
Basic Function Definition
def greet():
    print("Hello, World!")
greet()  # Output: Hello, World!
Function for Subtraction
def subtract(x, y):
    return x - y
result = subtract(10, 5)
print(result)  # Output: 5
Prime Numbers Function
def print_primes(n):
    primes = []
    num = 2
    while len(primes) < n:
        for i in range(2, num):
            if num % i == 0:
                break
        else:
            primes.append(num)
        num += 1
    print(primes)
print_primes(5)  # Output: [2, 3, 5, 7, 11]
Passing Functions as Arguments
def apply_function(func, arg):
    return func(arg)
def square(x):
    return x * x
result = apply_function(square, 4)
print(result)  # Output: 16
Using *args for Variable Arguments
def print_args(*args):
    for arg in args:
        print(arg)
print_args(1, 2, 3, 4)  # Output: 1 2 3 4
Using **kwargs for Keyword Arguments
def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
print_kwargs(name="Alice", age=30)  # Output: name: Alice age: 30
Class Methods
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
def greet(self):
        print(f"Name: {self.name}, Age: {self.age}")
person = Person("John", 25)
person.greet()  # Output: Name: John, Age: 25
These examples cover basic function definitions, advanced usage with variable arguments, and class methods. Let me know if you need more details or additional examples!












Sure! Here's a summary of the page about the Python return statement:
Python return Statement Overview
	• Purpose: Ends the execution of a function call and returns the value of the expression following the return keyword to the caller.
	• Behavior: Statements after the return statement are not executed. If no expression follows return, None is returned.
Examples and Use Cases
	1. Basic Return Statement:
   def add(a, b):
       return a + b
def is_true(a):
       return bool(a)
res = add(2, 3)
   print(res)  # Output: 5
res = is_true(2 < 5)
   print(res)  # Output: True
	1. Returning Multiple Values:
   def fun():
       name = "Alice"
       age = 30
       return name, age
name, age = fun()
   print(name)  # Output: Alice
   print(age)   # Output: 30
	1. Returning a List:
   def fun(n):
       return [n**2, n**3]
res = fun(3)
   print(res)  # Output: [9, 27]
	1. Function Returning Another Function:
   def fun1(msg):
       def fun2():
           return f"Message: {msg}"
       return fun2
fun3 = fun1("Hello, World!")
   print(fun3())  # Output: Message: Hello, World!
FAQs
	• Type Function: type() returns the type of an object.
  print(type(10))  # Output: <class 'int'>
	• Return Function: Refers to the return statement used in functions to exit and optionally pass a value back.
  def add(a, b):
      return a + b
	• Uses of Return Statement: Sends a result back to the caller and terminates function execution.
  def multiply(x, y):
      return x * y
	• Multiple Return Statements: A function can have multiple return statements, but only the first executed one is considered.
  def check_number(num):
      if num > 0:
          return "Positive"
      elif num < 0:
          return "Negative"
      return "Zero"
This page provides a detailed guide on using the return statement in Python, including syntax, examples, and common use cases.
Sure! Here are some examples and code snippets based on the summary of the Python return statement:
Basic Return Statement
def add(a, b):
    return a + b
result = add(2, 3)
print(result)  # Output: 5
Returning Multiple Values
def get_person_info():
    name = "Alice"
    age = 30
    return name, age
name, age = get_person_info()
print(name)  # Output: Alice
print(age)   # Output: 30
Returning a List
def calculate_powers(n):
    return [n**2, n**3]
result = calculate_powers(3)
print(result)  # Output: [9, 27]
Function Returning Another Function
def outer_function(msg):
    def inner_function():
        return f"Message: {msg}"
    return inner_function
message_function = outer_function("Hello, World!")
print(message_function())  # Output: Message: Hello, World!
Type Function Example
print(type(10))  # Output: <class 'int'>
Multiple Return Statements
def check_number(num):
    if num > 0:
        return "Positive"
    elif num < 0:
        return "Negative"
    return "Zero"
result = check_number(5)
print(result)  # Output: Positive
These examples cover basic return statements, returning multiple values, lists, functions, and handling multiple return conditions. Let me know if you need more details or additional examples!












Sure! Here's a summary of the page about Global and Local Variables in Python:
Global Variables
	• Definition: Declared outside any function and accessible throughout the program.
	• Example:
  s = "I love Geeksforgeeks"
  def f():
      print("Inside Function:", s)
  f()
  print("Outside Function:", s)
	• Output:
  Inside Function: I love Geeksforgeeks
  Outside Function: I love Geeksforgeeks
Local Variables
	• Definition: Declared inside a function and accessible only within that function.
	• Example:
  def f():
      s = "I love Geeksforgeeks"
      print(s)
  f()
  print(s)  # Raises NameError
	• Output:
  I love Geeksforgeeks
  NameError: name 's' is not defined
Global Keyword
	• Purpose: Used to modify a global variable inside a function.
	• Example:
  s = "Python is great!"
  def f():
      global s
      s += " GFG"
      print(s)
  f()
  print(s)
	• Output:
  Python is great! GFG
  Python is great! GFG
Comparison: Global vs Local Variables
	• Scope: Global variables are accessible throughout the code; local variables are accessible only within the function.
	• Lifetime: Global variables exist for the duration of the program; local variables exist only during the function's execution.
	• Data Sharing: Global variables offer data sharing; local variables do not.
	• Storage: Global variables have a fixed location; local variables are stored on the stack.
Best Practices for Using Global Variables
	• Minimize Usage: Use sparingly to avoid readability and maintainability issues.
	• Encapsulation: Encapsulate within classes or modules.
	• Avoid Side Effects: Be cautious when modifying from different functions.
	• Use Constants: For immutable values, use constants.
	• Document Changes: Clearly document modifications.
This page provides a comprehensive guide on the differences, usage, and best practices for global and local variables in Python.
Sure! Here are some examples and code snippets based on the summary of global and local variables in Python:
Global Variables
Example:
s = "I love Geeksforgeeks"
def display_global():
    print("Inside Function:", s)
display_global()
print("Outside Function:", s)
Output:
Inside Function: I love Geeksforgeeks
Outside Function: I love Geeksforgeeks
Local Variables
Example:
def display_local():
    s = "I love Geeksforgeeks"
    print(s)
display_local()
print(s)  # Raises NameError
Output:
I love Geeksforgeeks
NameError: name 's' is not defined
Global Keyword
Example:
s = "Python is great!"
def modify_global():
    global s
    s += " GFG"
    print(s)
modify_global()
print(s)
Output:
Python is great! GFG
Python is great! GFG
Comparison: Global vs Local Variables
	• Scope:
		○ Global: Accessible throughout the code.
		○ Local: Accessible only within the function.
	• Lifetime:
		○ Global: Exists for the duration of the program.
		○ Local: Exists only during the function's execution.
	• Data Sharing:
		○ Global: Offers data sharing.
		○ Local: Does not offer data sharing.
	• Storage:
		○ Global: Fixed location.
		○ Local: Stored on the stack.
Best Practices for Using Global Variables
	• Minimize Usage: Use sparingly to avoid readability and maintainability issues.
	• Encapsulation: Encapsulate within classes or modules.
	• Avoid Side Effects: Be cautious when modifying from different functions.
	• Use Constants: For immutable values, use constants.
	• Document Changes: Clearly document modifications.
These examples and explanations cover the key concepts of global and local variables in Python. Let me know if you need more details or additional examples!










Sure! Here's a summary of the page about Recursion in Python:
Overview of Recursion
	• Definition: Recursion involves a function calling itself to solve a problem by breaking it down into simpler parts.
	• Syntax: 
  def recursive_function(parameters):
      if base_case_condition:
          return base_result
      else:
          return recursive_function(modified_parameters)
Basic Example
	• Factorial Function:
  def factorial(n):
      if n == 0:
          return 1
      else:
          return n * factorial(n - 1)
  print(factorial(5))  # Output: 120
Types of Recursion
	1. Tail Recursion: The recursive call is the last operation in the function.
   def tail_fact(n, acc=1):
       if n == 0:
           return acc
       else:
           return tail_fact(n - 1, acc * n)
	1. Non-Tail Recursion: There are operations after the recursive call.
   def nontail_fact(n):
       if n == 1:
           return 1
       else:
           return n * nontail_fact(n - 1)
Recursion vs Iteration
	• Recursion: More intuitive for problems like tree traversals, but can lead to memory overhead.
	• Iteration: More memory-efficient, using loops to repeat code execution.
Advantages of Recursion
	• Simplicity: Cleaner and easier to understand for inherently recursive problems.
	• Reduced Code Length: Handles repetitive tasks through repeated function calls.
Disadvantages of Recursion
	• Memory Overhead: Each call adds a new layer to the stack.
	• Performance Issues: Slower due to function call overheads.
	• Risk of Stack Overflow: Excessive recursion depth can exceed stack limits.
FAQs
	• What is Recursion in Python?: A function calling itself to solve problems by breaking them into smaller tasks.
	• What is Factorial Recursion?: Computing factorial by recursively multiplying the number by the factorial of the number minus one.
	• Is Python a Recursive Language?: Python supports recursion but has a limit on recursion depth to prevent stack overflow.
This page provides a comprehensive guide on recursion in Python, including examples, types, advantages, and disadvantages.

Sure! Here are some examples and code snippets based on the summary of recursion in Python:
Basic Example: Factorial Function
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
print(factorial(5))  # Output: 120
Tail Recursion
def tail_fact(n, acc=1):
    if n == 0:
        return acc
    else:
        return tail_fact(n - 1, acc * n)
print(tail_fact(5))  # Output: 120
Non-Tail Recursion
def nontail_fact(n):
    if n == 1:
        return 1
    else:
        return n * nontail_fact(n - 1)
print(nontail_fact(5))  # Output: 120
Recursion vs Iteration
Recursion Example:
def fibonacci_recursive(n):
    if n <= 1:
        return n
    else:
        return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
print(fibonacci_recursive(5))  # Output: 5
Iteration Example:
def fibonacci_iterative(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
print(fibonacci_iterative(5))  # Output: 5
Advantages of Recursion
	• Simplicity: Cleaner and easier to understand for inherently recursive problems.
	• Reduced Code Length: Handles repetitive tasks through repeated function calls.
Disadvantages of Recursion
	• Memory Overhead: Each call adds a new layer to the stack.
	• Performance Issues: Slower due to function call overheads.
	• Risk of Stack Overflow: Excessive recursion depth can exceed stack limits.
These examples cover basic recursion, tail and non-tail recursion, and a comparison between recursion and iteration. Let me know if you need more details or additional examples!














Sure! Here's a summary of the page about *args and **kwargs in Python:
Overview
	• Purpose: Allow functions to accept an arbitrary number of arguments.
	• Symbols: 
		○ *args for non-keyword arguments.
		○ **kwargs for keyword arguments.
Using *args
	• Definition: Pass a variable number of non-keyword arguments.
	• Example:
  def fun(*args):
      return sum(args)
print(fun(1, 2, 3, 4))  # Output: 10
  print(fun(5, 10, 15))   # Output: 30
Using **kwargs
	• Definition: Pass a variable number of keyword arguments.
	• Example:
  def fun(**kwargs):
      for k, val in kwargs.items():
          print(k, val)
fun(a=1, b=2, c=3)
	• Output:
  a 1
  b 2
  c 3
Combining *args and **kwargs
	• Definition: Accept both positional and keyword arguments.
	• Example:
  def fun(*args, **kwargs):
      print("Positional arguments:", args)
      print("Keyword arguments:", kwargs)
fun(1, 2, 3, a=4, b=5)
	• Output:
  Positional arguments: (1, 2, 3)
  Keyword arguments: {'a': 4, 'b': 5}
FAQs
	• Why use *args and **kwargs?: For flexibility in function arguments.
	• Difference: *args collects positional arguments as a tuple, **kwargs collects keyword arguments as a dictionary.
	• Usage: *args for variable positional arguments, **kwargs for variable keyword arguments.
This page provides a detailed guide on using *args and **kwargs in Python, including syntax, examples, and common use cases.

Sure! Here are some examples and code snippets based on the summary of *args and **kwargs in Python:
Using *args
Example:
def sum_numbers(*args):
    return sum(args)
print(sum_numbers(1, 2, 3, 4))  # Output: 10
print(sum_numbers(5, 10, 15))   # Output: 30
Using **kwargs
Example:
def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
print_kwargs(a=1, b=2, c=3)
Output:
a: 1
b: 2
c: 3
Combining *args and **kwargs
Example:
def display_args_kwargs(*args, **kwargs):
    print("Positional arguments:", args)
    print("Keyword arguments:", kwargs)
display_args_kwargs(1, 2, 3, a=4, b=5)
Output:
Positional arguments: (1, 2, 3)
Keyword arguments: {'a': 4, 'b': 5}
These examples demonstrate how to use *args for variable positional arguments, **kwargs for variable keyword arguments, and how to combine both in a single function. Let me know if you need more details or additional examples!











Sure! Here's a summary of the page about Python Lambda Functions:
Overview
	• Definition: Lambda functions are anonymous functions without a name, defined using the lambda keyword.
	• Syntax: 
  lambda arguments: expression
Examples and Use Cases
	1. Basic Example:
   s2 = lambda func: func.upper()
   print(s2("GeeksforGeeks"))  # Output: GEEKSFORGEEKS
	1. Lambda with Condition Checking:
   n = lambda x: "Positive" if x > 0 else "Negative" if x < 0 else "Zero"
   print(n(5))  # Output: Positive
	1. Difference Between lambda and def:
		○ Lambda: Single expression, anonymous, no docstring.
		○ Def: Multiple lines, named, can include docstrings.
	2. Lambda with List Comprehension:
   li = [lambda arg=x: arg * 10 for x in range(1, 5)]
   for i in li:
       print(i())  # Output: 10, 20, 30, 40
	1. Lambda with Built-in Functions:
		○ Filter: python even = filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5, 6]) print(list(even)) # Output: [2, 4, 6] 
		○ Map: python doubled = map(lambda x: x * 2, [1, 2, 3, 4]) print(list(doubled)) # Output: [2, 4, 6, 8] 
		○ Reduce: python from functools import reduce product = reduce(lambda x, y: x * y, [1, 2, 3, 4]) print(product) # Output: 24 
FAQs
	• Use of Lambda: Create small, anonymous functions for temporary use.
	• Difference from def: Lambda is concise and for simple operations; def is for more complex logic.
	• Key Lambda: Used in functions like sorted() for custom sorting.
This page provides a comprehensive guide on using lambda functions in Python, including syntax, examples, and common use cases.

Sure! Here are some examples and code snippets based on the summary of Python Lambda Functions:
Basic Example
Example:
uppercase = lambda s: s.upper()
print(uppercase("GeeksforGeeks"))  # Output: GEEKSFORGEEKS
Lambda with Condition Checking
Example:
check_number = lambda x: "Positive" if x > 0 else "Negative" if x < 0 else "Zero"
print(check_number(5))  # Output: Positive
print(check_number(-3))  # Output: Negative
print(check_number(0))  # Output: Zero
Difference Between lambda and def
Lambda Example:
square = lambda x: x * x
print(square(5))  # Output: 25
Def Example:
def square(x):
    return x * x
print(square(5))  # Output: 25
Lambda with List Comprehension
Example:
functions = [lambda x=x: x * 10 for x in range(1, 5)]
for func in functions:
    print(func())  # Output: 10, 20, 30, 40
Lambda with Built-in Functions
	• Filter:
  even_numbers = filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5, 6])
  print(list(even_numbers))  # Output: [2, 4, 6]
	• Map:
  doubled_numbers = map(lambda x: x * 2, [1, 2, 3, 4])
  print(list(doubled_numbers))  # Output: [2, 4, 6, 8]
	• Reduce:
  from functools import reduce
  product = reduce(lambda x, y: x * y, [1, 2, 3, 4])
  print(product)  # Output: 24
These examples demonstrate how to use lambda functions for various purposes, including basic operations, condition checking, list comprehensions, and with built-in functions like filter, map, and reduce. Let me know if you need more details or additional examples!













Sure! Here's a summary of the page about the Python map() function:
Overview
	• Purpose: The map() function applies a given function to every item of an iterable (like a list or tuple) and returns a map object (an iterator).
Syntax
	• Format: 
  map(function, iterable)
	• Parameters:
		○ function: The function to apply to each element.
		○ iterable: The iterable whose elements are processed.
Examples and Use Cases
	1. Converting Strings to Integers:
   s = ['1', '2', '3', '4']
   res = map(int, s)
   print(list(res))  # Output: [1, 2, 3, 4]
	1. Doubling Elements with Custom Function:
   a = [1, 2, 3, 4]
   def double(val):
       return val * 2
   res = list(map(double, a))
   print(res)  # Output: [2, 4, 6, 8]
	1. Using Lambda Function:
   a = [1, 2, 3, 4]
   res = list(map(lambda x: x * 2, a))
   print(res)  # Output: [2, 4, 6, 8]
	1. Multiple Iterables:
   a = [1, 2, 3]
   b = [4, 5, 6]
   res = map(lambda x, y: x + y, a, b)
   print(list(res))  # Output: [5, 7, 9]
Common Use Cases
	• Converting to Uppercase:
  fruits = ['apple', 'banana', 'cherry']
  res = map(str.upper, fruits)
  print(list(res))  # Output: ['APPLE', 'BANANA', 'CHERRY']
	• Extracting First Character:
  words = ['apple', 'banana', 'cherry']
  res = map(lambda s: s[0], words)
  print(list(res))  # Output: ['a', 'b', 'c']
	• Removing Whitespaces:
  s = [' hello ', ' world ', ' python ']
  res = map(str.strip, s)
  print(list(res))  # Output: ['hello', 'world', 'python']
	• Converting Celsius to Fahrenheit:
  celsius = [0, 20, 37, 100]
  fahrenheit = map(lambda c: (c * 9/5) + 32, celsius)
  print(list(fahrenheit))  # Output: [32.0, 68.0, 98.6, 212.0]
This page provides a comprehensive guide on using the map() function in Python, including syntax, examples, and common use cases.











Decorators in Python:
Overview
	• Decorators: Functions that modify or extend the behavior of other functions or methods without changing their actual code.
	• Usage: Commonly used for logging, authentication, and memoization.
Key Concepts
	1. Syntax of Decorators:
		○ Decorators take a function as an argument and return a new function.
		○ Example:
 def decorator(func):
     def wrapper():
         # Additional functionality
         func()
     return wrapper
	2. Higher-Order Functions:
		○ Functions that take other functions as arguments or return them.
		○ Essential for understanding decorators.
	3. Functions as First-Class Objects:
		○ Functions can be assigned to variables, passed as arguments, and returned from other functions.
Types of Decorators
	1. Function Decorators: Modify functions.
	2. Method Decorators: Modify methods within classes.
	3. Class Decorators: Modify classes.
Common Built-in Decorators
	• @staticmethod: Defines a method that doesn’t operate on an instance.
	• @classmethod: Defines a method that operates on the class itself.
	• @property: Defines a method as a property, allowing access like an attribute.
Chaining Decorators
	• Applying multiple decorators to a single function.
This page provides a comprehensive guide to understanding and using decorators in Python, including examples and explanations of various types and their applications.
Sure! Chaining decorators means applying multiple decorators to a single function. Each decorator is applied in the order they are listed, from top to bottom. This allows you to combine multiple functionalities in a clean and readable way.
How It Works
When you chain decorators, the function is passed through each decorator one by one. The output of one decorator becomes the input for the next.
Example
Here's a simple example to illustrate chaining decorators:
def decorator1(func):
    def wrapper1(*args, **kwargs):
        print("Decorator 1")
        return func(*args, **kwargs)
    return wrapper1
def decorator2(func):
    def wrapper2(*args, **kwargs):
        print("Decorator 2")
        return func(*args, **kwargs)
    return wrapper2
@decorator1
@decorator2
def say_hello():
    print("Hello!")
say_hello()
Output
Decorator 1
Decorator 2
Hello!
Explanation
	1. @decorator2 is applied first, wrapping say_hello in wrapper2.
	2. @decorator1 is then applied, wrapping the result of the first decorator in wrapper1.
	3. When say_hello is called, it first goes through wrapper1, then wrapper2, and finally executes the original say_hello function.
Use Cases
	• Logging: Adding multiple layers of logging.
	• Authentication: Checking multiple authentication methods.
	• Caching: Combining different caching strategies.
Chaining decorators can help you build modular and reusable code by combining different functionalities seamlessly. If you have any specific use case in mind, feel free to share!



Sure! Let's dive into the different types of decorators in Python and see some examples for each.
1. Function Decorators
Function decorators are used to modify or extend the behavior of functions.
Example:
def simple_decorator(func):
    def wrapper():
        print("Before the function call")
        func()
        print("After the function call")
    return wrapper
@simple_decorator
def say_hello():
    print("Hello!")
say_hello()
Output:
Before the function call
Hello!
After the function call
2. Method Decorators
Method decorators are used to modify or extend the behavior of methods within classes.
Example:
def method_decorator(method):
    def wrapper(self):
        print("Before the method call")
        method(self)
        print("After the method call")
    return wrapper
class MyClass:
    @method_decorator
    def display(self):
        print("Inside the method")
obj = MyClass()
obj.display()
Output:
Before the method call
Inside the method
After the method call
3. Class Decorators
Class decorators are used to modify or extend the behavior of entire classes.
Example:
def class_decorator(cls):
    class WrappedClass(cls):
        def new_method(self):
            print("New method added by decorator")
    return WrappedClass
@class_decorator
class MyClass:
    def original_method(self):
        print("Original method")
obj = MyClass()
obj.original_method()
obj.new_method()
Output:
Original method
New method added by decorator
4. Built-in Decorators
Python provides several built-in decorators for common use cases.
	• @staticmethod: Defines a method that doesn’t operate on an instance.
	• @classmethod: Defines a method that operates on the class itself.
	• @property: Defines a method as a property, allowing access like an attribute.
Example:
class MyClass:
    @staticmethod
    def static_method():
        print("Static method")
@classmethod
    def class_method(cls):
        print("Class method")
@property
    def name(self):
        return "Property method"
obj = MyClass()
obj.static_method()
obj.class_method()
print(obj.name)
Output:
Static method
Class method
Property method
These examples illustrate how decorators can be used to enhance the functionality of functions, methods, and classes in Python. If you have any specific questions or need further clarification, feel free to ask!



Absolutely! Let's dive into the details of some common built-in decorators in Python: @staticmethod, @classmethod, and @property.
1. @staticmethod
	• Purpose: Defines a method that does not operate on an instance of the class. It behaves like a regular function but belongs to the class's namespace.
	• Usage: Useful for utility functions that perform tasks related to the class but do not need access to the instance or class itself.
Example:
class MyClass:
    @staticmethod
    def static_method():
        print("This is a static method.")
MyClass.static_method()  # Output: This is a static method.
2. @classmethod
	• Purpose: Defines a method that operates on the class itself rather than an instance. It receives the class as the first argument, typically named cls.
	• Usage: Useful for factory methods that create instances of the class using different parameters or for methods that need to modify class-level attributes.
Example:
class MyClass:
    class_variable = "Class Variable"
@classmethod
    def class_method(cls):
        print(f"This is a class method. {cls.class_variable}")
MyClass.class_method()  # Output: This is a class method. Class Variable
3. @property
	• Purpose: Defines a method as a property, allowing it to be accessed like an attribute. It is used to encapsulate instance variables and provide a getter method.
	• Usage: Useful for controlling access to instance variables and adding logic to their retrieval.
Example:
class MyClass:
    def __init__(self, value):
        self._value = value
@property
    def value(self):
        return self._value
@value.setter
    def value(self, new_value):
        if new_value >= 0:
            self._value = new_value
        else:
            raise ValueError("Value must be non-negative")
obj = MyClass(10)
print(obj.value)  # Output: 10
obj.value = 20
print(obj.value)  # Output: 20
Combining Built-in Decorators
You can also combine these decorators to create more complex behaviors.
Example:
class MyClass:
    _counter = 0
@classmethod
    def increment_counter(cls):
        cls._counter += 1
@staticmethod
    def display_message():
        print("Hello from static method!")
@property
    def counter(self):
        return self._counter
MyClass.increment_counter()
MyClass.display_message()
print(MyClass().counter)  # Output: 1
Summary
	• @staticmethod: For methods that don't need access to the instance or class.
	• @classmethod: For methods that need access to the class itself.
	• @property: For creating managed attributes with getter and setter methods.
These built-in decorators help you write cleaner, more maintainable code by encapsulating different types of functionality within your classes. If you have any specific questions or need further examples, feel free to ask!
