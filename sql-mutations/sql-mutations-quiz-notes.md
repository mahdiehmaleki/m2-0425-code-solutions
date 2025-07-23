# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  CRUD stands for:
  Create – INSERT
  Read – SELECT
  Update – UPDATE
  Delete – DELETE
- How do you add a row to a SQL table?
  INSERT INTO table_name (column1, column2)
  VALUES ('value1', 'value2');
- How do you add multiple rows to a SQL table at once?
  Add multiple sets of values in one INSERT statement:
  INSERT INTO table_name (column1, column2)
  VALUES
  ('value1a', 'value2a'),
  ('value1b', 'value2b'),
  ('value1c', 'value2c');
- How do you update rows in a database table?
  Use the UPDATE statement with a WHERE clause:
  UPDATE table_name
  SET column1 = 'new_value'
  WHERE condition;
- How do you delete rows from a database table?
  Use the DELETE statement with a WHERE clause:
  DELETE FROM table_name
  WHERE condition;
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  Without a WHERE clause, all rows in the table will be affected.
  This can lead to massive data loss or incorrect updates.
- How do you accidentally delete or update all rows in a table?
  By running an UPDATE or DELETE without a WHERE clause
- How do you get back the modified row without a separate `select` statement?
  Use the RETURNING clause
- Why did you get an error when trying to delete certain films?
  Likely because of foreign key constraints.

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
