Here's a beginner-friendly, Markdown-formatted note on **State Management** in **React/Next.js**:

---

# 🧠 State Management in React & Next.js

---

## 📦 What is State?

**State** is how a component remembers information between renders — like user input, theme, or API data.

---

## 🧍 Local State

Managed **inside a single component**.

### ✅ `useState`

```js
const [count, setCount] = useState(0);
```

* Best for simple values: inputs, toggles, counters

---

### ✅ `useReducer`

For more **complex or grouped state logic**.

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    default: return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

---

## 🌍 Global State

Shared **across multiple components/pages**.

---

### 🧰 Context API (Built-in)

Good for **lightweight, small apps** (e.g. themes, auth status).

```js
const AppContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
```

Then consume with:

```js
const { user } = useContext(AppContext);
```

---

### ⚛️ Zustand (Minimal, Fast)

```bash
npm install zustand
```

```js
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const { count, increment } = useStore();
```

* **Better performance** than Context
* **No boilerplate** (unlike Redux)
* Supports **persistence**, **middleware**

---

### 🧠 Redux (Full-scale state management)

```bash
npm install @reduxjs/toolkit react-redux
```

```js
// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => { state.count += 1 },
  },
});

export const { increment } = counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
```

* Add `<Provider store={store}>` to your `_app.js`
* Access with `useSelector` and `useDispatch`

---

## 🧠 Summary

| Method        | Use Case                          | Pros                        |
| ------------- | --------------------------------- | --------------------------- |
| `useState`    | Simple local state                | Simple, built-in            |
| `useReducer`  | Complex local logic               | Clean logic separation      |
| Context API   | Small global state (theme, auth)  | Native, easy                |
| Zustand       | Scalable global state             | Fast, minimal, dev-friendly |
| Redux Toolkit | Large apps, dev tools, middleware | Powerful, scalable, verbose |

---

## ✅ Best Practices

* **Local first**: Start with `useState`, upgrade only if needed
* Use **Zustand or Redux** for large apps
* Avoid **prop drilling** by using global state smartly
* Organize state-related logic in separate files (`store/` or `hooks/`)

---

Let me know if you want examples comparing all of them side-by-side in code!
