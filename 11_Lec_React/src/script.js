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
import Profile from "./Components/profile";
import { lazy } from "react";
import { Suspense } from "react"; 
import Shimmer from "./Components/Shimmer.js";

const InstaMart=lazy(()=>import("./Components/InstaMart"));
// Upon On Demand Loading -> Upon Render -> Suspend Loading 

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
                element:<About/>,
                children:[
                    {
                        // path:"/profile" // don't use /profile otherwise it use localhost:1234/profile
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/resturant/:id",
                element:<ResturantMenu/>
            },
            {
                path:"/instaMart",
                element:
                (
                <Suspense fallback={<Shimmer />}>
                    <InstaMart/>
                </Suspense>
                )
            }
        ]
        
    },
])


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>)