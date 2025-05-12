Here are your **Markdown (.md)** formatted notes on **JSX and Components in React**:

---

# ⚛️ JSX and Components

## **What is JSX?**

* **JSX (JavaScript XML)** is a syntax extension for JavaScript used in React to describe the UI.
* It allows you to write HTML-like code in your JavaScript files.
* JSX makes it easier to visualize the UI structure and improves readability.

### ✅ Example:

```jsx
const element = <h1>Hello, World!</h1>;
```

> JSX is compiled into `React.createElement()` calls behind the scenes.

---

## **React Components**

React components are the building blocks of a React application UI.

* **Types of Components**:

  * **Functional Components**
  * **Class Components**

---

## ✅ Functional Components

* Introduced as simple functions that return JSX.
* With React Hooks (since v16.8), functional components can manage state and side-effects.

### 💡 Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Or using **arrow function**:

```jsx
const Welcome = ({ name }) => <h1>Hello, {name}</h1>;
```

### 🧠 Features:

* Simpler and easier to write.
* Can use **Hooks** (`useState`, `useEffect`, etc.).
* Preferred in modern React development.

---

## ✅ Class Components

* ES6 classes that extend `React.Component`.
* Require a `render()` method to return JSX.

### 💡 Example:

```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### 🧠 Features:

* Used before Hooks were introduced.
* Can hold local state and lifecycle methods (`componentDidMount`, etc.).
* Still valid, but less commonly used now.

---

## 🧩 Props (Properties)

* **Props** are short for “properties”.
* Passed to components like arguments to functions.
* **Read-only** — cannot be modified by the child component.

### 💡 Example:

```jsx
function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}

<Greeting name="Alice" />
```

> `props.name` will be "Alice"

---

## 🔗 Component Composition

* Components can be nested to build complex UIs.
* A parent component can render multiple child components.

### 💡 Example:

```jsx
function Header() {
  return <h1>My App</h1>;
}

function Footer() {
  return <footer>© 2025</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to my app!</p>
      <Footer />
    </div>
  );
}
```

### 🧠 Key Ideas:

* Promotes **reusability** and **separation of concerns**.
* Encourages **modular design**.
* Makes testing and maintenance easier.

---

## 📚 Summary

| Feature   | Functional Components      | Class Components                   |
| --------- | -------------------------- | ---------------------------------- |
| Syntax    | Function or Arrow Function | ES6 Class                          |
| State     | via Hooks (`useState`)     | `this.state`                       |
| Lifecycle | via Hooks (`useEffect`)    | `componentDidMount`, etc.          |
| Usage     | Preferred in modern React  | Legacy codebases or specific cases |

---

**Props** help in passing data between components, and **composition** is key to building scalable React UIs.

Let me know if you want examples with `useState`, `useEffect`, or want to explore hooks in detail!
