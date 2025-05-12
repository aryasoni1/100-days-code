Here are your **Markdown (.md)** formatted notes on **Authentication in React**:

---

# 🔐 Authentication in React

Authentication ensures that users are who they claim to be. Most modern apps use token-based authentication systems, especially **JWT (JSON Web Tokens)**.

---

## 🔹 1. Token-Based Authentication (JWT)

### 🔸 What is JWT?

* JSON Web Token (JWT) is a compact, self-contained token for securely transmitting information between parties.
* Commonly used for authentication and information exchange.

### 🔸 Typical Auth Flow

1. User logs in with credentials.
2. Server verifies credentials and returns a JWT.
3. Client stores the token (in memory, `localStorage`, or cookies).
4. Token is sent with each request to authenticate the user.

```js
// Example login request
fetch('/api/login', {
  method: 'POST',
  body: JSON.stringify({ username, password }),
  headers: { 'Content-Type': 'application/json' }
})
.then(res => res.json())
.then(data => localStorage.setItem('token', data.token));
```

---

## 🔹 2. Role-Based Access Control (RBAC)

### 🔸 Concept

* Users are assigned roles (e.g., admin, user).
* UI and access to routes are conditionally rendered based on roles.

```jsx
const userRole = 'admin';

return (
  <div>
    {userRole === 'admin' && <AdminPanel />}
    <UserDashboard />
  </div>
);
```

---

## 🔹 3. Secure Token Storage

### 🔸 `localStorage`

* Pros: Easy to implement.
* Cons: Vulnerable to **XSS** attacks.

```js
localStorage.setItem('token', jwt);
```

### 🔸 `httpOnly` Cookies

* Set by the server, inaccessible to JavaScript → safer.
* Protected against XSS.

```http
Set-Cookie: token=jwt; HttpOnly; Secure; SameSite=Strict
```

* Use for more secure applications like banking, admin dashboards.

---

## 🔹 4. Sending Auth Tokens

### With Fetch:

```js
const token = localStorage.getItem('token');

fetch('/api/secure-data', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

---

## 🛡️ Best Practices

* Always **validate tokens** on the backend.
* Use **`httpOnly` cookies** for highly sensitive data.
* Implement **token refresh logic** (access + refresh tokens).
* Sanitize inputs to prevent **XSS and CSRF** attacks.
* Use **HTTPS** in production.

---

Let me know if you'd like a sample React auth app or protected route implementation!
