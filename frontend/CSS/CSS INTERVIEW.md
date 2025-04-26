## 2. Box Model & Selectors

### **What are CSS selectors and how does specificity work?**

CSS selectors are patterns used to select and style HTML elements. There are several types of selectors, such as:

- **Element selectors** (`div`, `p`, `h1`, etc.)
- **Class selectors** (`.className`)
- **ID selectors** (`#idName`)
- **Attribute selectors** (`[type="text"]`)
- **Pseudo-classes** (`:hover`, `:nth-child()`, etc.)
- **Pseudo-elements** (`::before`, `::after`)

#### **Specificity**

Specificity determines which CSS rule is applied when multiple rules target the same element. The browser calculates specificity based on a 4-part value (a, b, c, d):

- `a`: Inline styles (e.g., `style="..."`) → 1000
- `b`: ID selectors → 100
- `c`: Class selectors, attributes, and pseudo-classes → 10
- `d`: Element selectors and pseudo-elements → 1

> The higher the value, the more specific the rule.

---

### **Example**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      color: blue;           /* Specificity: 0-0-0-1 */
    }

    .highlight {
      color: green;          /* Specificity: 0-0-1-0 */
    }

    #unique {
      color: red;            /* Specificity: 0-1-0-0 */
    }

    .highlight#unique {
      color: orange;         /* Specificity: 0-1-1-0 */
    }

    /* Inline style will override all */
  </style>
</head>
<body>

  <p class="highlight" id="unique" style="color: purple;">Hello CSS!</p>

</body>
</html>
