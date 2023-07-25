const Shimmer=()=>{
    return(
        <div id="search-bar">
            <div className="flex flex-wrap pt-28">
                {Array(10).fill("").map((e,index)=>(
                    <div key={index} className="w-60 h-60 bg-slate-200 m-8"></div>
                ))}
            </div>
        </div>
    );
}
export default Shimmer;