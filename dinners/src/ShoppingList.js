import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

import ShoppingListItem from "./components/ShoppingListItem";

const styles = {
  root: {
    padding: 25
  }
};

function ShoppingList(props) {
  const ingredients = [].concat.apply(
    [],
    props.dinners.map(dinner => {
      return dinner.ingredients.filter(i => i.name !== "");
    })
  );

  // Combine ingredients with the same name
  const combined_ingredients = new Map();
  ingredients.forEach(ing => {
    let combined_ing = combined_ingredients.get(ing.name);
    if (combined_ing !== undefined) {
      // This ingredient is used 2+ times in the list of dinners
      // combine this version with the version present in the map
      // for now, do this by concatenating the quantity strings
      // and setting the bought state to all(ing.isBought for ing in ingredients) (:( python)
      combined_ing = {
        ...combined_ing,
        quantity: `${combined_ing.quantity}; ${ing.quantity}`,
        isBought: combined_ing.isBought && ing.isBought ? true : false
      };
    } else {
      combined_ing = ing;
    }
    combined_ingredients.set(combined_ing.name, combined_ing);
  });

  const shopping_items = Array.from(
    combined_ingredients.values(),
    (ing, name) => {
      return (
        <ShoppingListItem
          key={ing.id}
          name={ing.name}
          quantity={ing.quantity}
          isBought={ing.isBought}
          updateIngredientBoughtState={ing_name =>
            props.updateIngredientBoughtState(ing_name, !ing.isBought)
          }
          id={ing.id}
        />
      );
    }
  );

  const { classes } = props;
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
      </Grid>
      {shopping_items}
    </div>
  );
}

export default withStyles(styles)(ShoppingList);
