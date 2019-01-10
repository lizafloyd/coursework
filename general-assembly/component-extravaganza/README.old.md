# Component Extravaganza

Let's build some components to put those newly formed React skills to the test!

## Submission

Submit an **issue on this repo** by **5:00PM** with links to your forked repos of each exercise you completed.

Also in the submission, please include your overall *comfort* and *completion* as well as any questions or specific areas designated for feedback.

## Components

Choose one or more exercises from the list below, and implement the outlined features using React.

### [Password Validator](https://github.com/ga-wdi-exercises/react-password-validator)

Build a Sign Up Form component that:

  - Prompts the user to enter their **email**, **password** and **password confirmation**
  - When the user submits the form:
    - Notify the user of whether or not their submission was valid

**Bonus**:

  - When the passwords do not match, the inputs display should be changed
  - Add basic validation on a user's email (i.e. every email must contain an `@` sign...)

### [Stopwatch](https://github.com/ga-wdi-exercises/react-stopwatch)

Build a Stopwatch component that:

- Allows the user to press a button "Start" to start the stopwatch
  - While the stopwatch is started, the incrementing time should be displayed
- Allows the user to press a button "Pause" to pause the stopwatch at the current time
  - Re-clicking the "Pause" button should resume the stopwatch
- Allows the user to press a button "Reset" to stop the stopwatch and reset the time to `0`

**Bonus**:

- When the stopwatch is at `0`, the display time should be a different style
- When the user first visits the page, the only button that should be active is "Start"
  - The other buttons should be unlocked only after the user clicks "start"

### [Shopping Cart](https://github.com/ga-wdi-exercises/react-shopping-cart)

Build a Shopping Cart component that:

- Allows the user to add a new **item** to the cart
  - Each item has a **name**, **cost** and **quantity**
- Displays each item in the cart, as well as the calculated **total** of all items cost
- Allows the user to update the quantity of each item in the cart
- Allows the user to remove an item from the cart
- Allows the user to wrap an item as a gift for an incurred cost
- Calculates the sales tax and adds it to the subtotal of the items to be purchased

**Bonus**:

- Allows the user to enter a unique **promo** that applies a pre-designated discount off the total of the cart
  - Your cart should be initialized with a list of predetermined promo codes, and only valid inputed codes receive the discount
  - No promo can be used more than once

## Tips / Resources

- Plan first!
  - Sketch a quick wireframe of what your component will look like
  - Make a mental list of all necessary data attributes to be tracked by your component
  - Think of the types of user actions and how each action changes the component
- [Forms in React](https://facebook.github.io/react/docs/forms.html#controlled-components)
- [Components and Props](https://facebook.github.io/react/docs/components-and-props.html)
- [Adding State to a Component](https://facebook.github.io/react/docs/state-and-lifecycle.html#adding-local-state-to-a-class)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
