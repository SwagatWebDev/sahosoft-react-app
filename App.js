/**
const heading = React.createElement("h1", {id: 'myHeading'}, "Hello World from React");
console.log(heading);
const parentData = document.getElementById('root');
const root = ReactDOM.createRoot(parentData);
root.render(heading);
*/

/*const heading = React.createElement('div', {id: "parent"}, [
    React.createElement('div', {id: 'child1'}, [
        React.createElement('h1', {id: "h1TagChild1"}, "I am from h1 Tag Child1"),
        React.createElement('h2', {id: "h2TagChild1"}, "I am from h2 Tag Child1"),
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {id: "h1TagChild2"}, "I am from h1 Tag Child2"),
        React.createElement('h2', {id: "h2TagChild2"}, "I am from h2 Tag Child2"),
    ])
]);*/

const heading = React.createElement("h1", {id: 'parent'}, "Hello World from React");
console.log(heading);
const parentData = document.getElementById("root");
const root = ReactDOM.createRoot(parentData);
root.render(heading);
