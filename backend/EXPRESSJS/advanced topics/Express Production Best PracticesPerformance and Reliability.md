Here’s a **well-organized summary** of the best practices for **performance and reliability** when deploying **Express applications** to **production**, based on the information you shared:

---

# 📦 Express Production Best Practices: Performance and Reliability

This covers both **development (dev)** and **operations (ops)** best practices.

---

## 👨‍💻 Things to Do in Your Code (Development Side)

### 1. **Use gzip Compression**
- Reduces response body size → faster app.
- Use Express `compression` middleware:

```javascript
const compression = require('compression');
const app = require('express')();
app.use(compression());
```
- **OR** configure gzip at the **reverse proxy** (e.g., Nginx) level for large production setups.

---

### 2. **Avoid Synchronous Functions**
- Synchronous code blocks the event loop, harming performance.
- Always use **asynchronous versions** of Node.js functions.
- Use `--trace-sync-io` in testing to find sync function usage.

---

### 3. **Implement Logging Properly**
- **For debugging**: Use a module like `debug` instead of `console.log()`.
- **For app activity logging**: Use a **fast logger** like `pino` instead of `console.log()`.
- Piping logs is better than writing directly to files/console for non-blocking I/O.

---

### 4. **Handle Exceptions Properly**
- Prevent app crashes by catching errors close to their source.
  
  - Use `try-catch` for **synchronous code**.
  - Use `Promises` and `async/await` with proper error handling for **asynchronous code**.

Example:

```javascript
app.get('/', async (req, res, next) => {
  try {
    const data = await userData();
    res.send(data);
  } catch (err) {
    next(err);
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ error: err.message });
});
```

> 🚫 **Don't** use `process.on('uncaughtException', ...)`. It keeps your app running in an **unreliable** state and is considered bad practice.

---

## 🛠️ Things to Do in Your Environment / Setup (Operations Side)

### 1. **Set `NODE_ENV` to `production`**
- Boosts performance by enabling:
  - Template caching
  - CSS optimization
  - Less verbose error messages
- Example (with `systemd`):

```ini
Environment=NODE_ENV=production
```

---

### 2. **Ensure Automatic App Restart**
- Use a **process manager** like **PM2**.
- PM2 can auto-restart your app on crashes.
- Example:

```bash
pm2 start app.js
pm2 startup systemd
pm2 save
```

- **OR** use **systemd** directly to restart on OS boot/crash.

---

### 3. **Run Your App in a Cluster**
- Node.js is single-threaded by default.
- Use the **cluster** module or **PM2 cluster mode** to utilize **multiple CPU cores**.

PM2 cluster mode:

```bash
pm2 start app.js -i max
```
(`max` = 1 process per CPU)

> 🧠 Reminder: In a cluster, processes **don't share memory** — use **Redis** or similar for shared sessions.

---

### 4. **Cache Request Results**
- Improve response times by caching outputs.
- Cache at:
  - **Application level** (Redis)
  - **Proxy level** (Nginx, Varnish)

---

### 5. **Use a Load Balancer**
- Distribute traffic across multiple app instances.
- Use **Nginx** or **HAProxy** as a load balancer.

> 💡 **Sticky sessions** may be needed if sessions are tied to specific server instances. External session stores like **Redis** can solve this.

---

### 6. **Use a Reverse Proxy**
- A reverse proxy (e.g., Nginx) improves:
  - SSL termination
  - Static file caching
  - Compression
  - Load balancing
  - Security

---

# 🚀 Final Notes
- Prefer **crashing and restarting** the app on fatal errors rather than trying to recover a corrupted state.
- Monitor your app (using PM2 monitoring or tools like Prometheus + Grafana).

---

Would you also like me to help you create a **simple checklist** version or a **ready-to-use deployment guide** based on this? 🚀  
It could save you a lot of time for real-world projects!