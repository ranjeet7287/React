import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionComponents from "./profile"
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component{

    constructor(props){
        super(props);
      
    }

    componentDidMount(){
     
    }
    componentWillUnmount(){
      
    }
    render(){
        
        return(
        <div id="sperate" className="pt-28">
            <h1>About Us Page </h1>
            <p>
                Jia Mata Di ❤️❤️
            </p>

            <UserContext.Consumer>
                {({user})=><h1>{user.name} - {user.email}</h1>}
            </UserContext.Consumer>

            <Profile name={"First Child"} xyz="abc"/>
            <ProfileFunctionComponents/>
            {/* <Profile name={"Second Child"}/> */}
            <Outlet/>
        </div>
        );  
    }
} 
export default About;

/*
  * Parent Constructor
  * Parent Render
  *     First child constructor
  *     First child render
  *     Second child constructor
  *     Second child render
  *     first child component did mount
  *     second child compnrnt did mount
  *  parent component did mount
*/