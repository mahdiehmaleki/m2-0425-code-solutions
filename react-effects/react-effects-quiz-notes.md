# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when it is inserted into the DOM for the first time, right after the first render.
- What is a React Effect?
  A React Effect (using useEffect) is a hook that lets you perform side effects in functional components, such as data fetching, event listeners, or manual DOM manipulation.
- When should you use an Effect and when should you not use an Effect?
  Use an Effect when:
  You need to perform side effects (e.g., API calls, subscriptions, event listeners).
  You want to synchronize a component with external systems (e.g., localStorage, network requests).
  Don’t use an Effect when:
  You can accomplish the same thing during rendering (e.g., calculating values).
  You are updating state based solely on props or previous state (consider useMemo or useCallback instead).
- When do Effects run?
  After the component renders to the screen.
  If dependencies are provided, it runs after mount and after any change in those dependencies.
- What function is used to declare an Effect?
  useEffect()
- What are Effect dependencies and how do you declare them?
  Dependencies are variables or values used inside the Effect. You declare them in the second argument of useEffect as an array
- Why would you want to clean up from an Effect?
  To prevent memory leaks, remove unwanted listeners, cancel network requests, or clean up intervals when a component unmounts or dependencies change.
- How do you clean up from an Effect?
  Return a cleanup function from inside the useEffect.
- When does the cleanup function run?
  Before the effect re-runs due to dependency changes.
  When the component unmounts.

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
