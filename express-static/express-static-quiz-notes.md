# express-static-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the Express Static middleware?
  is to serve static files such as HTML, CSS, JavaScript, images, fonts, and other assets to the client directly from the file system.
- What does `express.static()` return?
  express.static() returns a middleware function that can be used with app.use() to serve static assets from a specified directory.
- What are several examples of static files?
  .html files
  .css stylesheets
  .js JavaScript files
  .jpg, .jpeg, .png, .svg, .gif image files
  .woff, .woff2, .ttf font files
  PDFs, icons, or other downloadable assets
- What is a good way to serve application images using Express?
  app.use('/images', express.static('public/images'));

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
