import React from "react";
import { Box } from "@chakra-ui/react";
import CButton from "../../components/CButton/CButton.jsx"
import CButton2 from "../../components/CButton/CButton2.jsx";
import CButton3 from "../../components/CButton/CButton3.jsx";
import CButton4 from "../../components/CButton/CButton4.jsx";
import CButton5 from "../../components/CButton/CButton5.jsx";
import CButton6 from "../../components/CButton/CButton6.jsx";
import CButton7 from "../../components/CButton/CButton7.jsx";
import CButton8 from "../../components/CButton/CButton8.jsx";
import CButton9 from "../../components/CButton/CButton9.jsx";
import CButton10 from "../../components/CButton/CButton10.jsx";

const Home = () => {
    return(
  <Box>
     <CButton  w={"300px"} h={"100px"} color={'blue'}  bg={"gray"} >Hello</CButton>
     <CButton2 w={"200px"} h={"50px"}  color={'red'}   bg={"purple"} >My name is gagik</CButton2>
     <CButton3 w={"200px"} h={"500px"} color={'green'} bg={"orange"} >this is CButton3</CButton3>
     <CButton4 w={"610px"} h={"200px"} color={"blue"}  bg={"red"}>this is CButton4</CButton4>
     <CButton5 w={"210px"} h={"290px"} color={"black"}  bg={"gray"}>this is CButton5</CButton5>
     <CButton6 w={"300px"} h={"100px"} color={"brown"}  bg={"gray"}>this is CButton6</CButton6>
     <CButton7 w={"400px"} h={"900px"} color={"black"}  bg={"purple"}>this is CButton7</CButton7>
     <CButton8 w={"600px"} h={"700px"} color={"black"}  bg={"red"}>this is CButton8</CButton8>
     <CButton9 w={"110px"} h={"200px"} color={"blue"}  bg={"green"}>this is CButton9</CButton9>
     <CButton10 w={"550px"} h={"400px"} color={"red"}  bg={"yellow"}>this is CButton10</CButton10>
  </Box>

    )
}


export default Home