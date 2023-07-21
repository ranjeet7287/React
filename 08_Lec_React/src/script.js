import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Fotter from "./Components/Fotter";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import About from "./Components/About"
import Error from "./Components/Error";
import Contact from "./Components/contact";
import ResturantMenu from "./Components/resturantmenu";
const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Fotter/>
        </>
    );
};

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/resturant/:id",
                element:<ResturantMenu/>
            }
        ]
        
    },
])


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>)