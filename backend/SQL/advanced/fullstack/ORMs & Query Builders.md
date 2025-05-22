Here are the `.md` notes for **ORMs & Query Builders**:

---

# 🧩 ORMs & Query Builders

Object-Relational Mapping (ORM) frameworks and Query Builders are tools that help developers interact with databases more easily by providing abstractions to manage data without writing raw SQL queries. They also help in building scalable, maintainable applications by promoting separation of concerns.

## 🚀 What Are ORMs?

ORMs are libraries that allow you to interact with your relational database using objects in your programming language (such as JavaScript or Python). Instead of writing SQL queries directly, you work with models that represent database tables and use methods to query and manipulate data.

### Popular ORMs:

* **Sequelize** (Node.js)
* **Prisma** (Node.js)
* **SQLAlchemy** (Python)
* **TypeORM** (Node.js, TypeScript)

---

## ⚡ Query Builders

Query Builders provide a more flexible way to build SQL queries using methods and chainable syntax. They sit between raw SQL and ORMs and are often preferred when developers need more control over the generated queries.

### Popular Query Builders:

* **Knex.js** (Node.js)
* **Objection.js** (Node.js)

---

## 📚 ORM Examples

### 1. **Sequelize** (Node.js)

Sequelize is a promise-based ORM for Node.js that supports many SQL dialects, including MySQL, PostgreSQL, and SQLite.

* **Installation**:

  ```bash
  npm install sequelize mysql2
  ```

* **Basic Example**:

  ```javascript
  const { Sequelize, DataTypes } = require('sequelize');

  const sequelize = new Sequelize('mysql://user:pass@localhost:3306/mydb');

  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    }
  });

  // Sync and create table
  sequelize.sync().then(() => {
    console.log('Database & tables created!');
  });

  // Creating a new user
  User.create({
    firstName: 'John',
    lastName: 'Doe'
  }).then(user => console.log(user));
  ```

---

### 2. **Prisma** (Node.js)

Prisma is an advanced ORM with a powerful type system that integrates well with modern JavaScript and TypeScript applications.

* **Installation**:

  ```bash
  npm install prisma @prisma/client
  ```

* **Basic Example**:

  ```javascript
  const { PrismaClient } = require('@prisma/client');
  const prisma = new PrismaClient();

  async function main() {
    const user = await prisma.user.create({
      data: {
        name: 'Alice',
        email: 'alice@example.com',
      },
    });
    console.log(user);
  }

  main()
    .catch(e => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    });
  ```

---

### 3. **SQLAlchemy** (Python)

SQLAlchemy is a well-established ORM for Python that supports SQL databases such as PostgreSQL, MySQL, and SQLite.

* **Installation**:

  ```bash
  pip install sqlalchemy
  ```

* **Basic Example**:

  ```python
  from sqlalchemy import create_engine, Column, Integer, String
  from sqlalchemy.ext.declarative import declarative_base
  from sqlalchemy.orm import sessionmaker

  engine = create_engine('sqlite:///example.db', echo=True)
  Base = declarative_base()

  class User(Base):
      __tablename__ = 'users'
      id = Column(Integer, primary_key=True)
      name = Column(String)
      email = Column(String)

  Base.metadata.create_all(engine)

  Session = sessionmaker(bind=engine)
  session = Session()

  new_user = User(name='John Doe', email='john@example.com')
  session.add(new_user)
  session.commit()
  ```

---

## 📝 Writing Raw SQL vs Using Abstraction

### Raw SQL

Raw SQL allows you to write SQL queries directly, providing full control over the query structure. This approach can be beneficial when you need complex queries, custom logic, or fine-tuned performance optimizations.

* **Pros**:

  * Full control over the query.
  * Ideal for complex queries with custom optimizations.
  * Can optimize performance for specific database engines.

* **Cons**:

  * Can be more error-prone, especially when dealing with user input (SQL injection risk).
  * Requires developers to manually manage query construction, escaping, and database connections.
  * Less portable across different database engines (e.g., MySQL vs PostgreSQL syntax differences).

### Example of Raw SQL (using Node.js and `mysql2`):

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

connection.query('SELECT * FROM users WHERE name = ?', ['John Doe'], (err, results) => {
  if (err) throw err;
  console.log(results);
});
```

### ORM Abstraction

ORMs abstract away the raw SQL and provide a higher-level interface for working with your database. This helps developers focus on business logic rather than SQL syntax.

* **Pros**:

  * Easier to write and maintain queries.
  * Built-in protection against SQL injection.
  * Cross-database portability (e.g., switch from MySQL to PostgreSQL with minimal changes).
  * Object-oriented approach makes it easy to work with complex relationships.

* **Cons**:

  * Potential performance overhead due to abstraction layers.
  * ORM queries may not be as optimized for complex or large-scale operations.
  * Less control over the generated SQL (though many ORMs allow raw queries when needed).

### Example of ORM Query (using Sequelize):

```javascript
User.findAll({
  where: {
    name: 'John Doe'
  }
}).then(users => {
  console.log(users);
});
```

---

## 🔍 Choosing Between Raw SQL and ORMs

* **When to Use Raw SQL**:

  * Complex queries or performance-critical applications.
  * Need to optimize for a specific database engine.
  * Custom logic that doesn't fit well into the ORM structure.

* **When to Use ORM**:

  * Rapid development with common CRUD operations.
  * You want to work with objects instead of raw data.
  * Portability across different SQL databases.
  * Built-in features like migrations, associations, and validations.

---

## 🧑‍💻 Query Builders as an Alternative

Query Builders are a good middle ground between ORMs and raw SQL. They allow developers to write SQL queries in a more programmatic, flexible way while still avoiding the complexity of raw SQL.

### Example with Knex.js (Node.js):

```javascript
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
  }
});

knex('users')
  .where('name', 'John Doe')
  .select('*')
  .then(users => {
    console.log(users);
  });
```

---

## 🔑 Conclusion

* **ORMs** are great for rapid development, simplifying database interaction, and providing portability across different databases.
* **Raw SQL** gives you complete control over your queries and may offer better performance in some cases.
* **Query Builders** provide a balanced approach, offering flexibility and abstraction with greater control over the SQL queries than ORMs.

Choosing the right tool depends on the complexity of your application, your team's needs, and the level of performance optimization required.

---

Let me know if you'd like to dive deeper into any of the mentioned tools or examples!
