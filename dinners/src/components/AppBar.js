import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";

import { Link } from 'react-router-dom'

const DinnersLink = props => <Link to="/dinners" {...props} />
const ShoppingListLink = props => <Link to="/shoppinglist" {...props} />

function ButtonAppBar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button component={DinnersLink} color="inherit">Dinners</Button>
          <Button component={ShoppingListLink} color="inherit">Shopping List</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
