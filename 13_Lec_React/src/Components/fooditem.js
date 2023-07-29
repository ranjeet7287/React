import { IMG_CDN_URL } from "../config";
const FoodItem=({imageId,name,defaultPrice,description})=>{
    return(
    <div className="flex flex-col gap-2 w-60 m-4 p-2 shadow-lg">
        <img alt="food-img" className="w-60" src={IMG_CDN_URL+imageId}/>
        <h2 className="food-name">{name}</h2>
        <p>Price:{defaultPrice/100}</p>
        <span  className="rateing">{description}</span>
        <button className="border-2 border-black bg-slate-200 py-1">Order</button>
    </div>
    );
};
export default FoodItem;