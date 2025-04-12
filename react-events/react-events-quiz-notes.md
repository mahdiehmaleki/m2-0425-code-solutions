# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  An event in React is an object that represents a user interaction with the interface — such as:Clicking a button.
- What is an "event handler"? Which component declares the handler?
  An event handler is a function that gets called in response to an event. The component that needs to respond to the event declares the handler — usually the parent or the component that owns the logic.
- How do you pass an event handler to a React component?
  You pass it like a prop to the component, just like any other value.
- What is the naming convention for event handlers?
  tart with handle and followed by the event or action.
- What is an "event handler prop"? Which component declares the prop?
  An event handler prop is a prop whose value is an event handler function. It is declared by the parent component, and passed to the child component so the child can notify the parent when something happens.
- What are some custom event handler props a component may wish to define?
  Custom event handler props are named to describe what happened, not how.
- What is the naming convention for custom event handler props?
  Custom event handler props follow the “on” + [event/action] format, in camelCase such as onClick

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
