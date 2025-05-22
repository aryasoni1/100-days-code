Here’s your beginner-friendly Markdown note on **Project Setup** in **Next.js**, following your preferred format:

---

# 🛠️ Project Setup in Next.js

---

## ⚙️ Create a New Next.js App

To create a new Next.js project with all the essentials:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

This command sets up everything: React, Next.js, TypeScript (optional), ESLint, and more — ready to go out of the box.

---

## 🗂️ Folder Structure Overview

```
my-app/
├── app/             # New app directory (optional, for advanced routing)
├── pages/           # Traditional routing (each file = route)
│   ├── index.js     # Route: /
│   └── about.js     # Route: /about
├── public/          # Static assets (images, icons, etc.)
├── components/      # Reusable React components
├── styles/          # Global and module-specific CSS
│   ├── globals.css
│   └── Home.module.css
├── next.config.js   # Custom Next.js config
└── package.json     # Project metadata and scripts
```

---

## 🔁 Key Folders Explained

| Folder        | Purpose                                                               |
| ------------- | --------------------------------------------------------------------- |
| `pages/`      | File-based routing (`index.js` → `/`, `about.js` → `/about`)          |
| `app/`        | New optional directory for advanced layouts and routing (Next.js 13+) |
| `public/`     | Public static files — served from root URL                            |
| `components/` | Store reusable UI pieces like buttons, navbars                        |
| `styles/`     | CSS files and modules for styling components                          |

---

## 🧩 Example: Add a Component

```js
// components/Greeting.js
export default function Greeting() {
  return <h2>Hello from a reusable component!</h2>;
}
```

```js
// pages/index.js
import Greeting from '../components/Greeting';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <Greeting />
    </div>
  );
}
```

---

## 📦 Custom Scripts (in `package.json`)

| Script          | Purpose                 |
| --------------- | ----------------------- |
| `npm run dev`   | Start dev server        |
| `npm run build` | Build for production    |
| `npm start`     | Start production server |

---

## ✅ Best Practices

* Use `pages/` if you're new or want simplicity.
* Use `app/` if you're using **Next.js 13+** and want **layout nesting** and **server components**.
* Organize components by **feature** or **type**.
* Keep global styles in `styles/globals.css`.

---

## 🧠 Summary

| Concept               | Description                            |
| --------------------- | -------------------------------------- |
| `npx create-next-app` | Bootstraps full Next.js project        |
| `pages/`              | Core routing system in Next.js         |
| `components/`         | Reusable UI elements                   |
| `public/`             | Static assets (images, favicons, etc.) |
| `styles/`             | CSS and CSS modules                    |

---

Ready for the next one? Drop your topic and I’ll format it like this!
