import React, { Component } from "react";

import "./App.css";
import DinnerList from "./components/DinnerList";

import { Button, withStyles } from "@material-ui/core";
import { Route } from "react-router-dom";

const styles = theme => {};

function Dinners(props) {
  return (
    <div>
      <Route path="/dinners" />
      <DinnerList
        dinners={props.dinners}
        addDinner={props.addDinner}
        editDinner={props.editDinner}
        deleteDinner={props.deleteDinner}
        updateDinner={props.updateDinner}
        editing={props.editing}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.addDinner("New Dinner")}
      >
        Add Dinner
      </Button>
    </div>
  );
}

export default withStyles(styles)(Dinners);
