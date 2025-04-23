```markdown
# Passing Props to a Component — Key Notes

## What Are Props?
- **Props** are the “arguments” passed from a parent to a child component via JSX attributes.
- Can be any JavaScript value: strings, numbers, objects, arrays, functions, even JSX.

## Passing Props
```jsx
<Avatar
  person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
  size={100}
/>
```
- Use `{}` around any JS expression or value.
- Double curly braces `{{ … }}` indicate an object literal inside JSX.

## Reading Props
- Components receive a single `props` object.
- Destructure for convenience:
  ```js
  function Avatar({ person, size }) {
    // use person, size directly
  }
  ```
- Equivalent to:
  ```js
  function Avatar(props) {
    const person = props.person;
    const size   = props.size;
  }
  ```

## Default Prop Values
- Provide defaults via destructuring:
  ```js
  function Avatar({ person, size = 100 }) { … }
  ```
- Default applies when prop is `undefined` or omitted (but **not** for `null` or `0`).

## Forwarding Props (JSX Spread)
```js
function Profile(props) {
  return <Avatar {...props} />;
}
```
- `…props` forwards all received props to the child.
- Use sparingly—overuse can hide which props are actually needed.

## The `children` Prop
- Nest JSX inside a component:
  ```jsx
  <Card>
    <Avatar … />
    <p>Some text</p>
  </Card>
  ```
- The parent (`Card`) receives a `children` prop containing that nested JSX.
- Ideal for wrappers and layout components.

## Props Over Time
- Props can change on re-renders (e.g. new data, user interactions).
- Components get a **new** props object each render.
- **Immutable**: a component should never modify its own props.
- To update data inside a component, use **state** or have the parent supply new props.

## Recap
- Pass data & callbacks via JSX attributes.
- Destructure or read from `props`.
- Use default values for missing props.
- Spread syntax can forward props.
- `children` enables flexible composition.
- Props are read-only snapshots of parent data at each render.
```