import React from 'react';
class Profile extends React.Component{

    constructor(props){
        super(props);
        // // Create a State
        // // this.state={
        // //     count:0,
        // //     count2:0,
        // // };
        // console.log("Child-Constructor"+this.props.name);
        // this.state={
        //     userInfo:{
        //         name:"Dummy Name",
        //         location:"Dummy Location"
        //     }
        // }
        // console.log("parent-constructor")
    }

    componentDidMount(){

     
        
        // const data=await fetch("https://api.github.com/users/ranjeet7287");
        // const json=await data.json();
        // this.setState({
        //     userInfo:json
        // })
        // console.log(json);
        // // API call
        // console.log("child-componentsdidmount"+this.props.name)
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count !== prevState.count){

        }
    }
 

    render(){
        console.log("child-render"+this.props.name);
        // return (
        //     <div>
        //         <h1>Profile Class Component</h1>
        //         <img src={this.state.userInfo.avatar_url}/>
        //         <h2>Name : {this.state.userInfo.name}</h2>
        //         <p>location :{this.state.userInfo.location}</p>
        //         {/* <button onClick={()=>{
        //             // We don't mutate state directly 
        //             // never do this.state = something
        //             // this.setState({
        //             //     count:1+this.state.count,
        //             //     count2:1+this.state.count2
        //             // })
        //         }}>Count</button> */}
        //     </div>
        // );
    }
}
export default Profile;