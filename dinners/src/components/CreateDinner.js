import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class CreateDinner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: "",
            new_ingredient_name: "",
            new_ingredient_quantity: "",
            ingredients: [],
        }
        this.addIngredient = this.addIngredient.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.props.handlesubmit
    }
    
    handleChange(event){
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        });
    }

    addIngredient(){
        let ingredients = this.state.ingredients.slice()
        const new_state = {
            ...this.state,
            ingredients: ingredients.concat({
                name: this.state.new_ingredient_name,
                quantity: this.state.new_ingredient_quantity,
            })            
        }
        this.setState(new_state)
    }
    
    render(){

        const dinner = this.props.dinner;
        console.log("in render", this.state.ingredients)
        let ingredients = this.state.ingredients.map((val, num) => {
            console.log("creating ingredient", val)
            return (
                <li key={num}>
                    <Ingredient name={val.name} quantity={val.quantity} />  
                </li>
            );
        });

        if (this.props.dinner.length > 0) { 
            return( 
                <div className="create-dinner">
                    <h1>Create Dinner</h1>
                    <h2>{dinner}</h2>
                    <ul>
                        {ingredients}                    
                    </ul>
                    <input 
                        type="text"
                        name="new_ingredient_name"
                        placeholder="Ingredient"
                        value={this.state.new_ingredient_name}
                        onChange={this.handleChange}
                        />
                    <input 
                        type="text"
                        name="new_ingredient_quantity"
                        placeholder="Quantity"
                        value={this.state.new_ingredient_quantity}
                        onChange={this.handleChange}
                        />
                    <button 
                            onClick={(e) => {
                                e.preventDefault();
                                this.addIngredient()
                            }}>
                            Submit
                        </button>
                </div>
                );
            }
            else {
                return (null);
            }                
    }
}