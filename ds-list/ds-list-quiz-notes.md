# ds-list-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the List data structure.
  A List is an ordered, linear collection of elements where each element is indexed and can be accessed by its position.
- What are some examples of when you would use a List?
  You would use a List when:
  You need to maintain the order of elements (e.g., to-do lists, playlists).
  You need random access to elements using an index.
  You need to store a collection of items of the same or different types.
  You want to dynamically add or remove elements.
- How do you read an element of a List given its index? What is its time complexity?
  You access the element using list[index].
  Time complexity: O(1) (constant time), because it's a direct memory access.
- How do you add an element into a List at a given index? What is its time complexity?
  splice() in JavaScript.
  Time complexity: O(n) in the worst case, because elements after the index must be shifted to the right.
- How do you update an element in a List at a given index? What is its time complexity?
  You assign a new value like list[index] = newValue.
  Time complexity: O(1) (constant time), as it’s a direct access and overwrite.
- How do you remove an element from a List at a given index? What is its time complexity?
  splice() in JavaScript.
  Time complexity: O(n) in the worst case

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
