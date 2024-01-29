import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import ColorModeToggle from './components/ColorModeToggle';
import Signin from "./routes/Signin";
import Home from './routes/Home';

const App = () => {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
