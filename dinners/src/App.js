import React, { Component } from "react";

import "./App.css";
import EditDinner from "./components/EditDinner";
import DinnerList from "./components/DinnerList";

import uuid from "./utils/uuid";
import ButtonAppBar from "./components/AppBar";

import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { Hidden } from "@material-ui/core";

const styles = theme => ({
  root: {
    zIndex: 1,
    height: 50,
    position: "relative",
    display: "flex",
    flexDirection: "column"
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    // get cached state, if it exists
    const cachedState = JSON.parse(localStorage.getItem("state"));
    this.state = cachedState || {
      dinners: [],
      editing: null
    };

    this.addDinner = this.addDinner.bind(this);
    this.editDinner = this.editDinner.bind(this);
    this.updateDinner = this.updateDinner.bind(this);
    this.updateCache = this.updateCache.bind(this);
    this.deleteDinner = this.deleteDinner.bind(this);

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

    if (new_dinners.length === 0) {
      new_dinners = [
        {
          id: uuid(),
          name: "",
          ingredients: [
            {
              id: uuid(),
              name: "",
              quantity: ""
            }
          ]
        }
      ];
    }

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

  render() {
    const { classes } = this.props;
    const dinners = this.state.dinners;
    console.log(this.state);
    return (
      <div>
        <div>
          <ButtonAppBar />
        </div>
        <DinnerList
          dinners={dinners}
          addDinner={this.addDinner}
          editDinner={this.editDinner}
          deleteDinner={this.deleteDinner}
          updateDinner={this.updateDinner}
        />
        {this.state.editing ? (
          <EditDinner
            dinner={this.state.editing}
            updateDinner={this.updateDinner}
          />
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(App);
