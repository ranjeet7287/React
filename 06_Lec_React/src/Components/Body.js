import { useEffect, useState } from "react";
import { RestrauntList } from "../config";
import { image } from "../config";
import RestrauntCard from "./ResturantCard"
import {useState} from "react"
// import 

// What is Sate?
// What is Hook?
// What is use State?

function filterData(SearchText,restaurants){
    return restaurants.filter((restaurant)=>restaurant.name.includes(SearchText));
}


const Body=()=>{
    // let searchTxt="Birger King";

    // SearchText is local state variable
    const [SearchText,setSearchtext] =useState(""); // to create state variable
    // const [SearchClicked,setSearchCliked]=useState("false");

    const [restaurants,setRestaurants]=useState(RestrauntList);
    return(
        <> 
    
            
            <div id="search-bar">
                <input id="food-search"
                type="text"
                placeholder="Enter Your Food"
                value={SearchText}
                onChange={(e)=>{
                    // e.target.value -> whatever wrting in input
                    setSearchtext(e.target.value)
                }}
                />
                <button id="search-btn" onClick={()=>{
                    // if(SearchClicked==="true"){
                    //     setSearchCliked("false");
                    // }else{
                    //     setSearchCliked("true");
                    // }

                    // need to filter the data
                    const data=filterData(SearchText,restaurants);
                    // update the state - resturants
                    setRestaurants(data);
                }}>Search</button>
                {/* <span>{SearchClicked}</span> */}
            </div>
            <div className="resturants-cards">
                {
                    restaurants.map((restaurant)=>{
                        return <RestrauntCard {...restaurant} key={restaurant.key}/>
                    })
                }
            </div>
        </>
    );
};
export default Body;