Here's your Markdown-formatted note for **Dark Mode & Theme Switching** using CSS variables and JavaScript toggles:

---

# 🌙 Dark Mode & Theme Switching

Implementing **dark mode** and multiple **theme options** improves user experience and accessibility. The modern approach leverages **CSS custom properties (variables)** and **JavaScript toggles**.

---

## 🎨 Using CSS Variables for Themes

### ✅ Define Theme Variables

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

[data-theme="dark"] {
  --bg-color: #121212;
  --text-color: #f5f5f5;
}
```

### ✅ Apply Variables in CSS

```css
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

---

## 🧠 Theme Toggle with JavaScript

### ✅ Basic Toggle

```html
<button id="themeToggle">Toggle Theme</button>
```

```js
const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
  document.documentElement.dataset.theme =
    document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
});
```

---

## 💾 Persisting User Preference (Optional)

### ✅ Use `localStorage`

```js
// Load theme on startup
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

// Save theme on toggle
toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  localStorage.setItem('theme', next);
});
```

---

## ⚙️ Optional: Detect System Preference

### ✅ Use Media Query

```js
if (!localStorage.getItem('theme')) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light';
}
```

---

## ✅ Summary of Benefits

* 🔁 Easy to toggle themes dynamically.
* ♻️ Reusable CSS variables reduce code duplication.
* 💾 Persistent preference improves UX.
* 🎯 Responsive to OS-level preferences.

---

This method provides a lightweight, scalable way to support dark mode and other themes in modern web apps.

---
