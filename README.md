DevStack
project description
DevStack is a technology stack builder web aplication for developers.
Users can explore different frontend,backend,database,and development tools and add their preferred technologies to build their ideal stack
Tecnologies Used
React
TypeScript
Tailwind CSS
React Toastify
JSON
Vite

key Features
Add technologies to your personal stack and remove them when needed.
het toast notifications when adding,removing,or duplicating technologies

React Questions and Answers
1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript/TypeScript.
React uses JSX because it makes the UI easier to write and understand.
2. What is the difference between props and state?
props are used to pass data from a parent component to a child component .
props are read only 
State is data that belongs to a component and can change over time .
When state changes ,React re-renders the component.
3. What does the useState hook do, and where did you use it in this project?

useState is a React hook used to create and manage state in a component.
in this project,useState is used to store the technologies loaded from the JSON file and to keep track of the technologies selected by the user
4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in a React component.

We used it to load our technology data from the JSON file when the component first renders.

5. . Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.
The key helps React understand which item was added, removed, or changed, so React can update the UI efficiently.
6.What is conditional rendering? Show one place you used it.

conditional rendering means showing defferent UI elements based on a condition.
in this project conditional rendering is used to show a loading spinner while the technology data is being fetched and to show the empty stack message when no technology has been selected.
7. How do you pass data from a parent component to a child component?and how does a child send something back to the parent?

data can be passed from a parent component to a child component using props.
A child component can commnuicate with its perent by receiving a callback.
function as a prop and calling taht function.
In this project TechnologyCard passes selectedTechnologies and remove function to the YourStack component through props.  
