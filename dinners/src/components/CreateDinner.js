import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class CreateDinner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: "",
            ingredients: [],
        }
        this.handleChange = this.handleChange
        this.handleSubmit = this.props.handlesubmit
    }
    
    handleChange(event){        
    }
    
    render(){
        const state = this.state;
        const ingredients = state.ingredients.map((val, num) => {
            <li key={num}>
                <Ingredient name={val.name} quantity={val.quantity} />  
            </li>
        });
        return(
            <div className="create-dinner">
                <h1>Create Dinner</h1>
                <ul>{ingredients}</ul>
            </div>
        );        
    }
}