Here's your **Markdown (.md)** formatted notes for the **Introduction to Node.js**:

---

# 📘 Introduction to Node.js

---

## 🌐 What is Node.js?

* **Node.js** is an open-source, cross-platform JavaScript runtime.
* Built on **Chrome's V8** JavaScript engine.
* Allows you to run JavaScript **outside the browser** (e.g., on a server).

---

## ⚙️ Core Concepts

### 🧠 Event-Driven Architecture

* Uses **events** and **callback functions**.
* Ideal for building scalable applications like chat servers or APIs.

### 🕸️ Non-Blocking I/O

* Uses asynchronous I/O operations.
* Doesn't block the main thread while waiting for operations like reading a file or querying a database.

### 🧵 Single Threaded (with async)

* Node.js runs on a **single thread** but can handle multiple connections using the **event loop** and **callbacks**.

---

## 💾 Installing Node.js

* Download from: [https://nodejs.org](https://nodejs.org)
* Includes:

  * `node` (runtime)
  * `npm` (Node Package Manager)

Verify installation:

```bash
node -v
npm -v
```

---

## 🚀 Running Node Scripts

### ➤ Using `node`

```bash
node app.js
```

* Executes JavaScript files.

### ➤ Using `npm`

* Manage dependencies and run scripts.

```bash
npm init -y            # Initialize project
npm install express    # Install a package
npm run start          # Run custom script from package.json
```

### ➤ Using `npx`

* Run commands from packages **without installing them globally**.

```bash
npx create-react-app myapp
```

---

## 📂 Example Node.js Script

```js
// app.js
console.log("Hello from Node.js!");
```

Run it:

```bash
node app.js
```

---

Let me know if you want notes on the event loop, CommonJS modules, or building a basic server with `http`.
