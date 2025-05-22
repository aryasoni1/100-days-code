Here's your content formatted as a Markdown (`.md`) file with clear headings and code examples:

```markdown
# Health Checks and Graceful Shutdown

## Graceful Shutdown

When deploying a new version of an application, the previous version must be replaced. The process manager (like PM2, systemd, Kubernetes, etc.) first sends a `SIGTERM` signal to notify the application that it is about to be terminated.

Once the application receives this signal, it should:

- Stop accepting new requests
- Complete all ongoing requests
- Clean up used resources (e.g., database connections, file locks)
- Exit gracefully

### Example: Graceful Shutdown in Node.js

```javascript
const server = app.listen(port)

process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    debug('HTTP server closed')
  })
})
```

---

## Health Checks

Health checks are used by load balancers and orchestration tools to determine if an application instance is healthy and able to accept traffic.

### Kubernetes Health Checks

Kubernetes provides two types of health checks:

- **Liveness Probe**  
  Determines whether the container is running. If the liveness check fails, Kubernetes will restart the container.

- **Readiness Probe**  
  Determines whether the container is ready to serve traffic. If it fails, the pod is removed from the service’s endpoints, and no traffic is routed to it.

### Example Usage in Kubernetes (YAML snippet)

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 10

readinessProbe:
  httpGet:
    path: /ready
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 10
```

---

## Summary

- **Graceful shutdown** ensures that application resources are released and requests are completed before termination.
- **Health checks** ensure only healthy instances receive traffic, improving application availability and reliability.
```

Would you like to add more examples or cover Docker and PM2 process managers as well?