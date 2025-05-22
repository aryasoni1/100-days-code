Here are your **Markdown (.md)** formatted notes on **Selectors & Properties** in CSS:

---

# 📝 Selectors & Properties

CSS selectors allow you to target and style HTML elements, while properties define how those elements should be styled. Below are key CSS selectors and properties used for styling elements.

---

## 🔹 **Element Selectors**

Element selectors target HTML tags directly.

* **Syntax**:

  ```css
  element {
      property: value;
  }
  ```

* **Example**:

  ```css
  p {
      color: blue;
  }
  ```

* **Description**:

  * Targets all `<p>` tags in the document and sets their text color to blue.

---

## 🔹 **Class Selectors**

Class selectors target elements with a specific class attribute.

* **Syntax**:

  ```css
  .class-name {
      property: value;
  }
  ```

* **Example**:

  ```css
  .container {
      padding: 20px;
  }
  ```

* **Description**:

  * Targets all elements with the class `container` and applies padding.

---

## 🔹 **ID Selectors**

ID selectors target an element with a specific `id` attribute. IDs must be unique within a page.

* **Syntax**:

  ```css
  #id-name {
      property: value;
  }
  ```

* **Example**:

  ```css
  #header {
      background-color: #333;
      color: white;
  }
  ```

* **Description**:

  * Targets the element with the `id="header"` and applies a background color and text color.

---

## 🔹 **Attribute Selectors**

Attribute selectors target elements based on the presence or value of an attribute.

* **Syntax**:

  ```css
  [attribute] {
      property: value;
  }
  [attribute="value"] {
      property: value;
  }
  ```

* **Example**:

  ```css
  input[type="text"] {
      border: 1px solid gray;
  }
  ```

* **Description**:

  * Targets all `<input>` elements with the `type="text"` attribute and applies a border.

---

## 🔹 **Pseudo-Classes**

Pseudo-classes are used to define the special state of an element (e.g., when a user interacts with it).

* **Common Pseudo-Classes**:

  * `:hover`: Targets an element when the mouse pointer is over it.
  * `:active`: Targets an element when it is being activated (e.g., clicked).
  * `:nth-child()`: Selects elements based on their position in a parent.

* **Syntax**:

  ```css
  element:pseudo-class {
      property: value;
  }
  ```

* **Example**:

  ```css
  a:hover {
      color: red;
  }
  ```

* **Description**:

  * Changes the color of links to red when hovered over.

---

## 🔹 **`nth-child()` Pseudo-Class**

The `:nth-child()` pseudo-class targets an element based on its position in a parent element’s list of children.

* **Syntax**:

  ```css
  element:nth-child(n) {
      property: value;
  }
  ```

* **Example**:

  ```css
  li:nth-child(odd) {
      background-color: #f2f2f2;
  }
  ```

* **Description**:

  * Applies a background color to all odd-numbered `<li>` elements.

---

## 🔹 **Pseudo-Element Selectors**

Pseudo-elements target specific parts of an element, such as the first letter or line of text.

* **Common Pseudo-Elements**:

  * `::before`: Inserts content before an element.
  * `::after`: Inserts content after an element.
  * `::first-letter`: Targets the first letter of an element.
  * `::first-line`: Targets the first line of an element.

* **Syntax**:

  ```css
  element::pseudo-element {
      property: value;
  }
  ```

* **Example**:

  ```css
  p::first-letter {
      font-size: 2em;
      font-weight: bold;
  }
  ```

* **Description**:

  * Applies a larger font size and bold weight to the first letter of each paragraph.

---

## 🔹 **Universal Selector (`*`)**

The universal selector `*` targets all elements in the document.

* **Syntax**:

  ```css
  * {
      property: value;
  }
  ```

* **Example**:

  ```css
  * {
      margin: 0;
      padding: 0;
  }
  ```

* **Description**:

  * Resets the margin and padding for all elements to zero.

---

## 🔹 **Group Selectors**

Multiple selectors can be grouped together to apply the same styles to different elements.

* **Syntax**:

  ```css
  selector1, selector2, selector3 {
      property: value;
  }
  ```

* **Example**:

  ```css
  h1, h2, h3 {
      font-family: Arial, sans-serif;
  }
  ```

* **Description**:

  * Applies the Arial font-family to all `<h1>`, `<h2>`, and `<h3>` elements.

---

## 🔹 **CSS Properties**

Properties define the style of elements. Here are a few common ones:

* **Text-related**:

  * `color`: Sets the text color.
  * `font-family`: Specifies the font of text.
  * `font-size`: Sets the size of text.
  * `line-height`: Defines the line spacing.

* **Box Model**:

  * `width`: Sets the width of an element.
  * `height`: Sets the height of an element.
  * `padding`: Sets the space inside the element between the content and the border.
  * `margin`: Sets the space outside the element.
  * `border`: Sets the border around an element.

* **Positioning**:

  * `position`: Defines how an element is positioned (`static`, `relative`, `absolute`, `fixed`, `sticky`).
  * `top`, `right`, `bottom`, `left`: Specifies the position of an element.

* **Background**:

  * `background-color`: Sets the background color of an element.
  * `background-image`: Defines an image as the background.

---

## 🔹 **Conclusion**

CSS selectors are the foundation of styling in web development, allowing you to select and style elements based on their tag, class, ID, attributes, or state. Mastering these selectors and properties will help you create well-structured and styled webpages.

---

This concludes the **Selectors & Properties** section!
