Here are your **notes in .md (Markdown) format** for *Using the Fetch API with Undici in Node.js*:

---

# Using the Fetch API with Undici in Node.js

---

## Introduction
- **Undici** is a high-performance HTTP client library for Node.js.
- Powers the **Fetch API** in Node.js.
- **Does not** rely on Node.js' built-in `http` module.
- Built for **performance** and **spec compliance** (refer to [Undici documentation](https://undici.nodejs.org/)).

---

## Basic GET Request

```javascript
async function main() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
}
main().catch(console.error);
```

- **Default method**: `GET`.
- Returns JSON data from the URL.

---

## Basic POST Request

```javascript
const body = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

async function main() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'User-Agent': 'undici-stream-example',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  console.log(data);
}
main().catch(console.error);
```

- **Method**: `POST`.
- **Headers**: 
  - `User-Agent`
  - `Content-Type: application/json`
- **Body**: JSON payload.

---

## Customizing Fetch with Options
- The `fetch` function accepts:
  - **URL** (string)
  - **Options** object (e.g., method, headers, body)

Example:
```javascript
fetch(url, {
  method: 'POST',
  headers: { ... },
  body: JSON.stringify(data),
});
```

---

## Using a Pool for Connection Reuse
- Improve performance by **reusing TCP connections**.

```javascript
import { Pool } from 'undici';

const ollamaPool = new Pool('http://localhost:11434', {
  connections: 10,
});

async function streamOllamaCompletion(prompt) {
  const { statusCode, body } = await ollamaPool.request({
    path: '/api/generate',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, model: 'mistral' }),
  });

  if (statusCode !== 200) {
    throw new Error(`Ollama request failed with status ${statusCode}`);
  }

  let partial = '';
  const decoder = new TextDecoder();
  for await (const chunk of body) {
    partial += decoder.decode(chunk, { stream: true });
    console.log(partial);
  }

  console.log('Streaming complete.');
  ollamaPool.close();
}
```

---

## Streaming Responses with Undici

```javascript
import { stream } from 'undici';
import { Writable } from 'stream';

async function fetchGitHubRepos() {
  const url = 'https://api.github.com/users/nodejs/repos';
  const { statusCode } = await stream(
    url,
    {
      method: 'GET',
      headers: {
        'User-Agent': 'undici-stream-example',
        Accept: 'application/json',
      },
    },
    () => {
      let buffer = '';
      return new Writable({
        write(chunk, encoding, callback) {
          buffer += chunk.toString();
          try {
            const json = JSON.parse(buffer);
            console.log('Repository Names:', json.map(repo => repo.name));
            buffer = '';
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
          callback();
        },
        final(callback) {
          console.log('Stream processing completed.');
          callback();
        },
      });
    }
  );
  console.log(`Response status: ${statusCode}`);
}
fetchGitHubRepos().catch(console.error);
```

- **Stream API** processes response **chunk-by-chunk**.
- Useful for **large payloads** or **streaming data**.

---

# Summary

| Feature              | Usage |
|----------------------|-------|
| Basic Fetch           | `fetch(url)` |
| POST Request          | `fetch(url, { method: 'POST', headers, body })` |
| Connection Pooling    | `new Pool(url, { connections })` |
| Stream Handling       | `stream(url, options, factoryFn)` |

---

Would you also like me to create a quick **cheat sheet** summarizing all major Undici methods for your future reference? 📚✨