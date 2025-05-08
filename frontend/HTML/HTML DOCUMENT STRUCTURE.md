Here's a clean and structured set of notes in **Markdown (.md)** format about **HTML Document Structure**, including page skeleton, nesting rules, and proper indentation:

````markdown
# 📝 HTML Document Structure

## 📄 Basic Page Skeleton

Every HTML document should follow a consistent structure to ensure proper rendering by browsers.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>
````

---

## 🔹 Main Elements

* `<!DOCTYPE html>`: Declares the document as HTML5.
* `<html>`: Root element that wraps all content.
* `<head>`: Contains meta information, links, and title.
* `<body>`: Contains the visible content of the page.

---

## 📚 Nesting Rules

* HTML elements must be **properly nested**.

  * ✅ Correct: `<p><strong>Text</strong></p>`
  * ❌ Incorrect: `<p><strong>Text</p></strong>`
* Block-level elements should not be placed inside inline elements.

  * ❌ Example: `<span><div></div></span>` (invalid)
* Elements that require a parent should not be orphaned.

  * `<li>` must be inside `<ul>` or `<ol>`.
  * `<td>` must be inside `<tr>`, which must be inside `<table>`.

---

## ✅ Proper Indentation

* Use **2 or 4 spaces** for indentation (no tabs, unless specified).
* Helps improve **readability** and maintainability.
* Indent nested elements one level deeper.

```html
<ul>
  <li>Item 1</li>
  <li>
    Item 2
    <ul>
      <li>Subitem 2.1</li>
    </ul>
  </li>
</ul>
```

---

## 🛠️ Best Practices

* Always close elements properly.
* Use semantic HTML (`<header>`, `<main>`, `<footer>`, etc.).
* Keep structure clean and avoid deeply nested unnecessary elements.

---

Let me know if you'd like a downloadable `.md` file or a diagram illustrating nesting!

```

Would you like this content saved as a downloadable `.md` file?
```
