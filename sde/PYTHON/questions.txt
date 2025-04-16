
<h1>questions</h1>
When should you use decorators in Python?
Decorators are used to modify the behavior of functions or methods. Use them when you want to add functionality like logging, cachingor authentication to existing functions without modifying their source code. They help in separating concerns and improving code readability.
What is function vs decorators in Python?
– Function: A function in Python is a block of code that performs a specific task, accepts inputs (arguments), processes them and optionally returns an output. 
– Decorator: A decorator is a higher-order function that takes another function as an argument, adds some functionality and returns a new function. It allows modifying or extending behavior of functions or methods.
What is __init__ in Python?
__init__ is a special method (constructor) in Python classes. It’s automatically called when a new instance of a class is created. It initializes the object’s attributes or performs any setup needed for the object.
class MyClass:
    def __init__(self, arg1, arg2):
        self.arg1 = arg1
        self.arg2 = arg2
What is the difference between decorator and annotation in Python?
In Python, a decorator is a function that modifies another function or method.
Annotations are a way to attach metadata to function arguments and return values using the : and -> syntax. They don’t change the function behavior.
# Decorator example
def my_decorator(func):
    def wrapper():
        print("Something before the function.")
        func()
        print("Something after the function.")
    return wrapper
@my_decorator
def say_hello():
    print("Hello!")
say_hello()
# Annotation example
def greet(name: str) -> str:
    return f"Hello, {name}
What is the difference between wrapper and decorator in Python?
• A wrapper is the inner function defined within a decorator that actually performs the added functionality.
• A decorator is the outer function that takes a function as an argument, defines a wrapper function to modify it and returns the wrapper.


Is it Mandatory to Write self in Python?
Yes, it is mandatory to write self as the first parameter in instance methods of a class in Python. While the name self is a convention, it is not a keyword, and you can technically use any name, but it must be the first parameter of the method. Using self is a widely accepted convention and improves code readability.
Example:
class Example:
    def method(self):
        print("This method belongs to the instance")

# Creating an instance of the Example class
example = Example()
example.method()  # Output: This method belongs to the instance




What are Key Differences Between Encapsulation and Abstraction?
• Encapsulation:
	• Definition: The bundling of data and methods that operate on the data into a single unit, with controlled access to the internal state.
	• Purpose: To protect an object’s internal state and expose a controlled interface.
	• Implementation: Achieved through private and protected members.
• Abstraction:
	• Definition: The concept of hiding complex implementation details and showing only the essential features of an object.
	• Purpose: To simplify interaction with objects by focusing on high-level operations rather than implementation details.
	• Implementation: Achieved through abstract classes and methods, interfaces, and high-level class design.

