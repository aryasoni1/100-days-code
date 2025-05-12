Here's your Markdown-formatted note for **Component-Based Styling**:

---

# 🧩 Component-Based Styling

Component-based styling allows each UI component to encapsulate its own styles, promoting modularity, maintainability, and reusability—especially in frameworks like **React**.

---

## 📦 1. CSS Modules

### ✅ Features:

* Locally scoped CSS by default
* Works with `.module.css` or `.module.scss` files
* Prevents class name conflicts

### 📁 File Naming:

```bash
Button.module.css
```

### 💡 Usage in React:

```jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.primary}>Click me</button>;
}
```

### 📌 Pros:

* Simple and fast
* Static typing with TypeScript
* Native browser support

---

## 🎨 2. Styled Components

### ✅ Features:

* Utilizes tagged template literals
* Write actual CSS in JS files
* Automatically scopes styles

### 💡 Install:

```bash
npm install styled-components
```

### 💡 Usage:

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background: blue;
  color: white;
  padding: 10px;
`;

function App() {
  return <Button>Click me</Button>;
}
```

### 📌 Pros:

* Dynamic styling with props
* Built-in theming support
* SSR support

---

## 💥 3. Emotion

### ✅ Features:

* CSS-in-JS library like styled-components
* More flexibility, performance optimized
* Two APIs: `styled` and `css` prop

### 💡 Install:

```bash
npm install @emotion/react @emotion/styled
```

### 💡 Usage (styled):

```jsx
import styled from '@emotion/styled';

const Button = styled.button`
  background: green;
  color: white;
`;

function App() {
  return <Button>Go</Button>;
}
```

### 💡 Usage (css prop):

```jsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyle = css`
  background: red;
  color: white;
`;

function App() {
  return <button css={buttonStyle}>Submit</button>;
}
```

---

## ⚖️ Comparison

| Feature         | CSS Modules | Styled Components | Emotion |
| --------------- | ----------- | ----------------- | ------- |
| Scoped Styles   | ✅           | ✅                 | ✅       |
| Theming Support | ❌           | ✅                 | ✅       |
| Performance     | High        | Moderate          | High    |
| Learning Curve  | Low         | Medium            | Medium  |
| Dynamic Styling | ❌           | ✅                 | ✅       |
| SSR Ready       | ⚠️ Partial  | ✅                 | ✅       |

---

## 🧠 Best Practices

* Choose CSS Modules for simplicity and performance.
* Use Styled Components or Emotion for dynamic and theme-based applications.
* Keep components small and cohesive—styles should reflect behavior and intent.

---
