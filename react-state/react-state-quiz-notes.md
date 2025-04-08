# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  Hooks are special functions introduced in React 16.8 that let us "hook into" React features (like state and lifecycle methods) from function components.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  The function name must start with use followed by an uppercase letter
  so user() would not be a valid hook name, but useState and useCallback would be valid
  Hooks can only be called by React components and other hooks
  All hooks in a component must always be called at the top level of a component, and in the same order
  This means you cannot call hooks in nested functions or conditional statements
- What is the purpose of state in React?
  State holds data that can change over time and affect what the user sees. It allows components to be dynamic and responsive — for example, showing updated content, tracking input fields, or toggling UI elements.
- Why can't we just maintain state in a local variable?
  Local variables don’t persist between renders. When a component re-renders, local variables are re-initialized, losing their previous values.
  React’s state persists across renders, and changing it triggers a re-render, keeping the UI in sync with data.
- What two actions happen when you call a `state setter` function?
  React schedules a re-render of the component.
  The state variable is updated with the new value on the next render.
- When does the local `state variable` get updated with the new value?
  The state variable gets updated on the next render, not immediately. After calling the setter, the component re-renders, and the new value becomes available.

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
