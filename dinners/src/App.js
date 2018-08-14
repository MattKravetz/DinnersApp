import React, { Component } from 'react'
import DinnerList from './components/DinnerList'

import './App.css';
import AddDinnerButton from './components/AddDinnerButton';
import CreateDinner from './components/CreateDinner'


class App extends Component {
  constructor(props){
      super(props)
      // State holds an array of `dinners`.   
      this.state = {
          dinners: [],
      };
  }

  addDinner = (dinner_name) => {
    let dinners = this.state.dinners.slice()
    let new_dinner = {
      dinner: dinner_name,
      created: false 
    }
    this.setState({dinners: dinners.concat(new_dinner)})
  }

  render() {
    const created_dinners = this.state.dinners.filter((d) => d.created === true)
    const uncreated_dinner = this.state.dinners.filter((d) => d.created === false)
                                            .map((dinner_obj) => dinner_obj.dinner)
    return (
        <div className="App">
          <DinnerList dinners={created_dinners}/>
          <CreateDinner dinner={uncreated_dinner}/>
          <AddDinnerButton handleSubmit={this.addDinner}/>
        </div>
    );
  }
}

export default App;
