Here are your **Markdown (.md)** formatted notes on **Deployment of React Applications**:

---

# 🚀 Deployment of React Applications

Deploying a React app means making it accessible on the web by building it for production and hosting it on a service like Vercel, Netlify, Firebase Hosting, or GitHub Pages.

---

## 🔧 1. Build React App for Production

### For Create React App (CRA):

```bash
npm run build
```

### For Vite:

```bash
npm run build
```

* Output goes to `build/` (CRA) or `dist/` (Vite)
* Includes optimized HTML, CSS, JS bundles

---

## 🌐 2. Deployment Platforms

### ✅ Vercel

* Great for Next.js & React
* Auto-deploy from GitHub
* Steps:

  1. Push project to GitHub
  2. Go to [vercel.com](https://vercel.com)
  3. Import project, select framework
  4. Vercel builds and hosts automatically

### ✅ Netlify

* Instant deployment from GitHub
* Steps:

  1. Push code to GitHub
  2. Go to [netlify.com](https://www.netlify.com)
  3. Connect repo and set build command:

     * **Build**: `npm run build`
     * **Publish directory**: `build/` or `dist/`
  4. Deploy!

### ✅ Firebase Hosting

* Requires Firebase CLI

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

* Configure `public` directory as `build/` or `dist/`

### ✅ GitHub Pages

* For CRA, install:

```bash
npm install gh-pages --save-dev
```

* Add to `package.json`:

```json
"homepage": "https://<username>.github.io/<repo-name>"
```

* Add scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

* Deploy:

```bash
npm run deploy
```

---

## 📦 Summary

| Platform     | Git Integration | Custom Domains | CLI Support |
| ------------ | --------------- | -------------- | ----------- |
| Vercel       | ✅ Yes           | ✅ Yes          | ✅ Yes       |
| Netlify      | ✅ Yes           | ✅ Yes          | ✅ Yes       |
| Firebase     | ❌ Optional      | ✅ Yes          | ✅ Yes       |
| GitHub Pages | ✅ Yes           | ✅ Via DNS      | ✅ Yes       |

---

Let me know if you want deployment steps tailored to Vite, Next.js, or Docker-based environments.
