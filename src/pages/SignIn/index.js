import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as AmazonIcon } from "../../assets/amazon.svg";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import {useForm } from "react-hook-form"
import { Flex, Text, Box, Button, Input, Heading, Link, Collapse, useDisclosure, HStack, Divider  } from "@chakra-ui/react";



const SignIn = () => {
const {register,handleSubmit} = useForm()
const { isOpen, onToggle } = useDisclosure()
const [show, setShow] = useState(true)
const [error, setError] = useState(false)
const navigate = useNavigate()
const hendleClick = () => {
  onToggle()
  setShow(!show)
}
const onSubmit = (data) => {
const user =JSON.parse(window.localStorage.getItem("user")) 
if(data.email === user.email){
 navigate("/profile")
}else{
  setError(true)
  navigate("/signin")
}
console.log(user,"user");

}

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column" >
      <AmazonIcon />
      <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        w="360px"
        border="0.3px solid gray"
        borderRadius="10px"
        justifyContent="center"
        alignItems="center">
        <Flex w="320px" flexDirection="column"  gap="1.25rem" p="1.25rem">
          <Heading as="h3" size="lg">
            Sign in
          </Heading>
          <Box>
            <Text fontSize="14px" fontWeight="500">
              Email or mobile phone number
            </Text>
            <Input _focus={{borderColor:"orange"}} {...register("email")} type="email"/>
            {error && (<Box color="red" fontSize="11px">Error the email is incorrecr</Box>)}
          </Box>
          <Box>
            <Text fontSize="14px" fontWeight="500">
              Password
            </Text>
            <Input _focus={{borderColor:"orange"}} {...register("password")} type="password"/>
            {error && (<Box color="red" fontSize="11px">Error the password is incorrecr</Box>)}
          </Box>
          <Button bg="#F3CC6C" type="submit">
            continue
          </Button>
          <Text fontSize="14px" fontWeight="500" >
            By continuing, you agree to Amazon's <Link href="#" color="blue.500">Conditions of Use</Link> and <Link href="#" color="blue.500">Privacy Notice</Link>.
          </Text>
          <HStack>
           {
            show? (
              <AiFillCaretRight />
            ):(
             <AiFillCaretDown />
            )
           }

           <Link href="#" color="blue.500" onClick={hendleClick} fontSize="13px">Need help?</Link>
           
          </HStack>
          <Collapse in={isOpen} animateOpacity>
        <Flex 
          flexDirection="column" 
          color='white'
          mt='-1'
          rounded='sm'
          shadow='sm'
        >
          <Link href="/help" color="blue.500" fontSize="13px">Forgot your password?</Link>
          <Link href="#" color="blue.500" fontSize="13px">Other issues with Sign-In</Link>
          
        </Flex>
      </Collapse>
    
        </Flex>
      </Flex>
    
    <Flex justifyContent="space-between"  flexDirection="row" alignItems="center"  w="360px" mt="20px"> 
    
    <Divider borderWidth="0.5px" borderColor={'gray'} w="125px"/>
    <Text fontSize="12px" color="gray">New to Amazon?</Text>
    <Divider borderWidth="0.5px" borderColor={'gray'} w="125px"/>
    </Flex>
    <Flex  alignItems="center"  w="360px" mt="20px" >
    <Button bg="#ECEDF0"  w="full" border="0.5px solid gray" fontSize="14px" onClick={()=>navigate("/account")}>
     Create your Amazon account
    </Button >
    </Flex >
    </form>
    </Flex>
  )
}

export default SignIn