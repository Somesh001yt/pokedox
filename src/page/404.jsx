import React from "react";
import mewtewo from "../assests/404.png"

function Error(){
    return (
        <>
        <div className="h-screen flex flex-col items-center justify-center place-center bg-slate-600">
            <img src={mewtewo} alt="404" className="w-96 aspect-square object-contain" />
            <h1 className="text-7xl font-bold text-white">404</h1>
            <span className="text-2xl text-white font-bold">Not Found </span>
        </div>
        </>
    )
}

export default Error