

Summary of Rendering Templates in Flask
	1. Purpose:
		○ Definition: Rendering templates allows generating HTML from within Python using the Jinja2 template engine.
		○ Use Case: Primarily used to create dynamic web pages by embedding Python code within HTML.
	2. Basic Usage:
		○ Function: Use render_template() to render a template.
		○ Example:
 from flask import render_template

@app.route('/hello/')
 @app.route('/hello/<name>')
 def hello(name=None):
     return render_template('hello.html', person=name)
	3. Template Location:
		○ Directory: Flask looks for templates in the templates folder.
		○ Structure:
			§ Module:
   /application.py
   /templates/
       /hello.html
		○ Package:
   /application/
       /__init__.py
       /templates/
           /hello.html
	4. Template Syntax:
		○ Jinja2: Use Jinja2 syntax for embedding Python code in HTML.
		○ Example:
 <!doctype html>
 <title>Hello from Flask</title>
 {% if person %}
     <h1>Hello {{ person }}!</h1>
 {% else %}
     <h1>Hello, World!</h1>
 {% endif %}
	5. Context Variables:
		○ Passing Data: Pass variables to the template using keyword arguments in render_template().
		○ Example:
 return render_template('hello.html', person=name)
	6. Automatic Escaping:
		○ Security: Jinja2 automatically escapes variables to prevent HTML injection.
		○ Example: html {{ user_input | e }} 
These points cover the essential aspects of rendering templates in Flask, including the purpose, basic usage, template location, syntax, context variables, and automatic escaping. Would you like more details on any specific part?

Summary of Markup in Flask
	1. HTML Escaping:
		○ Purpose: Protects against HTML injection attacks by converting special characters to HTML-safe sequences.
		○ Example:
 from markupsafe import escape

@app.route('/<name>')
 def hello(name):
     return f"Hello, {escape(name)}!"
		○ Explanation: If a user submits <script>alert("bad")</script>, it will be rendered as text rather than executing the script.
	2. Automatic Escaping in Templates:
		○ Jinja2: Automatically escapes variables to prevent injection attacks.
		○ Example:
 {{ user_input }}
		○ Explanation: Ensures that any user-provided data is safely displayed without executing as HTML or JavaScript.
	3. Manual Escaping:
		○ Markup Class: Use the Markup class to mark strings as safe or to escape them manually.
		○ Example:
 from markupsafe import Markup

safe_string = Markup('<strong>Safe</strong>')
 escaped_string = Markup.escape('<script>alert("bad")</script>')
		○ Explanation: Markup can be used to safely include HTML in templates or to escape potentially dangerous strings.
	4. Using the |safe Filter:
		○ Purpose: Marks a variable as safe within a template, bypassing automatic escaping.
		○ Example:
 {{ user_input | safe }}
		○ Explanation: Use this filter only when you are certain the content is safe to render as HTML.
	5. Stripping Tags:
		○ Method: Use the striptags() method to remove HTML tags from a string.
		○ Example: python clean_text = Markup('<em>Marked up</em> &raquo; HTML').striptags() 
		○ Explanation: Converts <em>Marked up</em> &raquo; HTML to Marked up » HTML.
These points cover the essential aspects of using markup in Flask, including HTML escaping, automatic escaping in templates, manual escaping, using the |safe filter, and stripping tags. Would you like more details on any specific part?







Sure! Here's a brief summary of the page on Flask Templates:
Introduction to Templates
	• Templates: Files containing static data and placeholders for dynamic data.
	• Jinja: Template library used by Flask to render templates.
Setting Up Templates
	• Directory: Store template files in the templates directory inside the Flask package.
	• Rendering: Use render_template() to render templates with specific data.
Template Syntax
	• Expressions: {{ }} for outputting data.
	• Control Flow: {% %} for statements like if and for.
	• Autoescaping: Automatically escapes data to prevent HTML injection.
Base Layout
	• Base Template: Common layout for all pages, extended by other templates.
	• Blocks: Define sections like {% block title %}, {% block header %}, and {% block content %} to be overridden.
Example Templates
	• Register Template: Extends base template, includes form fields for username and password.
	• Login Template: Similar to register template, with different title and submit button.
This guide covers the basics of setting up and using templates in Flask, including creating a base layout and extending it for specific pages.

Register
flaskr/templates/auth/register.html
{% extends 'base.html' %}
{% block header %}
  <h1>{% block title %}Register{% endblock %}</h1>
{% endblock %}
{% block content %}
  <form method="post">
    <label for="username">Username</label>
    <input name="username" id="username" required>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" required>
    <input type="submit" value="Register">
  </form>
{% endblock %}
{% extends 'base.html' %} tells Jinja that this template should replace the blocks from the base template. All the rendered content must appear inside {% block %} tags that override blocks from the base template.
A useful pattern used here is to place {% block title %} inside {% block header %}. This will set the title block and then output the value of it into the header block, so that both the window and page share the same title without writing it twice.
The input tags are using the required attribute here. This tells the browser not to submit the form until those fields are filled in. If the user is using an older browser that doesn’t support that attribute, or if they are using something besides a browser to make requests, you still want to validate the data in the Flask view. It’s important to always fully validate the data on the server, even if the client does some validation as well.
Log In
This is identical to the register template except for the title and submit button.
flaskr/templates/auth/login.html
{% extends 'base.html' %}
{% block header %}
  <h1>{% block title %}Log In{% endblock %}</h1>
{% endblock %}
{% block content %}
  <form method="post">
    <label for="username">Username</label>
    <input name="username" id="username" required>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" required>
    <input type="submit" value="Log In">
  </form>
{% endblock %}


