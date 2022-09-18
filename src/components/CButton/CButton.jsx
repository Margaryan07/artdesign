import React from "react";
import { Button } from "@chakra-ui/react";

const CButton= ({children, w, h, color, bg})=>{
 return(
    
    <Button w={w} h={h} bg={bg} color={color}> 
        {children}
    </Button>

    
 )
}



export default CButton