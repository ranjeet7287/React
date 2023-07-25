import { useEffect, useState } from "react";
import { RestrauntList } from "../config";
import RestrauntCard from "./ResturantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
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

    const isOnline=useOnline();
    if(!isOnline){
        return <h1 id="sperate"> Offline , check your internet connection !! ☠️😵 </h1>;
    }


    if(!allResturant) return null;
    return (allResturant.length == 0) ? <Shimmer/> : (
        <>
            <div id="search-bar" className="pt-24  ml-8 ">
                <input id="food-search"
                className=" border-2 border-black py-2 px-2"
                type="text"
                placeholder="Enter Your Food"
                value={SearchText}
                onChange={(e)=>{
                    setSearchtext(e.target.value)
                }}
                />
                <button id="search-btn" className="border-2   border-slate-700 ml-1 py-2 px-2" onClick={()=>{ 
                    const data=filterData(SearchText,allResturant);
                    setfilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className="flex flex-wrap justify-center">
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