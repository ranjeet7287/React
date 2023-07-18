import { IMG_CDN_URL } from "../config";
const RestrauntCard=({cloudinaryImageId,name,deliveryTime})=>{
    return(
    <div className="card">
        <img alt="food-img" className="foodimg" src={IMG_CDN_URL+cloudinaryImageId}/>
        <h2 className="food-name">{name}</h2>
        <span  className="rateing">{deliveryTime}min</span>
        <button className="order-btn">Order</button>
    </div>
    );
};
export default RestrauntCard;