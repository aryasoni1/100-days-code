Here’s your notes in `.md` (Markdown) format:

---

# Developing Template Engines for Express

## Overview
You can create custom template engines in Express using the `app.engine(ext, callback)` method.

- **ext**: The file extension (e.g., `ntl`).
- **callback**: The template engine function that receives:
  - `filePath`: The path to the template file.
  - `options`: An object with variables passed to the template.
  - `callback`: A function to call with the rendered content.

---

## Example: Creating a Simple `.ntl` Template Engine

### Code

```javascript
const fs = require('fs'); // This engine requires the 'fs' module

app.engine('ntl', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // Simple string replacement template engine
    const rendered = content.toString()
      .replace('#title#', `<title>${options.title}</title>`)
      .replace('#message#', `<h1>${options.message}</h1>`);
    return callback(null, rendered);
  });
});

app.set('views', './views'); // Specify the views directory
app.set('view engine', 'ntl'); // Register the .ntl template engine
```

---

## Creating a Template File

Create a file named `index.ntl` inside the `views` directory:

```plaintext
#title#
#message#
```

---

## Setting up a Route

```javascript
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});
```

---

## Behavior
- When a user accesses the `/` route, Express will render the `index.ntl` file.
- The `#title#` and `#message#` placeholders will be replaced with the values provided in the `res.render()` call.

**Resulting HTML:**

```html
<title>Hey</title>
<h1>Hello there!</h1>
```

---

Would you also like me to prepare a slightly more advanced example (like adding multiple placeholders or looping over data)? 🚀