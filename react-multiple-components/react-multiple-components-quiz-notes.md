# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?
  1- Starting from a UI mockup, identify pieces that would make good components.
  2- Determine the UI state that must be held in the components and where that state should live.
  3- Determine the events (actions) that need to modify state, which child components they originate in, and how parent components should respond to them.
- How does data flow in React?
  only flows from parent to child
- How can children components modify state in their parents?
  The parent passes a function (like a handler) down to the child as a prop.
  The child calls that function when it wants to request a state change.
  The parent's function then updates its own state.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
