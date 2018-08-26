import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

import Ingredient from "./Ingredient";
import uuid from "../../utils/uuid";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function EditDinner(props) {
  const handleKeyPress = e => {
    const last_ingredient = props.dinner.ingredients.slice(-1)[0];
    const enterKeycode = 13;
    if (e.keyCode === enterKeycode && last_ingredient.name !== "") {
      const new_ing_id = uuid()
      props.addIngredient(new_ing_id);
      props.addIngredientToDinner(props.dinner.id, new_ing_id)
    }
  };

  const dinner = props.dinner;
  const { classes } = props;
  let ingredients = dinner.ingredients.map(dinner_ing => {
    const ing = props.ingredients.filter(i => i.id === dinner_ing.id)[0];    
    return (
      <Ingredient
        name={ing.name}
        quantity={dinner_ing.quantity}
        id={ing.id}
        key={"ingredient-" + ing.id}
        updateName={e =>
          props.updateIngredientName(ing.id, e.target.value)
        }
        updateQuantity={e =>
          props.updateIngredientQuantity(dinner.id, ing.id, e.target.value)
        }
        onKeyPress={e => handleKeyPress(e)}
        removeIngredient={e => props.removeIngredient(dinner.id, ing.id)}
        bought={ing.bought}
        toggleBought={e => props.toggleBought(ing.id)}
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

export default withStyles(styles)(EditDinner);
