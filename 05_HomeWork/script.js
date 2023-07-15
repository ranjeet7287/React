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

const Vegbaryani=()=>{
    return(
        <div id="card">
            <img alt="food-img" id="foodimg" src="https://pbs.twimg.com/media/Evc4yU2WYAEILPD.jpg"/>
            <h3>Veg Baryani</h3>
            <p>delicious medley of succulent vegetables, spices, ghee, saffron and flavourful basmati rice.</p>
            <span>⭐5.0</span>
            <span>19 min</span>
            <span>💲5</span>
        </div>
    );
}



const Body=()=>{
    return(
        <div id="main">
            <Vegbaryani/>
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