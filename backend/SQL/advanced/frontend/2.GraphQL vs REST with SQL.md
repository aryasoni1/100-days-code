Here are the notes in `.md` format for **GraphQL vs REST with SQL**:

---

# 🔄 GraphQL vs REST with SQL

Understanding how GraphQL and REST interact with SQL backends helps in designing scalable APIs and efficient UIs.

---

## 🔗 REST + SQL

### ✅ REST Basics:

* Multiple endpoints (`/users`, `/orders`)
* Data fetched by route
* Filters & queries via URL parameters

```http
GET /users?name=alice&sort=created_at&limit=10
```

### 🗃️ SQL Resolver Example:

```sql
SELECT * FROM users
WHERE name = 'alice'
ORDER BY created_at DESC
LIMIT 10;
```

---

## 🧠 GraphQL + SQL

### ✅ GraphQL Basics:

* Single endpoint (`/graphql`)
* Client specifies exactly what it wants
* Deeply nested relationships in one query

```graphql
query {
  users(filter: { name: "alice" }, sortBy: "created_at", limit: 10) {
    id
    name
    orders {
      id
      total
    }
  }
}
```

### 🧩 Resolvers Example (Node + SQL):

```js
const resolvers = {
  Query: {
    users: (_, { filter, sortBy, limit }) => {
      return db.query(
        `SELECT * FROM users WHERE name = $1 ORDER BY ${sortBy} LIMIT $2`,
        [filter.name, limit]
      );
    }
  },
  User: {
    orders: (user) => {
      return db.query('SELECT * FROM orders WHERE user_id = $1', [user.id]);
    }
  }
};
```

---

## 🔍 Filtering, Sorting, Searching (Frontend)

Both GraphQL and REST allow UI-driven queries:

* Input fields and dropdowns map to:

  * `filter` (e.g., name, status)
  * `sortBy` (e.g., date, relevance)
  * `search` terms (`LIKE` queries)

### REST Example:

```js
fetch(`/api/users?search=alice&sort=name`)
```

### GraphQL Example:

```graphql
query {
  users(filter: { search: "alice" }, sortBy: "name") {
    id
    name
  }
}
```

---

## 🆚 Comparison Table

| Feature                | REST                        | GraphQL                   |
| ---------------------- | --------------------------- | ------------------------- |
| Endpoint structure     | Many URLs                   | One endpoint              |
| Data shape control     | Fixed                       | Client-defined            |
| Overfetch/underfetch   | Possible                    | Avoided                   |
| SQL mapping complexity | Medium (one query/endpoint) | Higher (nested resolvers) |
| Caching                | Easier (HTTP-based)         | Requires custom logic     |

---

Would you like notes on **Subqueries & CTEs** or **Indexing & Performance** next?
