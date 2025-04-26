```markdown
# React Components — Key Notes

## What Is a Component?
- **Reusable UI element** built from JavaScript, HTML‑like JSX, and CSS  
- Encapsulates structure, style, and behavior  
- Helps organize and compose complex UIs from small building blocks  

## Role in a React App
- **Building blocks**: every piece of UI (buttons, sidebars, pages) is a component  
- **Composition**: nest and reorder components to design pages  
- **Reusability**: write once, use everywhere (e.g. `<TableOfContents />` on any page)  
- Leverage community libraries (Material UI, Chakra UI) for pre‑built components  

## Defining a Component
```js
// App.js
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}
```
1. **Export the function** with `export default` (so it can be imported elsewhere)  
2. **Function name** must start with a **capital letter** (React distinguishes components vs HTML tags)  
3. **Return JSX** (JavaScript + markup)  
   - If multi‑line, wrap in parentheses  
   - Example single‑line:  
     ```js
     return <img src="..." alt="..." />;
     ```  
   - Example multi‑line:  
     ```js
     return (
       <div>
         …JSX…
       </div>
     );
     ```  
4. **Pitfalls**  
   - Missing parentheses: lines after `return` get ignored  
   - Lowercase name: React treats it as an HTML tag  

## Using (Composing) Components
```js
// App.js
function Profile() { … }

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```
- **Import and embed** with `<ComponentName />` syntax  
- **Parent–child relationship**: `Gallery` is parent, renders three `Profile` children  
- **Browser’s view**: all JSX compiles down to standard HTML tags  

## Naming & Casing
- **Lowercase tags** (e.g. `<section>`, `<h1>`) → HTML elements  
- **Uppercase tags** (e.g. `<Profile />`) → React components  

## Organizing Components
- **Same file**: for small or related components  
- **Separate files**: as size or project grows  
- **Never nest definitions** inside another component (causes performance bugs)  
  ```js
  // ❌ Bad: defining a component inside another
  export default function Gallery() {
    function Profile() { … } // avoid!
    …
  }
  
  // ✅ Good: top‑level definitions
  export default function Gallery() { … }
  function Profile() { … }
  ```

## Passing Data via Props
- Instead of redefining, pass data from parent to child  
- Example:
  ```js
  function Profile({ name, avatarUrl }) {
    return <img src={avatarUrl} alt={name} />;
  }

  export default function Gallery() {
    return (
      <section>
        <Profile name="Ada Lovelace" avatarUrl="…" />
        <Profile name="Grace Hopper"  avatarUrl="…" />
      </section>
    );
  }
  ```

## Deep Dive: App Roots & Frameworks
- **Root component**: entry point (e.g. `pages/index.js` in Next.js)  
- **Full SSR/SSG frameworks**: generate HTML from React at build time or server side  
- **Hybrid usage**: sprinkle React interactivity into existing HTML pages  

## Recap
- **Components** = reusable, composable UI functions returning JSX  
- **Naming**: capitalized functions → React components  
- **Composition**: build complex UIs by nesting components  
- **Organization**: top‑level definitions, files per component, props for data flow  
```