# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?
  SQL (Structured Query Language) is a domain-specific language used to communicate with relational databases—primarily for querying, inserting, updating, and managing data.
  Difference: SQL is declarative (you describe what you want), while JavaScript is imperative (you write code that describes how to do something). SQL interacts with data; JavaScript is a general-purpose programming language used mostly for web development.
- How do you retrieve specific columns from a database table?
  SELECT column1, column2 FROM table_name;
- How do you filter rows based on some specific criteria?
  SELECT \* FROM table_name WHERE condition;
- What are the benefits of formatting your SQL?
  Improves readability
  Makes debugging easier
  Enhances collaboration among developers
  Helps maintain consistency in large codebases
  Reduces likelihood of errors
- What are four comparison operators that can be used in a `where` clause?
  = (equal to)
  != or <> (not equal to)
  < (less than)
  > = (greater than or equal to)
- How do you limit the number of rows returned in a result set?
  SELECT \* FROM table_name LIMIT 10;
- How do you retrieve all columns from a database table?
  SELECT \* FROM table_name;
- How do you control the sort order of a result set?
  Use the ORDER BY clause: SELECT _ FROM table_name ORDER BY column_name ASC;
  Use DESC for descending order: SELECT _ FROM table_name ORDER BY column_name DESC;

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
