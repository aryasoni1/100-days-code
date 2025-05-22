Here's your full content organized neatly into **Markdown (.md) format**:

---

# Error Handling in Express

**Error Handling** refers to how Express **catches and processes errors** that occur **both synchronously and asynchronously**.  
Express comes with a **default error handler**, so you don't have to write your own when starting out.

---

## Catching Errors

### Synchronous Errors

- No extra work needed.
- Express automatically catches errors thrown inside route handlers and middleware.

```javascript
app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express catches this automatically.
})
```

---

### Asynchronous Errors

- You **must pass errors** to the `next()` function for Express to catch them.

```javascript
app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err) // Pass errors to Express
    } else {
      res.send(data)
    }
  })
})
```

---

### Promises in Express 5

- If a **Promise** is returned and it **rejects**, Express automatically calls `next(err)`.

```javascript
app.get('/user/:id', async (req, res, next) => {
  const user = await getUserById(req.params.id)
  res.send(user)
})
```

- If `getUserById` throws or rejects, Express handles it automatically.

---

## Important Points

- Anything passed to `next(err)` will be treated as an error.
- If no error is provided, the next middleware is executed normally.
- If headers have already been sent, Express closes the connection on error.

---

## Examples of Error Handling

### Asynchronous Error with setTimeout

```javascript
app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      throw new Error('BROKEN')
    } catch (err) {
      next(err)
    }
  }, 100)
})
```

---

### Using Promises to Handle Errors

```javascript
app.get('/', (req, res, next) => {
  Promise.resolve().then(() => {
    throw new Error('BROKEN')
  }).catch(next)
})
```

---

### Chain of Handlers Example

```javascript
app.get('/', [
  (req, res, next) => {
    fs.readFile('/maybe-valid-file', 'utf-8', (err, data) => {
      res.locals.data = data
      next(err)
    })
  },
  (req, res) => {
    res.locals.data = res.locals.data.split(',')[1]
    res.send(res.locals.data)
  }
])
```

---

## Default Error Handler

- Built-in middleware added at the end of the middleware stack.
- Writes errors with stack trace (development) or a generic message (production).

> **Important**: Set `NODE_ENV=production` for production environment.

### What Happens:

- `res.statusCode` set based on `err.status` or defaults to 500.
- `res.statusMessage` set according to status code.
- Response body:
  - Development: `err.stack`
  - Production: HTML status message
- Custom `err.headers` are added if present.

### Handling Headers Already Sent

If headers are already sent, delegate to the default Express error handler:

```javascript
function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
```

---

## Writing Custom Error Handlers

Define error-handling middleware with **four arguments**: `(err, req, res, next)`

### Example

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```

> Always define **error handlers after** all other `app.use()` and route definitions.

---

## Organizing Error Handlers

Example of using multiple error-handling middleware:

```javascript
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride())

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)
```

---

### Example Functions

#### logErrors

```javascript
function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}
```

#### clientErrorHandler

```javascript
function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}
```

#### catch-all errorHandler

```javascript
function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}
```

---

## Skipping to the Next Route

Use `'route'` as the argument to `next()` to **skip to the next route handler**:

```javascript
app.get('/a_route_behind_paywall',
  (req, res, next) => {
    if (!req.user.hasPaid) {
      next('route') // Skip to next route
    } else {
      next()
    }
  },
  (req, res, next) => {
    PaidContent.find((err, doc) => {
      if (err) return next(err)
      res.json(doc)
    })
  })
```

---

# Summary

| Topic | Description |
| :--- | :--- |
| Synchronous Errors | Automatically caught |
| Asynchronous Errors | Must use `next(err)` |
| Promises | Automatically handled (Express 5) |
| Default Handler | Catches unhandled errors, sends stack trace in development |
| Custom Error Handlers | Middleware with 4 args: (err, req, res, next) |
| Skipping Routes | Use `next('route')` |

---

Would you like me to also give a **small real-world example project** that uses **custom error handling** to make these concepts even clearer? 🚀 