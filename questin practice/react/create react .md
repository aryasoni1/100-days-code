To start working with **React** on **macOS**, follow these beginner-friendly steps. You’ll use **Node.js**, **npm**, and the official **Create React App** tool to get started quickly.

---

### 🛠️ Step-by-Step: How to Start React on macOS

---

### ✅ 1. **Install Node.js (Includes npm)**

React apps require **Node.js** and **npm** (Node Package Manager).

* Visit: [https://nodejs.org](https://nodejs.org)
* Download and install the **LTS version** (recommended for most users).

#### 🔍 Verify installation in Terminal:

```bash
node -v
npm -v
```

Both should return version numbers if installed correctly.

---

### ✅ 2. **Install Create React App (CRA)**

Create React App is the easiest way to set up a new React project.

```bash
npx create-react-app my-app
```

* `npx` runs the tool without installing it globally.
* `my-app` is your project folder name (change it if you want).

⏳ This command will take a few minutes. It sets up everything you need automatically.

---

### ✅ 3. **Navigate into your project folder**

```bash
cd my-app
```

---

### ✅ 4. **Start the development server**

```bash
npm start
```

* Opens `http://localhost:3000` in your browser.
* You’ll see the default React welcome page.

---

### ✅ 5. **Edit Your App**

Open the folder (`my-app`) in VS Code or any code editor.

* Edit `src/App.js` to start customizing your React component.
* Save the file — the browser will update automatically (hot reload).

---

### 🧪 Example: Change `App.js`

```jsx
function App() {
  return <h1>Hello, React on macOS!</h1>;
}
```

---

Would you like help installing VS Code or setting up Git for your React project?
