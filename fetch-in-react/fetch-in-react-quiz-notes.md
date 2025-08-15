# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  The fetch() function (built into modern browsers) can be used to make HTTP requests.
- What two things need to be done to properly handle HTTP request errors? Why?
  1- Check the HTTP status code before assuming the request succeeded (because fetch only rejects on network errors, not HTTP errors like 404 or 500).
  2- Wrap the request in a try...catch block to handle both network failures and your own thrown errors, so the UI can respond appropriately instead of crashing.
- How can `useEffect` be used to load data for a component?
  Place fetching logic inside useEffect so it runs at the right time in the component lifecycle, and store the result in useState so the UI updates when data arrives.
- How do you use `useEffect` to load component data just once when the component mounts?
  Pass an empty dependency array ([]) to useEffect so it only runs on initial mount:
- How do you use `useEffect` to load component data every time the data key changes?
  Put dataKey in the dependency array so useEffect runs whenever it changes
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  React Query (TanStack Query) → Handles caching, background refetching, error states, retries.
  SWR → Lightweight data fetching with caching and revalidation.
  Redux Toolkit Query (RTK Query) → Integrates with Redux for centralized state + async data management.
  Apollo Client (for GraphQL) → Handles queries, caching, and subscriptions.
  Custom hooks with caching layers if you need fine-grained control.

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