Sure! Here's a brief summary of the page on Flask Templates:
Introduction to Flask
	• Flask: A micro-framework for building web applications in Python.
	• Usage: Ideal for REST APIs and backend data processing.
Creating a Basic Flask App
	1. Setup: Import Flask, create an instance, and define routes.
	2. Run App: Start the Flask app in debug mode.
Flask Templates
	• Definition: Templates are pre-designed HTML files used to reduce repetitive code.
	• render_template(): Method to render HTML files from the backend.
Steps to Use Templates
	1. Create Templates Folder: Store HTML files in a folder named templates.
	2. Render HTML: Use render_template() to serve HTML files.
Dynamic Content with Templates
	• Passing Data: Send variables and lists from Python to HTML.
	• Expressions: Use {{ }} for variables and {% %} for logic like loops and conditions.
Example Code
	• Basic Route: Render a simple HTML file.
	• Dynamic Route: Pass data to HTML and render dynamically.
This guide covers the basics of setting up Flask, using templates, and rendering dynamic content with Jinja2.



# import the Flask library 
# import the render_template method 
from flask import Flask, render_template 
  
  
# Create the Flask instance and pass the Flask 
# constructor, the path of the correct module 
app = Flask(__name__) 
  
  
# Default route added using a decorator, 
# for view function 'welcome' 
# Landing page of our web application - exercise.html 
@app.route('/') 
def welcome(): 
  
    return render_template("exercise.html") 
  
  
# Walk route, added using a decorator, 
# for view function 'walking' 
# Render template 'walking.html' and, 
# pass values of time and calories, in key-value pairs. 
@app.route('/walk') 
def walking():     
    return render_template("walking.html", 
                           time=30, 
                           calories=150) 
  
  
# Start with flask web app, with debug as True, 
# only if this is the starting page 
if(__name__ == "__main__"): 
    app.run(debug=True) 
Explanation: In the above code, we added a new view function, walking(),  corresponding to the route ‘/walk’. The view function renders the ‘walking.html’ file (added in the templates folder). Apart from that, we are passing the values of time and calories, to the HTML side, in key-value pair format. The ‘time’ and ‘calories’ are keys, and, will be used on the HTML side, for substituting appropriate values. 
The HTML side code now looks as follows:
• HTML

<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <title>Benefits of Walking!</title> 
</head> 
<body> 
<p>Physical activity, such as walking, 
  is important for weight control because it 
  helps you burn calories. </p><br> 
If you add {{time}} minutes of brisk 
  walking to your daily routine, 
  you could burn about {{calories}} more calories a day. 
</body> 
</html>
Explanation: In the code above, we have made use of Expression statements. They should have, two sets of curly brackets {{}}, and, the key passed by the backend, in between. So it looks like {{time}} or {{calories}}. The key name should be exactly the same, as present on the backend side.
Output:

 
Making Decisions, Adding loops Using Expressions and Templates
Apart from sending variable values, we can send a list, add for loops, and, make decisions as well, using the Expressions statements. To do so, let us add, code snippets for the same, on Python and HTML side, as shown below:
• Python3

# import the Flask library 
from flask import Flask, render_template 
  
  
# Create the Flask instance and pass the Flask 
# constructor, the path of the correct module 
app = Flask(__name__) 
  
# declare a todo list of gym to pass to the frontend file 
joiningGym = ['Rent a Car','Buy Gym clothes', 
              'Check for Gym Location','Meet the Trainer'] 
  
# Default route added using a decorator, 
# for view function 'welcome' 
# Landing page of our web application-exercise.html 
@app.route('/') 
def welcome():     
    return render_template("exercise.html") 
  
# Default route added using a decorator, 
# for view function 'walking' 
# renders the page 'walking.html' 
@app.route('/walk') 
def walking(): 
    return render_template("walking.html", 
                           time=30, 
                           calories=150) 
  
# Route added using a decorator, 
# for view function 'joingym' 
# Pass the list of todo's and decidegym  
# boolean variable, to the HTML file 
@app.route('/gym') 
def joingym(): 
    return render_template("joingym.html", 
                           todo=joiningGym, 
                           decidegym=True) 
  
# Start with flask web app, with debug as True, 
# only if this is the starting page 
if(__name__ == "__main__"): 
    app.run(debug=True) 
The corresponding  ‘joingym.html’ file, is as shown below:
• HTML

<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <title>Joining the Gym</title> 
</head> 
<body> 
  
<h1> Do you want to join the Gym?</h1> 
{% if decidegym %} 
<ul>{% for item in todo %} 
    <li>{{item}}</li> 
    {% endfor %} 
