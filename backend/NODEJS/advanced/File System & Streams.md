Here are your **Markdown (.md)** formatted notes on **File System & Streams in Node.js**:

---

# 📁 File System & Streams in Node.js

Node.js provides powerful file system capabilities through the `fs` module and handles large files efficiently using **streams**.

---

## 📚 File System (fs Module)

### Reading and Writing Files (Synchronous & Asynchronous)

```js
const fs = require('fs');

// Synchronous read
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

// Asynchronous write
fs.writeFile('output.txt', 'Hello World!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});
```

---

## 💧 Streams

Streams allow you to **read or write data piece-by-piece** instead of loading the entire file into memory — great for **large files**.

### Reading a File Using Stream

```js
const fs = require('fs');

const readStream = fs.createReadStream('largefile.txt', 'utf-8');

readStream.on('data', chunk => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('File reading completed');
});
```

### Writing a File Using Stream

```js
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Line 1\n');
writeStream.write('Line 2\n');
writeStream.end('Done writing');
```

---

## 🔄 Piping Streams

Piping connects a **readable stream** to a **writable stream**:

```js
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
```

---

## 🔁 Transform Streams

Example: Convert a CSV file to JSON using the `stream`, `csv-parser`, or `Transform` stream.

```js
const fs = require('fs');
const { Transform } = require('stream');

const csvToJson = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(chunk, encoding, callback) {
    const lines = chunk.toString().split('\n');
    const result = lines.map(line => {
      const [name, age] = line.split(',');
      return { name, age };
    });
    callback(null, JSON.stringify(result, null, 2));
  }
});

fs.createReadStream('data.csv')
  .pipe(csvToJson)
  .pipe(fs.createWriteStream('data.json'));
```

---

## 🧠 Key Concepts

* Streams use less memory — suitable for large files
* `pipe()` handles backpressure automatically
* Use `Transform` stream to modify data in transit (e.g., format conversion)

---

Let me know if you'd like a code template for handling CSV with `csv-parser` or more real-world examples!
