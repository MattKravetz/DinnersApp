import React, { Component } from 'react'
import DinnerList from './components/DinnerList'

import './App.css';
import EditDinner from './components/EditDinner'


class App extends Component {
  constructor(props){
      super(props)
      this.state = {          
          dinners: [],
          editing: null,
      };

      this.addDinner = this.addDinner.bind(this)
      this.editDinner = this.editDinner.bind(this)
      this.submitEdit = this.submitEdit.bind(this)
  }

  addDinner(dinner_name) {
    let dinners = this.state.dinners.slice()

    const new_dinner = {
      id: dinner_name, // whoops
      name: dinner_name,
      ingredients: [],
    }

    this.setState({dinners: dinners.concat(new_dinner)})
  }

  editDinner(dinner_id) {
    const dinner = this.state.dinners.filter( (d) => 
      d.id === dinner_id
    )[0];
    this.setState({editing: dinner})
  }

  submitEdit(dinner) {
    const updated_dinners = this.state.dinners.slice().map((d) => {
          if (dinner.id !== d.id) {
            return d
          }
          else {
            return dinner
          }
        }
    );
    this.setState({dinners: updated_dinners})
  }

  render() {
    const dinners = this.state.dinners
    //console.log(this.state.editing)
    return (
        <div className="App">
          <DinnerList dinners={dinners} addDinner={this.addDinner} editDinner={this.editDinner}/>
          {this.state.editing ? <EditDinner 
                                  dinner={this.state.editing}                                              
                                  handleSumit={this.submitEdit}
                                  />
                                : null}
        </div>
    );
  }
}

export default App;
