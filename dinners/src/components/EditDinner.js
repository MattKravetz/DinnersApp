import React from 'react'

import { Table } from 'react-bootstrap'

import Ingredient from './Ingredient'


export default class EditDinner extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            dinner: {
                ingredient: "",
                quantity: ""
            }
        }
    }

    // add handlechange for Ingredient
    handleChange(event){
        const name = event.target.name
        this.setState({
            dinner: {
                [name]: event.target.value
            }
        })        
    }

    render(){
        //console.log("editing! ", this.state)
        const dinner = this.state.dinner
        //const ingredients = <tr></tr>;
        let ingredients = dinner.ingredients.map((ing, num) => (
            <Ingredient name={ing.name} quantity={ing.quantity} num={num} handleChange={this.handleChange}/>
        ))
        
        if (ingredients.length === 0) {
            console.log("empty!")
            ingredients = <Ingredient num={0} handleChange={this.handleChange}/>
        }

        console.log("ingredients", ingredients)
        return (
            <div className="create-dinner">
            <h1>Edit Dinner</h1>
            <h2>{dinner.name}</h2>
            <div className="ingredient-table">
                <Table>
                    <tbody>
                        <tr key="headerKey">
                            <th>Ingredient</th>
                            <th>Quantity</th>
                        </tr>
                        {ingredients}                                
                    </tbody>                        
                </Table>
            </div>                    
            <button 
                    type="submit"                            
                    onClick={(e) => this.handleSubmit(dinner)}>
                    Submit
            </button>
        </div>
        )
    }
}

