Here are your **Markdown (.md)** formatted notes on **Testing & CI in Node.js**:

---

# ✅ Testing & CI in Node.js

Testing ensures code reliability and correctness. Continuous Integration (CI) automates test execution on code changes.

---

## 🧪 Testing Tools

### 1. **Jest**

A powerful testing framework for unit and integration tests.

#### Installation

```bash
npm install --save-dev jest
```

#### Basic Example

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

#### Run Tests

```bash
npx jest
```

---

### 2. **Supertest**

For testing HTTP endpoints in Express apps.

#### Installation

```bash
npm install --save-dev supertest
```

#### Example with Express

```js
// app.js
const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.send('pong');
});

module.exports = app;

// app.test.js
const request = require('supertest');
const app = require('./app');

test('GET /ping', async () => {
  const res = await request(app).get('/ping');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('pong');
});
```

---

## 🔁 Continuous Integration (CI)

### 1. **GitHub Actions**

Automate test runs on code pushes or pull requests.

#### Example: `.github/workflows/node.js.yml`

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - run: npm install
      - run: npm test
```

---

### 2. **GitLab CI**

Use `.gitlab-ci.yml` in your repo.

#### Example

```yaml
stages:
  - test

test:
  image: node:18
  script:
    - npm install
    - npm test
```

---

## 🧠 Best Practices

* Test units, integrations, and edge cases
* Mock dependencies for isolated testing
* Use CI to catch issues early
* Combine with linting (`eslint`) for code quality

---

Let me know if you want examples for e2e testing or CI with deployment steps!
