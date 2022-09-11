import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import RouteProvider from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <RouteProvider />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
