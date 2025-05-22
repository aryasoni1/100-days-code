Here are your **Markdown (.md)** formatted notes on **Folder Structure in React**:

---

# 🗂️ Folder Structure in React

Organizing your React project with a clear folder structure improves scalability, readability, and collaboration.

---

## 🔹 1. Common Folder Structure

```
src/
├── assets/        # Images, fonts, etc.
├── components/    # Reusable UI components (buttons, inputs, modals)
├── pages/         # Route-based or view components (Home, About)
├── services/      # API calls and external service logic
├── hooks/         # Custom React hooks (useAuth, useFetch)
├── utils/         # Helper functions (formatters, validators)
├── context/       # React Context files (e.g., ThemeContext)
├── styles/        # Global styles, theme files, Tailwind config
├── App.jsx
└── main.jsx
```

---

## 🔹 2. Feature-Based / Domain-Based Structure

For large apps, group files by feature or domain rather than type.

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── AuthPage.jsx
│   │   └── authSlice.js
│   └── dashboard/
│       ├── DashboardPage.jsx
│       └── components/
├── shared/
│   ├── components/
│   ├── utils/
│   └── hooks/
```

---

## 🔹 3. When to Use Each

| Structure Type     | Best For                                                   |
| ------------------ | ---------------------------------------------------------- |
| **Flat structure** | Small projects                                             |
| **Type-based**     | Medium-size projects (group by `components/`, `services/`) |
| **Feature-based**  | Large-scale apps with many domains                         |

---

## 🔹 4. Tips

* Use index.js files to simplify imports.
* Keep components small and focused.
* Prefix files with the component name (e.g., `Button.styles.js`).

---

## 🔹 Example Import Paths

```js
// Good practice
import LoginForm from '@/features/auth/components/LoginForm';
import formatDate from '@/shared/utils/formatDate';
```

---

Let me know if you'd like a folder structure template or boilerplate!
