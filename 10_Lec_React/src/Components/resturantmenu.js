import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturntMenu";

const ResturantMenu=()=>{
    const {id}=useParams();

    const restaurantMenu=useResturantMenu(id);
    
    return !restaurantMenu ? <Shimmer/> : ( 
        <div id="sperate">
            <div>
                <h1>Resturant id:{id}</h1>
                <h2>{restaurantMenu.name}</h2>
                <img src={IMG_CDN_URL+restaurantMenu.cloudinaryImageId}/>
                <p>{restaurantMenu.cuisines}</p>
                <h3>{restaurantMenu.city}</h3>
                <h4>{restaurantMenu.areaName}</h4>
            </div>
            <div>
                <ul>
                    {
                   
                    }
                </ul>
            </div>
       
        </div>
    );
};
export default ResturantMenu;