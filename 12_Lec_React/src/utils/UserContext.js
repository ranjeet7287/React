import {createContext} from "react";

const UserContext=createContext({
    user:{
        name:"Dummy Name",
        email:"Dummyemail@gmail.com"
    }
});

export default UserContext;