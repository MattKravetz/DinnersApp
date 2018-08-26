import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import User from "./User/User"
import ShoppingList from "./ShoppingList/ShoppingList";
import Dinners from "./Dinners/Dinners";
import ButtonAppBar from "./AppBar";
import uuid from "../utils/uuid";

const styles = theme => {};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <ButtonAppBar />
        </div>
        <Switch>
          <Route exact path="/" component={Dinners} />
          <Route exact path="/dinners" component={Dinners} />
          <Route exact path="/shoppinglist" component={ShoppingList} />
          <Route exact path="/user" component={User}/>
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);
