import { IMG_CDN_URL } from "../config";
const RestrauntCard=({cloudinaryImageId,name,cuisines,deliveryTime})=>{
    return(
    <div className="flex flex-col gap-1 w-60 m-4 p-2 shadow-lg">
        <img alt="food-img" className="w-60" src={IMG_CDN_URL+cloudinaryImageId}/>
        <h2 className="food-name">{name}</h2>
        <span  className="rateing">{deliveryTime}min</span>
        {/* <p>{userData.userName}</p> */}
        <button className="border-2 py-1">Order</button>
    </div>
    );
};
export default RestrauntCard;