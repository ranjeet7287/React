import React from 'react';
class Profile extends React.Component{

    constructor(props){
        super(props);
       
    }

    componentDidMount(){

     
        
    }

    componentDidUpdate(prevProps,prevState){
      
    }
 

    render(){
        console.log("child-render"+this.props.name);
  
    }
}
export default Profile;