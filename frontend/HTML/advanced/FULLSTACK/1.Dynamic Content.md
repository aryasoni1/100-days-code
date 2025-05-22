Here are the notes in `.md` format for **Dynamic Content**:

---

# 🔄 Dynamic Content with Templating Engines

Injecting dynamic data into HTML from the backend is essential for rendering personalized and context-specific content. This is typically handled using **templating engines**.

---

## 🛠 Common Template Engines

| Engine     | Language       | Syntax Style      |
| ---------- | -------------- | ----------------- |
| EJS        | JavaScript     | `<%= %>`          |
| Pug        | JavaScript     | Indentation-based |
| Handlebars | JavaScript     | `{{}}`            |
| Jinja2     | Python (Flask) | `{{ }}`           |
| Thymeleaf  | Java (Spring)  | `${}`             |

---

## ✨ Basic Usage (EJS Example)

### Route in Node.js (Express):

```js
app.get('/user', (req, res) => {
  res.render('profile', { name: 'Alice', age: 25 });
});
```

### EJS Template (`profile.ejs`):

```html
<h1>Welcome, <%= name %>!</h1>
<p>Age: <%= age %></p>
```

---

## 🔁 Looping and Conditionals

### Loop (EJS):

```html
<ul>
  <% users.forEach(user => { %>
    <li><%= user.name %></li>
  <% }) %>
</ul>
```

### Conditional (EJS):

```html
<% if (isLoggedIn) { %>
  <p>Welcome back!</p>
<% } else { %>
  <p>Please log in.</p>
<% } %>
```

---

## 📄 Dynamic Tables (Pug Example)

```pug
table
  each item in items
    tr
      td= item.name
      td= item.price
```

---

## 📦 Passing Data from Backend

* Data is passed from route controllers to views/templates.
* Templating engines render server-side HTML before sending it to the client.

---

## ✅ Benefits

* SEO-friendly (pre-rendered HTML)
* Cleaner separation of logic and markup
* Easier to manage content-heavy pages

---

## 🚫 Drawbacks

* Full-page reloads (unlike SPA)
* Tightly coupled to server-side rendering

---

Let me know if you want the same notes for a specific templating engine like Jinja2, Handlebars, or Pug.
