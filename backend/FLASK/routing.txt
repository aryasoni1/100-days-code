Summary of Routing in Flask
	1. Basic Routing:
		○ Definition: Use the @app.route() decorator to bind a function to a URL.
		○ Example:
 @app.route('/')
 def index():
     return 'Index Page'

@app.route('/hello')
 def hello():
     return 'Hello, World'
	2. Variable Rules:
		○ Definition: Add dynamic parts to a URL by marking sections with <variable_name>.
		○ Example:
 @app.route('/user/<username>')
 def show_user_profile(username):
     return f'User {username}'

@app.route('/post/<int:post_id>')
 def show_post(post_id):
     return f'Post {post_id}'
	3. Converters:
		○ Definition: Specify the type of the argument using converters like <int:variable_name>.
		○ Example:
 @app.route('/path/<path:subpath>')
 def show_subpath(subpath):
     return f'Subpath {subpath}'
	4. Unique URLs / Redirection Behavior:
		○ Definition: Ensure URLs are unique and handle trailing slashes.
		○ Example:
 @app.route('/projects/')
 def projects():
     return 'The project page'

@app.route('/about')
 def about():
     return 'The about page'
	5. URL Building:
		○ Definition: Use url_for() to build URLs for specific functions.
		○ Example:
 from flask import url_for

@app.route('/user/<username>')
 def profile(username):
     return f"{username}'s profile"

with app.test_request_context():
     print(url_for('index'))
     print(url_for('profile', username='John Doe'))
	6. HTTP Methods:
		○ Definition: Handle different HTTP methods (GET, POST, etc.) using the methods argument.
		○ Example: python @app.route('/login', methods=['GET', 'POST']) def login(): if request.method == 'POST': return do_the_login() else: return show_the_login_form() 
These points cover the essential aspects of routing in Flask, including defining routes, handling dynamic URLs, ensuring unique URLs, building URLs, and managing different HTTP methods. Would you like more details on any specific part?



Routing
Modern web applications use meaningful URLs to help users. Users are more likely to like a page and come back if the page uses a meaningful URL they can remember and use to directly visit a page.
Use the route() decorator to bind a function to a URL.
@app.route('/')
def index():
    return 'Index Page'
@app.route('/hello')
def hello():
    return 'Hello, World'
You can do more! You can make parts of the URL dynamic and attach multiple rules to a function.
Variable Rules
You can add variable sections to a URL by marking sections with <variable_name>. Your function then receives the <variable_name> as a keyword argument. Optionally, you can use a converter to specify the type of the argument like <converter:variable_name>.
from markupsafe import escape
@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return f'User {escape(username)}'
@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return f'Post {post_id}'
@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    # show the subpath after /path/
    return f'Subpath {escape(subpath)}'
Converter types:
string	(default) accepts any text without a slash
int	accepts positive integers
float	accepts positive floating point values
path	like string but also accepts slashes
uuid	accepts UUID strings
Unique URLs / Redirection Behavior
The following two rules differ in their use of a trailing slash.
@app.route('/projects/')
def projects():
    return 'The project page'
@app.route('/about')
def about():
    return 'The about page'
The canonical URL for the projects endpoint has a trailing slash. It’s similar to a folder in a file system. If you access the URL without a trailing slash (/projects), Flask redirects you to the canonical URL with the trailing slash (/projects/).
The canonical URL for the about endpoint does not have a trailing slash. It’s similar to the pathname of a file. Accessing the URL with a trailing slash (/about/) produces a 404 “Not Found” error. This helps keep URLs unique for these resources, which helps search engines avoid indexing the same page twice.

URL Building
To build a URL to a specific function, use the url_for() function. It accepts the name of the function as its first argument and any number of keyword arguments, each corresponding to a variable part of the URL rule. Unknown variable parts are appended to the URL as query parameters.
Why would you want to build URLs using the URL reversing function url_for() instead of hard-coding them into your templates?
	1. Reversing is often more descriptive than hard-coding the URLs.
	2. You can change your URLs in one go instead of needing to remember to manually change hard-coded URLs.
	3. URL building handles escaping of special characters transparently.
	4. The generated paths are always absolute, avoiding unexpected behavior of relative paths in browsers.
	5. If your application is placed outside the URL root, for example, in /myapplication instead of /, url_for() properly handles that for you.
For example, here we use the test_request_context() method to try out url_for(). test_request_context() tells Flask to behave as though it’s handling a request even while we use a Python shell. See Context Locals.
from flask import url_for
@app.route('/')
def index():
    return 'index'
@app.route('/login')
def login():
    return 'login'
@app.route('/user/<username>')
def profile(username):
    return f'{username}\'s profile'
with app.test_request_context():
    print(url_for('index'))
    print(url_for('login'))
    print(url_for('login', next='/'))
    print(url_for('profile', username='John Doe'))
