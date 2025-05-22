Here are the notes for **Serving Static Files and SSR in Express.js** in `.md` format:

---

# 🗂️ Serving Static Files & SSR in Express.js

---

## 📁 Serving Static Files

Express can serve static assets like HTML, CSS, JS, images using built-in middleware `express.static()`.

### 🛠 Usage:

```js
const express = require('express');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.listen(3000);
```

### 📝 Folder Structure:

```
project/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
```

* Access at: `http://localhost:3000/index.html`

---

## 🧠 Server-Side Rendering (SSR)

Use templating engines like **EJS** or **Pug** to render dynamic HTML on the server.

---

### 🔧 Set Up EJS:

```js
app.set('view engine', 'ejs');
```

#### Example Route:

```js
app.get('/user', (req, res) => {
  res.render('user', { name: 'Alice' });
});
```

#### `views/user.ejs`:

```ejs
<h1>Welcome, <%= name %>!</h1>
```

---

### 🔧 Set Up Pug:

```js
app.set('view engine', 'pug');
```

#### Example Route:

```js
app.get('/profile', (req, res) => {
  res.render('profile', { username: 'Bob' });
});
```

#### `views/profile.pug`:

```pug
h1 Hello #{username}
```

---

### Supported View Engines:

| Engine     | Syntax Style  | Extension |
| ---------- | ------------- | --------- |
| EJS        | HTML + JS     | `.ejs`    |
| Pug        | Indentation   | `.pug`    |
| Handlebars | Mustache-like | `.hbs`    |

---

## ✅ Summary

| Feature           | Method                          |
| ----------------- | ------------------------------- |
| Static files      | `express.static('folder')`      |
| Templating engine | `app.set('view engine', 'ejs')` |
| Render template   | `res.render('template', data)`  |

Let me know if you want examples for layouts or partials next!
