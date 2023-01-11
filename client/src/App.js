import React from "react";
import {Container } from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';
import PostDetails from './components/PostDetails/PostDetails';


const App = () => {
const user=JSON.parse(localStorage.getItem('profile'));

return(
<BrowserRouter>
    <Container  maxwidth="xl">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Navigate to='/posts' />} />
        <Route  path="/posts"  element={<Home />}/>
        <Route  path="/posts/search"  element={<Home />}/>
        <Route path="/posts/:id"  element={<PostDetails />} />
        {
            !user ?  (
              <Route path='/auth'  element={ <Auth /> } /> 
            ) :(
              <Route  path="/auth"  element={<Navigate to='/posts' />}/>
            ) 
         }
        
      </Routes>
    </Container>
</BrowserRouter>

   
);
};


export default App;