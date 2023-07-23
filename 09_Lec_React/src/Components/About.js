import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionComponents from "./profile"
import { Component } from "react";
// const About2 =()=>{
//     return(
//         <div id="sperate">
//             <h1>About Us Page </h1>
//             <p>
//                 Jia Mata Di ❤️❤️
//             </p>
//             <ProfileFunctionComponents name={"Ranjeet Singh"}/>
//             <Profile name={"Ranjeet Class Compoenent"}/>
//             <Outlet/>
//         </div>
//     );
// }

class About extends Component{

    constructor(props){
        super(props);
      
    }

    componentDidMount(){
        // best place to make an Api call
        // console.log("parent-componetDidMount")
        // this.timer=setInterval(()=>{
        //     console.log("Namaste React OP");
        // },1000)
    }
    componentWillUnmount(){
        // clearInterval(this.timer);
    }
    render(){
        // console.log("parent-render");
        return(
        <div id="sperate">
            <h1>About Us Page </h1>
            <p>
                Jia Mata Di ❤️❤️
            </p>
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