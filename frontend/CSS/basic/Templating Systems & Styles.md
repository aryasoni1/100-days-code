Here are your **Markdown (.md)** formatted notes on **Templating Systems & Styles**:

---

# 📝 Templating Systems & Styles

Templating systems like **EJS**, **Pug**, and **Handlebars** are widely used in server-rendered applications to dynamically generate HTML. These systems allow you to inject data into templates, which can be customized based on user input or database content. When it comes to styling, these systems can also be used to inject CSS into the generated HTML.

---

## 🔹 **Templating Systems Overview**

### **1. EJS (Embedded JavaScript)**

EJS is a simple templating engine that lets you inject dynamic content (JavaScript variables, expressions) directly into HTML. It is typically used with **Node.js** applications.

#### **Example (EJS Template):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
  <link rel="stylesheet" href="<%= styles %>"> <!-- Injected CSS file -->
</head>
<body>
  <h1><%= heading %></h1>
  <p><%= content %></p>
</body>
</html>
```

* **Injecting Styles in EJS**: You can inject static styles via variables or CDN links, like `<%= styles %>`.
* **Pros**: Easy to use, integrates well with Node.js.
* **Cons**: Requires additional setup for server-side rendering.

---

### **2. Pug (formerly Jade)**

Pug is a more concise templating engine that uses indentation-based syntax to write HTML. It’s often used with **Express.js** in Node.js applications.

#### **Example (Pug Template):**

```pug
doctype html
html(lang="en")
  head
    meta(charset="UTF-8")
    meta(name="viewport", content="width=device-width, initial-scale=1.0")
    title= title
    link(rel="stylesheet", href=styles) <!-- Injected CSS -->
  body
    h1= heading
    p= content
```

* **Injecting Styles in Pug**: Styles can be injected as variables or direct paths to CSS files.
* **Pros**: More compact syntax, easy to read.
* **Cons**: Learning curve for new developers unfamiliar with indentation-based syntax.

---

### **3. Handlebars**

Handlebars is a logic-less templating engine that allows for easy creation of dynamic content. It’s mostly used in front-end development but can also be used server-side (e.g., with **Node.js** or **Express**).

#### **Example (Handlebars Template):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
  <link rel="stylesheet" href="{{styles}}"> <!-- Injected CSS -->
</head>
<body>
  <h1>{{heading}}</h1>
  <p>{{content}}</p>
</body>
</html>
```

* **Injecting Styles in Handlebars**: You can inject styles dynamically just like in EJS by using `{{styles}}`.
* **Pros**: Simple syntax, logic-less.
* **Cons**: Less flexible than more powerful engines like EJS.

---

## 🔹 **Injecting Styles in Templating Engines**

### **1. Static Stylesheets**

For all the templating systems mentioned, one common approach is to inject links to external CSS stylesheets using `<link>` tags within the `<head>` tag. This is the most efficient and scalable way to manage styles.

#### **Example (Static Stylesheet Injection in EJS):**

```html
<link rel="stylesheet" href="/styles/main.css">  <!-- External stylesheet -->
```

* **Pros**: Separate styles from the logic of your templates, maintainable.
* **Cons**: Requires a server-side file structure for serving CSS.

---

### **2. Inline Styles**

You can inject inline CSS directly into the `<style>` tag inside the `<head>` section. This is useful for small customizations or conditional styling.

#### **Example (Inline Styles in EJS):**

```html
<head>
  <style>
    body {
      background-color: <%= bgColor %>;
    }
  </style>
</head>
```

* **Pros**: Simple, for small specific cases.
* **Cons**: Not scalable for larger projects; can clutter your HTML.

---

### **3. CSS Variables**

Using CSS variables (`--variable-name`) allows you to define reusable custom properties within your CSS files, making it easy to dynamically update themes.

#### **Example (CSS Variables in Handlebars):**

```html
<head>
  <style>
    :root {
      --primary-color: {{primaryColor}};
    }
  </style>
</head>
```

* **Pros**: Helps manage themes dynamically.
* **Cons**: Limited to custom properties; not for complex style changes.

---

## 🔹 **Integrating Frameworks (Bootstrap, Tailwind)**

If you're using CSS frameworks like **Bootstrap** or **Tailwind CSS** with templating engines, you can inject their CSS files as external stylesheets and easily utilize their utility classes.

### **Example (Bootstrap with EJS):**

```html
<head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
```

### **Example (Tailwind CSS with Pug):**

```pug
head
  link(href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.0/dist/tailwind.min.css", rel="stylesheet")
```

* **Pros**: Pre-designed UI components, responsive, fast development.
* **Cons**: Can add bloat to the project if not used selectively.

---

## 🔹 **Best Practices for Styling in Templating Systems**

1. **Separation of Concerns**: Always prefer external stylesheets over inline styles for scalability and maintenance.
2. **Minimize Inline Styles**: Use inline styles only for specific, isolated cases where external styles don’t apply.
3. **Use Variables for Theme Management**: Use CSS variables or SASS for dynamic theming and easy updates across pages.
4. **Leverage Frameworks for Speed**: Use frameworks like **Bootstrap** or **Tailwind** for quick, responsive designs but be mindful of bloat.

---

## 🔹 **Conclusion**

Injecting styles into templating engines such as **EJS**, **Pug**, and **Handlebars** allows you to efficiently style server-rendered applications. While external stylesheets are generally the best practice for maintainability, inline styles or CSS variables offer flexibility for dynamic adjustments. Always strive for clean separation of concerns, keeping styles and content as distinct as possible for ease of maintenance and scalability.
