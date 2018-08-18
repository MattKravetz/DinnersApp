import React, { Component } from "react";

import "./App.css";
import EditDinner from "./components/EditDinner";
import DinnerList from "./components/DinnerList";

class App extends Component {
  constructor(props) {
    super(props);

    // get cached state, if it exists
    const cachedState = JSON.parse(localStorage.getItem("state"))
    this.state = cachedState || {
      dinners: [],
      editing: null,
      dinner_inc: 0 // increment when a dinner is added.  Store in state so that dinners can be removed, reordreded, etc
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
    const new_dinner_id = this.state.dinner_inc + 1;
    const new_dinner = {
      id: "dinner-" + new_dinner_id, // todo: use a uuid-generating util
      name: dinner_name,
      ingredients: [
        {
          id: "dinner-" + new_dinner_id + "-ing-0",
          name: "",
          quantity: ""
        }
      ],
      ingredient_inc: 0 // increment when an ing is added.  Store in state so that ingredients can be removed, reordreded, etc      
    };

    this.setState({
      dinners: dinners.concat(new_dinner),
      dinner_inc: new_dinner_id
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