/
/login
/login?next=/
/user/John%20Doe
HTTP Methods
Web applications use different HTTP methods when accessing URLs. You should familiarize yourself with the HTTP methods as you work with Flask. By default, a route only answers to GET requests. You can use the methods argument of the route() decorator to handle different HTTP methods.
from flask import request
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return do_the_login()
    else:
        return show_the_login_form()
The example above keeps all methods for the route within one function, which can be useful if each part uses some common data.
You can also separate views for different methods into different functions. Flask provides a shortcut for decorating such routes with get(), post(), etc. for each common HTTP method.
@app.get('/login')
def login_get():
    return show_the_login_form()
@app.post('/login')
def login_post():
    return do_the_login()
If GET is present, Flask automatically adds support for the HEAD method and handles HEAD requests according to the HTTP RFC. Likewise, OPTIONS is automatically implemented for you.

From <https://flask.palletsprojects.com/en/stable/quickstart/#routing> 






Sure! Here's a brief summary of the content:
Flask App Routing:
	• Definition: App routing maps URLs to specific functions that handle the logic for those URLs.
	• Example: Using @app.route decorator to bind functions to URL paths.
  from flask import Flask
  app = Flask(__name__)
@app.route("/hello")
  def hello():
      return "Hello, Welcome to GeeksForGeeks"
@app.route("/")
  def index():
      return "Homepage of GeeksForGeeks"
if __name__ == "__main__":
      app.run(debug=True)
	• Dynamic URLs: Use variables in URLs to create dynamic paths.
  @app.route('/user/<username>')
  def show_user(username):
      return f'Hello {username}!'
	• Converters: Convert URL variables to specific data types (e.g., int, float, path, uuid).
  @app.route('/post/<int:id>')
  def show_post(id):
      return f'This post has the id {id}'
	• addurlrule(): An alternative method to map URLs to functions.
  app.add_url_rule('/user/<username>', 'show_user', show_user)
Would you like more details on any specific part?








URL converters in Flask are used to specify the data type of a variable in a URL path. They help ensure that the variable is converted to the correct type before being passed to the view function. Here are some common URL converters:
	• int: Converts the variable to an integer.
  @app.route('/post/<int:id>')
  def show_post(id):
      return f'This post has the id {id}'
	• float: Converts the variable to a floating-point number.
  @app.route('/price/<float:amount>')
  def show_price(amount):
      return f'The price is {amount}'
	• path: Accepts a string with slashes.
  @app.route('/path/<path:subpath>')
  def show_subpath(subpath):
      return f'Subpath is {subpath}'
	• uuid: Converts the variable to a UUID.
  @app.route('/item/<uuid:item_id>')
  def show_item(item_id):
      return f'Item ID is {item_id}'
These converters help in creating more robust and type-safe routes in your Flask application. Do you need more examples or details on any specific converter?








In Flask, the add_url_rule() method is an alternative way to bind a URL to a view function. It provides more flexibility compared to the @app.route decorator. Here's how it works:
Syntax
app.add_url_rule(rule, endpoint=None, view_func=None, **options)
Parameters
	• rule: The URL rule as a string.
	• endpoint: The endpoint for the registered URL rule. Flask uses the function name as the endpoint if not specified.
	• view_func: The function to call when serving a request to the provided endpoint.
	• options: Additional options to be forwarded to the underlying werkzeug.routing.Rule object.
Example
Here's an example to illustrate its usage:
from flask import Flask
app = Flask(__name__)
def show_user(username):
    return f'Hello {username}!'
# Using add_url_rule to bind the URL to the view function
app.add_url_rule('/user/<username>', 'show_user', show_user)
if __name__ == "__main__":
    app.run(debug=True)
Benefits
	• Flexibility: Allows you to register a URL rule dynamically.
	• Separation of Concerns: Keeps the URL routing separate from the view function definition.
	• Reusability: Useful in cases where you need to reuse the same view function for multiple routes.
Would you like to see more examples or details on any specific part?

The add_url_rule() method in Flask is quite versatile and can be used in various scenarios. Here are some common use cases:
	1. Dynamic Route Registration:
		○ When you need to register routes dynamically based on certain conditions or configurations.
   for route in dynamic_routes:
       app.add_url_rule(route['path'], route['endpoint'], route['view_func'])
	1. Separation of Concerns:
		○ Keeping route definitions separate from view functions, which can be useful for organizing larger applications.
   def create_app():
       app = Flask(__name__)
       app.add_url_rule('/home', 'home', home_view)
       return app
	1. Reusing View Functions:
		○ When the same view function needs to be reused for multiple routes.
   def show_item(item_id):
       return f'Item ID is {item_id}'
