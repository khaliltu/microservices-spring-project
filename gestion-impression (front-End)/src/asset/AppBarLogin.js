import { AppBar, Toolbar } from "@mui/material";
import React, {useState} from "react";
import logo from '../images/logo.png'


const AppBarLogin = () =>{
  

 

  const toolbarStyle = {
    minHeight: '2px',
    backgroundColor: 'white',
    boxShadow: "none",width:'100%',height:'70px',padding:'0px 32px',
    
  };

    return(

               

            <AppBar  elevation={0} position='absolute'  >
                <Toolbar style={toolbarStyle}>
                <img src={logo} alt="logo"  />

                
                </Toolbar>
            </AppBar>
    )
}



export default AppBarLogin