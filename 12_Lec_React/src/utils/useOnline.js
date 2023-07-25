import { useState ,useEffect } from "react";
const useOnline=()=>{
    const [isOnline,setisOnline]=useState(true);

    // Junior Dev
    // useEffect(()=>{
    //     window.addEventListener("online",()=>{
    //         setisOnline(true);
    //     });
    
    //     window.addEventListener("offline",()=>{
    //         setisOnline(false);
    //     });
    // },[]);

    // Senior Dev
    useEffect(()=>{
        const handleOnline=()=>{       
            setisOnline(true);
        }
        window.addEventListener("online",handleOnline);

        const handleOffline=()=>{
            setisOnline(false);
        }
        window.addEventListener("offline",handleOffline);

        return()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[]);

    return isOnline;
}
export default useOnline;