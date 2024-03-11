### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a open source JavaScript library used for building UIs and single page applications.

I would use React with a application that has a complex UI.

Because of React's component structure (component-based-architecture) code is more managable, modular, and easier to test. 

- What is Babel?
Babel is a Javascript compiler that translates JavaScript into a version that is compatible with all browsers.

- What is JSX?
JSX stands for JavaScript syntax extension and allows you to write "HTML-like" markup inside a Javascript file. JSX isn't directly supported by browsers so it needs to be translated by a translator like Babel which converts JSX to valid JavaScript for the browser.

- How is a Component created in React?
A component is created by creating a javascript function that returns markup.

- What are some difference between state and props?
State is managed within a component and is mutable.
State allows a component to have memory and keep track of any data that is changing.
When state is changed, the component is re-rendered.

Props (short for properties) are used to pass data between components and are read-only(they can't be changed). They are passed from parent component to child component as attributes.

(state and props are both JavaScript objects)


- What does "downward data flow" refer to in React?
Downward data flow refers to props being passed from parent components to child components.

- What is a controlled component?
In a controlled compoent, state is controlled by the Parent component.

Uncontrolled components don't use state. Data is handled by the DOM. The DOM is queried using ref to get the value. 


Form example:
In a controlled component, the form data is controlled by the state of the React component.

- What is an uncontrolled component?
In an uncontrolled component, the form data is handled by the DOM.

- What is the purpose of the `key` prop when rendering a list of components?

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
The key prop is a unique identifier assigned to elements in a list that helps react keep track of what is changing.

- Describe useEffect.  What use cases is it used for in React components?

useEffect is used when we want to run code after a component has rendered. It is a built in hook for "side-effects".
Some cases where we would want to use it are for getting data from an API, setting timers, manually changing the DOM (like setting document.title to be something).



- What does useRef do?  Does a change to a ref value cause a rerender of a component?

useRef is a React Hook that allows you to reference a value that isn't needed for rendering. A change to ref value does not cause a re-render of a component.

useRef accepts one argument as the inital value and returns a reference which is an object that has the property 'current'

- When would you use a ref? When wouldn't you use one?
An example for using a ref would be when you are using a counter. If you use state, the component re-renders every change and you would keep returning 0 (if you start at 0.) Using ref will not cause a re-render of the component.

Counter/Stopwatch, clicker count, mouse move count.

"When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref."
https://react.dev/learn/referencing-values-with-refs

An example for not using ref would be showing/hiding an element like a popup component. You would not want to use ref in handling user input into forms.


- What is a custom hook in React? When would you want to write one?
React hooks are reusable functions. You should use custom hooks whenever you can refactor repeated logic between components for reusability. (When you have logic that needs to be used by multiple components, that can be put into a custon hook).
Example: making a custom hook to make API calls.