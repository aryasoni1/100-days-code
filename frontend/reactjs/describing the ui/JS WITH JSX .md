```markdown
# JavaScript in JSX with Curly Braces — Key Notes

## Strings vs. JavaScript Expressions
- **String literals** go in quotes:  
  ```jsx
  <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />
  ```
- **JS expressions** go in `{ }`:  
  ```jsx
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  <img src={avatar} alt={description} />
  ```

## Embedding Variables & Expressions
- Anywhere inside JSX text or attributes (after `=`), wrap JavaScript in `{ }`:  
  ```jsx
  const name = 'Hedy Lamarr';
  <h1>{name}'s To Do List</h1>
  ```
- **Works with**: variables, arithmetic, ternaries, function calls, etc.  
  ```jsx
  <h1>Today is {formatDate(new Date())}</h1>
  ```

## Where `{ }` Are Allowed
1. **Tag content**  
   ```jsx
   <p>Count: {count}</p>
   ```
2. **Attribute values** (immediately after `=`)  
   ```jsx
   <button onClick={handleClick}>Click me</button>
   ```

> ❌ Not allowed: `<{tagName}>…</{tagName}>` or `src="{avatar}"`

## Passing Objects & Inline Styles
- **JS objects** also use `{ }`, so inline styles need double braces:  
  ```jsx
  <ul style={{
    backgroundColor: 'black',
    color: 'pink'
  }}>
    …
  </ul>
  ```
- Outer `{ }` enters JS, inner `{ }` defines the object literal  
- **camelCase** for CSS properties (e.g. `backgroundColor`)  
- You can pass any object:
  ```jsx
  const theme = { backgroundColor: 'navy', color: 'white' };
  <div style={theme}>…</div>
  ```

## Passing Complex Objects
- Store data & styles in one object and reference it:
  ```jsx
  const person = {
    name: 'Gregorio Y. Zara',
    theme: { backgroundColor: 'black', color: 'pink' }
  };
  
  <div style={person.theme}>
    <h1>{person.name}'s Todos</h1>
    …
  </div>
  ```

## Pitfalls & Tips
- **Double curlies `{{…}}`** simply mean “object inside JSX”  
- **Attributes** must be valid JS identifiers: use `className` not `class`  
- **JSX is JavaScript**: any invalid JS inside `{}` triggers errors  
- **Error messages** guide you—read them closely!

## Recap
- Quotes → static strings  
- `{}` → dynamic JS (variables, expressions, functions, objects)  
- Double braces for object literals (e.g. inline styles)  
- Keep logic & markup together in a single, cohesive syntax  
```