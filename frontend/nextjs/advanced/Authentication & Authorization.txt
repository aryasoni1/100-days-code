Here's a beginner-friendly, Markdown-formatted note on **Authentication & Authorization** in **Next.js**:

---

# 🔐 Authentication & Authorization in Next.js

---

## 🧾 What’s the Difference?

| Concept            | Meaning                                               |
| ------------------ | ----------------------------------------------------- |
| **Authentication** | Verifying who the user is (login with Google, GitHub) |
| **Authorization**  | What the user can access (roles, permissions)         |

---

## 🔑 Authentication with NextAuth.js

### 📦 Install NextAuth.js

```bash
npm install next-auth
```

---

### 📁 Create Auth API Route

File: `/pages/api/auth/[...nextauth].js`

```js
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
```

---

### ⚙️ Add `.env` Variables

```env
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
GOOGLE_CLIENT_ID=your_google_id
GOOGLE_CLIENT_SECRET=your_google_secret
NEXTAUTH_SECRET=any_random_string
NEXTAUTH_URL=http://localhost:3000
```

---

### 🧠 Use Session in Frontend

```bash
npm install next-auth
```

```js
import { useSession, signIn, signOut } from "next-auth/react";

const { data: session } = useSession();

if (!session) {
  return <button onClick={() => signIn()}>Sign in</button>;
}
```

---

## 🛡️ Authorization with Middleware (RBAC)

### 👮 Add Middleware for Protected Routes

File: `middleware.js` (Next.js 13+)

```js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const isAuth = !!token;
  const isAdmin = token?.role === 'admin';

  const url = req.nextUrl.clone();

  if (!isAuth && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/auth/signin";
    return NextResponse.redirect(url);
  }

  if (url.pathname.startsWith("/admin") && !isAdmin) {
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
```

> 🔒 You can attach roles via JWT callback in `[...nextauth].js`

---

### 🔧 Add Role in JWT Callback

```js
callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.role = user.email === 'admin@example.com' ? 'admin' : 'user';
    }
    return token;
  },
  async session({ session, token }) {
    session.user.role = token.role;
    return session;
  },
}
```

---

## 🧠 Summary

| Feature            | Tool/Method              |
| ------------------ | ------------------------ |
| Social Auth        | NextAuth.js + Providers  |
| Custom Roles       | JWT Callback in NextAuth |
| Protected Routes   | `middleware.js`          |
| Session Management | `useSession()` hook      |

---

## ✅ Best Practices

* Store secrets in `.env`, not in code
* Use middleware for protected routes
* Encode roles inside JWT token
* Always check roles on server **and** client when needed

---

Let me know if you'd like a working full-stack example with role-based dashboards!
