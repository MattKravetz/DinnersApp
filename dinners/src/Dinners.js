import React from "react";

import "./App.css";
import DinnerList from "./components/DinnerList";

import { Button, withStyles } from "@material-ui/core";
import { Route } from "react-router-dom";


const styles = {
  root: {
    width: "50"
  }
};

function Dinners(props) {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <Route path="/dinners" />
      <DinnerList
        dinners={props.dinners}
        addDinner={props.addDinner}
        editDinner={props.editDinner}
        deleteDinner={props.deleteDinner}
        updateDinner={props.updateDinner}
        editing={props.editing}
        updateIngredientBoughtState={props.updateIngredientBoughtState}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.addDinner("")}
      >
        Add Dinner
      </Button>
    </div>
  );
}

export default withStyles(styles)(Dinners);
