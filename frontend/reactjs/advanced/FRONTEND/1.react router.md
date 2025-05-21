Here are your **Markdown (.md)** formatted notes on **React Router (Routing)**:

---

# 🧭 React Router (Routing)

React Router is a library for routing in React applications. It enables navigation among views of various components, allows changing the browser URL, and keeps the UI in sync with the URL.

---

## 🚀 Setup

### Installation:

```bash
npm install react-router-dom
```

### Basic Setup:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 🧩 Nested Routes

Allows defining child routes inside parent routes.

### Example:

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="settings" element={<Settings />} />
  <Route path="profile" element={<Profile />} />
</Route>
```

Use `<Outlet />` in the `Dashboard` component to render nested routes:

```jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

---

## 🏷️ Route Params

Pass dynamic values through the URL.

### Example:

```jsx
<Route path="/user/:userId" element={<UserProfile />} />
```

Access params using the `useParams` hook:

```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  return <h1>User ID: {userId}</h1>;
}
```

---

## 🔁 Redirects

Use the `<Navigate />` component for redirection.

### Example:

```jsx
import { Navigate } from 'react-router-dom';

<Route path="/old-path" element={<Navigate to="/new-path" replace />} />
```

---

## 🔐 Protected Routes

Restrict access based on authentication.

### Example:

```jsx
function PrivateRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Usage
<Route path="/dashboard" element={
  <PrivateRoute isAuthenticated={isLoggedIn}>
    <Dashboard />
  </PrivateRoute>
} />
```

---

## 📚 Summary Table

| Feature          | Description                                    |
| ---------------- | ---------------------------------------------- |
| `BrowserRouter`  | Wraps the app to enable routing                |
| `Routes`/`Route` | Defines path-component mapping                 |
| `useParams()`    | Access dynamic route values                    |
| `Navigate`       | Used for programmatic or declarative redirects |
| `Outlet`         | Renders nested child components                |
| Protected Routes | Used to guard routes based on auth logic       |

---

Let me know if you want notes on **`useEffect`, Forms in React, or Context API** next!
