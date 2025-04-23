```markdown
# Rendering Lists — Key Notes

## 1. Store Data in Arrays/Objects
- Move repeated content into a JS array of primitives or objects:
  ```js
  const people = [
    { id: 0, name: 'Creola Katherine Johnson', profession: 'mathematician', … },
    { id: 1, name: 'Mario Molina', profession: 'chemist', … },
    // …
  ];
  ```

## 2. Render with `map()`
- Transform data items into JSX elements:
  ```js
  const listItems = people.map(person =>
    <li key={person.id}>{person.name}: {person.profession}</li>
  );
  return <ul>{listItems}</ul>;
  ```
- Always include a **`key`** prop on elements returned by `map`.

## 3. Filter with `filter()`
- Select a subset before mapping:
  ```js
  const chemists = people.filter(p => p.profession === 'chemist');
  const chemistItems = chemists.map(p => <li key={p.id}>{p.name}</li>);
  ```
- Combines `filter()` + `map()` for concise data-driven rendering.

## 4. The Importance of Keys
- **Purpose**: let React match items across renders when data changes, moves, or is removed.
- **Rules**:
  - Unique among siblings (within the same list).
  - Stable over time—do **not** use array index or generated values.
  - Cannot change between renders.
- **Where to get keys**:
  - Database IDs  
  - UUIDs (e.g. `crypto.randomUUID()`)  
  - Locally incremented counters  

## 5. Keys on Fragments
- When rendering multiple top-level nodes per item:
  ```js
  import { Fragment } from 'react';
  people.map(p =>
    <Fragment key={p.id}>
      <h2>{p.name}</h2>
      <p>{p.bio}</p>
    </Fragment>
  );
  ```
- Don’t use the shorthand `<>…</>` if you need to assign a key.

## 6. Common Pitfalls
- **No key**: React warns and falls back to index keys (bug‑prone).  
- **Index as key**: breaks on insert/delete/reorder; leads to UI glitches.  
- **Random key**: remounts items every render; loses state and input.  
- **Key is not a prop**: cannot read `props.key` inside the component—pass as a separate prop if needed.

## Recap
- Move repeated UI into arrays of data.  
- Use `array.map()` to produce JSX lists, always with `key`.  
- Use `array.filter()` to render only matching items.  
- Choose stable, unique keys; avoid indices and random values.  
- For multi-node items, use keyed `<Fragment>`.  
```