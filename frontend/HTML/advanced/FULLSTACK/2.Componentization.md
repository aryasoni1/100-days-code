Here are the notes in `.md` format for **Componentization**:

---

# 🧩 Componentization

Componentization refers to the practice of breaking a UI into **independent**, **reusable pieces**, each responsible for its own structure, style, and behavior.

---

## 🚀 Why Componentize?

* **Reusability** – Define once, reuse across views.
* **Maintainability** – Easier to debug, test, and update.
* **Separation of concerns** – Keeps logic, template, and styling scoped and organized.

---

## ⚛️ React (JSX)

### Define a Functional Component:

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}
```

### Use in a Parent Component:

```jsx
<Button label="Click Me" />
<Button label="Submit" />
```

---

## 🧱 Vue (SFC - Single File Components)

### `Button.vue`:

```vue
<template>
  <button>{{ label }}</button>
</template>

<script>
export default {
  props: ['label']
}
</script>
```

### Use in Another Component:

```vue
<Button label="Save" />
<Button label="Cancel" />
```

---

## 🧩 Component Design Tips

* **Keep components focused** (do one thing well).
* **Use props** to pass data and **emit events** for communication.
* **Avoid repetition** by extracting duplicate UI as new components.
* Name components semantically (`UserCard`, `Modal`, `Navbar`).

---

## 🛠 Common Component Types

| Type           | Purpose                           |
| -------------- | --------------------------------- |
| Presentational | Display UI only, stateless        |
| Container      | Manage state, pass props down     |
| Layout         | Define page structure (e.g. grid) |
| Utility        | Provide helper UI (e.g. Spinner)  |

---

## 🧪 Benefits

* Modular architecture
* Faster development via reuse
* Better scalability in large applications

---

Let me know if you want examples in Angular, Svelte, or using a specific component library.
