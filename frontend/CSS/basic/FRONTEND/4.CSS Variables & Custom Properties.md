Here are your **Markdown (.md)** formatted notes on **CSS Variables & Custom Properties**:

---

# 📝 CSS Variables & Custom Properties

CSS Variables (also known as **Custom Properties**) allow you to store values and reuse them throughout your stylesheets. They make your CSS more flexible, maintainable, and easier to manage.

---

## 🔹 **What Are CSS Variables?**

CSS Variables are custom properties that you define using the `--` prefix. These variables can be reused in the stylesheet, which makes it easier to manage styles, especially for themes, colors, fonts, and other repetitive values.

### **Syntax:**

```css
--variable-name: value;
```

### **Usage:**

To use the value of a CSS variable, you use the `var()` function:

```css
property: var(--variable-name);
```

---

## 🔹 **Defining and Using Variables**

### **Defining Variables:**

CSS Variables are typically defined inside a selector (like `:root`) so that they are accessible globally. However, they can be scoped to a particular element as well.

```css
:root {
  --primary-color: #007bff;
  --font-size: 16px;
  --padding: 10px;
}
```

In the example above, we define three CSS variables that can be used throughout the document.

### **Using Variables:**

You can then use these variables within other CSS rules using the `var()` function.

```css
body {
  font-size: var(--font-size);
  padding: var(--padding);
  color: var(--primary-color);
}
```

In this example, the `body` uses the custom properties for `font-size`, `padding`, and `color`, making it easy to change them globally by just modifying the variables in the `:root`.

---

## 🔹 **Fallback Values**

If a CSS variable is not defined or is invalid, you can provide a fallback value using the second argument in the `var()` function.

```css
button {
  background-color: var(--button-bg-color, #ff4500); /* Default to #ff4500 if --button-bg-color is not defined */
}
```

---

## 🔹 **Local Scope of Variables**

While variables are usually defined in the `:root` selector (global scope), you can also define variables locally within a specific selector. These variables will only be accessible inside that selector and its descendants.

```css
.container {
  --container-padding: 20px;
}

.container .item {
  padding: var(--container-padding); /* Works only for .item inside .container */
}
```

---

## 🔹 **Dynamic Variables**

CSS variables can be dynamically changed through JavaScript, which makes them useful for things like theming or interactive styles.

```javascript
document.documentElement.style.setProperty('--primary-color', '#ff6347');
```

This changes the value of `--primary-color` to a new value, and it will be reflected in all elements that use this variable.

---

## 🔹 **Practical Examples**

### **Example 1: Theme Example**

CSS Variables are great for implementing themes. You can define different color schemes as variables and switch between them easily.

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --background-color: #f8f9fa;
}

[data-theme="dark"] {
  --primary-color: #1d1d1d;
  --secondary-color: #ccc;
  --background-color: #333;
}
```

In this example, we set a light theme by default. When the `data-theme="dark"` attribute is added to the root element (`<html>` or `<body>`), the values of the variables change to create a dark theme.

### **Example 2: Flexible Button Styles**

```css
:root {
  --btn-padding: 10px 20px;
  --btn-border-radius: 5px;
  --btn-bg-color: #007bff;
}

.button {
  padding: var(--btn-padding);
  border-radius: var(--btn-border-radius);
  background-color: var(--btn-bg-color);
  color: white;
  border: none;
}

.button:hover {
  background-color: var(--btn-bg-color, #0056b3); /* Fallback to #0056b3 if not defined */
}
```

This allows you to easily adjust the button styles by just changing the values of the variables.

---

## 🔹 **Best Practices**

* **Define global variables in `:root`**: This ensures they are accessible across the entire document.
* **Use meaningful names**: Name variables according to their function, such as `--primary-color`, `--font-size`, `--line-height`, etc.
* **Fallback values**: Always provide fallback values for variables, especially if the variable might not be defined in some browsers or scenarios.
* **Use variables for themes**: CSS variables are perfect for implementing dynamic themes and making styles more flexible.

---

## 🔹 **Conclusion**

CSS Variables and Custom Properties are powerful tools that help with maintaining consistent and scalable stylesheets. By defining reusable variables for colors, fonts, and other properties, you can create more flexible and easily adjustable designs. Furthermore, using CSS variables allows for easier theming and dynamic styling changes, making your web applications more user-friendly and maintainable.
