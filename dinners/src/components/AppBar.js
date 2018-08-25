import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, withStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

const DinnersLink = props => <Link to="/dinners" {...props} />;
const ShoppingListLink = props => <Link to="/shoppinglist" {...props} />;
const UserLink = props => <Link to="/user" {...props} />;

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button
            style={{ float: "left" }}
            component={DinnersLink}
            color="inherit"
          >
            Dinners
          </Button>
          <Button
            style={{ float: "left" }}
            component={ShoppingListLink}
            color="inherit"
          >
            Shopping List
          </Button>
          <Button
            style={{ float: "right" }}
            component={UserLink}
            color="inherit"
          >
            Edit User
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(() => {})(ButtonAppBar);
