Here is your Markdown-formatted note for **Global vs Scoped CSS** in SPA apps like React, Vue, or Angular:

---

# 🌐 Global vs Scoped CSS in SPA Applications

Single Page Applications (SPAs) often deal with component-based architectures. Managing **CSS scope** becomes essential to prevent style collisions and ensure maintainability.

---

## 🌍 Global CSS

### 🔹 What is it?

* Styles are applied application-wide and can affect any element.
* Typically imported into the main entry file (e.g., `index.css` or `App.css`).

### 🔹 Usage:

```css
/* global.css */
body {
  margin: 0;
  font-family: sans-serif;
}

.button {
  background-color: blue;
}
```

```js
// App.jsx or main.js
import './global.css';
```

### 🔹 Pros:

* Easy to define base or utility styles (e.g., typography, resets).
* Simple to set up.

### 🔹 Cons:

* High risk of **style leakage** or overriding.
* Difficult to trace which styles affect which components.
* Not modular — changes in one place can break others.

---

## 🔒 Scoped CSS

### 🔹 What is it?

* Styles are confined to a specific component, preventing leakage.
* Encouraged in modern frameworks like React, Vue, Angular.

### 🛠 Options by Framework:

#### ✅ React:

* **CSS Modules**:

```css
/* Button.module.css */
.button {
  background-color: green;
}
```

```js
import styles from './Button.module.css';

function Button() {
  return <button className={styles.button}>Click</button>;
}
```

* **Styled Components / Emotion** (CSS-in-JS libraries)

```js
import styled from 'styled-components';

const Button = styled.button`
  background-color: red;
`;

function App() {
  return <Button>Click</Button>;
}
```

#### ✅ Vue:

```vue
<style scoped>
.button {
  color: white;
}
</style>
```

#### ✅ Angular:

* Styles declared in `component.ts` files are automatically scoped.

---

## 📊 Comparison Table

| Feature           | Global CSS              | Scoped CSS (Modules/CSS-in-JS) |
| ----------------- | ----------------------- | ------------------------------ |
| Scope             | Global (all components) | Component-local                |
| Risk of Conflicts | High                    | Low                            |
| Maintainability   | Poor (in large apps)    | Good                           |
| Reusability       | Moderate                | High (with modular design)     |
| Setup Complexity  | Low                     | Moderate                       |

---

## ✅ Best Practices

* Use global CSS only for resets, fonts, and layout base styles.
* Prefer scoped CSS for component styling in SPAs.
* Use naming conventions (BEM) or CSS Modules to avoid conflicts.
* For larger apps, consider adopting a CSS-in-JS solution or Tailwind CSS.

---

Proper CSS scope management is key to building scalable and maintainable single-page applications.

---
