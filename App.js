import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element => JavaScript Object => rendering to HTML Element
// const heading =
//     React.createElement("h1", {id: "parent"}, "Hello World from React 🚀");
// console.log(heading);
// const jsxHeading =
//     (<div id = "heading">
//     <h1 id="parent" className="head">
//     Hello World from React🚀</h1>
//     </div>);
//     // JSX Code => React Element => JavaScript Object => renders to actual DOM as a HTML Element
// console.log(jsxHeading);
// const parentData = document.getElementById("root");
// const root = ReactDOM.createRoot(parentData);
// root.render(jsxHeading);

// const HeadingComponent = () => {
//     return <h1 id="parent">My Functional based Component</h1>
// };

const element = <span>React Element</span>;


const number = 1000;

const HeadingComponent = () => (
    <div id="parent">
        <h1>My Functional based Component🚀</h1> 
    </div>
);

const headingElement =
    (<div id = "heading">
        {number}
    <h1 id="parent" className="head">
    Hello World from React🚀</h1>
    <HeadingComponent/>
    </div>); 

console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingElement);

