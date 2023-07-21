import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
const IMG_CDN_URL ="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";


const ResturantMenu=()=>{
    // const params=useParams();
    // const {id} =params;
    const {id}=useParams();

    const [restaurantMenu,setrestarantMenu]=useState({});
    useEffect(()=>{
        getResturantInfo();
    },[]);
    async function getResturantInfo(){
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json= await data.json();
        console.log(json)
        setrestarantMenu(json.data?.cards[0]?.card?.card?.info)
    }

    return( 
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