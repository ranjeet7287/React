const Shimmer=()=>{
    return(
        <div id="search-bar">
            <div className="resturants-cards-shimmer">
                {Array(10).fill("").map((e,index)=>(
                    <div key={index} className="card-shimmer"></div>
                ))}
            </div>
        </div>
    );
}
export default Shimmer;