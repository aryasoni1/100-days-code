Here are your **Markdown (.md)** formatted notes on **Conditional Rendering in React**:

---

# ⚛️ Conditional Rendering in React

React allows rendering UI elements conditionally based on logic or state. This enables dynamic interfaces that react to user input, API data, or application state.

---

## 🔁 1. Using `if` Statements (Outside JSX)

Use traditional JavaScript `if` statements **before** the `return` statement to decide what to render.

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
```

* Simple and clear for rendering completely different JSX.

---

## ❓ 2. Ternary Operator (Inline)

The ternary operator `condition ? expr1 : expr2` is useful **inside JSX** when you want to render one of two elements.

```jsx
function UserStatus({ isOnline }) {
  return (
    <div>
      {isOnline ? <span>🟢 Online</span> : <span>🔴 Offline</span>}
    </div>
  );
}
```

* Good for quick alternations between two values.

---

## ✅ 3. Logical `&&` Operator

Render something **only if a condition is true**.

```jsx
function Notification({ hasNewMessage }) {
  return (
    <div>
      {hasNewMessage && <p>You have a new message!</p>}
    </div>
  );
}
```

* Short-circuits: if `hasNewMessage` is `false`, React skips rendering.

---

## 🔄 4. Conditional Block with Variables

Use a variable to store JSX content and return it conditionally.

```jsx
function AlertBox({ type }) {
  let message;
  if (type === 'error') {
    message = <p style={{ color: 'red' }}>An error occurred.</p>;
  } else if (type === 'warning') {
    message = <p style={{ color: 'orange' }}>This is a warning.</p>;
  } else {
    message = null;
  }

  return <div>{message}</div>;
}
```

---

## 📚 Summary Table

| Technique      | Use Case                                       |
| -------------- | ---------------------------------------------- |
| `if` statement | When rendering completely different components |
| Ternary        | Inline conditional rendering (if/else)         |
| `&&` operator  | Render something only if condition is true     |

---

Let me know if you'd like notes on `Lists & Keys` or `useEffect` next!
