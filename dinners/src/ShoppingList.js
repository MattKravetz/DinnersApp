import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Ingredient from "./components/Ingredient";

export default function ShoppingList(props) {

  const ingredients = [].concat.apply(
    [],
    props.dinners.map(dinner => {
      return dinner.ingredients.filter(i => i.name !== "");
    })
  );

  const shopping_items = ingredients.map(ing => {
    return (
      <Ingredient
        name={ing.name}
        quantity={ing.quantity}
        id={ing.id}
        key={ing.id}
      />
    );
  });

  return (
    <div>
      <Grid container spacing={16}>
        <Grid item xs={3}>
          <Typography variant="subheading">Ingredient</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subheading">Quantity</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subheading">Bought</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subheading">Delete</Typography>
        </Grid>
      </Grid>
      {shopping_items}
    </div>
  );
}
