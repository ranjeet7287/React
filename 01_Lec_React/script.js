// const heading=React.createElement(
//     "h1",
//     {
//         id:"title",
//     },
//     "Waheguru Ji ❤️");
// console.log(heading);
const heading1=React.createElement("h1",{id:"title"},"heading 1");
const heading2=React.createElement("h1",{id:"title"},"heading 2");
const container=React.createElement("div",{id:"container"},[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById('root'));
// passing a react element inside the root
// root.render(heading);
root.render(container);