
# 📘 JavaScript Template Literals (Template Strings)

Template literals (introduced in ES6) are enclosed by backtick (\`) characters. They provide:

- ✅ Multi-line string support
- ✅ String interpolation with embedded expressions
- ✅ Support for *tagged templates* (advanced usage)

---

## 🧱 Syntax

```js
`string text`
`string text line 1
 string text line 2`
`string text ${expression} string text`
tagFunction`string text ${expression} string text`
```

---

## 💡 Features

### 🧩 Multi-line Strings

```js
console.log(`Line 1
Line 2`);
```

### 🔗 String Interpolation

```js
const a = 5;
const b = 10;
console.log(`Sum is ${a + b}`); // Sum is 15
```

### 🔄 Nesting Templates

```js
const classes = `header ${isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`}`;
```

---

## 🏷 Tagged Templates

Tagged templates let you *custom process* literals using a function.

```js
function myTag(strings, personExp, ageExp) {
  const ageStr = ageExp < 100 ? "youngster" : "centenarian";
  return `${strings[0]}${personExp}${strings[1]}${ageStr}${strings[2]}`;
}

const output = myTag`That ${"Mike"} is a ${28}.`;
```

### 🔢 Tagged Template Argument Structure

```js
function tag(strings, ...values) {
  console.log(strings);       // array of string literals
  console.log(values);        // array of expressions
}
```

---

## 🔒 `raw` Property

Tagged templates receive a `.raw` array of strings with **raw characters** (e.g. `\n` not processed).

```js
function tag(strings) {
  console.log(strings.raw[0]);
}

tag`Line 1 \n Line 2`; // Outputs: Line 1 \n Line 2
```

`String.raw()` mimics raw string behavior:

```js
String.raw`Hi\n${2 + 3}!`; // "Hi\n5!"
```

---

## ⚠ Escape Sequences

Illegal escape sequences in *untagged* literals cause **syntax errors**:

```js
const bad = `\unicode`; // ❌ SyntaxError
```

**Allowed in tagged templates** but show `undefined` in the cooked version:

```js
function log(str) {
  console.log("Cooked:", str[0]);
  console.log("Raw:", str.raw[0]);
}

log`\unicode`; // Cooked: undefined, Raw: \unicode
```

---

## 🌐 Browser Support

| Browser  | Version |
|----------|---------|
| Chrome   | 41+     |
| Edge     | 12+     |
| Firefox  | 34+     |
| Safari   | 9+      |
| Opera    | 28+     |
