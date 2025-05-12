Here are your **Markdown (.md)** formatted notes on **React State Management**:

---

# 🧠 React State Management

Managing state in React helps control dynamic data and how components behave. React offers several built-in tools like `useState`, `useReducer`, lifting state up, and the **Context API** for global state.

---

## 🔹 `useState` – Basic State Hook

* Used for local state in functional components.
* Returns an array with the current state and a setter function.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## 🔸 `useReducer` – Complex State Logic

* Ideal for managing more complex state (e.g., multiple related values or state transitions).
* Accepts a reducer function and an initial state.

```jsx
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
```

---

## 🔼 Lifting State Up

* Move shared state to the nearest common ancestor of components that need it.
* Pass the state and setters as props.

```jsx
function Parent() {
  const [text, setText] = useState('');

  return (
    <>
      <Input value={text} onChange={setText} />
      <Display value={text} />
    </>
  );
}
```

---

## 🌍 Context API – Global State Management

* Avoids prop drilling by sharing state globally.
* Useful for theme, auth, user data, etc.

### Step 1: Create Context

```jsx
import { createContext } from 'react';

export const ThemeContext = createContext();
```

### Step 2: Provide Context

```jsx
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
}
```

### Step 3: Consume Context

```jsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Button() {
  const { theme } = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}
```

---

## 📚 Summary

| Concept          | Use Case                            |
| ---------------- | ----------------------------------- |
| `useState`       | Local, simple state                 |
| `useReducer`     | Complex state logic, state machines |
| Lifting State Up | Share state across components       |
| Context API      | Global state without prop drilling  |

---

Let me know if you’d like notes on **React Hooks (`useEffect`, `useMemo`, etc.)**, **Form handling**, or **Redux** next!
