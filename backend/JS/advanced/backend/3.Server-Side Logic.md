Here are your **Markdown (.md)** formatted notes on **Server-Side Logic** using **Express.js**:

---

# 📝 Server-Side Logic in Node.js with Express

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies routing, handling requests, and integrating middleware.

---

## 🔹 **Setting Up Express.js**

First, install Express:

```bash
npm install express
```

Create a simple server setup:

```javascript
const express = require('express');
const app = express();

// Define a port for the server
const PORT = 3000;

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## 🔹 **Building APIs in Express**

Express makes it easy to create RESTful APIs by defining various HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) to handle different routes.

### **GET Request (Fetching Data)**

```javascript
app.get('/api/user', (req, res) => {
  const user = { name: 'John Doe', age: 30 };
  res.json(user);
});
```

### **POST Request (Creating Data)**

```javascript
app.post('/api/user', (req, res) => {
  const newUser = req.body;  // Assuming the body contains user data
  // Logic to save user in database
  res.status(201).json({ message: 'User created', user: newUser });
});
```

### **PUT Request (Updating Data)**

```javascript
app.put('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  // Logic to update user in the database
  res.json({ message: 'User updated', userId, updatedData });
});
```

### **DELETE Request (Deleting Data)**

```javascript
app.delete('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  // Logic to delete user from the database
  res.json({ message: 'User deleted', userId });
});
```

---

## 🔹 **Middleware in Express**

Middleware functions are a series of functions that execute during the lifecycle of a request to the server. Middleware can perform operations like logging, authentication, validation, etc.

### **Basic Middleware Example**

```javascript
// This middleware runs for all requests
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next(); // Passes control to the next middleware
});
```

### **Built-in Middleware**

* `express.json()`: Parses incoming JSON requests.
* `express.urlencoded()`: Parses incoming requests with URL-encoded payloads.

```javascript
app.use(express.json());  // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Middleware for URL-encoded data
```

### **Custom Middleware Example**

```javascript
// Example of custom middleware for logging
const logRequest = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();  // Proceed to the next middleware
};

app.use(logRequest);  // Apply logging middleware globally
```

---

## 🔹 **Routing in Express**

Express uses a router to handle different HTTP methods for specific paths. You can define routes for different HTTP methods, and you can also group routes for modularization.

### **Basic Routing Example**

```javascript
app.get('/about', (req, res) => {
  res.send('About Us');
});

app.post('/contact', (req, res) => {
  res.send('Contact Form Submitted');
});
```

### **Router Example (Modular Routes)**

You can use `express.Router()` to modularize your routes and create route handlers for different modules.

```javascript
const userRouter = express.Router();

// Define routes for user-related operations
userRouter.get('/', (req, res) => {
  res.send('Get all users');
});

userRouter.post('/', (req, res) => {
  res.send('Create new user');
});

// Use the userRouter for any routes starting with /user
app.use('/user', userRouter);
```

---

## 🔹 **Error Handling in Express**

Error handling middleware is used to catch errors in your routes and provide a proper response. You should define it as the last middleware in the stack.

### **Basic Error Handling Example**

```javascript
// Example of a 404 error handler
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```

---

## 🔹 **Serving Static Files**

You can serve static files like images, CSS, JavaScript, etc., using `express.static()` middleware.

```javascript
app.use(express.static('public'));  // Serve static files from the 'public' folder
```

This will make any files in the `public` directory accessible at their corresponding path. For example, a file in `public/images/logo.png` would be available at `http://localhost:3000/images/logo.png`.

---

## 📚 **Summary**

* **API Routes**: Define API routes using HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).
* **Middleware**: Use built-in or custom middleware for tasks like logging, authentication, validation, and data parsing.
* **Routing**: Use `express.Router()` to organize routes modularly and create clear route handlers.
* **Error Handling**: Use middleware to catch errors and send appropriate responses (e.g., `404` for not found, `500` for server errors).
* **Serving Static Files**: Serve static content like images and stylesheets with `express.static()`.

---

Let me know if you'd like more detailed examples or additional explanations!
