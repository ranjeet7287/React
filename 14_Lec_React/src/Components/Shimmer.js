const Shimmer=()=>{
    return(
    
        <div className="flex flex-wrap pt-28" data-testid="shimmer">
            {Array(10).fill("").map((e,index)=>(
                <div key={index} className="w-60 h-60 bg-slate-200 m-8"></div>
            ))}
        </div>
        
    );
}
export default Shimmer;