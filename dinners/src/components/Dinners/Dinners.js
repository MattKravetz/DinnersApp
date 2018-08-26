import React from "react";
import { connect } from "react-redux";

import DinnerList from "./DinnerList";

import { Button, withStyles } from "@material-ui/core";
import { Route } from "react-router-dom";

import { updateDinnerName, addDinner } from "../../actions/dinner";

const styles = {
  root: {
    width: "50"
  }
};

const mapStateToProps = state => {
  return {
    dinners: state.dinners
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDinnerName: (id, text) => dispatch(updateDinnerName(id, text)),
    addDinner: (text) => dispatch(addDinner(text))
  };
};

function Dinners(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Route path="/dinners" />
      <DinnerList
        dinners={props.dinners}
        updateDinnerName={props.updateDinnerName}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dinners));
