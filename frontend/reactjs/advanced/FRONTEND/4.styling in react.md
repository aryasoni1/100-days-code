Here's your **Markdown (.md)** formatted notes on **Styling in React**:

---

# 🎨 Styling in React

React supports multiple ways to style components, from traditional CSS to utility-first frameworks and component-level styling libraries.

---

## 🧩 1. CSS Modules

* Locally scoped CSS for components.
* File extension: `Component.module.css`.

```css
/* Button.module.css */
.btn {
  background-color: blue;
  color: white;
}
```

```jsx
import styles from './Button.module.css';

function Button() {
  return <button className={styles.btn}>Click Me</button>;
}
```

✅ Pros:

* No class name conflicts.
* Easy to maintain.

---

## 💨 2. Tailwind CSS

* Utility-first CSS framework.
* Use class names directly in JSX.

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```jsx
function Card() {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">Card Title</h2>
    </div>
  );
}
```

✅ Pros:

* Fast prototyping.
* Consistent design system.

---

## 💅 3. Styled-components

* CSS-in-JS library.
* Write actual CSS inside JavaScript.

```bash
npm install styled-components
```

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background: #6200ee;
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

function App() {
  return <Button>Styled Button</Button>;
}
```

✅ Pros:

* Dynamic styling via props.
* Automatic scoping.

---

## 🧱 4. Component Libraries

### 🔷 Material UI (MUI)

```bash
npm install @mui/material @emotion/react @emotion/styled
```

```jsx
import Button from '@mui/material/Button';

function App() {
  return <Button variant="contained">MUI Button</Button>;
}
```

### 🅰 Ant Design

```bash
npm install antd
```

```jsx
import { Button } from 'antd';

function App() {
  return <Button type="primary">AntD Button</Button>;
}
```

✅ Pros:

* Pre-built components.
* Theming support.
* Speeds up development.

---

## 📌 Summary Table

| Method             | Scope       | Key Feature                 |
| ------------------ | ----------- | --------------------------- |
| CSS Modules        | Local       | Isolated class names        |
| Tailwind CSS       | Global      | Utility-first, fast styling |
| styled-components  | Local (JSX) | Dynamic CSS in JS           |
| Material UI / AntD | Global      | Pre-designed UI components  |

---

Let me know if you want comparison examples between these or setup guides!
