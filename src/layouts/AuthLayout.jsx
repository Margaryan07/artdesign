import React from "react";
import Header from "../components/Header";
import { Box } from "@chakra-ui/react";




const AuthLayout = ({ children }) => {
    return (
        <Box>
            <Header />
            {children}
        </Box>
    )
}



export default AuthLayout