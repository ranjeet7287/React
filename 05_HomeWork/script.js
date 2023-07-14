import React from "react";
import  ReactDOM  from "react-dom/client";


const LogoLocation=()=>{
    return(
        <div id="logo-location">
            <div id="logo">
                <img src="https://play-lh.googleusercontent.com/A8jF58KO1y2uHPBUaaHbs9zSvPHoS1FrMdrg8jooV9ftDidkOhnKNWacfPhjKae1IA" alt="LogoImg" />
            </div>
            <div id="location">
                <input placeholder="Enter Location"></input>
            </div>
        </div>
    );
}
const HeaderList=()=>{
    return(
        <div id="HeaderList">
            <ul>
                <li>🔍 Search</li>
                <li>🎉 Offer</li>
                <li>📞 Help</li>
                <li>🌝 Sign In</li>
                <li>🛍️ Cart</li>
            </ul>
        </div>
    );
}
const Header=()=>{
    return(
        <div id="header">
            <LogoLocation/>
            <HeaderList/>
        </div>
    );
}




const Body=()=>{
    return(
        <div id="main">
            <h1>Body</h1>
        </div>
    );
}
const Footer=()=>{
    return(
        <h1 id="footer">Footer</h1>
    );
}
const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
};
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);