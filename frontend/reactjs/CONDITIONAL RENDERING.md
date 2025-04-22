```markdown
# Conditional Rendering — Key Notes

## 1. Return Different JSX with `if`/`else`
```js
function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}
```
- Use standard JavaScript control flow to choose which JSX to return.

## 2. Render Nothing with `null`
```js
if (isPacked) {
  return null; // renders nothing
}
```
- Returning `null` tells React to skip rendering this component.

## 3. Parent-Level Conditional Inclusion
```jsx
{items.map(item =>
  !item.isPacked && <Item key={item.id} {...item} />
)}
```
- Include or exclude entire component from parent’s JSX using logical checks.

## 4. Ternary Operator (`? :`)
```jsx
<li className="item">
  {isPacked
    ? <del>{name} ✅</del>
    : name}
</li>
```
- Compact inline `if/else` expression inside JSX.

## 5. Logical AND Shortcut (`&&`)
```jsx
<li className="item">
  {name} {isPacked && '✅'}
</li>
```
- Renders right-hand value when condition is truthy; renders nothing when falsy.
- **Pitfall:** `0 && <A />` renders `0`. Ensure boolean test: `count > 0 && <A />`.

## 6. Assigning JSX to a Variable
```js
function Item({ name, isPacked }) {
  let content = name;
  if (isPacked) {
    content = <del>{name} ✅</del>;
  }
  return <li className="item">{content}</li>;
}
```
- Most verbose but flexible for complex logic before rendering.

## 7. When to Use Which
- **`if`/`else`**: clear branching at top of component.  
- **Ternary**: simple two-way choice inline.  
- **`&&`**: render something or nothing.  
- **Variable assignment**: complex, multi-step logic.  

## Recap
- JSX is JavaScript—use any JS control flow.  
- Return different JSX or `null` based on props/state.  
- Inline shortcuts (`? :`, `&&`) keep code concise but know their quirks.  
- Extract logic into variables or child components when conditions grow complex.  
```
