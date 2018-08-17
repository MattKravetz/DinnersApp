import React, { Component } from 'react'

import './App.css';
import EditDinner from './components/EditDinner'
import DinnerList from './components/DinnerList'


class App extends Component {
  constructor(props){
      super(props)
      this.state = {          
          dinners: [],
          editing: null,
          dinner_inc: 0 // increment when a dinner is added.  Store in state so that dinners can be removed, reordreded, etc
      };

      this.addDinner = this.addDinner.bind(this)
      this.editDinner = this.editDinner.bind(this)
      this.updateDinner = this.updateDinner.bind(this)
  }

  addDinner(dinner_name) {
    let dinners = this.state.dinners.slice()
    const new_dinner_id = this.state.dinner_inc + 1
    const new_dinner = {
      id: "dinner-" + new_dinner_id,
      name: dinner_name,
      ingredients: [{
        id: "dinner-" + new_dinner_id + "-ing-0",
        name: "",
        quantity: "",
      }],
      ingredient_inc: 0 // increment when an ing is added.  Store in state so that ingredients can be removed, reordreded, etc
    }

    this.setState({
      dinners: dinners.concat(new_dinner),
      dinner_inc: new_dinner_id
    })
  }

  editDinner(dinner_id) {
    const dinner = this.state.dinners.filter( (d) => 
      d.id === dinner_id
    )[0];
    this.setState({editing: dinner})
  }

  updateDinner(dinner) {
    const updated_dinners = this.state.dinners.slice().map((d) => {
          if (dinner.id !== d.id) {
            return d
          }
          else {
            return dinner
          }
        }
    );
    this.setState({
      dinners: updated_dinners,
      editing: dinner
    })
  }

  render() {
    const dinners = this.state.dinners
    //console.log(this.state.editing)
    return (
        <div className="App">
          <DinnerList dinners={dinners} addDinner={this.addDinner} editDinner={this.editDinner}/>
          {this.state.editing ? <EditDinner 
                                  dinner={this.state.editing}                                              
                                  updateDinner={this.updateDinner}
                                  />
                                : null}
        </div>
    );
  }
}

export default App;