</ul> 
{% else %} 
<p> No problem ! Look for other  
    Exercise options that suits you!</p> 
{% endif %} 
  
</body> 
</html>

From <https://www.geeksforgeeks.org/flask-templates/> 



Sure! Here's a brief summary of the page on rendering templates in Flask:
Setting Up Flask
	1. Virtual Environment: Create and activate a virtual environment.
	2. Install Flask: Use pip install flask.
Creating a Flask Application
	1. Basic Setup: Initialize Flask app and start the server.
	2. Rendering HTML Templates: Use render_template() to serve HTML files dynamically.
Templating with Jinja2
	1. Template Folder: Create a templates folder for HTML files.
	2. Dynamic Routes: Capture URL parameters and pass them to templates.
	3. Template Inheritance: Use {% block %} and {% extends %} for reusable templates.
Inducing Logic in Templates
	1. For Loops: Render lists dynamically in templates.
	2. If Statements: Use conditional logic to render different content based on variables.
Example Routes and Templates
	1. Home Route: Demonstrates template inheritance.
	2. About Route: Shows dynamic list rendering.
	3. Contact Route: Uses if-else conditions for dynamic content.
This guide covers the basics of setting up Flask, rendering templates, and using Jinja2 for dynamic content generation.



Sure! Here's a brief summary of the page on CSRF Protection in Flask:
Understanding CSRF Attacks
	• Definition: Cross-Site Request Forgery (CSRF) tricks users into submitting unauthorized requests.
	• Impact: Can lead to unauthorized actions like changing settings or making transactions.
Preventing CSRF Attacks
	• CSRF Tokens: Unique, dynamically generated values included in forms to prevent forgery.
	• Implementation: Use Flask-WTF to enable automatic CSRF protection for forms.
Steps to Implement CSRF Protection in Flask
	1. Install Dependencies: pip install flask flask-wtf
	2. Set Up Flask Application: Enable CSRF protection using Flask-WTF.
	3. Create a Secure HTML Form: Include CSRF tokens in forms using hidden_tag() method.
	4. Run the Flask Application: Test the application to ensure CSRF protection is working.
Example Code
	• Flask Application: Demonstrates setting up CSRF protection.
	• HTML Form: Shows both protected and unprotected forms for comparison.
This guide provides a comprehensive overview of implementing CSRF protection in Flask applications.
Step 2: Set Up Flask Application
In Flask, CSRF protection can be enabled using Flask-WTF, which provides automatic CSRF protection for forms. Below is a basic example:
from flask import Flask, render_template, request, flash
from flask_wtf import FlaskForm, CSRFProtect
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Required for CSRF protection
csrf = CSRFProtect(app)  # Enable CSRF Protection
# Creating a FlaskForm to manage CSRF properly
class NameForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    submit = SubmitField('Submit')
@app.route("/", methods=['GET', 'POST'])
def index():
    form = NameForm()
if request.method == 'POST':
        if form.validate_on_submit():
            name = form.name.data
            flash(f'Hello {name} from Protected Form!', 'success')
            return render_template('index.html', form=form)
        else:
            flash('CSRF Token Missing or Invalid!', 'danger')
return render_template('index.html', form=form)
@app.route("/unprotected_form", methods=['POST'])
def unprotected_form():
    name = request.form.get('Name', '').strip()
    if not name:
        return "Error: Name is required!", 400
    return f'Hello {name} from Unprotected Form!'
if __name__ == '__main__':
    app.run(debug=True)
Step 3: Create a Secure HTML Form
A simple HTML page with CSRF-protected and unprotected forms:
<!DOCTYPE html>
<html>
<head>
    <title>CSRF Protection Demo</title>
</head>
<body>
<h2>Protected Form (CSRF Token Required)</h2>
    <form action="{{ url_for('index') }}" method="POST">
        {{ form.hidden_tag() }}  <!-- This automatically includes CSRF token -->
        <label for="Name">Your Name Please?</label>
        {{ form.name() }}  <!-- Flask-WTF handles input -->
        {{ form.submit() }}  <!-- Submit button -->
    </form>
<h2>Unprotected Form (No CSRF Token)</h2>
    <form action="{{ url_for('unprotected_form') }}" method="POST">
        <label for="Name">Your Name Please?</label>
        <input type="text" name="Name" required>
        <button type="submit">Submit</button>
    </form>
<!-- Flash Messages -->
    {% with messages = get_flashed_messages(with_categories=True) %}
        {% if messages %}
            {% for category, message in messages %}
                <p style="color: {{ 'red' if category == 'danger' else 'green' }}">{{ message }}</p>
            {% endfor %}
        {% endif %}
    {% endwith %}
</body>
</html>
Step 4: Run the Flask Application
Run the app in development mode using command-
python app.py
Step 5: Testing the CSRF Protection
1. Open http://127.0.0.1:5000/protected_form in your browser.
2. Try submitting both forms:
3. Unprotected Form: Submits without any token, making it vulnerable to CSRF attacks.
4. Protected Form: Requires a valid CSRF token to submit successfully.
5. If you try submitting the protected form without the CSRF token, an error will occur, preventing unauthorized requests.




