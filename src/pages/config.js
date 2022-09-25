import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout.jsx"
import Home from "./Home";
import SignIn from "./SignIn";
import Account from "./Account";
import Help from "./Help";
import Profile from "./Profile";

export const config = [
    {
        element:<Home />,
        path:"/",
        Layout:AuthLayout
        
    },

    {
        element:<SignIn />,
        path:"/signin",
        Layout:DefaultLayout 
    },

    {
        element:<Account />,
        path:"/account",
        Layout:DefaultLayout 
    },

    {
        element:<Help />,
        path:"/help",
        Layout:DefaultLayout 
    },

    {
        element:<Profile />,
        path:"/profile",
        Layout:DefaultLayout 
    }


]