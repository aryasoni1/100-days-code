Here are your **Markdown (.md)** formatted notes on **State & Events in React**:

---

# ⚛️ State & Events in React

## 📦 `useState` – Managing Component State

* **State** in React represents mutable data maintained by a component.
* `useState` is a **React Hook** used to declare and update state in **functional components**.

### ✅ Syntax

```jsx
const [state, setState] = useState(initialValue);
```

* `state`: Current state value
* `setState`: Function to update the state
* `initialValue`: Starting value (can be any data type)

### 💡 Example

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 🔁 Updating State

* State updates **do not merge automatically for arrays/objects** — handle immutably.
* React batches updates and re-renders the component.

### 🔄 Functional Update Form (recommended when new state depends on previous)

```jsx
setCount(prevCount => prevCount + 1);
```

---

## 🖱️ Handling Events in React

* React handles events using **camelCase syntax** and **JSX-style event handlers**.

### ✅ Example

```jsx
function Button() {
  const handleClick = () => {
    alert("Button was clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### 🧠 Notes:

* Event handlers receive a **synthetic event** object (React's wrapper for browser events).
* Common events: `onClick`, `onChange`, `onSubmit`, `onKeyDown`, `onMouseEnter`, etc.

---

## 👤 Handling User Input

Use controlled components to capture user input.

### 💡 Text Input Example

```jsx
function NameInput() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Your name is: {name}</p>
    </div>
  );
}
```

* `value={name}`: makes it a controlled component
* `onChange`: updates state with new input

---

## ✍️ Form Submission Example

```jsx
function LoginForm() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log(`Username: ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## 📚 Summary

| Concept              | Description                              |
| -------------------- | ---------------------------------------- |
| `useState`           | Hook to manage local component state     |
| `setState`           | Function to update the state             |
| Controlled Input     | Input field whose value is tied to state |
| Event Handling       | Use camelCase handlers like `onClick`    |
| `event.target.value` | Used to read input from form fields      |

---

Let me know if you'd like to cover `useEffect`, form validation, or event bubbling next!
