Here’s your content formatted neatly in **`.md` (Markdown)** format:

---

# Overriding the Express API

The **Express API** consists of various methods and properties on the **request** and **response** objects, inherited via prototype.  
There are two extension points:

- **Global prototypes**: `express.request` and `express.response`
- **App-specific prototypes**: `app.request` and `app.response`

Altering the global prototypes will affect **all Express apps** in the same Node.js process.  
If desired, alterations can be made **app-specific** by modifying prototypes after creating a new app instance.

---

## Methods

You can **override** the **signature and behavior** of existing methods by assigning a **custom function**.

Example — Overriding `res.sendStatus`:

```javascript
app.response.sendStatus = function (statusCode, type, message) {
  // Simplified custom implementation
  return this.contentType(type)
    .status(statusCode)
    .send(message)
}
```

Now, use it like this:

```javascript
res.sendStatus(404, 'application/json', '{"error":"resource not found"}')
```

> ⚡ This completely **changes the original behavior** of `res.sendStatus`.

---

## Properties

Properties in Express can be either:

- **Assigned properties** (e.g., `req.baseUrl`, `req.originalUrl`)  
  ➔ *Cannot* override behavior as they are dynamically assigned.
  
- **Getter properties** (e.g., `req.secure`, `req.ip`)  
  ➔ *Can* override behavior using the API extensions.

Example — Overriding how `req.ip` is calculated:

```javascript
Object.defineProperty(app.request, 'ip', {
  configurable: true,
  enumerable: true,
  get() {
    return this.get('Client-IP')
  }
})
```

> 📌 Now `req.ip` will fetch the value from the `Client-IP` header instead of the default behavior.

---

## Prototype

Express request/response objects by default inherit from:

- `http.IncomingMessage.prototype` (for request)
- `http.ServerResponse.prototype` (for response)

To **override** and use **custom prototypes**, use:

```javascript
// Use FakeRequest and FakeResponse instead of default Node.js classes
Object.setPrototypeOf(Object.getPrototypeOf(app.request), FakeRequest.prototype)
Object.setPrototypeOf(Object.getPrototypeOf(app.response), FakeResponse.prototype)
```

> ⚠️ **Important**:  
> - Prefer application-level overriding rather than global changes.
> - Ensure the custom prototype closely matches the original behavior unless necessary.

---

# Summary

| Concept | Key Point |
| :----- | :-------- |
| Methods | Override existing methods (e.g., `res.sendStatus`) by custom functions. |
| Properties | Only **getter** properties can be overridden. |
| Prototypes | Can override to use custom `Request/Response` prototypes. Prefer app-level changes. |

---

Would you also like me to format this into a downloadable `.md` file for you? 🚀