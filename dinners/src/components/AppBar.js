import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";



function ButtonAppBar(props) {
  return (
    <div>
      <AppBar
        position="static"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Dinners
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
