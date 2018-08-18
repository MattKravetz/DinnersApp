import React, { Component } from "react";

export default class Ingredient extends Component {

    constructor(props){
        super(props)
    }
    render(){
        return (
            <tr>
            <td>
                <input
                autoFocus
                type="text"
                name="name"                
                value={this.props.name}
                onChange={this.props.handleChange}
                onKeyDown={this.props.onKeyPress}
                />
            </td>
            <td>
                <input
                type="text"
                name="quantity"
                value={this.props.quantity}
                onChange={this.props.handleChange}
                onKeyDown={this.props.onKeyPress}
                />
            </td>
            </tr>
        );
    }
}
