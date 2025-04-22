# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to programmatically create a list of React components?
  when we have repetitive UI elements that are based on dynamic data
- Why is it important for React components to be data-driven?
  React components should be data-driven to ensure that the UI automatically updates in response to changes in state or props. This makes the UI more dynamic, predictable, and easier to manage, especially when working with asynchronous data or user interactions.
- What `Array` method is commonly used to create a list of React components?
  .map() method
- Why do components in a list need to have unique keys?
  React uses keys to identify which items have changed, are added, or are removed. This helps React optimize re-rendering and improves performance.
- What is the best value to use as a "key" prop when rendering lists?
  The best value to use as a key is a unique and stable identifier, such as an ID from the data source

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
