import { useEffect, useState } from "react";
import { RestrauntList } from "../config";
import RestrauntCard from "./ResturantCard"
import Shimmer from "./Shimmer";
function filterData(SearchText,restaurants){
    return restaurants.filter((restaurant)=>restaurant.data.name.includes(SearchText));
}
const Body=()=>{
    const [allResturant, setAllResturant]=useState([])
    const [filteredRestaurants,setfilteredRestaurants]=useState([]);
    const [SearchText,setSearchtext] =useState(""); 

    // useEffect(()=>{
    //     console.log("call this when dependency is changed")
    // },[restaurants])
    useEffect(()=>{
        // API Call
        getResturant();
    },[])

    async function getResturant(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7901474&lng=80.8892905&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        console.log(json);
        // Optinal Chaning
        setAllResturant(json?.data?.cards[2]?.data?.data?.cards)
        setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    // Conditional Rendering
    // if the resturant is empty => shimmer effect
    // if the resturant has data => actual data UI

    // not render component (Early Return)
    if(!allResturant) return null;

    // if(filteredRestaurants.length==0) return <h1>Not Resturants Found</h1>

    return (allResturant.length == 0) ? <Shimmer/> : (
        <>
            <div id="search-bar">
                <input id="food-search"
                type="text"
                placeholder="Enter Your Food"
                value={SearchText}
                onChange={(e)=>{
                    setSearchtext(e.target.value)
                }}
                />
                <button id="search-btn" onClick={()=>{ 
                    const data=filterData(SearchText,allResturant);
                    setfilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className="resturants-cards">
                {/* You have to write logic for No Resturant found here */}
                {
                    filteredRestaurants.map((restaurant,index)=>{
                        return (<RestrauntCard {...restaurant.data} key={index}/>);
                    })
                }
            </div>
        </>
    );
};
export default Body;