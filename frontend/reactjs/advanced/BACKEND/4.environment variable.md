Here are your **Markdown (.md)** formatted notes on **Environment Variables in React**:

---

# 🌱 Environment Variables in React

Environment variables help manage different configurations (like API endpoints, keys) across development, staging, and production environments without hardcoding them.

---

## 🔹 1. Creating Environment Variables

### 🛠️ File Naming

* Files must start with `.env`
* Examples:

  * `.env` – base
  * `.env.development`
  * `.env.production`
  * `.env.local` – personal overrides (not committed)

---

## 🔹 2. Naming Conventions

| Build Tool                 | Prefix Required |
| -------------------------- | --------------- |
| **Vite**                   | `VITE_`         |
| **Create React App (CRA)** | `REACT_APP_`    |

Variables **must** start with the appropriate prefix to be available in the app.

---

## 🔹 3. Accessing Variables

### ✅ In React code:

```js
// CRA
console.log(process.env.REACT_APP_API_URL);

// Vite
console.log(import.meta.env.VITE_API_URL);
```

---

## 🔹 4. Example `.env` Files

### `.env` (CRA)

```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=production
```

### `.env` (Vite)

```env
VITE_API_URL=https://api.example.com
VITE_FIREBASE_KEY=your_firebase_key
```

---

## 🔹 5. Notes

* Variables are injected at **build time**, not runtime.
* Avoid storing **secrets or sensitive data** in `.env` files for frontend apps.
* Restart the dev server after editing `.env` files.

---

## 🔐 Best Practices

* Use `.env.local` for local overrides (never commit).
* Use `.gitignore` to exclude `.env.local` and sensitive files.
* Don't store secrets like API keys or tokens in client-side `.env` files.

---

Let me know if you want a template or example project using `.env` variables!
