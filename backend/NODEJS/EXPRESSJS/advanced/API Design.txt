Here are your **Markdown (.md)** formatted notes on **API Design with Node.js**:

---

# 🌐 API Design with Node.js

Designing robust and scalable APIs enables seamless communication between frontend and backend systems.

---

## 🧱 RESTful API with Express

REST (Representational State Transfer) uses standard HTTP methods: `GET`, `POST`, `PUT`, `DELETE`.

### 1. **Set Up Express**

```bash
npm install express
```

### 2. **Basic REST Example**

```js
// server.js
const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST a new user
app.post('/api/users', (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.map(u => u.id === id ? { ...u, ...req.body } : u);
  res.sendStatus(204);
});

// DELETE a user
app.delete('/api/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.sendStatus(204);
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 📦 GraphQL API with Apollo Server

GraphQL allows clients to request only the data they need.

### 1. **Setup**

```bash
npm install apollo-server graphql
```

### 2. **Basic GraphQL Server**

```js
// index.js
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(name: String!): User
  }
`;

let users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' }
];

const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    addUser: (_, { name }) => {
      const newUser = { id: Date.now().toString(), name };
      users.push(newUser);
      return newUser;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

---

## 🧠 Best Practices

* Use versioning (`/api/v1/...`)
* Validate input (e.g., `joi`, `zod`)
* Use consistent HTTP status codes
* Secure endpoints (auth, rate-limiting)
* Document with Swagger or GraphQL playground

---

Let me know if you'd like Swagger/OpenAPI integration or GraphQL schema best practices!
