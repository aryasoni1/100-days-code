Here's a beginner-friendly and detailed `.md` (Markdown) formatted note on **File Uploads using `multer`**:

---

# 📁 File Uploads in Express.js using `multer`

---

## 🧾 What is Multer?

**Multer** is a middleware for handling `multipart/form-data`, primarily used for uploading files in Express.js apps.

* It stores uploaded files on your server or in memory.
* Supports single and multiple file uploads.
* Easy to integrate with Express routes.

---

## 📦 Installation

```bash
npm install multer
```

---

## 🧪 Basic Usage – Upload a Single File

### 🔧 Setup

```js
const express = require('express');
const multer = require('multer');
const app = express();

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder to store uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // unique filename
  }
});

const upload = multer({ storage: storage });
```

> ⚠️ Make sure the `uploads/` folder exists or create it manually.

---

### 📤 Upload Route

```js
app.post('/upload', upload.single('myFile'), (req, res) => {
  res.send({
    message: 'File uploaded successfully',
    file: req.file
  });
});
```

* `upload.single('myFile')` handles a **single** file upload.
* `'myFile'` is the `name` attribute in the HTML form input.

---

## 🧪 Upload Multiple Files

```js
app.post('/uploads', upload.array('photos', 5), (req, res) => {
  res.send({
    message: 'Files uploaded',
    files: req.files
  });
});
```

* `upload.array('photos', 5)` allows up to 5 files to be uploaded with the field name `'photos'`.

---

## 🧼 File Filtering (Optional)

You can restrict uploads to certain file types (e.g., images only):

```js
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});
```

---

## 🛑 Error Handling

```js
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: err.message });
  } else if (err) {
    return res.status(500).json({ message: err.message });
  }
  next();
});
```

---

## 📄 Frontend HTML Form Example

```html
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="myFile" />
  <button type="submit">Upload</button>
</form>
```

---

## 📁 Accessing Uploaded Files

Uploaded files will be saved in the `uploads/` directory by default.

You can serve them publicly using:

```js
app.use('/uploads', express.static('uploads'));
```

---

## 🧠 Summary

| Feature           | Description                              |
| ----------------- | ---------------------------------------- |
| `multer`          | Middleware for file uploads              |
| `upload.single()` | Upload a single file                     |
| `upload.array()`  | Upload multiple files                    |
| `diskStorage`     | Control file destination and naming      |
| `fileFilter`      | Filter files by type (e.g., images only) |
| `uploads/` folder | Store uploaded files                     |

---

Let me know if you'd like to export this to a `.md` file or include it with your complete Express.js notes!
