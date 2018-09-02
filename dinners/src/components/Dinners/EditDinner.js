import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

import Ingredient from "./Ingredient";
import uuid from "../../utils/uuid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  text: {
    fontSize: "1.5vw"
  }
});

function EditDinner(props) {
  const handleKeyPress = e => {
    const last_ingredient = props.ingredients.filter(ing => {
      return ing.id === props.dinner.ingredients.slice(-1)[0].id;
    })[0];
    const enterKeycode = 13;
    if (e.keyCode === enterKeycode && last_ingredient.name !== "") {
      const new_ing_id = uuid();
      props.addIngredient(new_ing_id);
      props.addIngredientToDinner(props.dinner.id, new_ing_id);
    }
  };

  const dinner = props.dinner;
  const { classes } = props;
  let ingredients = dinner.ingredients.map(dinner_ing => {
    const ing = props.ingredients.filter(i => i.id === dinner_ing.id)[0];
    return (
      <Ingredient
        ingredients={props.ingredients}
        name={ing.name}
        quantity={dinner_ing.quantity}
        id={ing.id}
        key={"ingredient-" + ing.id}
        updateName={e => props.updateIngredientName(ing.id, e.target.value)}
        updateQuantity={e =>
          props.updateIngredientQuantity(dinner.id, ing.id, e.target.value)
        }
        onKeyPress={e => handleKeyPress(e)}
        removeIngredient={e => props.removeIngredient(dinner.id, ing.id)}
        bought={ing.bought}
        toggleBought={e => props.toggleBought(ing.id)}
        unitName={ing.unitName}
        updateUnitName={name => {
          if (name) props.updateUnitName(ing.id, name);
        }}
      />
    );
  });
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={3}>
          <Typography variant="title" className={classes.text}>
            Ingredient
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="title" className={classes.text}>
            Quantity
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="title" className={classes.text}>
            Bought
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="title" className={classes.text}>
            Delete
          </Typography>
        </Grid>
      </Grid>
      {ingredients}
    </div>
  );
}

export default withStyles(styles)(EditDinner);
