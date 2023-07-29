import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useResturantMenu from "../utils/useResturntMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ResturantMenu=()=>{
    const {id}=useParams();
    const restaurantMenu=useResturantMenu(id);

    const dispatch=useDispatch();

    // const handleAddItem =()=>{
    //     // dispatch - > action pass the payload
    //     dispatch(addItem("Grapes"));
    // }

    const addFoodItem=(item)=>{
        dispatch(addItem(item))
    }
    
    return !restaurantMenu ? <Shimmer/> : ( 
        <div id="sperate" className="pt-28 flex px-4  gap-4">
            <div>
                <h2 className="text-5xl">{restaurantMenu.cards[0]?.card?.card?.info.name}</h2>
                <img src={IMG_CDN_URL+restaurantMenu.cards[0]?.card?.card?.info.cloudinaryImageId}/>
                <p className="text-xl">{restaurantMenu.cards[0]?.card?.card?.info.cuisines}</p>
                <h3 className="text-xl">{restaurantMenu.cards[0]?.card?.card?.info.city}</h3>
                <h4 className="text-xl">{restaurantMenu.cards[0]?.card?.card?.info.areaName}</h4>
                <h1>Resturant id:{id}</h1>
            </div>
            {/* <div>
                <button className="border-2 border-black m-5" onClick={
                    ()=>{
                        handleAddItem()
                    }}>Add Item</button>
            </div> */}
            <div>
                <ul>
                <h1 className="text-5xl font-semibold">Menu</h1>
                {
                Object.values(restaurantMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
                    (item) => (
                    <>
                        <li className="text-xl" key={item.card?.info?.id}>
                            {item.card?.info?.name} 
                        </li>
                        <button className="border-2 border-black px-2 bg-slate-300 m-2"
                        onClick={()=>{addFoodItem(item)}}
                        >AddItem</button>
                    </>
                ))
                }   
                </ul>
            </div>
       
        </div>
    );
};
export default ResturantMenu;