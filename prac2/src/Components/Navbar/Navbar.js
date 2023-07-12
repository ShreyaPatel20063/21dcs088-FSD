import React from "react";
import { AppBar,Tabs, Tab, Toolbar, Typography } from "@mui/material";
import DiamondIcon from '@mui/icons-material/Diamond';

const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{background: '#009485'}}>
        <Toolbar>
        <DiamondIcon />
          <Tabs sx={{marginLeft: 'auto'}} textColor = "inherit" >

            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
            


          </Tabs>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
