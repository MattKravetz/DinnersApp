import React, { Component } from 'react'

export default class Ingredient extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: this.props.name,
            quantity: this.props.quantity,
        }
    
    }

    render(){            
        return(
            <tr key={this.props.num}>
                <td>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.props.handleChange}
                    />
                </td>
                <td>
                    <input 
                        type="text"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.props.handleChange}
                    />
                </td>
            </tr>
        );
    }
    
}

