import React from "react";
import {
  Card,
  CardContent,
  Grid,
  CardHeader,
  Typography
} from "@material-ui/core";

import Ingredient from "./Ingredient";
import uuid from "../utils/uuid";

export default class EditDinner extends React.Component {
  constructor(props) {
    super(props);
  }

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
            const newBoughtState = e.target.checked
            this.updateDinnerIngredient("isBought", newBoughtState, ing.id)
            }}
        />
      );
    });

    return (
      <Card className="create-dinner">
        <CardHeader title={dinner.name} />
        <CardContent>
          <Grid container spacing={24}>
            <Grid item xs={5}>
              <Typography variant="subheading">
                Ingredient
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="subheading">
                Quantity
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subheading">
                Bought
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="subheading">
                Delete
              </Typography>
            </Grid>
          </Grid>
          {ingredients}
        </CardContent>
      </Card>
    );
  }
}
