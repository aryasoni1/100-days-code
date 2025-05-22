Here are your **Markdown (.md)** formatted notes on **Package Management & Scripts** in Node.js:

---

# 📦 Package Management & Scripts in Node.js

Node.js uses **npm** (Node Package Manager) or **yarn** to manage packages and define automation scripts via `package.json`.

---

## 📄 `package.json`

* The configuration file for every Node.js project.
* Created via:

```bash
npm init    # interactive
npm init -y # default values
```

### Sample:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

---

## ⚙️ Common `scripts` Examples

| Script   | Command                   | Purpose                          |
| -------- | ------------------------- | -------------------------------- |
| `start`  | `node index.js`           | Run production server            |
| `dev`    | `nodemon index.js`        | Start dev server with hot reload |
| `build`  | `webpack` or `vite build` | Bundle project for production    |
| `test`   | `jest` or `vitest`        | Run test suite                   |
| `lint`   | `eslint .`                | Run linter                       |
| `format` | `prettier --write .`      | Format code                      |

Run scripts with:

```bash
npm run dev
npm run build
```

---

## 📦 Install & Manage Tools

### Webpack

```bash
npm install --save-dev webpack webpack-cli
```

* A powerful bundler for JavaScript applications.
* Requires config file `webpack.config.js`.

### Babel

```bash
npm install --save-dev @babel/core @babel/preset-env babel-loader
```

* Transpiles modern JS (ES6+) to compatible versions.

### Vite

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```

* Lightning-fast development server and build tool.

---

## 🧼 Dependency Types

| Type        | Command                  | Description                  |
| ----------- | ------------------------ | ---------------------------- |
| Regular     | `npm install express`    | Required at runtime          |
| Development | `npm install --save-dev` | Used only during development |
| Global      | `npm install -g nodemon` | Available across the system  |

---

## ✅ Best Practices

* Use **scripts** to automate repetitive tasks.
* Keep build tools and linters in **devDependencies**.
* Use **Vite** for faster React/Vue apps instead of Webpack if starting fresh.

---

Let me know if you want example configs for Webpack, Babel, or Vite setup!
