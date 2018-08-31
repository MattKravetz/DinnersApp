import React from "react";
import { connect } from "react-redux";

import {
  withStyles,
  Table,
  TableHead,
  TableCell,
  Paper,
  TableBody,
  TableRow,
} from "@material-ui/core";

import ShoppingListItem from "./ShoppingListItem";
import { toggleBought } from "../../actions/ingredient";

// TODO: Push BOUGHT ingredients to the bottom of the list

const mapStateToProps = state => {
  return {
    dinners: state.dinners,
    ingredients: state.ingredients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleBought: (id, ingredient_id) =>
      dispatch(toggleBought(id, ingredient_id))
  };
};

const styles = {
  root: {
    padding: 25
  }
};

function ShoppingList(props) {
  const ingredients = props.ingredients;

  // Combine ingredients with the same name
  const combined_ingredients = new Map();
  ingredients.forEach(ing => {
    if (ing === undefined || ing.name === undefined || ing.name === "") {
      return;
    }

    // sum quantities from all dinners
    const ing_quantity = [].concat
      .apply([], props.dinners.map(d => d.ingredients))
      .filter(dinner_ing => dinner_ing.id === ing.id)
      .map(dinner_ing => dinner_ing.quantity)
      .filter(quantity => quantity !== undefined)
      .reduce((a, b) => Number(a) + Number(b), 0);

    let combined_ing = combined_ingredients.get(ing.name.toLowerCase());
    if (combined_ing !== undefined) {
      // This ingredient is used 2+ times in the list of dinners
      // combine this version with the version present in the map
      // for now, do this by concatenating the quantity strings
      // and setting the bought state to all(ing.isBought for ing in ingredients) (:( python)
      combined_ing = {
        ...combined_ing,
        bought: combined_ing.bought && ing.bought ? true : false,
        bought_dates: combined_ing.bought_dates.concat(ing.bought_dates),
        quantity: combined_ing.quantity + ing_quantity
      };
    } else {
      combined_ing = {
        ...ing,
        quantity: ing_quantity
      };
    }
    combined_ingredients.set(combined_ing.name.toLowerCase(), combined_ing);
  });
  console.log(combined_ingredients);
  const shopping_items = Array.from(
    combined_ingredients.values(),
    (ing, name) => {
      return (
        <ShoppingListItem
          key={ing.id}
          name={ing.name}
          quantity={ing.quantity}
          isBought={ing.bought}
          updateIngredientBoughtState={() => props.toggleBought(ing.id)}
          id={ing.id}
          unitName={ing.unitName}
        />
      );
    }
  );

  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Ingredient</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Bought</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{shopping_items}</TableBody>
      </Table>
    </Paper>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ShoppingList));

/*
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
      */
