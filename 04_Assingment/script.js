import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent=()=>{
    return(
        <div id="header">
            <div>
                <img src="./assets/Logo.png" alt="LogoImg"></img>
            </div>
            <div>
                <ul id="headerlist">
                    <li>Contact</li>
                    <li>Product</li>
                    <li>Services</li>
                </ul>
            </div>
            <div id="btn">
                <input type="search" placeholder="Search here"></input>
                <button>Login</button>
            </div>
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent/>);