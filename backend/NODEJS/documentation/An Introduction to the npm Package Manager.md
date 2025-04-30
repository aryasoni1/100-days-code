Here are your **notes in .md (Markdown) format** for *An Introduction to the npm package manager*:

---

# An Introduction to the npm Package Manager

---

## What is npm?
- **npm** stands for **Node Package Manager**.
- It is the **default package manager** for **Node.js**.
- As of **September 2022**, npm hosts over **2.1 million packages**, making it the **largest single-language code repository**.

> 🔔 npm started for Node.js, but is now widely used for frontend JavaScript too.

### Alternatives
- **Yarn**
- **pnpm**

---

## What Does npm Do?
- Installs, updates, and manages project **dependencies** (libraries, tools, frameworks, etc.).
- Helps maintain consistent environments across development teams.

---

## Installing All Project Dependencies
- If the project has a `package.json` file:
  ```bash
  npm install
  ```
- Creates a `node_modules` folder (if not already present) and installs all required packages listed.

---

## Installing a Single Package
- To install a specific package:
  ```bash
  npm install <package-name>
  ```
- Since npm v5, it **automatically** adds the package to `dependencies` in `package.json`.
- Prior to npm v5, you needed to use `--save`.

### Common Flags
| Flag | Purpose |
| --- | --- |
| `--save-dev` or `-D` | Adds to `devDependencies` (e.g., testing libraries) |
| `--no-save` | Installs without adding to `package.json` |
| `--save-optional` or `-O` | Adds to `optionalDependencies` |
| `--no-optional` | Prevents installation of optional dependencies |

---

## Types of Dependencies
- **dependencies:**  
  - Needed for running the application in production.
- **devDependencies:**  
  - Needed for development (e.g., linters, test runners).
- **optionalDependencies:**  
  - Non-critical dependencies; app must handle their absence gracefully.

---

## Updating Packages
- Update all packages:
  ```bash
  npm update
  ```
- Update a specific package:
  ```bash
  npm update <package-name>
  ```

---

## Versioning
- **npm** uses **Semantic Versioning (semver)**.
- Install a specific version:
  ```bash
  npm install <package-name>@<version>
  ```
- Versioning ensures:
  - Compatibility with other libraries.
  - Team members use consistent package versions.
  - Avoids issues from bugs in newer versions.

---

## Running Tasks with npm Scripts
- Define tasks in the `scripts` section of `package.json`.
  
### Example
```json
{
  "scripts": {
    "start-dev": "node lib/server-development",
    "start": "node lib/server-production"
  }
}
```
- Run scripts with:
  ```bash
  npm run <task-name>
  ```

### Common Example for Webpack
```json
{
  "scripts": {
    "watch": "webpack --watch --progress --colors --config webpack.conf.js",
    "dev": "webpack --progress --colors --config webpack.conf.js",
    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js"
  }
}
```
- Then use:
  ```bash
  npm run watch
  npm run dev
  npm run prod
  ```

> 🛠️ Using npm scripts simplifies complex or repetitive command-line tasks.

---

Would you also like me to create a **summary table** or a **visual diagram** for quick revision of npm basics? 📚✨