Here’s a complete and neatly formatted summary for your **CSS Fundamentals Notes**, including the code examples and descriptions you provided, written in a clean and concise format with proper code blocks:

---

# 📘 CSS Fundamentals Notes

## 1. **Box Model**

### 🔹 Explanation
Every HTML element is considered a rectangular box, known as the Box Model. It includes the following components (from innermost to outermost):

1. **Content** – The actual text or image in the element.
2. **Padding** – Clears an area around the content (inside the border).
3. **Border** – Wraps the padding and content.
4. **Margin** – Clears an area outside the border (space between elements).

### 🔹 Example
```html
<div class="box">Hello</div>
```

```css
.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}
```

### 🔹 Visual
```
Margin
  Border
    Padding
      Content
```

---

## 2. **Height and Width**

### 🔹 Explanation
Used to define the size of elements.

- Default value: `auto`
- Accepts values in `px`, `em`, `%`, `vh`, `vw`, etc.
- `min-width`, `max-width`, `min-height`, and `max-height` help constrain sizes.

### 🔹 Example
```html
<div class="dimension-box">Hello</div>
```

```css
.dimension-box {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
```

---

## 3. **Margin**

### 🔹 Explanation
Creates space **outside** the border of an element.

- Can be set for each side:
  - `margin-top`, `margin-right`, `margin-bottom`, `margin-left`
- Shorthand syntax:
  - `margin: 10px 15px 20px 25px;` → top right bottom left
  - `margin: 10px 20px;` → top/bottom and left/right
- Accepts `auto` for horizontal centering (`margin: 0 auto;`)

### 🔹 Example
```html
<div class="margin-box">Hello</div>
```

```css
.margin-box {
  margin: 20px;
  background-color: lightgreen;
}
```

---

## 4. **Border**

### 🔹 Explanation
The border wraps around the padding and content.

- Syntax: `border: [width] [style] [color];`
- Styles: `solid`, `dashed`, `dotted`, `double`, `none`, etc.
- Can customize each side:
  - `border-top`, `border-right`, `border-bottom`, `border-left`

### 🔹 Example
```html
<div class="border-box">Hello</div>
```

```css
.border-box {
  border: 2px dashed red;
  padding: 10px;
}
```

---

Let me know if you'd like me to make a downloadable PDF of this or add diagrams too?