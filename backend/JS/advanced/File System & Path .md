Here are your **Markdown (.md)** formatted notes on **File System & Path**:

---

# 📝 File System & Path in Node.js

Node.js provides built-in modules like `fs` (File System) and `path` to interact with the file system and handle file paths efficiently.

---

## 🔹 **File System (`fs`) Module**

The `fs` module provides a way to interact with the file system. It includes functions to read, write, update, delete, and manage files and directories.

### Key Functions:

* **Reading files**
* **Writing files**
* **Appending files**
* **Deleting files**

### **Reading Files**

#### **Asynchronous Reading**:

```javascript
const fs = require('fs');

// Read a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);  // Output: file content
});
```

#### **Synchronous Reading**:

```javascript
const fs = require('fs');

// Read a file synchronously
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log(data);  // Output: file content
} catch (err) {
  console.error(err);
}
```

### **Writing Files**

#### **Asynchronous Writing**:

```javascript
const fs = require('fs');

// Write to a file asynchronously
fs.writeFile('example.txt', 'Hello, Node.js!', 'utf8', (err) => {
  if (err) throw err;
  console.log('File has been written!');
});
```

#### **Synchronous Writing**:

```javascript
const fs = require('fs');

// Write to a file synchronously
try {
  fs.writeFileSync('example.txt', 'Hello, Node.js!', 'utf8');
  console.log('File has been written!');
} catch (err) {
  console.error(err);
}
```

### **Appending to Files**

#### **Asynchronous Appending**:

```javascript
const fs = require('fs');

// Append to a file asynchronously
fs.appendFile('example.txt', '\nAppended content.', 'utf8', (err) => {
  if (err) throw err;
  console.log('Data appended!');
});
```

#### **Synchronous Appending**:

```javascript
const fs = require('fs');

// Append to a file synchronously
try {
  fs.appendFileSync('example.txt', '\nAppended content.', 'utf8');
  console.log('Data appended!');
} catch (err) {
  console.error(err);
}
```

### **Deleting Files**

#### **Asynchronous Deletion**:

```javascript
const fs = require('fs');

// Delete a file asynchronously
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});
```

#### **Synchronous Deletion**:

```javascript
const fs = require('fs');

// Delete a file synchronously
try {
  fs.unlinkSync('example.txt');
  console.log('File deleted!');
} catch (err) {
  console.error(err);
}
```

---

## 🔹 **Path Module**

The `path` module provides utilities for working with file and directory paths. It helps with manipulating file paths, making the code more portable across different operating systems.

### Key Functions:

* **Path normalization**
* **Joining paths**
* **Resolving absolute paths**
* **Getting file extensions**

### **Joining Paths**

```javascript
const path = require('path');

// Join two or more segments of a path
const fullPath = path.join('folder', 'subfolder', 'file.txt');
console.log(fullPath);  // Output: 'folder/subfolder/file.txt' (or platform-specific)
```

### **Resolving Absolute Paths**

```javascript
const path = require('path');

// Resolve an absolute path
const absolutePath = path.resolve('folder', 'subfolder', 'file.txt');
console.log(absolutePath);  // Output: absolute path based on current working directory
```

### **Getting File Extensions**

```javascript
const path = require('path');

// Get the file extension
const ext = path.extname('file.txt');
console.log(ext);  // Output: '.txt'
```

### **Getting Directory Name**

```javascript
const path = require('path');

// Get the directory name of a path
const dirname = path.dirname('/folder/subfolder/file.txt');
console.log(dirname);  // Output: '/folder/subfolder'
```

### **Normalizing Paths**

```javascript
const path = require('path');

// Normalize a path (resolve '..' and '.' in the path)
const normalizedPath = path.normalize('/folder/subfolder/../file.txt');
console.log(normalizedPath);  // Output: '/folder/file.txt'
```

---

## 📚 **Summary**

* **File System (`fs`)**:

  * Provides methods to interact with the file system: reading, writing, appending, and deleting files.
  * You can work with files asynchronously or synchronously.
* **Path**:

  * Helps manipulate file and directory paths.
  * Provides utilities like `join()`, `resolve()`, `extname()`, and `normalize()` to handle path operations.

---

Let me know if you'd like more details or examples!
