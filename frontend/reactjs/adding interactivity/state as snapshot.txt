Here are the notes in **`.md` (Markdown)** format based on the "State as a Snapshot" concept in React:

---

```markdown
# 📸 React State as a Snapshot

## 🧠 Concept Overview
- In React, **state behaves like a snapshot**, not like a regular JS variable.
- Setting state **does not immediately change the value** in the current render.
- Instead, it **triggers a re-render**, and the new state value will be visible in the next render.

---

## ⚡ Setting State Triggers Renders
- Updating state via `setState` or the setter from `useState`:
  - Requests a new render.
  - React re-renders the component with updated state.
- Example:
  ```js
  const [isSent, setIsSent] = useState(false);
  setIsSent(true); // triggers re-render with isSent = true
  ```

---

## 🧾 Rendering = Taking a UI Snapshot
- A render in React is a call to your component function.
- JSX returned is **a snapshot of the UI** at that specific time.
- Event handlers and props in JSX are calculated using the state **from that render**.

---

## 📦 State Lives Outside the Component
- State is managed by React (not your function), like on a **“shelf” outside** the component.
- React **passes the current snapshot** of the state into your component function.

---

## 🔁 Multiple setState Calls in One Handler
```js
setNumber(number + 1);
setNumber(number + 1);
setNumber(number + 1);
```
- These all use the **same value of `number` from the current render**.
- If `number = 0`, all three lines are effectively:
  ```js
  setNumber(1);
  setNumber(1);
  setNumber(1);
  ```
- Final state = `1`, not `3`.

---

## ⏱️ State in Asynchronous Functions
- Even if async logic is involved (e.g., `setTimeout`), state behaves as a snapshot:
  ```js
  setNumber(0 + 5);
  setTimeout(() => {
    alert(number); // still alerts 0
  }, 3000);
  ```

---

## 📤 Form Example: Fixed State at Time of Submit
- Example:
  ```js
  setTimeout(() => {
    alert(`You said ${message} to ${to}`);
  }, 5000);
  ```
- Even if you change `to` or `message` in the UI before 5s:
  - The alert will show values from the **moment the form was submitted**.
  - React ensures event handlers access **consistent state** from the render they were created in.

---

## ✅ Recap
- `setState()` requests a new render but does not change state in the current one.
- React gives your component a **snapshot of state** per render.
- State values are **fixed for each render** and don’t change during that render.
- Event handlers hold the **snapshot from the render** when they were created.
- Use state updater functions (`setState(prev => ...)`) to work with latest state dynamically.

```

---

Would you like these saved to a `.md` file for download?