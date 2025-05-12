Here are your **Markdown (.md)** formatted notes on **Node.js Core Modules**:

---

# 📦 Node.js Core Modules

Node.js provides a set of built-in modules that you can use without installing any external packages.

---

## 📁 `fs` – File System

Used for reading and writing files.

### 🔹 Read a File (Async)

```js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 🔹 Write to a File

```js
fs.writeFile('output.txt', 'Hello Node!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});
```

---

## 🌐 `http` – HTTP Server

Used to create web servers.

### 🔹 Basic HTTP Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

---

## 🧭 `path` – File Paths

Used to handle and transform file paths.

### 🔹 Common Operations

```js
const path = require('path');

console.log(path.basename(__filename)); // File name
console.log(path.dirname(__filename));  // Directory name
console.log(path.extname(__filename));  // File extension
console.log(path.join(__dirname, 'test', 'file.txt')); // Join paths
```

---

## 💻 `os` – Operating System Info

Provides information about the system.

### 🔹 Example Usage

```js
const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
```

---

## 🔗 `url` – URL Parsing

Used to parse and format URLs.

### 🔹 Parse URL

```js
const url = require('url');

const myUrl = new URL('https://example.com/page?name=John');

console.log(myUrl.hostname);  // example.com
console.log(myUrl.pathname);  // /page
console.log(myUrl.searchParams.get('name'));  // John
```

---

## 🔒 `crypto` – Cryptographic Functions

Used for hashing, encryption, etc.

### 🔹 Hashing Example

```js
const crypto = require('crypto');

const hash = crypto.createHash('sha256').update('password').digest('hex');
console.log(hash);
```

---

## ✅ Summary

| Module   | Purpose                          |
| -------- | -------------------------------- |
| `fs`     | Read/write files                 |
| `http`   | Create web servers               |
| `path`   | Handle file paths                |
| `os`     | Access OS-level information      |
| `url`    | Parse and construct URLs         |
| `crypto` | Hashing and encryption utilities |

---

Let me know if you’d like notes on `events`, `stream`, or building a mini project with these modules!
