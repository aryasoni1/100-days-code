Here are detailed and simplified notes in **Markdown (`.md`) format** on **REST API Development** covering CRUD, error handling, HTTP status codes, routers, and controllers.

---

# 📘 REST API Development Notes

## 📌 What is a REST API?

A **REST API** (Representational State Transfer) is a set of rules that allows communication between client and server using HTTP methods like **GET**, **POST**, **PUT**, and **DELETE**.

---

## 🧱 CRUD Operations in REST

CRUD stands for:

* **C**reate → `POST`
* **R**ead → `GET`
* **U**pdate → `PUT` or `PATCH`
* **D**elete → `DELETE`

### ✨ API Endpoints Example (for a "users" resource)

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/users`     | Get all users     |
| GET    | `/users/:id` | Get a user by ID  |
| POST   | `/users`     | Create a new user |
| PUT    | `/users/:id` | Update a user     |
| DELETE | `/users/:id` | Delete a user     |

---

## 🧪 Example: Express CRUD API

```js
const express = require('express');
const app = express();
app.use(express.json()); // parse JSON

let users = []; // in-memory "database"

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

app.put('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  users[index] = req.body;
  res.json(users[index]);
});

app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== Number(req.params.id));
  res.status(204).send(); // No content
});
```

---

## ⚠️ Error Handling & HTTP Status Codes

### ✅ Common HTTP Status Codes

| Code | Meaning               | When to Use                 |
| ---- | --------------------- | --------------------------- |
| 200  | OK                    | Successful GET/PUT request  |
| 201  | Created               | New resource created (POST) |
| 204  | No Content            | Successful DELETE           |
| 400  | Bad Request           | Missing or invalid input    |
| 404  | Not Found             | Resource doesn't exist      |
| 500  | Internal Server Error | Server-side error           |

### 🛡 Error Handling Example

```js
app.get('/users/:id', (req, res) => {
  try {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
```

---

## 🧭 Routers and Controllers

### 💡 Why Use Routers and Controllers?

To keep code **organized**, **scalable**, and **separated by responsibility**.

### 📁 Project Structure

```
project/
│
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
├── app.js
```

### 📂 `controllers/userController.js`

```js
const users = [];

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

exports.updateUser = (req, res) => {
  const index = users.findIndex(u => u.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  users[index] = req.body;
  res.json(users[index]);
};

exports.deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  users.splice(index, 1);
  res.status(204).send();
};
```

### 📂 `routes/userRoutes.js`

```js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
```

### 📄 `app.js`

```js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/users', userRoutes); // mount router

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## ✅ Summary

* Use `express` to build REST APIs
* Use `POST`, `GET`, `PUT`, `DELETE` for CRUD operations
* Handle errors with try/catch and use correct status codes
* Organize code with **routers** (routes folder) and **controllers** (logic folder)

---

Let me know if you’d like a downloadable `.md` file or an extended example using MongoDB or PostgreSQL.
