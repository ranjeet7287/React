const RestrauntCard=({img,name,rateing})=>{
    return(
    <div className="card">
        <img alt="food-img" className="foodimg" src={img}/>
        <h2 className="food-name">{name}</h2>
        <span  className="rateing">⭐{rateing}</span>
        <button className="order-btn">Order</button>
    </div>
    );
};
export default RestrauntCard;