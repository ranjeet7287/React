import { useState } from "react";

const loggedInUser=()=>{
    // API call to check authentication
    return true;
}

const Title= ()=>(
    <a href="#">
        <img id="logo" alt="logoImg" src="https://webdesigndev.com/wp-content/uploads/2021/10/1.image_.jpg"/>
    </a>
);
const HeaderComponents=()=>{

    const[isLoggedIn,setLoggedIn]=useState(false);

    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Restraunt</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>👜Cart</li>
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