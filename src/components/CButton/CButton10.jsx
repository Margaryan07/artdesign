import React from "react";
import { Button } from "@chakra-ui/react";

const CButton10 = ({children,w, h, bg, color}) => {
    return(
        <Button w={w} h={h} bg={bg} color={color}> 
        {children}
    </Button>
    )
}


export default CButton10