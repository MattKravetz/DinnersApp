import React, { Component } from "react";
import { Grid, Input, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default class Dinner extends Component {
  constructor(props) {
    super(props);
    //this.state = { value: this.props.dinner.name };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    //this.setState({ value: event.target.value });
    const new_dinner = {
      ...this.props.dinner,
      name: event.target.value
    };
    this.props.updateDinner(new_dinner);
  }

  handleKeyPress(event) {
    if (event.key === "Enter" && this.props.dinner.name !== "") {
      this.props.addDinner("");
    }
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={10}>
          <Input
            autoFocus
            type="text"
            value={this.props.dinner.name}
            onChange={this.handleChange}
            onKeyPress={e => this.handleKeyPress(e)}
            placeholder="New Dinner"
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={e => this.props.editDinner(this.props.dinner.id)}
            disabled={this.props.dinner.name === ""}
          >
            <EditIcon />
          </IconButton>
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
