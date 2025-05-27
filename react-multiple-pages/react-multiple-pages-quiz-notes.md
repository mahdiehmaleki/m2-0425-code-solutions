# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?
  In an SPA, the browser's URL updates without a full page reload. The JavaScript app intercepts navigation events and updates the URL using the History API, allowing smooth transitions between views. Users expect:
  The URL to reflect the current page/view they are on.
  They can use the back/forward buttons in the browser.
  They can bookmark or share the URL, and it will take them back to the same place.
- What NPM package can be used to make navigating a React app behave as users expect?
  react-router-dom
- Which React Router component(s) can be used to set up your app's navigation?
  <BrowserRouter> – wraps your app and enables HTML5 history mode.
  <Routes> – declares all route definitions.
  <Route> – maps a URL path to a React component.

- How does React Router match the browser URL to one of your app's React components?
  React Router compares the current browser URL against the path props of <Route> components and renders the matching component. It uses pattern matching (e.g., /user/:id) to handle dynamic segments.
- What is the purpose of React Router's `Outlet` component?
  <Outlet> is a placeholder used in nested routes to render child routes inside their parent route’s layout.

- What React component is used to statically navigate to another page? What HTML element does it render to?
  Component: <Link to="/path">
  Renders to: <a href="/path">
  It behaves like an anchor tag but uses the history API to avoid full reloads.
- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  useParams()
  Example: For route /user/:id, const { id } = useParams();
- What React Router hook is used to navigate programmatically?
  useNavigate()
  Usage: const navigate = useNavigate(); navigate('/dashboard');

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
