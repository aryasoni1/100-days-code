```markdown
# Keeping Components Pure — Key Notes

## Purity in Components
- **Pure function** characteristics:  
  1. **No external side effects**: doesn’t modify variables or objects created before it runs  
  2. **Deterministic**: same inputs → same output every time  
- React treats each component as a pure function: given the same props/state/context, it must return identical JSX.

## Why Impurity Causes Bugs
- Modifying external variables during render leads to unpredictable outputs and hard‑to‑trace errors.  
- Example of impure component:
  ```js
  let guest = 0;
  function Cup() {
    guest = guest + 1;           // side effect!
    return <h2>Guest #{guest}</h2>;
  }
  ```
- Impure components break under React’s double‑render in StrictMode and violate “same inputs, same output.”

## Making Components Pure
- **Pass all dynamic data via props**; never read/write external variables during render.
  ```js
  function Cup({ guest }) {
    return <h2>Guest #{guest}</h2>;
  }
  ```
- Each render should only “think for itself,” independent of other components’ render order.

## Detecting Impurity with StrictMode
- `<React.StrictMode>` in development invokes each component twice to catch side effects in render.  
- Pure components handle double‑calls safely; impure ones reveal hidden mutations.

## Local Mutation vs. External Mutation
- **Allowed**: mutate data structures you create inside the component’s render.
  ```js
  function TeaGathering() {
    let cups = [];
    for (let i = 1; i <= 12; i++) {
      cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
  }
  ```
- **Forbidden**: mutate variables or objects declared outside the component.

## Where to Perform Side Effects
- **Event handlers** (e.g. `onClick`): run after render, safe to cause side effects.  
- **`useEffect` hook**: schedule side effects after render when no suitable event handler exists.  
- **Never** perform side effects directly in the component body during render.

## Benefits of Purity
- Enables server‑side rendering and predictable caching.  
- Allows React to interrupt and restart renders safely.  
- Underpins performance optimizations and new React features.

## Recap
1. **Mind your own business**: don’t mutate external state during render.  
2. **Same inputs, same output**: components must be deterministic.  
3. Use **props, state, context** as read‑only inputs.  
4. Perform state changes via **setState/useState**, event handlers, or **useEffect**.  
5. Leverage **StrictMode** to catch purity violations early.  
```