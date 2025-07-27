# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  Create → POST
  Read → GET
  Update → PUT or PATCH
  Delete → DELETE
  No, the server is not required to follow these conventions
- What is Express middleware?
  Express middleware is a function that has access to the request (req), response (res), and next middleware function (next) in the application’s request-response cycle.
- What is Express middleware useful for?
  Middleware is used for:
  Logging
  Authentication & authorization
  Parsing request bodies (e.g. express.json())
  Handling errors
  Serving static files
  Running any logic before sending the final response
- How do you mount a middleware with an Express application?
  app.use()
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req (request object)
  res (response object)
  next (function to move to the next middleware)
- How do you specify and retrieve route parameters?
  We specify route parameters using a colon (:) in the route path.
  req.params is an object containing route parameters.

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
