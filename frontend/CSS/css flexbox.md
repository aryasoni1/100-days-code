Here’s your complete set of **CSS Flexbox notes in `.md` format**, organized, cleanly formatted, and with proper syntax highlighting and examples:

---

```markdown
# 📘 CSS Flexbox Notes

## 🧩 Introduction to Flexbox

- CSS Flexbox (Flexible Box Layout) is a layout model for creating **responsive and dynamic web page layouts**.
- It simplifies arranging items in rows or columns without using floats or complex positioning.

---

## ✨ Key Features

- **Alignment**: Aligns items along the main and cross axes.
- **Space Distribution**: Dynamically manages space among items.
- **Responsive Design**: Easily adapts to various screen sizes.

---

## 🧱 Flexbox Components

- **Flex Container**: The parent element with `display: flex`.
- **Flex Items**: The child elements inside the flex container.

---

## 📏 Axes in Flexbox

- **Main Axis**: Default is horizontal (left to right).
- **Cross Axis**: Perpendicular to the main axis (vertical).

---

## 🔀 Flex Direction

```css
flex-direction: row;         /* Default */
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;
```

---

## 📐 Aligning and Justifying Content

```css
justify-content: flex-start | center | flex-end | space-between | space-around | space-evenly;

align-items: flex-start | center | flex-end | stretch | baseline;

align-content: flex-start | center | flex-end | space-between | space-around | stretch;
```

---

## 🔧 Flex Container Properties

| Property         | Description                                                  |
|------------------|--------------------------------------------------------------|
| `display`        | Defines a flex container (`display: flex`)                   |
| `flex-direction` | Direction of items (row, column, reverse variants)           |
| `flex-wrap`      | Whether items wrap to next line (`nowrap`, `wrap`, `wrap-reverse`) |
| `flex-flow`      | Shorthand for `flex-direction` and `flex-wrap`              |
| `justify-content`| Aligns items along the main axis                            |
| `align-items`    | Aligns items along the cross axis                           |
| `align-content`  | Aligns multiple rows/lines inside the flex container        |

---

## 🔧 Flex Item Properties

| Property       | Description |
|----------------|-------------|
| `order`        | Changes display order |
| `flex-grow`    | Makes items grow to fill space |
| `flex-shrink`  | Allows items to shrink |
| `flex-basis`   | Initial size of the item |
| `flex`         | Shorthand for `grow`, `shrink`, `basis` |
| `align-self`   | Overrides `align-items` for specific item |

### Example:
```css
.item {
  flex: 1 0 auto; /* flex-grow: 1, flex-shrink: 0, flex-basis: auto */
}
```

---

## 🎯 Perfect Centering Example

```css
.flex-container {
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
}
```

---

## 🧭 Navigation Bar with Flexbox

```html
<div class="navbar">
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</div>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4CAF50;
  padding: 10px;
}
.navbar a {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
}
.navbar a:hover {
  background-color: #45a049;
}
```

---

## 📱 Responsive Layouts Using Flexbox

### 1. Two-Column to One-Column Layout

```css
.flex-container {
  display: flex;
  flex-direction: row;
}
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
```

### 2. Responsive Width with Flex

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.flex-item {
  flex: 50%;
}
@media (max-width: 800px) {
  .flex-item {
    flex: 100%;
  }
}
```

---

## 🖼 Responsive Image Gallery Example

- Adjust number of columns using media queries and `flex-wrap`.

---

## 🌐 Browser Support

- Fully supported in **all modern browsers**: Chrome, Edge, Firefox, Safari, Opera.

---

## 📌 Conclusion

CSS Flexbox is a **powerful layout tool** that enhances responsiveness, simplifies alignment, and makes layout management much easier compared to older techniques like floats or inline-block.

---
```

Would you like this in PDF format or want me to generate diagrams for visual understanding?