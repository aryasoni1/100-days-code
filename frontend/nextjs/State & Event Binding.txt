Here are the notes in `.md` format for **State & Event Binding**:

---

# 🔗 State & Event Binding

State and event binding refers to how HTML elements are connected to JavaScript logic in frontend frameworks, enabling **interactive UIs** through dynamic updates and event-driven actions.

---

## 🧠 What is State?

* Represents **dynamic data** in the UI (e.g., form inputs, toggles, counters).
* Stored and managed in JS frameworks like React, Vue, Angular.

---

## 🖱️ What is Event Binding?

* Connecting **DOM events** (e.g., `click`, `input`) to **JavaScript functions**.
* Enables interaction: click buttons, type in forms, etc.

---

## ⚛️ React Example

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

* `useState` manages state.
* `onClick` binds the event to an inline function.

---

## 🧱 Vue Example

```vue
<template>
  <button @click="increment">Count: {{ count }}</button>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>
```

* `data()` provides state.
* `@click` binds the click event to the `increment` method.

---

## 🅰️ Angular Example

```html
<button (click)="count = count + 1">Count: {{ count }}</button>
```

```ts
export class CounterComponent {
  count = 0;
}
```

* State is tracked in the component class.
* `(click)` is Angular’s event binding syntax.

---

## ⚙️ Vanilla JS with Data Attributes

```html
<button data-action="increment">Click Me</button>

<script>
document.querySelector('[data-action="increment"]')
  .addEventListener('click', () => alert('Clicked!'));
</script>
```

* `data-*` attributes can link HTML to JS functionality.

---

## 🧩 Best Practices

* Keep logic inside components.
* Debounce high-frequency events (`input`, `scroll`) if needed.
* Avoid anonymous functions in JSX/HTML when performance is critical.

---

Let me know if you’d like examples in other frameworks or in class-based components.
