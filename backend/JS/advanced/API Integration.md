Here are your **Markdown (.md)** formatted notes on **API Integration**:

---

# 📝 API Integration in JavaScript

Integrating APIs between the frontend and backend is an essential task in full-stack development. This section covers how to connect the frontend to the backend using JavaScript's `fetch` API and the popular `axios` library.

---

## 🔹 **1. API Integration using `fetch`**

The `fetch` API allows you to make HTTP requests (GET, POST, PUT, DELETE) to communicate with your backend or external APIs.

### **Basic Example:**

```javascript
// GET request using fetch
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// POST request using fetch
fetch('https://api.example.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John', age: 30 }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### **Key Points:**

* **GET**: Retrieves data from the backend.
* **POST**: Sends data to the backend.
* **Headers**: Set request headers, like `Content-Type` for sending JSON.
* **Body**: For POST requests, use `JSON.stringify()` to send data in JSON format.

---

## 🔹 **2. API Integration using `axios`**

`Axios` is a popular promise-based HTTP client for the browser and Node.js. It simplifies handling HTTP requests compared to `fetch` by automatically transforming the response to JSON and allowing for easier handling of errors.

### **Install Axios:**

```bash
npm install axios
```

### **Basic Example:**

```javascript
import axios from 'axios';

// GET request using axios
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// POST request using axios
axios.post('https://api.example.com/submit', {
  name: 'John',
  age: 30,
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

### **Key Points:**

* **GET**: Retrieves data.
* **POST**: Sends data.
* **Response Handling**: The `response.data` contains the response body.
* **Error Handling**: `.catch()` is used to handle errors (e.g., network issues, invalid responses).

---

## 🔹 **3. Handling Async Operations**

Both `fetch` and `axios` are asynchronous, meaning you typically use them within `async/await` syntax to avoid callback hell and make your code more readable.

### **Using `async/await` with `fetch`:**

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

### **Using `async/await` with `axios`:**

```javascript
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

---

## 🔹 **4. Handling Errors**

### **Error Handling with `fetch`:**

`fetch` only throws an error on network failure or if something goes wrong in the request. HTTP errors like 404 or 500 won't cause an error; you need to manually check the response status.

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### **Error Handling with `axios`:**

`axios` automatically rejects the promise for HTTP errors (status codes outside of the range 2xx).

```javascript
axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code outside of 2xx
      console.error('Error response:', error.response);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Error:', error.message);
    }
  });
```

---

## 🔹 **5. Using Query Parameters with `fetch` and `axios`**

### **Adding Query Parameters to `fetch`:**

```javascript
fetch('https://api.example.com/data?name=John&age=30')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### **Adding Query Parameters to `axios`:**

```javascript
axios.get('https://api.example.com/data', {
  params: {
    name: 'John',
    age: 30
  }
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

---

## 🔹 **6. Sending Headers with Requests**

You may need to send custom headers, like for authentication (JWT tokens).

### **Headers with `fetch`:**

```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### **Headers with `axios`:**

```javascript
axios.get('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN'
  }
})
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

---

## 🔹 **7. Conclusion**

* **`fetch`** is a native browser API with a simple syntax, but lacks some convenience features like automatic JSON transformation and error handling.
* **`axios`** is more feature-rich and provides better error handling, but requires installing an external library.

Choose the method that best fits your project requirements. For smaller projects or if you prefer working with native APIs, `fetch` is fine. For more complex use cases (like global error handling, request/response interceptors), `axios` is a great choice.

---

This concludes the section on **API Integration** with `fetch` and `axios`.
