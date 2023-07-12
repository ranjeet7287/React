import {createElement} from "react";
// import React from "react";
import ReactDOM  from "react-dom/client";

// const heading1=React.createElement("h1",{id:"title",key:"h1"},"heading 1");
// const heading2=React.createElement("h1",{id:"title",key:"h2"},"heading 2");
// const container=React.createElement("div",{id:"container"},[heading1,heading2]);

// const heading=createElement(
//     "div",
//     {
//         id:"title",
//         key:"01"
//     },
//     [
//         createElement("h1",{id:"title",key:"02"},"heading 1"),
//         createElement("h1",{id:"title",key:"03"},"heading 1")
//     ]
// );

// Using JSX?
const heading=(
    <h1 id="title" key="04" className="">
    Namaste React
    </h1>
);
// JSX => React.createElement => Object => HTML(Dom)

// React Component =>> Everyting in a react is component of react
// -Functional              (New Way)
// -Class Based Component   (Old Way)
// Name of Component start with Capital Letter - it's not mandatory but good practice.
const HeaderComponent=()=>{
    return( 
        <h2 id="title" key="05">
            Jia Mata Di
        </h2>
    );
};
// const HeaderComponent2=()=>{
//     <div>
//         <h1 id="title" key="06">React Functional Component</h1>
//         <h2 id="title" key="07">Jia Mata Di</h2>
//     </div>
// };
// Both HeaderComponent are returning the jsx

// Including react element into the functional component 
// Including functional component into the functional component
// in {} we can any pieace of js code 
var xy=10;
// const data=api.getData();
// if api retrun a malaciuous code (hacker want to inject some code) Cross Site Scripting Attack
// Jsx take care of this kind of attack
const HeaderComponent3=()=>{
    return(
        <div>
            {heading}
            {xy}
            <HeaderComponent/>
            {/* {data} */}
            <h1 id="title" key="06">React Functional Component</h1>
            <h2 id="title" key="07">Jia Mata Di</h2>
        </div>
    );
};






const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); // rendering the React Element
root.render(<HeaderComponent3/>) // when we have to render the functional component