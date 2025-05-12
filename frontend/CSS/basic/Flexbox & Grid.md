Here are your **Markdown (.md)** formatted notes on **Flexbox & Grid**:

---

# 📝 Flexbox & Grid: Layout Techniques

Flexbox and Grid are two powerful CSS layout models that make creating complex and responsive layouts easier. Flexbox is great for one-dimensional layouts (either row or column), while Grid is perfect for two-dimensional layouts (both rows and columns).

---

## 🔹 **Flexbox (`display: flex`)**

The **Flexbox layout** allows you to align items in a container along a single axis (either horizontally or vertically). It is useful when you need to distribute space or align elements dynamically.

### **Basic Syntax:**

```css
.container {
  display: flex;
}
```

### **Flexbox Properties for Containers:**

* **`flex-direction`**: Defines the direction of the flex items.

  * `row` (default): Aligns items horizontally.
  * `column`: Aligns items vertically.
  * `row-reverse`, `column-reverse`: Reverses the direction.

  ```css
  .container {
    flex-direction: row;
  }
  ```

* **`justify-content`**: Aligns items along the main axis (horizontal for `row`, vertical for `column`).

  * Options: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

  ```css
  .container {
    justify-content: center;
  }
  ```

* **`align-items`**: Aligns items along the cross axis (perpendicular to the main axis).

  * Options: `flex-start`, `flex-end`, `center`, `stretch`, `baseline`.

  ```css
  .container {
    align-items: center;
  }
  ```

* **`align-self`**: Aligns a single item along the cross axis, overriding `align-items` for that item.

  ```css
  .item {
    align-self: flex-start;
  }
  ```

### **Flexbox Properties for Items:**

* **`flex-grow`**: Defines how much the item will grow relative to other items.

  ```css
  .item {
    flex-grow: 1; /* Item will take up available space */
  }
  ```

* **`flex-shrink`**: Defines how much the item will shrink relative to other items.

  ```css
  .item {
    flex-shrink: 1; /* Item will shrink if necessary */
  }
  ```

* **`flex-basis`**: Defines the initial size of the item before it grows or shrinks.

  ```css
  .item {
    flex-basis: 100px;
  }
  ```

* **`flex`**: A shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

  ```css
  .item {
    flex: 1; /* Equivalent to flex-grow: 1; flex-shrink: 1; flex-basis: 0% */
  }
  ```

---

## 🔹 **Grid (`display: grid`)**

The **Grid layout** allows you to create complex two-dimensional layouts with rows and columns. It’s perfect for designs that require more control over both horizontal and vertical positioning.

### **Basic Syntax:**

```css
.container {
  display: grid;
}
```

### **Grid Properties for Containers:**

* **`grid-template-columns`**: Defines the columns of the grid.

  * You can specify fixed or flexible sizes, using units like `px`, `%`, `fr` (fractional unit), `auto`, etc.

  ```css
  .container {
    grid-template-columns: 1fr 2fr 1fr; /* 3 columns, first and last are 1fr, middle is 2fr */
  }
  ```

* **`grid-template-rows`**: Defines the rows of the grid.

  ```css
  .container {
    grid-template-rows: 100px auto 200px;
  }
  ```

* **`grid-template-areas`**: Defines a grid layout by naming areas in the grid.

  ```css
  .container {
    grid-template-areas:
      "header header header"
      "sidebar main main"
      "footer footer footer";
  }
  ```

* **`gap`**: Defines the space between rows and columns.

  ```css
  .container {
    gap: 10px;
  }
  ```

### **Grid Properties for Items:**

* **`grid-column`**: Defines how an item spans across columns.

  ```css
  .item {
    grid-column: span 2; /* Item spans across 2 columns */
  }
  ```

* **`grid-row`**: Defines how an item spans across rows.

  ```css
  .item {
    grid-row: 1 / 3; /* Item spans from row 1 to row 3 */
  }
  ```

* **`grid-area`**: Defines a shorthand for spanning across both rows and columns.

  ```css
  .item {
    grid-area: header; /* Uses a defined grid area */
  }
  ```

---

## 🔹 **Flexbox vs Grid: When to Use**

### **Use Flexbox**:

* When you need a simple one-dimensional layout (rows or columns).
* When aligning items along one axis is the primary goal (e.g., navigation bars, buttons).

### **Use Grid**:

* When you need a complex two-dimensional layout (both rows and columns).
* When you want more control over the placement of elements and the layout structure (e.g., page layouts, image galleries).

---

## 🔹 **Best Practices for Flexbox & Grid**

* **Use Flexbox for simpler layouts** where alignment and spacing in one direction (either horizontally or vertically) are the main focus.
* **Use Grid for complex, two-dimensional layouts** that require control over both rows and columns simultaneously.
* **Combine Flexbox and Grid**: You can use both in the same design, e.g., using Grid for the overall page layout and Flexbox for individual components inside grid items.

---

## 🔹 **Conclusion**

Both **Flexbox** and **Grid** are essential layout models in modern web development, with Flexbox being great for simpler one-dimensional layouts and Grid excelling at more complex two-dimensional designs. By understanding when and how to use these tools, you can create flexible, responsive layouts that work well across all devices and screen sizes.
