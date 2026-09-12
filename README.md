# DevStack Website

This is an interactive and modern react website. Users can choose their required technology which they like and create a ideal development stack. This website give beautiful UI and smooth UX that a user will experience. 



## Technology Stack

This project build according to modern development standard:
**Frontend Framework: React
**Style and UI: Tailwind CSS, DaisyUI
**Notification System: React toastify
**Data Source: Local JSON API Fetching



## Key Feature:

1. Interactive stack selection: 
User can select their required technology which they like most and create a custom stack that different/vary user to user. After select one stack the button will dim that's why user can not select one stack twice.

2. Smart Notification System:
Toast Notification appear to User when technology added to sidebar.

3. Global Theme and Modern Design:
A shared Brand gradient color is used in the hole application. 


i) What is JSX, and why is it used in React?
Ans:JSX means JavaScript XML. This is a javascript syntax expression which is used in react. It is used in react due to readability, dynamic data easily used, logic and markup in one file, well security and easy debugging.
ii) What is the difference between props and state?
Ans: props is a one kind of argument or data that is sent to mother to child component. It is one direction propagation. State is a internal memory of a component to track data that change time to time in UI.
iii) What does the useState hook do, and where did you use it in this project?
Ans: useState hook hold and update the initial data or state of a component. When one technology select and toast a massage useState is used there to change the state in UI on this project.
iv) What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect handles side effects.This includes fetching data from APIs. It need to load json data because it only fetch required json data once.
v) Why does every item in a .map() list need a unique key prop?
Ans: when render a list of elements using map() react needs to keep track of its items. The key act as a unique ID for each element.
vi) What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Conditional rendering is the practice of showing different UI elements based on a specific condition (just like if/else statements in regular JavaScript).
vii)How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: Passing Data:
Parent to child:(using props) by adding attributes to the child component's tag.
Child to Parent:(Using callback).