app.add_url_rule('/item/<int:item_id>', 'show_item', show_item)
   app.add_url_rule('/product/<int:item_id>', 'show_product', show_item)
	1. Custom Endpoint Names:
		○ When you want to specify custom endpoint names different from the function names.
   def user_profile(username):
       return f'Profile of {username}'
app.add_url_rule('/profile/<username>', 'user_profile', user_profile)
	1. Advanced Routing Options:
		○ When you need to pass additional options to the route, such as methods or defaults.
   app.add_url_rule('/submit', 'submit', submit_view, methods=['POST'])
These use cases demonstrate the flexibility and power of add_url_rule() in managing routes in a Flask application. Do you have a specific scenario in mind where you want to use this method?






Sure! Here's a brief summary of the content:
Flask HTTP Methods
Overview:
	• HTTP methods define how clients and servers communicate.
	• Common methods include GET, POST, PUT, PATCH, and DELETE.
GET Method:
	• Used to request data from a server.
	• Data is appended to the URL.
	• Example: A Flask app that calculates the square of a number using GET.
POST Method:
	• Used to send data to the server for processing.
	• Data is sent in the request body, making it more secure.
	• Example: Modifying the Flask app to use POST instead of GET for calculating the square of a number.
Example Code:
	• GET Example:
  @app.route('/square', methods=['GET'])
  def squarenumber():
      num = request.args.get('num')
      if num is None:
          return render_template('squarenum.html')
      try:
          square = int(num) ** 2
          return render_template('answer.html', squareofnum=square, num=num)
      except ValueError:
          return "<h1>Invalid input. Please enter a valid number.</h1>"
	• POST Example:
  @app.route('/square', methods=['GET', 'POST'])
  def squarenumber():
      if request.method == 'POST':
          num = request.form.get('num')
          if num.strip() == '':
              return "<h1>Invalid number</h1>"
          square = int(num) ** 2
          return render_template('answer.html', squareofnum=square, num=num)
      return render_template('squarenum.html')
Would you like more details on any specific part?







Summary of Flask HTTP Methods
Overview:
	• HTTP methods are used for data communication between clients and servers.
	• Common methods include GET, POST, PUT, DELETE, HEAD, CONNECT, OPTIONS, TRACE, and PATCH.
Commonly Used HTTP Methods:
	1. GET:
		○ Retrieves data from the server.
		○ Example: Searching for an item in an eCommerce application.
	2. POST:
		○ Sends data to the server for processing.
		○ Example: User login and registration forms.
	3. PUT:
		○ Updates an existing resource on the server.
	4. DELETE:
		○ Deletes a resource on the server.
	5. HEAD:
		○ Retrieves resource headers without the resource itself.
Handling GET & POST Requests in Flask:
	• Use the @app.route decorator with the methods attribute to specify the request type.
	• Example of handling GET and POST requests with a login form:
  @app.route('/handle_get', methods=['GET'])
  def handle_get():
      username = request.args.get('username')
      password = request.args.get('password')
      # Process the credentials
@app.route('/handle_post', methods=['POST'])
  def handle_post():
      username = request.form.get('username')
      password = request.form.get('password')
      # Process the credentials
Example Project:
	• A simple Flask project demonstrating user login using GET and POST methods.
	• HTML form for login with separate forms for GET and POST requests.
	• Python code to handle the login logic and validate user credentials.
Would you like more details on any specific part?






Sure! Here's a summary of the page:
Flask Variable Rules
	• Variable Rules: Flask allows creating dynamic URLs by defining variable parts within the route using <variable-name>. These variables are passed as keyword arguments to view functions.
	• Converters: Flask provides several converters for variable rules:
		○ string: Accepts any text without a slash (default).
		○ int: Accepts only integers.
		○ float: Accepts floating-point values.
		○ path: Accepts text with slashes.
		○ any: Matches one of the provided items.
		○ UUID: Accepts UUID strings.
Examples of Flask Variable Rules
	1. String Variable:
   @app.route('/vstring/<name>')
   def string(name):
       return "My Name is %s " % name
	1. Integer Variable:
   @app.route('/vint/<int:age>')
   def vint(age):
       return "I am %d years old " % age
	1. Float Variable:
   @app.route('/vfloat/<float:balance>')
   def vfloat(balance):
       return "My Account Balance %f " % balance
These examples demonstrate how to handle different types of variables in Flask routes, making web applications more dynamic and interactive.







Sure! Here's a summary of the page:
Redirecting to URL in Flask
	• Redirect Function: Flask uses the redirect() function to send users to a specific URL with a status code. The syntax is flask.redirect(location, code=302), where location is the URL to redirect to, and code is the status code (default is 302 for temporary redirect).
	• HTTP Status Codes: Common status codes include:
		○ 300: Multiple choices
		○ 301: Moved permanently
		○ 302: Found
		○ 303: See other
		○ 304: Not modified
		○ 307: Temporary redirect
	• Example: A simple Flask application with two routes:
  from flask import Flask, redirect
