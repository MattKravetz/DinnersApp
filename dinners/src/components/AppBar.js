import React from "react";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, withStyles } from "@material-ui/core";

import { Link } from "react-router-dom";

const DinnersLink = props => <Link to="/dinners" {...props} />;
const ShoppingListLink = props => <Link to="/shoppinglist" {...props} />;
const UserLink = props => <Link to="/user" {...props} />;

const mapStateToProps = state => {
  return {
    userName: state.user.name
  };
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  rightButtons: {
    marginLeft: "auto"
  }
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button component={DinnersLink} color="inherit">
            Dinners
          </Button>
          <Button component={ShoppingListLink} color="inherit">
            Shopping List
          </Button>
          <Button
            className={classes.rightButtons}
            component={UserLink}
            color="inherit"
          >
            Hello, {props.userName}!
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect(mapStateToProps)(withStyles(styles)(ButtonAppBar));
