import React, { Component } from 'react'
import DinnerList from './components/DinnerList'

import './App.css';
import AddDinnerButton from './components/AddDinnerButton';
import CreateDinner from './components/CreateDinner'


class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          dinners: [],
      };
  }

  addDinner = (dinner) => {
    let dinners = this.state.dinners.slice()
    this.setState({dinners: dinners.concat(dinner)})
  }
  
  render() {
    return (
        <div className="App">
          <DinnerList dinners={this.state.dinners}/>
          <CreateDinner />
          <AddDinnerButton handleSubmit={this.addDinner}/>
        </div>
    );
  }
}

export default App;
