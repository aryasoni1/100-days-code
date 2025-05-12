Here are your **Markdown (.md)** formatted notes on **CSS Display & Positioning**:

---

# 📝 CSS Display & Positioning

The **CSS Display** and **Positioning** properties are essential for controlling how elements are positioned and laid out within the webpage. These properties are fundamental to building flexible and responsive designs.

---

## 🔹 **Display Property**

The `display` property specifies the display behavior of an element. It determines how an element is rendered on the page and how it interacts with other elements around it.

### **Display Values**:

1. **`block`**:

   * The element takes up the full width available and starts on a new line.
   * Typically used for structural elements like `<div>`, `<section>`, `<header>`, etc.
   * **Example**:

     ```css
     div {
         display: block;
     }
     ```

2. **`inline`**:

   * The element only takes up as much width as necessary for its content and does not start on a new line.
   * Typically used for elements like `<span>`, `<a>`, etc.
   * **Example**:

     ```css
     span {
         display: inline;
     }
     ```

3. **`inline-block`**:

   * The element behaves like an inline element (does not start on a new line) but can have width and height applied like a block element.
   * Useful when you need to arrange items in a row but still want to control their dimensions.
   * **Example**:

     ```css
     button {
         display: inline-block;
         width: 100px;
         height: 50px;
     }
     ```

4. **`flex`**:

   * The element becomes a flex container and can contain flex items (children) that can be arranged in rows or columns.
   * Offers powerful tools for aligning and distributing space within a container.
   * **Example**:

     ```css
     .container {
         display: flex;
     }
     ```

5. **`grid`**:

   * The element becomes a grid container, and its children become grid items that can be arranged in rows and columns.
   * Ideal for creating complex layouts with control over both rows and columns.
   * **Example**:

     ```css
     .container {
         display: grid;
         grid-template-columns: 1fr 1fr;
     }
     ```

---

## 🔹 **Position Property**

The `position` property controls how an element is positioned relative to its containing block (usually the viewport or the nearest positioned ancestor).

### **Position Values**:

1. **`static`**:

   * The default position value. The element is positioned according to the normal document flow (no special positioning).
   * **Example**:

     ```css
     div {
         position: static;
     }
     ```

2. **`relative`**:

   * The element is positioned relative to its normal position. It can be shifted using `top`, `right`, `bottom`, and `left` properties, but it still takes up space in the normal document flow.
   * **Example**:

     ```css
     div {
         position: relative;
         top: 10px;
         left: 20px;
     }
     ```

3. **`absolute`**:

   * The element is positioned relative to the nearest positioned ancestor (non-static parent), or the initial containing block (if no positioned ancestors).
   * Removed from the document flow, so it does not affect the positioning of other elements.
   * **Example**:

     ```css
     div {
         position: absolute;
         top: 50px;
         left: 50px;
     }
     ```

4. **`fixed`**:

   * The element is positioned relative to the viewport (the visible area of the browser window).
   * It stays in the same position even when the page is scrolled.
   * **Example**:

     ```css
     div {
         position: fixed;
         bottom: 10px;
         right: 10px;
     }
     ```

5. **`sticky`**:

   * The element is treated as `relative` until it reaches a defined scroll position, after which it becomes `fixed`.
   * Useful for elements like sticky headers that stay at the top of the page as you scroll.
   * **Example**:

     ```css
     div {
         position: sticky;
         top: 0;
     }
     ```

---

## 🔹 **Combining Display & Position**

### Example of Using `flex` with `position`:

```css
.container {
    display: flex;
    justify-content: space-between;
}

.item {
    position: relative;
    top: 10px;
}
```

In this example:

* `.container` uses `flex` to arrange its children in a row with space between them.
* `.item` uses `relative` positioning to move it 10px from its normal position.

---

## 🔹 **Common Layout Techniques**

### Flexbox Layout

```css
.container {
    display: flex;
    justify-content: center; /* Horizontal alignment */
    align-items: center;     /* Vertical alignment */
}
```

### Grid Layout

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal-width columns */
    grid-gap: 10px; /* Space between grid items */
}
```

---

## 🔹 **Conclusion**

Understanding the **display** and **position** properties is key to mastering layouts in CSS. These properties offer a wide range of options for controlling how elements are placed on the page, enabling you to create flexible, responsive, and dynamic layouts.
