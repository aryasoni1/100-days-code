Here's a `.md` (Markdown) version of your notes on **Multer**, structured for clarity and reuse:

```markdown
# Multer Notes

> These notes summarize key concepts and usage from the [Multer README](https://github.com/expressjs/multer).

## 📦 What is Multer?

Multer is a Node.js middleware for handling `multipart/form-data`, primarily used for **file uploads**. It is built on top of [busboy](https://github.com/mscdex/busboy) for maximum efficiency.

> ❗ Multer **only processes** forms with `enctype="multipart/form-data"`.

---

## 🌐 Translations Available

Multer README is available in several languages including Arabic, Spanish, Chinese, Korean, Russian, Vietnamese, Portuguese (Brazil), French, and Uzbek.

---

## 🔧 Installation

```bash
npm install --save multer
```

---

## 🚀 Basic Usage

### HTML Form

```html
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
```

### Express Server Setup

```js
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.post('/profile', upload.single('avatar'), (req, res) => {
  // req.file contains avatar file
  // req.body contains text fields
});
```

### Handling Multiple Files

```js
app.post('/photos/upload', upload.array('photos', 12), (req, res) => {
  // req.files is an array of 'photos'
});
```

### Multiple Fields

```js
const cpUpload = upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'gallery', maxCount: 8 }
]);

app.post('/cool-profile', cpUpload, (req, res) => {
  // req.files['avatar'][0] or req.files['gallery']
});
```

### Text-Only Forms

```js
app.post('/profile', upload.none(), (req, res) => {
  // req.body contains only text fields
});
```

---

## 📝 Example Form with File & Text Input

```html
<form action="/stats" enctype="multipart/form-data" method="post">
  <input type="file" name="uploaded_file">
  <input type="text" name="nspeakers" placeholder="Number of speakers">
  <input type="submit" value="Get me the stats!">
</form>
```

### Server-Side

```js
const upload = multer({ dest: './public/data/uploads/' });

app.post('/stats', upload.single('uploaded_file'), (req, res) => {
  console.log(req.file, req.body);
});
```

---

## 📂 File Information Provided by Multer

| Key           | Description                                |
|---------------|--------------------------------------------|
| `fieldname`   | Field name from the form                   |
| `originalname`| Original name of the uploaded file         |
| `encoding`    | Encoding type                              |
| `mimetype`    | MIME type                                  |
| `size`        | File size in bytes                         |
| `destination` | Directory where the file is saved          |
| `filename`    | File name within the destination           |
| `path`        | Full path to the uploaded file             |
| `buffer`      | File buffer (for MemoryStorage)            |

---

## ⚙️ Multer Configuration Options

### Basic Usage

```js
const upload = multer({ dest: 'uploads/' });
```

### Advanced Storage: DiskStorage

```js
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp/my-uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });
```

> 📝 Multer will **not append** file extensions automatically.

### MemoryStorage

```js
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
```

> ⚠️ Beware of memory usage with large or many files.

---

## ⛔ Limits

```js
const upload = multer({
  limits: {
    fileSize: 1 * 1024 * 1024 // 1MB
  }
});
```

| Key             | Description                              | Default     |
|------------------|------------------------------------------|-------------|
| `fieldNameSize`  | Max field name size                     | 100 bytes   |
| `fieldSize`      | Max field value size                    | 1MB         |
| `fields`         | Max number of non-file fields           | Infinity    |
| `fileSize`       | Max file size                           | Infinity    |
| `files`          | Max number of file fields               | Infinity    |
| `parts`          | Max total fields + files                | Infinity    |
| `headerPairs`    | Max header key-value pairs              | 2000        |

---

## ✅ File Filtering

```js
function fileFilter(req, file, cb) {
  if (file.mimetype === 'image/jpeg') {
    cb(null, true); // Accept file
  } else {
    cb(null, false); // Reject file
  }
}
```

---

## 🚨 Error Handling

```js
app.post('/profile', (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer-specific error occurred
    } else if (err) {
      // An unknown error occurred
    } else {
      // Upload successful
    }
  });
});
```

---

## 🔧 Custom Storage Engines

See Multer's docs on [creating custom storage engines](https://github.com/expressjs/multer/blob/master/StorageEngine.md) if you need advanced file handling.

---

## 📜 License

Multer is open-source software, licensed under the MIT license.
```

Would you like this as a downloadable `.md` file?