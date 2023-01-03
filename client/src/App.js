import React from "react";
import {Container } from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => (
  <GoogleOAuthProvider clientId="895602753306-bsvhi0avsusg54ho1d19pah0b3m30h1n.apps.googleusercontent.com">
<BrowserRouter>
    <Container maxwidth="lg">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/auth' exact element={<Auth />} />
      </Routes>
    </Container>
</BrowserRouter>
</GoogleOAuthProvider>
   

);


export default App;