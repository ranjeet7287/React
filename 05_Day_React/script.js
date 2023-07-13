import React from "react";
import  ReactDOM  from "react-dom/client";

const Title= ()=>(
    <a href="#">
        <img id="logo" alt="logoImg" src="https://webdesigndev.com/wp-content/uploads/2021/10/1.image_.jpg"/>
    </a>
);

const HeaderComponents=()=>{
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Restraunt</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>👜Cart</li>
                </ul>
            </div>
        </div>
    );
}

const ButterChicken={
    name:"Butter Chiken",
    img:"https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Butter-chicken.jpg",
    rateing:"5.0",
}

const RestrauntCard=()=>{
    return(
    <div className="card">
        <img alt="food-img" id="foodimg" src={ButterChicken.img}/>
        <h2 className="food-name">{ButterChicken.name}</h2>
        <span  className="rateing">⭐{ButterChicken.rateing}</span>
        <button className="order-btn">Order</button>
    </div>
    );
};
const Body=()=>{
    return(
        <RestrauntCard/>
    );
};

const Fotter=()=>{
    return(
        <h1>Fotter</h1>
    );
};

const AppLayout=()=>{
    return(
        <>
        <HeaderComponents />
        <Body/>
        <Fotter/>
        </>
    );
};

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)