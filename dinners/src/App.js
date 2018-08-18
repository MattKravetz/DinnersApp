import React, { Component } from "react";

import "./App.css";
import EditDinner from "./components/EditDinner";
import DinnerList from "./components/DinnerList";

import uuid from './utils/uuid'

class App extends Component {
  constructor(props) {
    super(props);

    // get cached state, if it exists
    const cachedState = JSON.parse(localStorage.getItem("state"))
    this.state = cachedState || {
      dinners: [],
      editing: null,
    };

    this.addDinner = this.addDinner.bind(this);
    this.editDinner = this.editDinner.bind(this);
    this.updateDinner = this.updateDinner.bind(this);
    this.updateCache = this.updateCache.bind(this);
  }

  updateCache() {
    localStorage.setItem("state", JSON.stringify(this.state))
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
      ],
    };

    this.setState({
      dinners: dinners.concat(new_dinner),
    });
    this.updateCache()
  }

  editDinner(dinner_id) {
    const dinner = this.state.dinners.filter(d => d.id === dinner_id)[0];
    this.setState({ editing: dinner });
    this.updateCache()
  }

  updateDinner(dinner) {
    const updated_dinners = this.state.dinners.slice().map(d => {
      if (dinner.id !== d.id) {
        return d;
      } else {
        return dinner;
      }
    });
    this.setState({
      dinners: updated_dinners,
      editing: dinner
    });
    this.updateCache()
  }

  render() {
    const dinners = this.state.dinners;
    //console.log(this.state.editing)
    return (
      <div className="App">
        <DinnerList
          dinners={dinners}
          addDinner={this.addDinner}
          editDinner={this.editDinner}
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

export default App;
