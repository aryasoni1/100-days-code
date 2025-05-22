Absolutely! Here's a curated list of **50 MySQL coding practice problems**, categorized according to your roadmap tracks — from fundamentals to system design–oriented problems.

---

## ✅ **1. MySQL Fundamentals (All Roles)**

*Basic SQL, data types, and design*

1. Create a table for users with `id`, `name`, `email`, and `created_at`.
2. Insert 5 users into the users table.
3. Update a user’s email by their `id`.
4. Delete a user whose name is "John".
5. Select all users, ordered by `created_at` descending.
6. Filter users who registered in the last 7 days.
7. Add a new column `is_active` to the users table.
8. Change the data type of `email` from `VARCHAR(100)` to `VARCHAR(150)`.
9. Drop the `is_active` column from the users table.
10. Create a table `products` with columns `id`, `name`, `price`, and `stock`.

---

## 🎯 **2. Frontend-Friendly Queries**

*Support frontend pagination, sorting, and search*

11. Fetch users with pagination: page 2, limit 10.
12. Search for products where name contains "phone".
13. Sort products by price, highest first.
14. Filter products by a price range: 100 to 500.
15. Count how many users registered today.

---

## 💻 **3. Backend Developer Practice**

*Relationships, joins, aggregations, and performance*

16. Create `posts` table linked to `users` (One-to-Many).
17. Fetch all posts with author names (JOIN).
18. Count posts per user using `GROUP BY`.
19. Create `comments` table linked to `posts` and `users`.
20. Fetch all comments on a post with commenter names.
21. Get average number of comments per post.
22. Use a subquery to fetch users with more than 3 posts.
23. Use `CASE` to categorize users: new, active, or dormant.
24. Use `COALESCE` to replace nulls in a query result.
25. Use `EXPLAIN` to analyze a query and add appropriate index.

---

## 🔐 **4. Security & Transactions**

*ACID, roles, SQL injection prevention*

26. Write a transaction: transfer money between two user accounts.
27. Rollback a transaction on error (e.g., insufficient balance).
28. Set a user's role and restrict access with GRANT.
29. Revoke permissions from a user.
30. Prevent SQL injection using prepared statements in Node.js.

---

## 🌐 **5. Full-Stack Queries**

*Node.js + MySQL, pagination, and advanced features*

31. Write a query to return paginated blog posts with comment counts.
32. Implement user login: SELECT user WHERE email AND password hash match.
33. Write a query for a dashboard showing total users, new signups today, and active users.
34. Create a migration that adds a `profile_picture` column.
35. Seed sample user data using `knex` or `sequelize`.

---

## 🧠 **6. SDE Interview Prep**

*System design, real-world schemas, scalability*

36. Design a schema for an e-commerce app: users, products, orders.
37. Query total sales per product this month.
38. Get top 5 best-selling products in the past 7 days.
39. Normalize a user-post-comment schema to 3NF.
40. Denormalize the same schema for analytics.
41. Query orders with item details and user info in a single query.
42. Implement optimistic locking with a version number column.
43. Use transactions to place an order (update stock, insert order).
44. Show a deadlock scenario and how to fix it.
45. Query for users with their latest message (messaging app design).

---

## 🚀 **7. Advanced Projects & Optimization**

*Advanced SQL + scaling practices*

46. Partition a large `logs` table by month.
47. Write a query using `UNION` to combine recent users and admins.
48. Use a recursive query (CTE) to get category hierarchy.
49. Create a view for active orders with customer data.
50. Setup master-slave replication and test a read query on replica.

---

Would you like this list formatted into a **PDF worksheet** or turned into an **interactive SQL playground challenge sheet**?
