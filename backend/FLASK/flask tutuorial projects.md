
<h1>tutorial project</h1>
Sure! Here's a brief summary of the page on Project Layout in Flask:
Setting Up the Project
	1. Create Project Directory: 
		○ Example: $ mkdir flask-tutorial
		○ Navigate into the directory: $ cd flask-tutorial
	2. Virtual Environment: 
		○ Set up a Python virtual environment and install Flask.
Basic Flask Application
	1. Single File Example:
		○ hello.py with a simple route returning "Hello, World!".
	2. Organizing Code:
		○ Use packages to manage larger projects.
Project Structure
	• flaskr/: Contains application code and files.
	• tests/: Directory for test modules.
	• .venv/: Python virtual environment.
	• Installation Files: For project setup.
	• Version Control Config: Example: .gitignore.
Example Project Layout
/home/user/Projects/flask-tutorial
├── flaskr/
│   ├── __init__.py
│   ├── db.py
│   ├── schema.sql
│   ├── auth.py
│   ├── blog.py
│   ├── templates/
│   │   ├── base.html
│   │   ├── auth/
│   │   │   ├── login.html
│   │   │   └── register.html
│   │   └── blog/
│   │       ├── create.html
│   │       ├── index.html
│   │       └── update.html
│   └── static/
│       └── style.css
├── tests/
│   ├── conftest.py
│   ├── data.sql
│   ├── test_factory.py
│   ├── test_db.py
│   ├── test_auth.py
│   └── test_blog.py
├── .venv/
├── pyproject.toml
└── MANIFEST.in
This guide provides a comprehensive overview of setting up a Flask project, organizing code, and maintaining a clean project structure.

If you’re using version control, the following files that are generated while running your project should be ignored. There may be other files based on the editor you use. In general, ignore files that you didn’t write. For example, with git:
.gitignore
.venv/
*.pyc
__pycache__/
instance/
.pytest_cache/
.coverage
htmlcov/
dist/
build/
*.egg-info/

From <https://flask.palletsprojects.com/en/stable/tutorial/layout/> 

Here's a brief summary of the page:
Application Setup
	• Flask Application: Create an instance of the Flask class within a function known as the application factory.
	• Application Factory: Set up the application configuration, registration, and other necessary setups inside this function.
Steps to Create the Application
	1. Create Directory and File: Make a flaskr directory and add an __init__.py file.
	2. Initialize Flask App: Use Flask(__name__, instance_relative_config=True) to create the Flask instance.
	3. Configuration: Set default configurations like SECRET_KEY and DATABASE path.
	4. Instance Folder: Ensure the instance folder exists to store local data.
	5. Simple Route: Add a simple route (/hello) to test the application.
Running the Application
	• Use the flask command to run the application in debug mode.
	• Visit http://127.0.0.1:5000/hello to see the "Hello, World!" message.
This tutorial guides you through setting up a basic Flask application with a structured approach to avoid common pitfalls and ensure scalability.

 The __init__.py serves double duty: it will contain the application factory, and it tells Python that the flaskr directory should be treated as a package.
$ mkdir flaskr
flaskr/__init__.py
import os
from flask import Flask
def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )
if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)
# ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass
# a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'
return app
create_app is the application factory function. You’ll add to it later in the tutorial, but it already does a lot.
	1. app = Flask(__name__, instance_relative_config=True) creates the Flask instance.
		○ __name__ is the name of the current Python module. The app needs to know where it’s located to set up some paths, and __name__ is a convenient way to tell it that.
		○ instance_relative_config=True tells the app that configuration files are relative to the instance folder. The instance folder is located outside the flaskr package and can hold local data that shouldn’t be committed to version control, such as configuration secrets and the database file.
	2. app.config.from_mapping() sets some default configuration that the app will use:
		○ SECRET_KEY is used by Flask and extensions to keep data safe. It’s set to 'dev' to provide a convenient value during development, but it should be overridden with a random value when deploying.
		○ DATABASE is the path where the SQLite database file will be saved. It’s under app.instance_path, which is the path that Flask has chosen for the instance folder. You’ll learn more about the database in the next section.
	3. app.config.from_pyfile() overrides the default configuration with values taken from the config.py file in the instance folder if it exists. For example, when deploying, this can be used to set a real SECRET_KEY.
		○ test_config can also be passed to the factory, and will be used instead of the instance configuration. This is so the tests you’ll write later in the tutorial can be configured independently of any development values you have configured.
	4. os.makedirs() ensures that app.instance_path exists. Flask doesn’t create the instance folder automatically, but it needs to be created because your project will create the SQLite database file there.
	5. @app.route() creates a simple route so you can see the application working before getting into the rest of the tutorial. It creates a connection between the URL /hello and a function that returns a response, the string 'Hello, World!' in this case.

From <https://flask.palletsprojects.com/en/stable/tutorial/factory/> 


Here's a brief summary of the page:
Define and Access the Database
	• SQLite Database: Used to store users and posts.
	• Connection: Created using sqlite3.connect() and tied to the request lifecycle.
	• Close Connection: Ensured with close_db() function.
Create the Tables
	• Schema: Defined in schema.sql with user and post tables.
	• Initialization: Tables created using init_db() function and init-db command.
Register with the Application
	• Functions: close_db and init_db_command registered with the app.
	• Factory Function: init_app() used to register these functions.
Initialize the Database File
	• Command: Run flask --app flaskr init-db to initialize the database.
	• Result: Creates flaskr.sqlite file in the instance folder.
This tutorial guides you through setting up and managing a SQLite database in a Flask application, ensuring a structured and scalable approach.


