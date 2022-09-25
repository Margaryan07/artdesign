import React from "react";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { FaRegUserCircle} from 'react-icons/fa';
import { Link } from "react-router-dom";
import {
   Flex,
   useDisclosure,
   Button,
   Drawer,
   DrawerOverlay,
   DrawerContent,
   DrawerHeader,
   DrawerBody,
   HStack,
   Text
   
} from "@chakra-ui/react";


const Header = () => {
   const { isOpen, onOpen, onClose } = useDisclosure()
  

   return (
      <Flex
         w="full"
         h="100px"
         bg="#232F3E"
         justifyContent="space-between"
         alignItems="center">
         <Button onClick={onOpen}>
            <MenuIcon/>
         </Button >
         <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
               <DrawerHeader bg="#232F3E" borderBottomWidth='1px'> 
               <HStack spacing="10px">
                  <FaRegUserCircle  style={{color:"white", fontSize:"25px"}}/>
                  <Text color="white" fontWeight="700" fontSize="18px" fontFamily="sans-serif">
                  Hello, 
                  </Text>
                  <Link to="/signin" onClick={onClose}>
                  <Text color="white" fontWeight="700" fontSize="18px">
                  sign in
                  </Text>
                  </Link>
               </HStack>
                </DrawerHeader>
               <DrawerBody>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
               </DrawerBody>
            </DrawerContent>
         </Drawer>
   </Flex >
    )
}

export default Header