import { useEffect, useState } from "react";
const Profile=({name})=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(0);
    useEffect(()=>{
        // Api call
        // console.log("useEffect");
        const timer=setInterval(()=>{
            console.log("Namaste React OP");
        },1000);

        return()=>{
            clearInterval(timer);
        }
    },[])
    // console.log("render");
    return(
        <div>
            <h3>Profile Component</h3>
            <p>Name : {name}</p>
            <p>{count}</p>
            <button onClick={()=>{
                setCount(1+count)
                setCount2(1+count2);
            }}>Count</button>
        </div>
    );
}
export default Profile;