Here are your **Markdown (.md)** formatted notes on **Logging & Debugging in Node.js**:

---

# 🐞 Logging & Debugging in Node.js

Effective logging and debugging are essential for tracking application behavior, diagnosing issues, and maintaining production-grade systems.

---

## 📦 Popular Logging Tools

### 1. **Winston**

A versatile and popular logging library for Node.js.

#### Installation

```bash
npm install winston
```

#### Basic Usage

```js
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/app.log' }),
  ],
});

logger.info('This is an info message');
logger.error('This is an error message');
```

---

### 2. **Morgan**

An HTTP request logger middleware for Express.

#### Installation

```bash
npm install morgan
```

#### Basic Usage with Express

```js
const express = require('express');
const morgan = require('morgan');

const app = express();

// Use 'combined' for detailed logs or 'dev' for concise logs
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});
```

---

### 3. **Debug**

A small debugging utility for creating namespaces.

#### Installation

```bash
npm install debug
```

#### Basic Usage

```js
const debug = require('debug')('app:startup');

debug('Starting the application...');
```

#### Enable Namespaced Logging

```bash
DEBUG=app:* node app.js
```

---

## 🔧 Native Debugging Tools

### `console.log()` & `console.error()`

Basic debugging tools built into Node.js.

```js
console.log('User ID:', userId);
console.error('Something went wrong:', err);
```

---

### Node Inspector (Built-in)

Use `--inspect` flag:

```bash
node --inspect index.js
```

Open `chrome://inspect` in Google Chrome to debug step-by-step.

---

## 🧪 Best Practices

* Use **log levels** (`info`, `warn`, `error`, `debug`)
* Rotate and persist logs using tools like `winston-daily-rotate-file`
* Avoid logging sensitive data
* Use structured logging (e.g., JSON format)
* In production, integrate with centralized systems (e.g., Logstash, ELK, Datadog)

---

Let me know if you want a logging setup tailored to Express apps or production environments!
