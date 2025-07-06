import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Translatorstart from "./components/TranslatorStart";
import TranslatorApp from "./components/TranslatorApp";
import "./style.css"
import TranslatorStart from "./components/TranslatorStart";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";



const Body = () => {
    

    return (
        <>
            <div className="w-full h-screen bg-gradient-to-l from-[#85dec0] to-[#477089] flex justify-center items-center">
                <div className="w-[90%] max-w-lg max-[392px]:h-[90%] sm:h-auto  bg-[#2d2d2d]  rounded-xl shadow-2xl shadow-gray-800 flex flex-col ">
                    <TranslatorStart />
                    {/* <TranslatorApp/> */}
                </div>
            </div>


        </>
    )
}

const Appr = ()=>{
    return(
        <>
                <div className="w-full h-screen bg-gradient-to-l from-[#85dec0] to-[#477089] flex justify-center items-center">
                <div className="w-[90%] max-w-lg  bg-[#2d2d2d]  rounded-xl shadow-2xl shadow-gray-800 flex flex-col ">
                    <TranslatorApp/>
                </div>
            </div>
        </>

    )
}

const Approut = createBrowserRouter([
    {
        path:"/",
        element:<Body/>

    },
    {
        path:"/trans",
        element:<Appr/>
    }

])

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approut}/>)



