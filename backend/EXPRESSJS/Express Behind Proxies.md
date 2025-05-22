Here are your **Express Behind Proxies** notes in `.md` (Markdown) format:

---

```markdown
# Express Behind Proxies

When running an Express app behind a reverse proxy, some Express APIs (like `req.ip`) may behave differently.  
To handle this, configure the `trust proxy` setting appropriately.

---

## Why `trust proxy`?

- By default, Express assumes it is directly facing the internet.
- Behind a proxy, client information (like IP address) comes via headers like `X-Forwarded-For`.
- `trust proxy` tells Express which proxies to trust for extracting client info.

---

## Setting `trust proxy`

You can configure `trust proxy` with different types of values:

| Type    | Value | Description |
|---------|-------|-------------|
| Boolean | `true` / `false` | If `true`, trust `X-Forwarded-For` header (ensure proxy strips unwanted headers). If `false`, default behavior (`req.socket.remoteAddress`). |
| IP addresses | Subnets or list | Trust specific IP addresses/subnets. |
| Number  | n | Number of proxy hops to trust (`0` = no proxy). |
| Function | Custom function | Custom logic to decide which IPs to trust. |

---

## Boolean

```javascript
app.set('trust proxy', true) // Trust X-Forwarded-For
```

⚡ **Important**: When using `true`, ensure proxies strip/override the following headers:
- `X-Forwarded-For`
- `X-Forwarded-Host`
- `X-Forwarded-Proto`

---

## IP Addresses / Subnets

Pre-configured subnet names:
- `loopback`: 127.0.0.1/8, ::1/128
- `linklocal`: 169.254.0.0/16, fe80::/10
- `uniquelocal`: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, fc00::/7

Examples:
```javascript
app.set('trust proxy', 'loopback') // Trust loopback addresses
app.set('trust proxy', 'loopback, 123.123.123.123') // Trust loopback + specific IP
app.set('trust proxy', 'loopback, linklocal, uniquelocal') // Trust multiple subnets (CSV)
app.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']) // Trust multiple subnets (array)
```

Behavior:
- Traverses `X-Forwarded-For` from right to left.
- Stops at first non-trusted IP, which is used as `req.ip`.

---

## Number of Hops

```javascript
app.set('trust proxy', 2) // Trust two hops
```

- `req.socket.remoteAddress` is the 1st hop.
- Addresses from `X-Forwarded-For` are processed right to left.

⚡ **Important**: Ensure consistent proxy paths, or else clients can spoof.

---

## Custom Function

Example:
```javascript
app.set('trust proxy', (ip) => {
  return ip === '127.0.0.1' || ip === '123.123.123.123'
})
```
- Returns `true` for trusted IPs.
- Returns `false` for others.

---

## Effects of `trust proxy`

When `trust proxy` is enabled:
- `req.hostname` uses `X-Forwarded-Host` header.
- `req.protocol` uses `X-Forwarded-Proto` header.
- `req.ip` and `req.ips` are determined based on trusted proxies and `X-Forwarded-For` header.

---

## Implementation Details

- Express uses the **proxy-addr** package for proxy address parsing.
- For more details, refer to the [proxy-addr documentation](https://www.npmjs.com/package/proxy-addr).

---
```

---

Would you like me to continue compiling all these notes into a full **Express Debugging and Deployment Notes** `.md` document for you too? 📄