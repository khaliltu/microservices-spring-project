import React, {useEffect, useState} from "react";
import {AppBar, Avatar, IconButton, Tab, Tabs, Typography} from "@mui/material";
import {Link} from "react-router-dom"
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import logo from '../images/logo.png'
import { Toolbar } from "@material-ui/core";

const ResponsiveAppBar = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        let path = window.location.pathname
        if (path === "//home" && value !== 0) setValue(0);
        else if (path === "/utilisateurs" && value !== 1) setValue(1);
        else if (path === "/menus" && value !== 2) setValue(2);
        else if (path === "/evenements" && value !== 3) setValue(3);
        else if (path === "/profil" && value !== 4) setValue(4);

    }, [value,]);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    //const token = localStorage.getItem('access_token');

    const handleUser = async () => {
    
    }

    const handlelogout = async e => {
        e.preventDefault();
      
            localStorage.clear();
            window.location.href = '/';
        
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const getMenuEventNotif = () => {

    }

    

    const settings = ['Deconnexion'];

    useEffect(() => {
        getMenuEventNotif()
        handleUser()
    }, []) 
    const toolbarStyle = {
        minHeight: '2px',
        backgroundColor: 'white',
        boxShadow: "none", width: '100%', height: '50%', paddingLeft: '2%',
    };
    return (
        <React.Fragment>
            <AppBar elevation={0}>
                <Toolbar style={toolbarStyle}>
                    <Typography> <img src={logo} alt="logo"/>
                    </Typography>


                    <Tabs style={toolbarStyle} sx={{
                        color: 'rgb(141,126,83)',
                        backgroundColor: 'white',
                        "& .MuiTabs-flexContainer": {paddingTop: "12px", marginLeft: '10%'}
                    }}
                          textColor="inherit" value={value} onChange={handleChange}
                          TabIndicatorProps={{style: {background: '#B04CFE'}}}>

                        <Tab style={{color: value === 0 ? "#B04CFE" : ""}}
                             label="HOME" to='/home' component={Link}/>

                         <Tab style={{color: value === 1 ? "#B04CFE" : ""}}
                             label={<Badge sx={{p: 0.7}}  color="error"
                                           style={{transform: 'translate(2px, -0px)'}}> ADMINISTRATEUR </Badge>}
                             to='/administrateur' component={Link}/>

                        <Tab style={{color: value === 2 ? "#B04CFE" : ""}}
                             label={<Badge sx={{p: 0.7}} color="error"
                                           style={{transform: 'translate(2px, -0px)'}}>AGANT </Badge>} to='/agent'
                             component={Link}/>

                        <Tab style={{color: value === 3 ? "#B04CFE" : ""}}
                             label={<Badge sx={{p: 0.7}} color="error"
                                           style={{transform: 'translate(2px, -0px)'}}>ENSEINGANT </Badge>}
                             to='/enseignant' component={Link}/>

                    </Tabs>


                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu}
                                    sx={{marginLeft: '1%', color: 'rgb(165, 157, 133)', backgroundColor: 'white'}}>
                            <Avatar src="/static/images/avatar/2.jpg" sx={{marginRight: '300%'}}/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{mt: '45px'}}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handlelogout}>
                                <Typography textAlign="center" color="#A79C87">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>


                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}


export default ResponsiveAppBar
