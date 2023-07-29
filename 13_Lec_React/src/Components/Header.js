import { useState ,useContext } from "react";
import logo from "../assets/logo3.png"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import { UseSelector } from "react-redux/es/hooks/useSelector";
const loggedInUser=()=>{
    // API call to check authentication
    return true;
}

// SPA -> Single Page Application
// Client side routing
// server side routing



const Title= ()=>(
    <Link to="/">
        <img id="logo" className="w-16 rounded-xl" alt="logoImg" src={logo}/>
    </Link>
);
const HeaderComponents=({userData})=>{

    const[isLoggedIn,setLoggedIn]=useState(false);

    const isOnline=useOnline();

    const {user}=useContext(UserContext);

    const cartItem=useSelector(store => store.cart.items)
    // console.log(cartItem);


    return(
        <div className="flex justify-between p-4 items-center fixed w-full h-20 z-40 bg-amber-600">
            <Title/>
            <div className="nav-items flex gap-4 text-xl font-mono">
                <ul className="flex gap-16 max-md:hidden">
                    <Link to="/resturant">
                        <li className="list-h">Restraunt</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/instaMart">
                        <li>InstaMart</li>
                    </Link>
                    <Link to="/cart">
                        <li>{cartItem.length}_Cart</li>
                    </Link>
                </ul>
                {/* <h3>{isOnline ? userData.userName :"☠️" }</h3> */}
                <h3>{user.name}</h3>
                {
                 isLoggedIn ? <button id="login-btn" className="max-lg:hidden" onClick={()=>setLoggedIn(false)}>LogOut</button>
                 :
                 <button id="login-btn" className="max-lg:hidden" onClick={()=>setLoggedIn(true)}>LogIn</button>
                } 

            </div>
            
        </div>
    );
}
export default HeaderComponents;