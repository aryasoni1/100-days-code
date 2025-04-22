```markdown
# Importing & Exporting React Components — Key Notes

## Root Component File
- Often named **App.js** (or per framework conventions, e.g. Next.js `pages/index.js`)  
- Serves as the **entry point** or “root” of your component tree  

## Why Split Components into Separate Files?
- **Modularity**: keeps each file focused and easy to scan  
- **Reusability**: import components wherever needed  
- **Maintainability**: smaller files, clearer boundaries  

## Moving Components Out of the Root
1. **Create** a new file (e.g. `Gallery.js`)  
2. **Export** your component from that file  
3. **Import** it back into the root (or any other) file  

```js
// Gallery.js
export default function Gallery() {
  // …uses Profile internally…
}

// App.js
import Gallery from './Gallery';
export default function App() {
  return <Gallery />;
}
```

> **Tip:** Omitting `.js` in imports (e.g. `import Gallery from './Gallery'`) works too.

## Default vs. Named Exports
| Export Type | Syntax (in file)                         | Import Syntax             |
| ----------- | ----------------------------------------- | ------------------------- |
| **Default** | `export default function Button() {}`     | `import Button from './Button'` |
| **Named**   | `export function Button() {}`             | `import { Button } from './Button'` |

- **Default export**: one per file; importers choose the local name  
- **Named exports**: many per file; names must match exactly  

## When to Use Which
- **Default**: file exports a single primary component  
- **Named**: file exports multiple components or utilities  
- **Consistency**: some teams prefer one style project‑wide to avoid confusion  

## Multiple Exports from One File
1. **Default export** for the main component  
2. **Named export** for secondary components  
```js
// Gallery.js
export function Profile() { … }
export default function Gallery() { … }

// App.js
import Gallery, { Profile } from './Gallery';
export default function App() {
  return <Profile />; // or <Gallery />
}
```

## Recap
- **Root file**: entry point (App.js or framework‑specific)  
- **Split out** components for clarity & reuse  
- **Default vs. named**: choose based on file’s exports  
- **Syntax**: match export/import patterns exactly  
- **Multiple exports**: combine default + named as needed  
```
