# unit-tests-jest-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are unit tests?
  Unit tests are automated tests written by developers to check if individual pieces of code (units)—usually functions or methods—work as expected.
- Why is it important to write unit tests?
  to catch bugs early, enable safe refactoring, improve code quality, faster debugging , and support collaboration
- What code should be tested with a unit test? What code is not well suited for unit tests?
  Pure functions (no side effects), Business logic, Utility/helper functions, and Validation logic should be tested.
  UI components (better tested with integration or end-to-end tests), Code with side effects, like: Database access, Network requests, and File I/O are not suited.
- What is Jest? What are some other popular JavaScript unit testing frameworks?
  Jest is a popular JavaScript testing framework developed by Meta (Facebook).
  It is mainly used with React applications but can be used for any JavaScript codebase.
  Mocha – Flexible testing framework, often paired with Chai (assertion library).
  Jasmine – All-in-one framework, popular before Jest.
  AVA – Minimal and fast test runner, good for async-heavy code.
  Vitest – Modern, fast test framework designed for Vite projects.
  QUnit – Used primarily with jQuery-based projects.

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
