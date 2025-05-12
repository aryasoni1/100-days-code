Here's your **Markdown (.md)** formatted notes on **Fetching Data in React**:

---

# 🌐 Fetching Data in React

Data fetching is a core part of building interactive React applications. Common methods include using `fetch`, `axios`, or advanced tools like `React Query`.

---

## 🔹 1. Using `fetch`

Built-in JavaScript API for making HTTP requests.

```jsx
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

## 🔹 2. Using `axios`

Promise-based HTTP client with simpler syntax and interceptors.

```bash
npm install axios
```

```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);
}
```

✅ Advantages:

* Shorter syntax.
* Supports request/response interceptors.

---

## 🔹 3. Using `React Query` (TanStack Query)

Powerful library for fetching, caching, syncing, and updating server state in React.

```bash
npm install @tanstack/react-query
```

```jsx
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchData = async () => {
  const res = await axios.get('https://api.example.com/data');
  return res.data;
};

function App() {
  const { data, error, isLoading, isError } = useQuery(['myData'], fetchData);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

✅ Benefits:

* Built-in caching & deduplication.
* Background refetching.
* Retry logic.
* Devtools integration.

---

## 🔁 Retry Mechanisms

### fetch with Retry:

```jsx
const fetchWithRetry = async (url, retries = 3) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed');
    return await res.json();
  } catch (err) {
    if (retries > 0) return fetchWithRetry(url, retries - 1);
    throw err;
  }
};
```

### React Query:

Built-in `retry` option:

```jsx
useQuery(['key'], fetchFn, { retry: 2 });
```

---

## 🧪 Error & Loading States

Always handle:

* **Loading**: Show spinner, skeleton, etc.
* **Error**: Show error message and possible retry button.
* **Empty states**: When no data is returned.

---

## 📝 Summary

| Tool          | Pros                            | When to Use                     |
| ------------- | ------------------------------- | ------------------------------- |
| `fetch`       | Built-in, simple                | Small apps, quick tests         |
| `axios`       | Simpler API, interceptors       | REST APIs, better error control |
| `React Query` | Auto caching, retries, devtools | Complex apps, performance focus |

---

Let me know if you'd like to add examples for `POST`, `PUT`, or pagination!
