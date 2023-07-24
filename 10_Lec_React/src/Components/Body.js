import { useEffect, useState } from "react";
import { RestrauntList } from "../config";
import RestrauntCard from "./ResturantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
function filterData(SearchText,restaurants){
    return restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(SearchText.toLowerCase()));
}
const Body=()=>{
    const [allResturant, setAllResturant]=useState([])
    const [filteredRestaurants,setfilteredRestaurants]=useState([]);
    const [SearchText,setSearchtext] =useState(""); 
    useEffect(()=>{
        getResturant();
    },[])

    async function getResturant(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7901474&lng=80.8892905&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        console.log(json);
        setAllResturant(json?.data?.cards[2]?.data?.data?.cards)
        setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }
    if(!allResturant) return null;
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
                {
                    filteredRestaurants.map((restaurant)=>{
                        return(
                        <Link to={"/resturant/"+restaurant.data.id} key={restaurant.data.id}>
                            <RestrauntCard {...restaurant.data} />
                        </Link>
                        );
                    })
                }
            </div>
        </>
    );
};
export default Body;