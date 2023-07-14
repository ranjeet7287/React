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
// Config Driven UI

// const config=[
//     {
//         type:"carousel",
//         cards:[
//             {
//                 offername:"50% off"
//             },
//             {
//                 offername:"No Delivery Charge"
//             }
//         ]
//     },
//     {
//         type:"restaurants list",
//         cards:[
//             {
//                 name:"Butter Chiken",
//                 img:"https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Butter-chicken.jpg",
//                 rateing:"5.0",
//             },
//             {
//                 name:"KFC",
//                 img:"https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Butter-chicken.jpg",
//                 rateing:"5.0",
//             },
//         ]
//     }
// ]





const RestrauntList=[
    
    {
    name:"Butter Chiken",
    img:"https://healthyfitnessmeals.com/wp-content/uploads/2020/01/Butter-chicken.jpg",
    rateing:"5.0",
    key:"01"
    },
    {
        name:"KFC",
        img:"https://imgmedia.lbb.in/media/2019/09/5d8e3e924a8cb2564d78fe5c_1569603218818.png ",
        rateing:"4.5",
        key:"02"

    },
    {
        name:"Burger",
        img:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
        rateing:"3.9",
        key:"03"

    },
    {
        name:"Protein Shake",
        img:"https://healthyfitnessmeals.com/wp-content/uploads/2018/06/instagram-In-Stream_Square___pumpkin-pie-protein-shake.jpg",
        rateing:"5.0",
        key:"04"

    },
    {
        name:"Soya Chaap",
        img:"https://5.imimg.com/data5/SELLER/Default/2021/5/YP/JR/DB/95161976/soya-tawa-chaap.png",
        rateing:"4.2",
        key:"05"
    },
    {
        name:"Chole Bahature",
        img:"https://imgmedia.lbb.in/media/2021/11/618958bd541a42479b314d6a_1636391101772.jpg",
        rateing:"4.1",
        key:"06"

    },
    {
        name:"Pav Bhaji",
        img:"https://www.shanedelhi.com/wp-content/uploads/2021/10/Pav-Bhaji.jpg",
        rateing:"4.4",
        key:"07"

    },
    {
        name:"Ice Cream",
        img:"https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/surfcityusa/Hans-2-4503a2435056a36_4503a424-5056-a36a-089d0fb1d1074946.jpg",
        rateing:"4.3",
        key:"08"
    },

]
// proprs = {restaurants} just destructring a object
// const RestrauntCard=(props)=>{
// console.log(props)
//     return(
//     <div className="card">
//         <img alt="food-img" id="foodimg" src={props.restaurant.img}/>
//         <h2 className="food-name">{props.restaurant.name}</h2>
//         {/* <span  className="rateing">⭐{RestrauntList[1].rateing}</span> */}
//         <span  className="rateing">⭐{props.restaurant.rateing}</span>
//         <button className="order-btn">Order</button>
//     </div>
//     );
// };
const RestrauntCard=({img,name,rateing})=>{
    // console.log(props)
    // const {img,name,rateing}=restaurant;
    return(
    <div className="card">
        <img alt="food-img" className="foodimg" src={img}/>
        <h2 className="food-name">{name}</h2>
        <span  className="rateing">⭐{rateing}</span>
        <button className="order-btn">Order</button>
    </div>
    );
};
// restaurant={RestrauntList[0]} ->> Props 
const Body=()=>{
    return(
        <div className="resturants-cards">
            {
                RestrauntList.map((restaurant)=>{
                    return <RestrauntCard {...restaurant} key={restaurant.key}/>
                })
            }
            {/* <RestrauntCard  img={RestrauntList[0].img} name={RestrauntList[0].name} rateing={RestrauntList[0].rateing} />
            <RestrauntCard {...RestrauntList[1]}/>
            <RestrauntCard {...RestrauntList[2]}/>
            <RestrauntCard {...RestrauntList[3]}/>
            <RestrauntCard {...RestrauntList[4]}/>
            <RestrauntCard {...RestrauntList[5]}/> */}
        </div>
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