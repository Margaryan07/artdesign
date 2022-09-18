import React from "react";
import { Routes, Route } from "react-router-dom";
import { config } from "../pages/config";
import Home from "../pages/Home"

const RouteProvider = () => {
    return(
        <Routes>
       {
         config.map(({element, path, Layout},index)=>(
            <Route key={index} element={<Layout>{element}</Layout>} path={path}/>
         ))


       }
        
        </Routes>
    )
}

export default RouteProvider