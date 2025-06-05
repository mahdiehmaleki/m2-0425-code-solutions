# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  The <dialog> element in HTML is used to create modal or non-modal dialog boxes—such as pop-ups, alerts, or confirmation messages.
- How do you show and hide a modal dialog?
  dialogRef.current.showModal()
  dialogRef.current.close()
- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  In React, you typically manipulate child components using props, state, or context.
  However, this won't work directly with <dialog>'s native .showModal() or .close() methods because these are imperative DOM methods, not React-controlled props or attributes.
- How do you call the dialog element's functions in React?
  Use a ref to access the dialog DOM element
- How can you render nested components or JSX elements in React?
  Use composition via children or JSX nesting

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
