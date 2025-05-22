Here are your **Markdown (.md)** formatted notes on **Build Tools** in Node.js:

---

# 🛠️ Build Tools in Node.js

Modern JavaScript apps use build tools to bundle, transpile, and optimize code for production. Node.js powers many of these tools.

---

## ⚡ esbuild

* Extremely fast bundler and minifier written in Go but used via Node.js.
* Supports JavaScript, TypeScript, JSX.
* Great for fast development and simple builds.

### Installation:

```bash
npm install esbuild --save-dev
```

### Example Usage:

```bash
esbuild src/index.js --bundle --outfile=dist/bundle.js
```

### Features:

* Lightning-fast builds
* Tree shaking
* Supports plugins

---

## 📦 Rollup

* Focused on bundling JavaScript and libraries.
* Outputs ES modules (ideal for libraries).

### Installation:

```bash
npm install rollup --save-dev
```

### Example Config (`rollup.config.js`):

```js
export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
  },
};
```

### Features:

* Tree shaking
* Plugin ecosystem
* Supports multiple output formats

---

## 🚀 Vite

* Modern frontend build tool powered by `esbuild` (for dev) and `Rollup` (for production).
* Optimized for React, Vue, and modern JavaScript frameworks.

### Installation:

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

### Features:

* Lightning-fast dev server with HMR
* Builds with Rollup
* Zero config to get started

---

## ✅ When to Use What

| Tool    | Best For                                  |
| ------- | ----------------------------------------- |
| esbuild | Super-fast builds, simple apps or tooling |
| Rollup  | JavaScript libraries or reusable packages |
| Vite    | Full-featured frontend frameworks/apps    |

---

Let me know if you want code examples or setup templates for any specific tool!
