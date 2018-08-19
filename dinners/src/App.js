import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Dinners from "./Dinners";
import ButtonAppBar from "./components/AppBar";

const styles = theme => {};

function App(props) {
  return (
    <div>
      <div>
        <ButtonAppBar />
      </div>
      <Dinners />
    </div>
  );
}

export default withStyles(styles)(App);
