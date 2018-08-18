import React, { Component } from "react";

import { Input } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

export default class Ingredient extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={5}>
          <Input
            autoFocus
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handleChange}
            onKeyDown={this.props.onKeyPress}
          />
        </Grid>
        <Grid item xs={5}>
          <Input
            type="text"
            name="quantity"            
            value={this.props.quantity}
            onChange={this.props.handleChange}
            onKeyDown={this.props.onKeyPress}
          />
        </Grid>
        <Grid item xs={2}>
            <DeleteIcon onClick={(e) => this.props.deleteIngredient(this.props.id)}/>
        </Grid>
      </Grid>
    );
  }
}
