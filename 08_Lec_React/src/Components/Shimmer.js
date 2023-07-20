const Shimmer=()=>{
    return(
        <>
        <div id="search-bar">
            <input id="food-search"
            type="text"
            placeholder="Enter Your Food"
            />
            <button id="search-btn">Search</button>
        </div>
        <div className="card">
            <img alt="food-img" className="foodimg" src="https://cdn02.plentymarkets.com/2brofzsczyt8/item/images/63213496/middle/Vliestapete-Grandeco-Grau-Weiss-Putz-Optik-VOA-010-08-2-63213496.jpg"/>
            <h2 className="food-name">XXX</h2>
            <span  className="rateing">min</span>
            <button className="order-btn">Order</button>
        </div>
        </>
    );
}
export default Shimmer;