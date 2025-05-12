Here are your **Markdown (.md)** formatted notes on **Forms & Controlled Inputs in React**:

---

# 📋 Forms & Controlled Inputs in React

Working with forms in React involves managing input fields and their state using **controlled components**. You can also use libraries like **React Hook Form** and **Formik** for easier form handling and validation.

---

## ✅ Controlled Components

* A form input whose value is controlled by React state.
* You use `useState()` to keep track of form values.
* Ensures a single source of truth for form data.

```jsx
import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 🧩 React Hook Form

* Lightweight form library.
* Reduces re-renders, easy to integrate validation.
* Uses `register`, `handleSubmit`, and `watch`.

```bash
npm install react-hook-form
```

```jsx
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Username" />
      <input {...register('email')} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

## 📦 Formik

* Popular library for managing form state and validation.
* Integrates well with Yup for schema validation.

```bash
npm install formik
```

```jsx
import { Formik, Form, Field } from 'formik';

function SignupForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Field name="email" type="email" placeholder="Email" />
        <Field name="password" type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
```

---

## 📝 Summary

| Tool/Technique    | Use Case                           |
| ----------------- | ---------------------------------- |
| Controlled Inputs | Simple, direct state management    |
| React Hook Form   | Performance-optimized, minimal API |
| Formik            | Rich features, schema validation   |

---

Let me know if you’d like notes on **validation**, **Yup schemas**, or **handling dynamic fields** next!
