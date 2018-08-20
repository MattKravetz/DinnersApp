import React from "react";
import { Grid, Typography } from "@material-ui/core";

import ShoppingListItem from "./components/ShoppingListItem";

export default function ShoppingList(props) {
  const ingredients = [].concat.apply(
    [],
    props.dinners.map(dinner => {
      return dinner.ingredients.filter(i => i.name !== "");
    })
  );

  // TODO combine ingredients with the same name
  
  const shopping_items = ingredients.map(ing => {
    return (
      <ShoppingListItem
        name={ing.name}
        quantity={ing.quantity}
        isBought={ing.isBought}
        updateIngredientBoughtState={ing_name =>
          props.updateIngredientBoughtState(ing_name, !ing.isBought)
        }
        id={ing.id}
        key={ing.id}
      />
    );
  });

  return (
    <div>
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
