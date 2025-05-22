Here's your **Markdown (.md)** formatted notes on **Working with APIs in React**:

---

# 🌐 Working with APIs in React

Interacting with external APIs is essential for building dynamic, data-driven React applications. This includes REST APIs for standard CRUD operations and GraphQL for flexible querying.

---

## 🔹 1. CRUD Operations with REST APIs

REST (Representational State Transfer) is a common architectural style for web APIs.

### 🧱 Typical HTTP Methods:

* `GET`: Retrieve data
* `POST`: Create data
* `PUT` / `PATCH`: Update data
* `DELETE`: Remove data

### 📦 Example Using `axios`

```bash
npm install axios
```

```jsx
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function App() {
  const [posts, setPosts] = useState([]);

  // GET
  useEffect(() => {
    axios.get(API_URL).then((res) => setPosts(res.data));
  }, []);

  // POST
  const createPost = async () => {
    const newPost = { title: 'New Post', body: 'Hello', userId: 1 };
    const res = await axios.post(API_URL, newPost);
    setPosts([res.data, ...posts]);
  };

  // PUT
  const updatePost = async (id) => {
    const updated = { title: 'Updated Title' };
    await axios.put(`${API_URL}/${id}`, updated);
  };

  // DELETE
  const deletePost = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <button onClick={createPost}>Add Post</button>
      {posts.map((post) => (
        <div key={post.id}>
          {post.title} <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
```

---

## 🔹 2. GraphQL Basics with Apollo Client

GraphQL allows clients to request exactly the data they need. Apollo Client is a popular GraphQL client for React.

### 📦 Setup Apollo Client

```bash
npm install @apollo/client graphql
```

```jsx
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache()
});

const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons(limit: 5) {
      name
      image
    }
  }
`;

function PokemonList() {
  const { loading, error, data } = useQuery(GET_POKEMONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.pokemons.map((poke) => (
        <div key={poke.name}>
          <h4>{poke.name}</h4>
          <img src={poke.image} alt={poke.name} width={100} />
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <PokemonList />
    </ApolloProvider>
  );
}
```

---

## 📝 Summary

| Feature        | REST API                       | GraphQL                           |
| -------------- | ------------------------------ | --------------------------------- |
| Data Fetching  | `GET`, `POST`, `PUT`, `DELETE` | Single `POST` with query/mutation |
| Data Structure | Fixed response shape           | Flexible query results            |
| Tools          | `fetch`, `axios`               | Apollo Client, Relay              |
| Best Use Case  | Simple CRUD apps               | Complex nested data requirements  |

---

Let me know if you want notes for `mutations` in GraphQL or advanced features like fragments and caching!
