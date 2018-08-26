import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

import Ingredient from "./Ingredient";
import uuid from "../../utils/uuid";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class EditDinner extends React.Component {


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
    let ingredients = dinner.ingredients.map(dinner_ing => {
      const ing = this.props.ingredients.filter(i => i.id === dinner_ing.id)[0];
      return (
        <Ingredient
          name={ing.name}
          quantity={dinner_ing.quantity}
          id={ing.id}
          key={"ingredient-"+ing.id}
          updateName={e => this.props.updateIngredientName(ing.id, e.target.value)}
          updateQuantity={e => this.props.updateIngredientQuantity(dinner.id, ing.id, e.target.value)}
          onKeyPress={e => this.handleKeyPress(e)}
          deleteIngredient={e => this.deleteIngredient(e)}
          isBought={ing.isBought}
          flipBoughtState={() =>
            this.props.updateIngredientBoughtState(ing.name, !ing.isBought)
          }
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
