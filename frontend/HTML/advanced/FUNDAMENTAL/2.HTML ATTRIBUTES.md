Here are concise and well-organized notes in **Markdown (.md) format** on common HTML attributes:

---

# 🧩 HTML Attributes

HTML attributes provide additional information about elements. They are always written in the **start tag**, using **name="value"** pairs.

---

## 🔗 `href` (Hyperlink Reference)

* **Used with**: `<a>`
* **Purpose**: Specifies the URL of the page the link goes to.

```html
<a href="https://example.com">Visit Example</a>
```

---

## 🖼️ `src` (Source)

* **Used with**: `<img>`, `<script>`, `<iframe>`, etc.
* **Purpose**: Defines the source file (image, video, script, etc.)

```html
<img src="image.jpg" alt="A description">
```

---

## 📝 `alt` (Alternative Text)

* **Used with**: `<img>`
* **Purpose**: Provides alternative text for an image (important for accessibility and SEO).

```html
<img src="logo.png" alt="Company Logo">
```

---

## 🏷️ `title`

* **Used with**: Any HTML element.
* **Purpose**: Adds extra information shown as a tooltip when the mouse hovers over the element.

```html
<p title="This is a tooltip">Hover over me!</p>
```

---

## 🆔 `id` (Unique Identifier)

* **Used with**: Any HTML element.
* **Purpose**: Assigns a unique ID, useful for CSS styling, JavaScript targeting, and anchor links.

```html
<div id="header">Site Header</div>
```

---

## 🧾 `class` (CSS Class)

* **Used with**: Any HTML element.
* **Purpose**: Assigns one or more classes to an element for styling or scripting.

```html
<p class="highlight">Important note</p>
```

---

## 🔓 `target`

* **Used with**: `<a>`, `<form>`
* **Purpose**: Defines where to open the linked document.

| Value     | Description                   |
| --------- | ----------------------------- |
| `_self`   | Opens in same tab (default)   |
| `_blank`  | Opens in a new tab/window     |
| `_parent` | Opens in the parent frame     |
| `_top`    | Opens in the full body window |

```html
<a href="https://example.com" target="_blank">Open in new tab</a>
```

---

Let me know if you'd like a downloadable `.md` file for all these notes combined!
