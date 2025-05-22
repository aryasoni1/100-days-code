Here’s your content neatly structured in **`.md` (Markdown)** format:

---

# Using Template Engines with Express

A **template engine** enables the use of static template files in your application.  
At runtime, the engine **replaces variables** in a template file with **actual values** and transforms it into an **HTML file** sent to the client.

> 🎨 This approach **makes HTML page design easier**.

---

## Default Template Engine

- The **Express application generator** uses **Pug** as its default template engine.
- Express also supports others like **Handlebars**, **EJS**, etc.

---

## Setting Up a Template Engine

To render template files, set these **application settings** in `app.js`:

1. **views**: Directory where templates are located.

```javascript
app.set('views', './views')
```
(Default: `views` directory in app root)

2. **view engine**: The template engine to use.

```javascript
app.set('view engine', 'pug')
```

Then, install the corresponding npm package:

```bash
npm install pug --save
```

---

## How Template Engines Work

- Express-compliant engines (like **Pug**) export a function:  
  `__express(filePath, options, callback)`
- Express calls this function through `res.render()` to render the templates.

> 📦 Some engines may not follow this convention directly.  
> Use **[@ladjs/consolidate](https://www.npmjs.com/package/@ladjs/consolidate)** to map various template engines to Express' expectations.

---

## Example Setup with Pug

After setting `view engine`, you don’t need to manually load the template engine module.

```javascript
app.set('view engine', 'pug')
```

### Create a Pug Template (views/index.pug):

```pug
html
  head
    title= title
  body
    h1= message
```

### Create a Route to Render the Template:

```javascript
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
```

- If `view engine` is **not set**, you must specify the file extension manually.
- If `view engine` **is set**, you can **omit the file extension**.

---

## View Engine Cache

- **Caches** the underlying **template** itself.
- **Does not cache** the **rendered output**.
- **View is re-rendered** on **every request**, even when cache is enabled.

---

# Summary

| Concept | Details |
| :------ | :------ |
| Setup | Set `views` and `view engine` app settings |
| Template Engines | Pug, EJS, Handlebars, etc. |
| Example | Use `res.render('index', { title, message })` |
| Caching | Caches template files, not rendered HTML |

---

Would you also like me to generate an example project structure for this setup too? 🚀  
It would help you if you're planning to build a small project or a demo!