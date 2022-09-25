import React from "react";
import { ReactComponent as AmazonIcon } from "../../assets/amazon.svg";
import { AiOutlineExclamation } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../../constants";
import { Flex, Heading, Text, Input, Box, Button, Link, HStack, Divider} from "@chakra-ui/react";


const Account = () => {
const { register, handleSubmit} = useForm();
const navigate = useNavigate()

const onSubmit = (data) => {
  window.localStorage.setItem("user",JSON.stringify(data))
  window.localStorage.setItem("token",TOKEN)
  navigate("/signin")
  
}






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
          <form onSubmit={handleSubmit(onSubmit)}>
           <Flex w="320px" flexDirection="column"  gap="1.25rem" p="1.25rem">
           <Heading as="h3" size="lg">
           Create account   
          </Heading>
          <Box>
            <Text fontSize="14px" fontWeight="500">
            Your name
            </Text>
            <Input _focus={{borderColor:"orange"}} placeholder="First and Last name" {...register("last_name")}/>
          </Box>
          <Box>
            <Text fontSize="14px" fontWeight="500">
            Mobile number or email
             </Text>
            <Input _focus={{borderColor:"orange"}} {...register("email")}/>
          </Box>
          <Box>
            <Text fontSize="14px" fontWeight="500">
            Password
             </Text>
            <Input type={"password"} _focus={{borderColor:"orange"}} {...register("password")}/>
            <HStack>
            <AiOutlineExclamation />
            <Text fontSize={"12px"}>
            Passwords must be at least 6 characters.
            </Text>
            </HStack>
          </Box>
          <Box>
            <Text fontSize="14px" fontWeight="500">
            Re-enter password
             </Text>
            <Input type={"password"} _focus={{borderColor:"orange"}} {...register("confirm_password")}/>
          </Box>
          <Button bg="#F3CC6C" type="submit">
            continue
          </Button>
          <Text fontSize="12px">
          By creating an account, you agree to Amazon's  <Link href="#" color="blue.500">Conditions of Use</Link> and <Link href="#" color="blue.500">Privacy Notice.</Link>
          </Text>
          <Divider borderWidth="0.5px" borderColor={'gray'} w="280px"/>
          <Text fontSize="13px">   
           Already have an account? <Link href="/signin" color="blue.500">Sign in</Link> 
          <br /> Buying for work?  <Link href="#" color="blue.500">Create a free business account</Link>
          </Text>
           </Flex>
           </form>
        </Flex>
     </Flex>
    )
}


export default Account