Here’s your clear and beginner-friendly Markdown note on **Pages & Layouts** in **Next.js**, following your usual format:

---

# 🗂️ Pages & Layouts in Next.js

---

## 📄 What Are Layouts?

**Layouts** are reusable UI structures (like headers, footers, sidebars) that wrap around page content.

They help you:

* Avoid code repetition
* Apply consistent design across pages
* Nest layouts for complex apps

---

## 🧩 Reusable Layouts (Classic – `pages/` Directory)

You can create a reusable layout component and wrap pages with it manually.

### 📁 Example Layout

```js
// components/Layout.js
export default function Layout({ children }) {
  return (
    <div>
      <header>🌐 My Site</header>
      <main>{children}</main>
      <footer>© 2025</footer>
    </div>
  );
}
```

### 📄 Use in a Page

```js
// pages/about.js
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <h1>About Us</h1>
    </Layout>
  );
}
```

✅ Works great for smaller projects or `pages/`-based apps.

---

## 🧱 Layouts in `app/` Directory (Next.js 13+)

In the new **`app/` directory**, layouts are **automatic** and **hierarchical**.

### 🧩 Basic Structure

```
app/
├── layout.js        → Root layout (wraps everything)
├── page.js          → Home route
├── about/
│   ├── layout.js    → About section layout
│   └── page.js      → About page
```

---

### 📄 `app/layout.js` (Root Layout)

```js
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>🌐 My App</header>
        {children}
        <footer>© 2025</footer>
      </body>
    </html>
  );
}
```

✅ This layout wraps all pages unless overridden by a nested layout.

---

### 🪜 Nested Layout Example

```
app/
├── dashboard/
│   ├── layout.js    → Wraps all dashboard pages
│   ├── page.js      → /dashboard
│   └── settings/
│       └── page.js  → /dashboard/settings
```

```js
// app/dashboard/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav>📊 Dashboard Menu</nav>
      <section>{children}</section>
    </div>
  );
}
```

---

## ✅ Best Practices

* Keep layout components **clean and dumb** (UI only).
* Use `app/layout.js` for global wrappers (fonts, themes, navbars).
* Use nested layouts to scope UI changes to certain sections.

---

## 🧠 Summary

| Feature        | `pages/` Directory    | `app/` Directory (Next.js 13+) |
| -------------- | --------------------- | ------------------------------ |
| Layout Support | Manual via components | Automatic via `layout.js`      |
| Reusability    | ✅ Yes                 | ✅ Yes                          |
| Nested Layouts | ❌ Manual nesting only | ✅ Built-in & automatic         |
| Best Use Case  | Simple sites          | Scalable apps with nested UIs  |

---

Let me know the next topic to turn into notes — I’m ready!
