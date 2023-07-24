import { useState ,useEffect } from "react";
import{Restaurant_Menu_Api} from "../config";
const useResturantMenu=(id)=>{
    const [restaurant,setresturant]=useState(null);

    useEffect(()=>{
        getResturantInfo();
    },[]);

    async function getResturantInfo(){
        const data= await fetch(Restaurant_Menu_Api+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json= await data.json();
        setresturant(json.data?.cards[0]?.card?.card?.info)
    }

    return restaurant;
}
export default useResturantMenu;