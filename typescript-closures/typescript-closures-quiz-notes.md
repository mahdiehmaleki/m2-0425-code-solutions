# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  Scope is determined at the time of function declaration, not when the function is called. This is known as lexical (or static) scoping.
- What allows JavaScript functions to "remember" variables from their surroundings?
  Closures do. A closure allows a function to remember and access variables from its lexical scope even when the function is executed outside that scope.
- What values does a closure contain?
  A closure contains Its own variables, and Variables from its outer (enclosing) function scopes, which were in scope at the time the closure was created.
- When is a closure created?
  when a function is defined inside another function and the inner function accesses variables from the outer function.
- How can you tell if a function will be created with a closure?
  If a function is nested inside another function, and Accesses variables from the outer function's scope, then it creates a closure.
- In React, what is one important case where you need to know if a closure was created?
  One key case is inside event handlers or useEffect callbacks, especially when You're using state or props inside a function defined in the component, And the value might become stale because the function "closed over" an old value.

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
