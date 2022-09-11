import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { Flex, Text } from "@chakra-ui/react";



const Header = () => {
    return(
        <Flex w="full" h="140px" bg="#252222" justifyContent="space-between" alignItems="center" >
         <MenuIcon />
         <Text fontSize="13px" color="#885809">
            about
         </Text>
        </Flex>
    )
}

export default Header