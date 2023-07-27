import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Fotter=()=>{
    const {user}=useContext(UserContext);
    return(
        <>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
        </>
    );
};
export default Fotter;