Here are your notes for the **compression** middleware, formatted in `.md` (Markdown) style:

---

```md
# 🗜️ compression

> Node.js compression middleware for Express and native HTTP servers.  
> Supports: `gzip`, `deflate`, `br (brotli)` *(Brotli requires Node v11.7.0+ or v10.16.0+)*

---

## 📦 Installation

```bash
npm install compression
```

---

## 🧰 Usage

### Express Example

```js
const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression()); // Enable compression for all responses

app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

---

## ⚙️ API

### `compression([options])`

Returns the compression middleware using the given options. Compresses response bodies unless `Cache-Control: no-transform` is set.

---

## 🔧 Options

### `chunkSize`
- **Type:** `Number`
- **Default:** `zlib.constants.Z_DEFAULT_CHUNK` (≈ 16384)

### `filter(req, res)`
- **Type:** `Function`
- **Default:** Uses `compressible` module to check `Content-Type`
- Return `true` to compress, `false` to skip

### `level`
- **Type:** `Number` (`-1` to `9`)
- **Default:** `-1` (zlib default, currently level 6)

| Value | Meaning                      |
|-------|------------------------------|
| -1    | Default compression level    |
| 0     | No compression               |
| 1     | Fastest compression          |
| 9     | Best compression             |

### `memLevel`
- **Type:** `Number` (`1` to `9`)
- **Default:** `zlib.constants.Z_DEFAULT_MEMLEVEL`

### `brotli`
- **Type:** `Object`
- Configure Brotli compression options (Node v11.7+)

### `strategy`
- **Type:** `Number`
- **Default:** `zlib.constants.Z_DEFAULT_STRATEGY`

Strategies:
- `Z_DEFAULT_STRATEGY` – General data
- `Z_FILTERED` – Filtered/small random values
- `Z_HUFFMAN_ONLY` – Huffman encoding only
- `Z_RLE` – Run-Length Encoding
- `Z_FIXED` – Use static Huffman codes

### `threshold`
- **Type:** `Number | String`
- **Default:** `'1kb'`
- Minimum size of response body to trigger compression

### `windowBits`
- **Type:** `Number`
- **Default:** `zlib.constants.Z_DEFAULT_WINDOWBITS`

### `enforceEncoding`
- **Type:** `String`
- **Default:** `'identity'`
- Fallback encoding if `Accept-Encoding` is missing

---

## 🧪 Custom Filter Example

```js
const compression = require('compression');

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    return false; // Skip compression for custom header
  }
  return compression.filter(req, res); // Default behavior
}

app.use(compression({ filter: shouldCompress }));
```

---

## 🚰 `res.flush()`

- Forces partially-compressed data to be sent to client immediately
- Useful for streaming (e.g., **Server-Sent Events**)

```js
res.write('data: ping\n\n');
res.flush();
```

---

## 🔁 Server-Sent Events Example

```js
app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');

  const timer = setInterval(() => {
    res.write('data: ping\n\n');
    res.flush(); // Important for SSE
  }, 2000);

  res.on('close', () => clearInterval(timer));
});
```

---

## 🖥️ Node.js HTTP Server Example

```js
const compression = require('compression')({ threshold: 0 });
const http = require('http');

const server = http.createServer((req, res) => {
  compression(req, res, (err) => {
    if (err) {
      res.statusCode = err.status || 500;
      res.end(err.message);
      return;
    }

    res.setHeader('Content-Type', 'text/plain');
    res.end('hello world!');
  });
});

server.listen(3000, () => {
  console.log('> Listening at http://localhost:3000');
});
```

---

## 🤝 Contributing

The Express.js project welcomes all contributions including:
- Bug fixes
- Documentation
- Tests
- Feature enhancements

See the [Contributing Guide](https://expressjs.com/en/resources/contributing.html) for more info.

---

## 📄 License

MIT
```

---

Would you like me to compile both the `cookie-parser` and `compression` notes into a single downloadable Markdown file?