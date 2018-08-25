import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import User from "./User"
import ShoppingList from "./ShoppingList";
import Dinners from "./Dinners";
import ButtonAppBar from "./components/AppBar";
import uuid from "./utils/uuid";

const styles = theme => {};

class App extends Component {
  constructor(props) {
    super(props);

    // get cached state, if it exists
    const cachedState = JSON.parse(localStorage.getItem("state"));
    this.state = cachedState || {
      dinners: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ].map(day => {
        return {
          id: uuid(),
          name: day,
          ingredients: [
            {
              id: uuid(),
              name: "",
              quantity: ""
            }
          ]
        };
      }),
      editing: null
    };

    this.addDinner = this.addDinner.bind(this);
    this.editDinner = this.editDinner.bind(this);
    this.updateDinner = this.updateDinner.bind(this);
    this.updateCache = this.updateCache.bind(this);
    this.deleteDinner = this.deleteDinner.bind(this);
    this.updateIngredientBoughtState = this.updateIngredientBoughtState.bind(
      this
    );
    console.log(this.state);
  }

  componentDidMount() {
    // if starting fresh, add a blank dinner
    if (this.state.dinners.length === 0) {
      this.addDinner("");
    }
    // clean the currently editing dinner for a cleaner start
    this.setState({
      editing: null
    });
  }

  updateCache() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  addDinner(dinner_name) {
    let dinners = this.state.dinners.slice();
    const new_dinner = {
      id: uuid(),
      name: dinner_name,
      ingredients: [
        {
          id: uuid(),
          name: "",
          quantity: ""
        }
      ]
    };

    this.setState({
      dinners: dinners.concat(new_dinner)
    });
    this.updateCache();
  }

  editDinner(dinner_id) {
    const dinner = this.state.dinners.filter(d => d.id === dinner_id)[0];
    this.setState({ editing: dinner });
    this.updateCache();
  }

  updateDinner(dinner) {
    const updated_dinners = this.state.dinners.slice().map(d => {
      if (dinner.id !== d.id) {
        return d;
      } else {
        return dinner;
      }
    });

    let new_editing;
    if (this.state.editing !== null) {
      new_editing =
        dinner.id === this.state.editing.id ? dinner : this.state.editing;
    } else {
      new_editing = null;
    }

    this.setState({
      dinners: updated_dinners,
      editing: new_editing
    });
    this.updateCache();
  }

  deleteDinner(dinner_id) {
    let new_dinners = this.state.dinners
      .slice()
      .filter(d => d.id !== dinner_id);

    // Delete from editing
    let new_editing;
    if (this.state.editing !== null) {
      new_editing =
        this.state.editing.id === dinner_id ? null : this.state.editing;
    } else {
      new_editing = null;
    }

    this.setState({
      dinners: new_dinners,
      editing: new_editing
    });
    this.updateCache();
  }

  // Updates the bought state of all ingredients with the same name
  updateIngredientBoughtState(n, new_state) {
    const dinners_with_ing = this.state.dinners.filter(dinner => {
      let found = false;
      dinner.ingredients.forEach(element => {
        if (element.name === n) {
          found = true;
        }
      });
      return found;
    });

    const updated_dinners = dinners_with_ing.map(dinner => {
      dinner.ingredients.forEach(ing => {
        if (ing.name === n) {
          ing.isBought = new_state;
        }
      });
      return dinner;
    });

    updated_dinners.forEach(dinner => {
      this.updateDinner(dinner);
    });
  }

  render() {
    const DinnersWithState = () => {
      return (
        <Dinners
          dinners={this.state.dinners}
          addDinner={this.addDinner}
          editDinner={this.editDinner}
          deleteDinner={this.deleteDinner}
          updateDinner={this.updateDinner}
          editing={this.state.editing}
          updateIngredientBoughtState={this.updateIngredientBoughtState}
        />
      );
    };

    const ShoppingListWithState = () => {
      return (
        <ShoppingList
          dinners={this.state.dinners}
          updateDinner={this.updateDinner}
          updateIngredientBoughtState={this.updateIngredientBoughtState}
        />
      );
    };

    return (
      <div>
        <div>
          <ButtonAppBar />
        </div>
        <Switch>
          <Route exact path="/" render={DinnersWithState} />
          <Route exact path="/dinners" render={DinnersWithState} />
          <Route exact path="/shoppinglist" render={ShoppingListWithState} />
          <Route exact path="/user" render={User}/>
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);
