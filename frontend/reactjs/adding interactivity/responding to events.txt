```markdown
# Responding to Events — Key Notes

## Adding Event Handlers
- Define a handler function inside your component:
  ```jsx
  function handleClick() {
    alert('You clicked me!');
  }
  ```
- Attach it via a JSX prop on the DOM element:
  ```jsx
  <button onClick={handleClick}>Click me</button>
  ```
- Naming convention:
  - Handler functions: `handle<EventName>` (e.g. `handleClick`)
  - DOM props: `on<EventName>` (e.g. `onClick`)

## Inline Handlers
- You can define handlers inline:
  ```jsx
  <button onClick={() => alert('Clicked!')}>Click me</button>
  ```
- **Pitfall**: always pass a function, don’t call it immediately:
  - ✅ `onClick={handleClick}`
  - ❌ `onClick={handleClick()}`

## Accessing Props in Handlers
- Handlers inside a component can reference its props:
  ```jsx
  function AlertButton({ message }) {
    return <button onClick={() => alert(message)}>Alert</button>;
  }
  ```

## Passing Handlers from Parent
- Parent supplies behavior via props:
  ```jsx
  <Button onClick={playMovie}>Play</Button>
  ```
- Child forwards that prop to the DOM:
  ```jsx
  function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
  }
  ```

## Custom Handler Prop Names
- Your own components can use any `onXxx` name:
  ```jsx
  <Button onSmash={handleSmash}>Smash</Button>
  ```

## Event Propagation (Bubbling)
- Events bubble up from target to ancestors:
  1. Child’s handler runs  
  2. Parent’s handler runs  
- To stop bubbling, call:
  ```js
  e.stopPropagation();
  ```

## Capture Phase
- Use `onClickCapture` to catch events on the way down:
  ```jsx
  <div onClickCapture={logClick}>…</div>
  ```

## Alternative to Propagation
- Child handler can incorporate parent callback explicitly:
  ```jsx
  <button onClick={e => {
    e.stopPropagation();
    onClick();
  }}>Click</button>
  ```

## Preventing Default Behavior
- Block browser defaults (e.g. form submit) with:
  ```js
  e.preventDefault();
  ```

## Side Effects in Handlers
- Event handlers are the right place for side effects (state updates, network calls).  
- **Render functions** must remain pure; handlers may mutate state via hooks or callbacks.

```