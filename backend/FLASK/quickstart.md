Summary of a Minimal Flask Application
	1. Basic Setup:
		○ Import Flask: Import the Flask class from the flask module.
		○ Create an Instance: Create an instance of the Flask class. This instance will be the WSGI application.
	2. Define Routes:
		○ Route Decorator: Use the @app.route("/") decorator to define the URL that triggers a function.
		○ Function Definition: Define a function that returns the message to be displayed in the user's browser.
	3. Running the Application:
		○ Save the File: Save the code in a file, e.g., hello.py.
		○ Run the Application: Use the flask run command to start the development server.
 flask --app hello run
	4. Debug Mode:
		○ Enable Debug Mode: Use the --debug option to enable debug mode, which automatically reloads the server on code changes and shows an interactive debugger in the browser.
 flask --app hello run --debug
	5. HTML Escaping:
		○ Escape User Input: Use the escape() function from markupsafe to prevent HTML injection attacks.
		 HTML templates rendered with Jinja, introduced later, will do this automatically.
 from markupsafe import escape

@app.route("/<name>")
 def hello(name):
     return f"Hello, {escape(name)}!"
	6. Accessing the Application:
		○ Local Access: By default, the server is accessible only from the local machine.
		○ Public Access: Use the --host=0.0.0.0 option to make the server publicly accessible. bash flask run --host=0.0.0.0 
This summary covers the essential steps to create and run a minimal Flask application, including setting up routes, enabling debug mode, and ensuring security with HTML escaping. Would you like more details on any specific part?

