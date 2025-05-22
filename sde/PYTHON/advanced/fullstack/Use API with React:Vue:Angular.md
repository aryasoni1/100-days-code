Here’s a beginner-friendly `.md` formatted note on **Using APIs with React, Vue, and Angular** using `axios` and `fetch`:

---

# 🌐 **Use API with React / Vue / Angular**

> Learn how to **connect frontend apps** to backend APIs using `axios` or `fetch`.

---

## 📦 Tools to Make API Calls

| Tool    | Description                             |
| ------- | --------------------------------------- |
| `fetch` | Built-in JavaScript API for HTTP        |
| `axios` | Promise-based HTTP client (npm package) |

---

## ⚛️ **React Example**

### 🔹 Using `fetch`:

```js
useEffect(() => {
  fetch('http://localhost:5000/api/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

---

### 🔹 Using `axios`:

```bash
npm install axios
```

```js
import axios from 'axios';

useEffect(() => {
  axios.get('http://localhost:5000/api/data')
    .then(response => setData(response.data));
}, []);
```

---

## 🧩 **Vue Example**

### 🔹 Using `axios` in `mounted()`:

```bash
npm install axios
```

```js
import axios from 'axios';

export default {
  data() {
    return { message: '' };
  },
  mounted() {
    axios.get('http://localhost:5000/api/message')
      .then(res => this.message = res.data.message);
  }
}
```

---

## 🅰️ **Angular Example**

### 🔹 Setup `HttpClientModule` in `app.module.ts`:

```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule]
})
```

---

### 🔹 Use in Component:

```ts
constructor(private http: HttpClient) {}

ngOnInit() {
  this.http.get<any>('http://localhost:5000/api/message')
    .subscribe(data => this.message = data.message);
}
```

---

## 🌐 Common Patterns

| Framework | Where to Call API |
| --------- | ----------------- |
| React     | `useEffect()`     |
| Vue       | `mounted()`       |
| Angular   | `ngOnInit()`      |

---

## ✅ Best Practices

* Use **`.env` files** for base API URLs.
* Handle **errors** with `.catch()` or `try/catch`.
* Use **loading states** for better UX.
* Secure your backend with **CORS** and **authentication**.

---

Let me know if you’d like:

* Example projects using these APIs
* Proxy setup for dev mode
* Full-stack boilerplate with backend integration
