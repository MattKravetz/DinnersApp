import React, { Component } from "react";
import { Grid, Input, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";


export default class Dinners extends Component {
  constructor(props) {
    super(props);
    // make function!
  }

  handleChange(val) {
    //this.setState({ value: event.target.value });
    const new_dinner = {
      ...this.props.dinner,
      name: val
    };
    this.props.updateDinner(new_dinner);
  }

  render() {
    const header =
      this.props.expanded === this.props.dinner.id ? (
        <Input
          autoFocus
          type="text"
          value={this.props.dinner.name}
          onChange={e => this.handleChange(e.target.value)}
          placeholder="New Dinner"
        />
      ) : (
        <Typography variant="display2">{this.props.dinner.name}</Typography>
      );

    return (
      <Grid container spacing={24}>
        <Grid item xs={11}>
          {header}
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={e => this.props.deleteDinner(this.props.dinner.id)}
            disabled={this.props.dinner.name === ""}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}
