import { CardList } from "./config";
import { useState } from "react";

const HomeCard=({img,location,rating})=>{
    return(
        <div id="Card">
            <div id="card-img">
                <img src={img}/>
            </div>
            <div id="card-info">
                <span>{location}</span>
                <span>⭐{rating}</span>
                <button id="d-btn">Details</button>
            </div>
        </div>
    );
};
const Body=()=>{
    
    return(
        <div id="main">
            {
                CardList.map((home)=>{
                    return<HomeCard {...home} key={home.key}/>
                })
            }
        </div>
    );
}
export default Body;