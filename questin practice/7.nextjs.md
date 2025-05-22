Absolutely! Here's a **Next.js coding practice set with 50+ hands-on questions**, mapped to your structured **roadmap**. This will help you build muscle memory in **frontend development, backend API routes, fullstack integration**, and even **SDE-level architectural challenges**.

---

## ✅ **1. Next.js Fundamentals (All Roles)**

**Kick off with routing, components, and basic pages.**

1. Create a new Next.js app using `create-next-app`.
2. Build a simple `Home` and `About` page using file-based routing.
3. Add a `Navbar` component and include it on all pages using a layout.
4. Create a dynamic route like `/blog/[slug].js` and display the slug.
5. Add a `404.js` page to customize the “Page Not Found” screen.
6. Use `Link` from `next/link` for client-side navigation.
7. Add global CSS and a CSS Module scoped to a component.

---

## 🎯 **2. Next.js for Frontend Development**

**Rendering strategies, SEO, and frontend optimization.**

8. Use `getServerSideProps` to fetch data at request time.
9. Use `getStaticProps` + `getStaticPaths` for blog generation.
10. Implement Incremental Static Regeneration (ISR) using `revalidate`.
11. Use `next/image` to display an optimized responsive image.
12. Add `next/head` metadata to set page title and description.
13. Create a responsive card layout using Tailwind CSS.
14. Implement a global layout using the `app/` directory (Next.js 13+).
15. Add a loading UI using `loading.js` in a route.
16. Add structured data (JSON-LD) for SEO.
17. Create a dark/light theme toggle using Tailwind + `useState`.

---

## 💻 **3. Next.js for Backend/API Development**

**Practice backend logic with API routes.**

18. Create an API route at `/api/hello` that returns JSON `{ msg: "Hello" }`.
19. Handle POST requests in `/api/contact` with `req.body`.
20. Connect to a local MongoDB/Postgres DB from an API route.
21. Set up Prisma and define a simple User model.
22. Write an API route to fetch users from the DB.
23. Add CORS headers to your API route for cross-origin access.
24. Create a middleware that logs each API request.
25. Use NextAuth.js to create login with GitHub credentials.
26. Protect an API route by checking if the session exists.
27. Build a route that handles file upload using `formidable`.

---

## 🌐 **4. Full-Stack Development with Next.js**

**Integrate frontend + backend + DB into working full-stack features.**

28. Create a full CRUD todo app with API routes and MongoDB/Prisma.
29. Build an authenticated dashboard using NextAuth.js.
30. Add role-based access using middleware (admin/user).
31. Display user-specific data from the DB after login.
32. Add a form with validation that submits to an API route.
33. Save form data to the database and return a success response.
34. Create an SSR page that preloads data based on the session.
35. Use `.env.local` to load DB credentials and secret keys.
36. Show different UI components based on user role.
37. Integrate a Markdown editor and render blog posts dynamically.

---

## 🧠 **5. Next.js for SDE Interviews & Architecture**

**Test optimization, performance, security, and real-world system design.**

38. Split large components into smaller reusable ones using a clean architecture.
39. Add `React.memo` to avoid unnecessary re-renders.
40. Implement a component that loads dynamically using `next/dynamic`.
41. Lazy-load a charting component on scroll.
42. Use `middleware.ts` to redirect unauthenticated users from protected pages.
43. Track page views using `Vercel Analytics` or Google Analytics.
44. Add caching headers to an API response for performance.
45. Create a simple logging system using `winston` or a custom logger.
46. Implement rate limiting middleware for API routes.
47. Deploy your Next.js app to Vercel and verify SSR/ISR behavior.
48. Set up GitHub Actions to automatically deploy your app on push.
49. Add Cypress tests for one of your pages and forms.
50. Implement a scalable folder structure for a SaaS dashboard.
51. Design a Stripe-powered subscription system with webhook handling.

---

## Bonus Project-Based Practice

### Beginner Projects:

* Personal portfolio site using `pages/` + `next/image`
* Static blog site using Markdown + ISR

### Intermediate Projects:

* Auth dashboard with NextAuth.js, Prisma, PostgreSQL
* Notes app with API routes and CRUD

### Advanced Projects:

* E-commerce site with cart, checkout, and Stripe integration
* SaaS analytics dashboard with role-based UI and usage tracking
* Real-time collaboration app using WebSockets and Next.js

---

Would you like these **Next.js coding problems** in a **PDF practice workbook**, **Notion tracker**, or as **interactive GitHub challenges** to track your progress?
