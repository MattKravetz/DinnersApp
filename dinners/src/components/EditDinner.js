import React from "react";
import {Card, Table, TableBody, TableHead, TableRow, TableCell, CardContent, CardHeader} from '@material-ui/core'

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

  addIngredient(e) {
    // On enter, consider this ingredient submitted.  Add a new blank empty to the list
    let new_dinner = { ...this.props.dinner };
    const last_ingredient = this.props.dinner.ingredients.slice(-1)[0];
    const new_id = uuid();
    const enterKeycode = 13;
    if (e.keyCode === enterKeycode && last_ingredient.name !== "") {
      console.log("entered!");
      new_dinner.ingredients.push({
        id: new_id,
        name: "",
        quantity: ""
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
          key={ing.id}
          handleChange={e =>
            this.updateDinnerIngredient(e.target.name, e.target.value, ing.id)
          }
          onKeyPress={e => this.addIngredient(e)}
        />
      );
    });

    return (
      <Card className="create-dinner">
        <CardHeader title="Edit Dinner" subtitle={dinner.name}/>
        <CardContent>
          <Table>            
              <TableHead key="headerKey">
                <TableRow>
                    <TableCell>Ingredient</TableCell>
                    <TableCell>Quantity</TableCell>
                </TableRow>                
              </TableHead>
            <TableBody>
              {ingredients}
            </TableBody>
          </Table>
        </CardContent>  
      </Card>
    );
  }
}
