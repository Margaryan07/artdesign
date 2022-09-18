import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";
import { Flex, Text, InputGroup, Input, InputRightElement } from "@chakra-ui/react";




const Header = () => {
    return(

<Flex w="full" h="140px" bg="#252222" justifyContent="space-around" alignItems="center" >
<MenuIcon />

<Text fontSize="20px" color="#885809">
   about
</Text>

<Text fontSize="20px" color="#885809">
   contacts
</Text>

<Text fontSize="20px" color="#885809">
   delivery
</Text>

<InputGroup w="300px" bg="#FAF8F2" borderRadius="3px">
   
      
 <Input />
 <InputRightElement  children={<UserIcon color='green.500' />} />
</InputGroup>

<UserIcon />


</Flex>


    )
}

export default Header