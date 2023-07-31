import { useEffect, useState ,useContext } from "react";
import { RestrauntList } from "../config";
import RestrauntCard from "./ResturantCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Body=()=>{
    const [allResturant, setAllResturant]=useState([])
    const [filteredRestaurants,setfilteredRestaurants]=useState([]);
    const [SearchText,setSearchtext] =useState(""); 
    const {user,setuser}=useContext(UserContext);
    useEffect(()=>{
        getResturant();
    },[])

    async function getResturant(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7901474&lng=80.8892905&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        console.log(json);
        setAllResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        // setAllResturant(json?.data?.cards[2]?.data?.data?.cards)
        // setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    const isOnline=useOnline();
    if(!isOnline){
        return <h1 id="sperate"> Offline , check your internet connection !! ☠️😵 </h1>;
    }


    if(!allResturant) return null;
    return (allResturant.length == 0) ? <Shimmer/> : (
        <>
            <div className="pt-24  ml-8 ">
                <input id="food-search"
                data-testid="search-input"
                className=" border-2 border-black py-2 px-2"
                type="text"
                placeholder="Enter Your Food"
                value={SearchText}
                onChange={(e)=>{
                    setSearchtext(e.target.value)
                }}
                />
                <button data-testid="search-btn" id="search-btn" className="border-2   border-slate-700 ml-1 py-2 px-2" onClick={()=>{ 
                    const data=filterData(SearchText,allResturant);
                    setfilteredRestaurants(data);
                }}>Search</button>
                <input className="border-2 py-2 ml-2 border-black pl-2" value={user.name} onChange={(e)=>{
                    setuser(
                        {...user,
                        name:e.target.value}
                    )
                }}></input>
                 <input className="border-2 py-2 ml-2 border-black pl-2" value={user.email} onChange={(e)=>{
                    setuser(
                        {...user,
                        email:e.target.value}
                    )
                }}></input>
            </div>
            <div className="flex flex-wrap justify-center" data-testid="res-list">
                {
                    filteredRestaurants.map((restaurant)=>{
                        return(
                        <Link to={"/resturant/"+restaurant.info.id} key={restaurant.info.id}>
                            <RestrauntCard {...restaurant.info}  />
                        </Link>
                        );
                    })
                }
            </div>
        </>
    );
};
export default Body;