import React, {useState, useEffect} from 'react';
import { AppBar, Button, Typography, Toolbar,Avatar} from '@material-ui/core';
import useStyles from "./styles";
import memories from '../../images/memories.png' ;
import memoriesText from '../../images/memoriesText.png'
import { useDispatch } from 'react-redux';
import {useNavigate, useLocation, Link} from 'react-router-dom';
import decode from 'jwt-decode';


const Navbar = () =>{
    const dispatch = useDispatch();
    const classes =useStyles();
    const navigate=useNavigate();
    const location=useLocation();
    

  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
   console.log(user);

   const logout = () => {
    dispatch({ type: 'LOGOUT' });
    setUser(null);
    navigate("/auth"); 
    };

   useEffect(() =>{
    const token =user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')));

    if(token){
        const decodedToken =decode(token);
        if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    
    }
   },[location]);


    return (
    <AppBar className={classes.appBar} position="static" color="inherit" >
        <Link to="/" className={classes.brandContainer}>
       <img  src={memoriesText} alt="icon" height="45px"/>
        <img className={classes.image} src={memories} alt="memories" height="60" />
        </Link>
        <Toolbar className={classes.toolbar}>
         {
            user ?  (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}> Logout</Button>
                </div>
            ) :(
                <Button component={Link} to="/auth" variant="contained" color="primary"> Sign in</Button>
            )
         }
        </Toolbar>
    </AppBar>
    
);
    };

export default Navbar;