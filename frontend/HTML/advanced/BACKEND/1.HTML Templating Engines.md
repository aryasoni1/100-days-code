Here's your Markdown-formatted note for **HTML Templating Engines**:

---

# 🧩 HTML Templating Engines

Templating engines help dynamically generate HTML using **server-side code** and **template syntax**. They allow embedding logic (like loops and conditionals) directly within markup.

---

## 🛠️ Popular Templating Engines

### 1. **EJS** (Embedded JavaScript Templates)

* Used with Node.js and Express.
* Syntax: `<%= %>` for output, `<% %>` for logic.

```ejs
<h1>Hello, <%= user.name %>!</h1>
<% if (user.isAdmin) { %>
  <p>You have admin access.</p>
<% } %>
```

### 2. **Pug** (formerly Jade)

* Indentation-based, minimal syntax.
* Clean and readable (but less HTML-like).

```pug
h1 Hello #{user.name}
if user.isAdmin
  p You are an admin.
```

### 3. **Handlebars**

* Logic-less templating engine.
* Mustache-style syntax: `{{ }}`.
* Great for logic delegation to controller.

```handlebars
<h1>Hello, {{user.name}}</h1>
{{#if user.isAdmin}}
  <p>You are an admin.</p>
{{/if}}
```

### 4. **Jinja2** (Python-based, Flask/Django)

* Inspired by Django templates.
* Used widely in Flask web apps.

```jinja2
<h1>Hello, {{ user.name }}</h1>
{% if user.is_admin %}
  <p>You are an admin.</p>
{% endif %}
```

### 5. **Thymeleaf** (Java/Spring)

* Natural templating engine (works in browser as static HTML).
* Used in Spring Boot applications.

```html
<h1 th:text="'Hello, ' + ${user.name}">Hello, User</h1>
<p th:if="${user.admin}">You are an admin.</p>
```

---

## 🎯 Common Features

* Variable interpolation
* Conditionals (`if/else`)
* Loops (`for`, `each`)
* Includes/partials
* Template inheritance/layouts

---

## 📦 Use Cases

* Server-rendered pages (Express, Flask, Spring)
* SEO-friendly content
* Email templates
* Admin dashboards

---

## ✅ Summary

| Engine     | Language | Syntax Style | Usage Context            |
| ---------- | -------- | ------------ | ------------------------ |
| EJS        | JS       | HTML + tags  | Node/Express             |
| Pug        | JS       | Indented     | Node/Express             |
| Handlebars | JS       | Mustache     | Node, frontend templates |
| Jinja2     | Python   | Django-like  | Flask/Django             |
| Thymeleaf  | Java     | HTML-native  | Spring Boot              |

---
