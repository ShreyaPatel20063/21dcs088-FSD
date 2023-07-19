import React from "react";
import { Link } from "react-router-dom";
import { AppBar,Tabs, Tab, Toolbar, Typography } from "@mui/material";
import DiamondIcon from '@mui/icons-material/Diamond';

const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{background: '#009485'}}>
        <Toolbar>
        <DiamondIcon />
          <Tabs sx={{marginLeft: 'auto'}} textColor = "inherit" >

            <Tab label="Home" component={Link} to="/" />
            <Tab label="About" component={Link} to="/About" />
            <Tab label="Contact" component={Link} to="/Contact" />
            
            </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
