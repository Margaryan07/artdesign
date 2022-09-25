import React from "react";
import { Routes, Route } from "react-router-dom";
import { config } from "../pages/config";


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