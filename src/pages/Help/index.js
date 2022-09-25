import React from "react"; 
import { ReactComponent as AmazonIcon } from "../../assets/amazon.svg";
import { Flex, Heading, Text, Box, Input, Button, Link} from "@chakra-ui/react";


const Help = () => {
    return(
        <Flex   
        justifyContent="center"
        alignItems="center"
        flexDirection="column" >
           <AmazonIcon />
            <Flex 
         w="360px"
        border="0.3px solid gray"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center">
          <Flex  w="320px" flexDirection="column"  gap="1.25rem" p="1.25rem" >
          <Heading as="h1" size="md">
          Password assistance
          </Heading>
          <Text fontSize="13px">
          Enter the email address or mobile phone number associated with your Amazon account.
          </Text>
          <Box>
            <Text fontSize="14px" fontWeight="500">
              Email or mobile phone number
            </Text>
            <Input _focus={{borderColor:"orange"}}/>
          </Box>
          <Button bg="#F3CC6C">
            continue
          </Button>
          </Flex>
            </Flex>
            <Flex flexDirection="column" fontSize="18px">
            <Text>
            Has your email or mobile number changed?
            </Text>
            <Text fontSize="12px">
            If you no longer use the email address associated with your <br/>Amazon account, you may contact <Link href="#" color="blue.500">Customer Service</Link> for<br /> help restoring access to your account.
            </Text>
            </Flex>
        </Flex>
    )
}
    
       
            

    




   export default Help