import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import ShoppingList from './ShoppingList'
import Dinners from "./Dinners";
import ButtonAppBar from "./components/AppBar";



const styles = theme => {};

function App(props) {
  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>
      <Switch>
        <Route exact path="/" component={Dinners}/>
        <Route exact path="/dinners" component={Dinners}/>
        <Route exact path="/shoppinglist" component={ShoppingList}/>
      </Switch>
      
    </div>
  );
}

export default withStyles(styles)(App);
