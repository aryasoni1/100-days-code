Here are the summarized notes for both the **CORS** and **Morgan** packages, formatted in `.md` (Markdown):

---

# 📦 Node.js Middleware Notes

## 🌐 CORS (`cors`)

CORS (Cross-Origin Resource Sharing) is middleware for Express/Connect to enable CORS with various options.

### 🔧 Installation
```bash
npm install cors
```

### 🚀 Basic Usage
```js
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/products/:id', (req, res) => {
  res.json({ msg: 'CORS-enabled for all origins!' })
})
```

### 🎯 Enable for Single Route
```js
app.get('/products/:id', cors(), (req, res) => {
  res.json({ msg: 'CORS-enabled for this route only' })
})
```

### 🛠️ Configuration Example
```js
const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200
}
app.get('/products/:id', cors(corsOptions), ...)
```

### 🔄 Dynamic Origin
```js
const corsOptions = {
  origin: function (origin, callback) {
    db.loadOrigins((err, origins) => {
      callback(err, origins)
    })
  }
}
```

### ⚙️ Async Config with Allowlist
```js
const allowlist = ['http://example1.com', 'http://example2.com']
const corsOptionsDelegate = function (req, callback) {
  const corsOptions = allowlist.includes(req.header('Origin'))
    ? { origin: true }
    : { origin: false }
  callback(null, corsOptions)
}
```

### 🧪 Pre-Flight
```js
app.options('*', cors()) // handles all OPTIONS requests globally
```

### ⚙️ Configuration Options
- `origin`: `true`, `false`, string, regex, array, or function
- `methods`: Allowed methods
- `allowedHeaders`, `exposedHeaders`: Custom headers
- `credentials`: Set `true` to expose cookies/auth headers
- `maxAge`: Time in seconds
- `preflightContinue`: Passes to next handler
- `optionsSuccessStatus`: Default `204`, override for legacy clients

---

## 📄 Logger Middleware (`morgan`)

Morgan is HTTP request logger middleware for Node.js/Express apps.

### 🔧 Installation
```bash
npm install morgan
```

### 🧰 Usage Examples
```js
const morgan = require('morgan')
app.use(morgan('tiny'))
```

### 🗒️ Predefined Formats
- `combined`: Apache combined log format
- `common`: Apache common log format
- `dev`: Color-coded dev logs
- `short`: Brief with response time
- `tiny`: Minimal output

### 🔤 Custom Format
```js
morgan(':method :url :status :res[content-length] - :response-time ms')
```

### 🎨 Custom Token
```js
morgan.token('id', (req) => req.id)
app.use(morgan(':id :method :url'))
```

### ⚙️ Options
- `immediate`: Log on request (default is on response)
- `skip`: Function to skip certain logs
- `stream`: Send output to file or custom stream

### 📁 Log to File
```js
const accessLogStream = fs.createWriteStream('access.log', { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))
```

### 🔁 Log Rotation Example
```js
const rfs = require('rotating-file-stream')
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: path.join(__dirname, 'log')
})
```

---

### 📜 License
Both CORS and Morgan are MIT licensed.

Would you like these saved to a file or combined with other middleware notes?