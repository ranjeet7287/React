import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturntMenu";

const ResturantMenu=()=>{
    const {id}=useParams();
    const restaurantMenu=useResturantMenu(id);
    
    return !restaurantMenu ? <Shimmer/> : ( 
        <div id="sperate" className="pt-28">
            <div>
                <h1>Resturant id:{id}</h1>
                <h2>{restaurantMenu.cards[0]?.card?.card?.info.name}</h2>
                <img src={IMG_CDN_URL+restaurantMenu.cards[0]?.card?.card?.info.cloudinaryImageId}/>
                <p>{restaurantMenu.cards[0]?.card?.card?.info.cuisines}</p>
                <h3>{restaurantMenu.cards[0]?.card?.card?.info.city}</h3>
                <h4>{restaurantMenu.cards[0]?.card?.card?.info.areaName}</h4>
            </div>
            <div>
                <ul>
                <h1 className="text-5xl font-semibold">Menu</h1>
                {
                Object.values(restaurantMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map((item) => (
                    <li className="text-xl" key={item?.card?.info?.id}>{item.card?.info?.name}</li>
                ))
                }
                    
                </ul>
            </div>
       
        </div>
    );
};
export default ResturantMenu;