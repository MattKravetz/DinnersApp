import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

function ButtonAppBar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Dinners</Button>
          <Button color="inherit">Shopping List</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
