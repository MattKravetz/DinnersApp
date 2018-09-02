import React from "react";
import { connect } from "react-redux";
import DinnerList from "./DinnerList";

import { Button, withStyles } from "@material-ui/core";
import { Route } from "react-router-dom";

import {
  updateDinnerName,
  addDinner,
  removeDinner,
  updateIngredientQuantity,
  addIngredientToDinner,
  removeIngredient
} from "../../actions/dinner";

import {
  updateIngredientName,
  addIngredient,
  toggleBought,
  updateUnitName
} from "../../actions/ingredient";

import {
  addDinnerToUser,
  removeDinnerFromUser,
  addFavorite,
  removeFavorite
} from "../../actions/user";

import uuid from "../../utils/uuid";

const styles = {
  root: {
    width: "50"
  }
};

const mapStateToProps = state => {
  const user_dinner_ids = state.user.dinners.map(d => d.id);
  return {
    dinners: Object.values(state.dinners)
      .filter(d => user_dinner_ids.includes(d.id))
      .map(d => {
        return {
          ...d,
          favorited: state.user.favorites.map(f => f.id).includes(d.id)
        };
      }),
    ingredients: state.ingredients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDinnerName: (id, text) => dispatch(updateDinnerName(id, text)),
    updateIngredientName: (id, text) =>
      dispatch(updateIngredientName(id, text)),
    updateIngredientQuantity: (id, ingredient_id, quantity) =>
      dispatch(updateIngredientQuantity(id, ingredient_id, quantity)),
    addIngredient: uuid => dispatch(addIngredient(uuid)),
    addIngredientToDinner: (id, ingredient_id) =>
      dispatch(addIngredientToDinner(id, ingredient_id)),
    removeIngredient: (id, ingredient_id) =>
      dispatch(removeIngredient(id, ingredient_id)),
    toggleBought: (id, ingredient_id) =>
      dispatch(toggleBought(id, ingredient_id)),
    addDinner: (id, text) =>
      dispatch(addDinner(id, text)) && dispatch(addDinnerToUser(id)),
    removeDinner: id =>
      dispatch(removeDinner(id)) && dispatch(removeDinnerFromUser(id)),
    toggleFavorite: (dinner, favorited) =>
      favorited
        ? dispatch(removeFavorite(dinner))
        : dispatch(addFavorite(dinner)),
    updateUnitName: (ingredient_id, name) => dispatch(updateUnitName(ingredient_id, name))
  };
};

function Dinners(props) {
  const addNewDinner = () => {
    const dinner_id = uuid();
    const ingredient_id = uuid();
    props.addDinner(dinner_id);
    props.addIngredient(ingredient_id);
    props.addIngredientToDinner(dinner_id, ingredient_id);
  };

  const { classes } = props;
  return (
    <div className={classes.root}>
      <Route path="/dinners" />
      <DinnerList
        dinners={props.dinners}
        ingredients={props.ingredients}
        updateDinnerName={props.updateDinnerName}
        updateIngredientName={props.updateIngredientName}
        updateIngredientQuantity={props.updateIngredientQuantity}
        updateIngredientBoughtState={props.updateIngredientBoughtState}
        addIngredientToDinner={props.addIngredientToDinner}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
        toggleBought={props.toggleBought}
        removeDinner={props.removeDinner}
        toggleFavorite={props.toggleFavorite}
        updateUnitName={props.updateUnitName}
      />
      <Button variant="contained" color="primary" onClick={addNewDinner}>
        Add Dinner
      </Button>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Dinners));
