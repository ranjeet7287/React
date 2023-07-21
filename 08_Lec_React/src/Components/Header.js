import { useState } from "react";
import logo from "../assets/logo3.png"
import { Link } from "react-router-dom";
const loggedInUser=()=>{
    // API call to check authentication
    return true;
}

// SPA -> Single Page Application
// Client side routing
// server side routing



const Title= ()=>(
    <Link to="/">
        <img id="logo" alt="logoImg" src={logo}/>
    </Link>
);
const HeaderComponents=()=>{

    const[isLoggedIn,setLoggedIn]=useState(false);

    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <Link to="/resturant">
                        <li className="list-h">Restraunt</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/cart">
                        <li>👜Cart</li>
                    </Link>
                </ul>
                {
                 isLoggedIn ? <button id="login-btn" onClick={()=>setLoggedIn(false)}>LogOut</button>
                 :
                 <button id="login-btn" onClick={()=>setLoggedIn(true)}>LogIn</button>
                } 

            </div>
            
        </div>
    );
}
export default HeaderComponents;