Here are your **Markdown (.md)** formatted notes on **Working with Databases** in **JavaScript**:

---

# 📝 Working with Databases in JavaScript

Connecting to databases and performing operations is a critical part of back-end development. JavaScript (Node.js) offers various libraries to connect with different types of databases, including **MongoDB**, **MySQL**, and **PostgreSQL**.

---

## 🔹 **Connecting to MongoDB with Mongoose**

MongoDB is a NoSQL database that stores data in a flexible, JSON-like format. You can interact with MongoDB using the **Mongoose** library.

### **1. Install Mongoose**

```bash
npm install mongoose
```

### **2. Create a MongoDB Connection**

```javascript
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});
```

### **3. Define a Schema and Model**

```javascript
// Define a Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, unique: true }
});

// Create a Model
const User = mongoose.model('User', userSchema);

// Create a new document
const newUser = new User({
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
});

// Save to the database
newUser.save()
  .then(user => console.log('User saved:', user))
  .catch(err => console.log('Error saving user:', err));
```

### **4. Querying Data**

```javascript
// Find one user by email
User.findOne({ email: 'john.doe@example.com' })
  .then(user => console.log('User found:', user))
  .catch(err => console.log('Error:', err));

// Find all users
User.find({})
  .then(users => console.log('Users:', users))
  .catch(err => console.log('Error:', err));
```

---

## 🔹 **Connecting to MySQL with MySQL2**

MySQL is a relational database management system. You can connect to MySQL using the **mysql2** library.

### **1. Install mysql2**

```bash
npm install mysql2
```

### **2. Create a MySQL Connection**

```javascript
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

// Connect to MySQL
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
});
```

### **3. Performing Queries**

```javascript
// Simple query to fetch data
connection.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }
  console.log('Users:', results);
});

// Insert a new user
const sql = 'INSERT INTO users (name, age, email) VALUES (?, ?, ?)';
const values = ['Jane Doe', 28, 'jane.doe@example.com'];
connection.query(sql, values, (err, results) => {
  if (err) {
    console.error('Error inserting user:', err.stack);
    return;
  }
  console.log('User added:', results);
});
```

### **4. Closing the Connection**

```javascript
// Close the connection
connection.end(err => {
  if (err) {
    console.error('Error closing the connection:', err.stack);
    return;
  }
  console.log('Connection closed');
});
```

---

## 🔹 **Connecting to PostgreSQL with pg (node-postgres)**

PostgreSQL is an open-source relational database system. You can use the **pg** library to connect and interact with PostgreSQL.

### **1. Install pg**

```bash
npm install pg
```

### **2. Create a PostgreSQL Client**

```javascript
const { Client } = require('pg');

// Create a new PostgreSQL client
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432
});

// Connect to the PostgreSQL server
client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));
```

### **3. Performing Queries**

```javascript
// Select query to fetch data
client.query('SELECT * FROM users', (err, res) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }
  console.log('Users:', res.rows);
});

// Insert query
const insertQuery = 'INSERT INTO users (name, age, email) VALUES ($1, $2, $3)';
const values = ['Alice Johnson', 35, 'alice.johnson@example.com'];
client.query(insertQuery, values, (err, res) => {
  if (err) {
    console.error('Error inserting user:', err.stack);
    return;
  }
  console.log('User added:', res.rowCount);
});
```

### **4. Closing the Connection**

```javascript
// Close the client connection
client.end()
  .then(() => console.log('Connection closed'))
  .catch(err => console.error('Error closing connection:', err.stack));
```

---

## 🔹 **Summary**

* **MongoDB**: Use **Mongoose** to interact with MongoDB for NoSQL-based applications.
* **MySQL**: Use **mysql2** to interact with MySQL for relational database queries.
* **PostgreSQL**: Use **pg** (node-postgres) to interact with PostgreSQL for relational database queries.

---

These libraries and techniques allow you to easily connect to and interact with different types of databases in a JavaScript (Node.js) environment.
