import logo from "../assest/logo.png"
import { useState } from "react";
import { CardList } from "./config";

function filterData(searchText,Homecard){
    const constdata =Homecard.filter((card)=>{card.location.includes(searchText);})
    console.log(constdata);
}

const LogoLocation=()=>{
    const [searchText,setSearchtext]=useState("");
    const [Homecard,setHomecard] =useState(CardList);
    return(
        <div id="logo-location">
            <div>
                <img alt="logo" id="logo-img" src={logo}/>
            </div>
            <div>
                <input
                id="search-location" 
                type="text"
                placeholder="Enter Your Location"
                value={searchText}
                onChange={(e)=>{
                    setSearchtext(e.target.value)
                }}

                />
                <button id="Search-btn"
                onClick={()=>{
                    const data=filterData(searchText,Homecard);
                    setHomecard(data);
                }}
                >Search</button>
            </div>
        </div>
    );
}
const HeaderList=()=>{
    return(
        <div id="headerlist">
            <ul>
                <li>🏠NewHome</li>
                <li>❤️Liked</li>
                <li>📞Help</li>
                <li>🧑‍💼Sigin</li>
            </ul>
        </div>
    );
}
const Header=()=>{
    return(
        <div id="Header">
            <LogoLocation/>
            <HeaderList/>
        </div>
    );
}
export default Header;
