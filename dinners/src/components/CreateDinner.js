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
        this.clearIngredient = this.addIngredient.bind(this)
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
    
    clearIngredient(){
        this.setState({
            new_ingredient_name: "",
            new_ingredient_quantity: ""
        })
    }
    render(){

        const dinner = this.props.dinner;
        let ingredients = this.state.ingredients.map((val, num) => {
            return (
                <Ingredient name={val.name} quantity={val.quantity} num={num} key={"ing-"+num}/>  
            );
        });

        if (this.props.dinner.length > 0) { 
            return( 
                <div className="create-dinner">
                    <h1>Create Dinner</h1>
                    <h2>{dinner}</h2>
                    <div className="ingredient-table">
                        <table>
                            <tbody>
                                <tr key="headerKey">
                                    <th>{ingredients.keys()}</th>
                                </tr>
                                {ingredients}                    
                            </tbody>                        
                        </table>
                    </div>
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
                                this.clearIngredient()                                
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