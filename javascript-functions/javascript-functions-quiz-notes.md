# javascript-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a function in JavaScript?
a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.


- Describe the parts of a function **definition**.
a function starts with function followed by the functionName followed by (input) followed by curly braces which is the declaration block.  Inside the declaration block is where you perform a task or calculation and return a value.

- Describe the parts of a function **call**.
you call the function by its name and passing in necessary argument(s)

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?
In a function call you call the function with x arguments. and then itll spit out some result
When you define a function, the function is defined with x parameters. has curly braces and set of instructions.

- What is the difference between a **parameter** and an **argument**?
you define a function with parameters.
you call a function with arguments.

- Why are function **parameters** useful?
it serves as a placeholder for arbitruary input values.

- What two effects does a `return` statement have on the behavior of a function?
it ends the execution of the function.
returns control back to the where it was called.


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
function addTwoNumbers(x, y) {
  const sum = x+ y;
  return sum;
}
const addTwoNumbersResult = addTwoNumbers(3,4);
console.log('value of addTwoNumbersResult is: ', addTwoNumbersResult)
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
  width:100%
}
```
