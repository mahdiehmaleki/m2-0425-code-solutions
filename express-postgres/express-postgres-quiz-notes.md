# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  The pg package (node-postgres) is a PostgreSQL client for Node.js. It lets your Node/Express server connect to a PostgreSQL database, send SQL queries, and receive results.
- How do you tell `pg` which database to connect to?

2. How do you tell pg which database to connect to?
   You provide connection details when creating a Client or Pool instance. This can be done using:
   Individual config options (user, host, database, password, port)
   A connection string (e.g., postgres://user:password@host:port/dbname)
   Environment variables like PGUSER, PGHOST, PGDATABASE, PGPASSWORD, PGPORT.

- How do you send SQL to PostgreSQL from your Express server?
  .query()
- How do you access the rows that get returned from the SQL query?
  The .query() method returns an object where rows contains the actual data as an array of objects
- What must you always remember to put around your asynchronous route handlers? Why?
  try/catch block
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  SQL Injection Attack: A security vulnerability where an attacker inserts malicious SQL into your queries, potentially reading, altering, or deleting sensitive data.
  How to avoid in pg: Always use parameterized queries with placeholders ($1, $2, …) and provide values as an array to .query(). This ensures the data is treated as a value, not executable SQL.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
