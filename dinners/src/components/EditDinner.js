import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

import Ingredient from "./Ingredient";
import uuid from "../utils/uuid";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class EditDinner extends React.Component {
  updateDinnerIngredient(property, val, target_id) {
    let new_dinner = { ...this.props.dinner };
    new_dinner.ingredients = new_dinner.ingredients.map(ing => {
      if (ing.id === target_id) {
        return {
          ...ing,
          [property]: val
        };
      }
      return ing;
    });

    this.props.updateDinner(new_dinner);
  }

  handleKeyPress(e) {
    // On enter, consider this ingredient submitted.  Add a new blank empty to the list
    const last_ingredient = this.props.dinner.ingredients.slice(-1)[0];
    const enterKeycode = 13;
    if (e.keyCode === enterKeycode && last_ingredient.name !== "") {
      this.addIngredient();
    }
  }

  addIngredient() {
    let new_dinner = { ...this.props.dinner };
    new_dinner.ingredients.push({
      id: uuid(),
      name: "",
      quantity: "",
      isBought: false
    });
    this.props.updateDinner(new_dinner);
  }

  deleteIngredient(target_id) {
    let new_dinner = { ...this.props.dinner };
    new_dinner.ingredients = new_dinner.ingredients.filter(
      ing => ing.id !== target_id
    );
    // Add a blank ingredient if the list was cleared
    if (new_dinner.ingredients.length === 0) {
      new_dinner.ingredients.push({
        id: uuid(),
        name: "",
        quantity: "",
        isBought: false
      });
    }
    this.props.updateDinner(new_dinner);
  }

  render() {
    const dinner = this.props.dinner;
    const { classes } = this.props;
    let ingredients = dinner.ingredients.map(ing => {
      return (
        <Ingredient
          name={ing.name}
          quantity={ing.quantity}
          id={ing.id}
          key={ing.id}
          handleChange={e =>
            this.updateDinnerIngredient(e.target.name, e.target.value, ing.id)
          }
          onKeyPress={e => this.handleKeyPress(e)}
          deleteIngredient={e => this.deleteIngredient(e)}
          isBought={ing.isBought}
          flipBoughtState={e => {
            const newBoughtState = e.target.checked;
            this.updateDinnerIngredient("isBought", newBoughtState, ing.id);
          }}
        />
      );
    });

    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={3}>
            <Typography variant="title">Ingredient</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="title">Quantity</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="title">Bought</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="title">Delete</Typography>
          </Grid>
        </Grid>
        {ingredients}
      </div>
    );
  }
}

export default withStyles(styles)(EditDinner);
