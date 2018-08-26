import React from "react";
import { connect } from "react-redux";

import DinnerList from "./DinnerList";

import { Button, withStyles } from "@material-ui/core";
import { Route } from "react-router-dom";

import {
  updateDinnerName,
  addDinner,
  updateIngredientQuantity,
  addIngredientToDinner,
  removeIngredient
} from "../../actions/dinner";
import { updateIngredientName, addIngredient } from "../../actions/ingredient";

const styles = {
  root: {
    width: "50"
  }
};

const mapStateToProps = state => {
  return {
    dinners: state.dinners,
    ingredients: state.ingredients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDinnerName: (id, text) => dispatch(updateDinnerName(id, text)),
    addDinner: text => dispatch(addDinner(text)),
    updateIngredientName: (id, text) =>
      dispatch(updateIngredientName(id, text)),
    updateIngredientQuantity: (id, ingredient_id, quantity) =>
      dispatch(updateIngredientQuantity(id, ingredient_id, quantity)),
    addIngredient: uuid => dispatch(addIngredient(uuid)),
    addIngredientToDinner: (id, ingredient_id) =>
      dispatch(addIngredientToDinner(id, ingredient_id)),
    removeIngredient: (id, ingredient_id) =>
      dispatch(removeIngredient(id, ingredient_id))
  };
};

function Dinners(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Route path="/dinners" />
      <DinnerList
        dinners={props.dinners}
        ingredients={props.ingredients}
        updateDinnerName={props.updateDinnerName}
        addDinner={props.addDinner}
        editing={props.editing}
        updateIngredientName={props.updateIngredientName}
        updateIngredientQuantity={props.updateIngredientQuantity}
        updateIngredientBoughtState={props.updateIngredientBoughtState}
        addIngredientToDinner={props.addIngredientToDinner}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
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