app = Flask(__name__)
@app.route("/")
  def home():
      return redirect("/helloworld")
@app.route("/helloworld")
  def hello_world():
      return "<p>Hello, World from redirected page!</p>"
if __name__ == '__main__':
      app.run(debug=True)
	• url_for() Function: Another method for URL building and redirection in Flask. It accepts the function name as the first argument and dynamically binds URLs to functions.
	• Example: Using url_for() for dynamic URL binding:
  from flask import Flask, redirect, url_for
app = Flask(__name__)
@app.route('/admin')
  def hello_admin():
      return 'Hello Admin'
@app.route('/guest/<guest>')
  def hello_guest(guest):
      return 'Hello %s as Guest' % guest
@app.route('/user/<name>')
  def hello_user(name):
     (url_for('hello_admin'))
      else:
          return redirect(url_for('hello_guest', guest=name))
if __name__ == '__main__':
      app.run(debug=True)
This summary covers the key points about redirecting URLs in Flask, including the use of the redirect() function and the url_for() function for dynamic URL binding.


from flask import Flask, redirect, url_for

app = Flask(__name__)

# decorator for route(argument) function
@app.route('/admin')
# binding to hello_admin call
def hello_admin():
	return 'Hello Admin'

@app.route('/guest/<guest>')
# binding to hello_guest call
def hello_guest(guest):
	return 'Hello %s as Guest' % guest

@app.route('/user/<name>')
def hello_user(name):

	# dynamic binding of URL to function
	if name == 'admin':
		return redirect(url_for('hello_admin'))
	else:
		return redirect(url_for('hello_guest'
								, guest=name))

if __name__ == '__main__':
	app.run(debug=True)
	
	
	
	
	
	
	Sure! Here's a summary of the page:
	Flask Redirects and Errors
		• Redirects:
			○ Purpose: Redirects send users to a specific URL with a status code.
			○ Syntax: flask.redirect(location, code=302)
			○ Common Status Codes:
			○ 300: Multiple choices
			○ 301: Moved permanently
			○ 302: Found (default)
			○ 303: See other
			○ 307: Temporary redirect
		• Example of Redirect:
	  from flask import Flask, redirect, url_for, render_template, request
	app = Flask(__name__)
	@app.route('/')
  def index():
      return render_template('login.html')
	@app.route('/success')
  def success():
      return "Logged in successfully"
	@app.route('/login', methods=['POST', 'GET'])
  def login():
      if request.method == 'POST' and request.form['username'] == 'admin':
          return redirect(url_for('success'))
      return redirect(url_for('index'))
	if __name__ == '__main__':
      app.run(debug=True)
	-**: Used to exit with an error code.
		• Syntax: abort(code, message)
		• Common Error Codes:
			○ 400: Bad request
			○ 401: Unauthenticated
			○ 403: Forbidden
			○ 404: Not found
			○ 415: Unsupported media type
			○ 429: Too many requests
			○ Example of abort():
	  from flask import Flask, abort
	app = Flask(__name__)
	@app.route('/<uname>')
  def index(uname):
      if uname[0].isdigit():
          abort(400)
      return '<h1>Good Username</h1>'
	if __name__ == '__main__':
      app.run()
	This summary covers the key points about handling redirects and errors in Flask, including the use of the redirect() and abort() functions.
	
	
	



Sure! Here's a summary of the page:
Changing the Port in Flask
	• Default Port: Flask applications run on port 5000 by default.
	• Reason for Change: You might need to change the port if the default port is already occupied.
	• How to Change: Specify the port number when running the Flask application using the app.run() method.
Example:
if __name__ == '__main__':
    app.run(debug=True, port=8001)
Sample Flask Application:
	• Code:
  from flask import Flask
app = Flask(__name__)
@app.route("/")
  def hello_world():
      return "<p>Hello, World!</p>"
if __name__ == '__main__':
      app.run(debug=True, port=8001)
	• Output: The application runs on port 8001.
This summary covers the key points about changing the port for a Flask application.




Sure! Here's a summary of the page:
Changing Host IP Address in Flask
	• Default Behavior: Flask runs on 127.0.0.1:5000 by default, accessible only from the same machine.
	• Changing the Host IP:
		○ In Code: Update the app.run() function with the host parameter.
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World! this application running on 192.168.0.105'

if __name__ == '__main__':
    app.run(host='192.168.0.105')
		○ Via Command Line: Set the host and port directly when running the app.
set FLASK_APP=app.py
flask run --host=192.168.0.105 --port=5000
	• Output: The app will be accessible from other devices on the same network using 192.168.0.105:5000.
This summary covers the key points about changing the host IP address for a Flask application.





