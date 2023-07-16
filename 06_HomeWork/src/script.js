import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Fotter from "./Components/Fotter";
const AppLayout=()=>{
    return(
    <>
        <Header/>
        <Body/>
        <Fotter/>
    </>
    );
};
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);