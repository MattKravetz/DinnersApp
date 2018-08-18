import React, { Component } from "react";
import { Grid, Input } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default class Dinner extends Component {
  /*const MAX_LENGTH = 12;
  let dinner_name = props.dinner.name.slice(0, MAX_LENGTH);
  if (dinner_name.length < props.dinner.name.length) {
    dinner_name += "...";
  }*/

  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key === "Enter" && this.state.value !== "") {
      this.props.addDinner(this.state.value);
    }
  }

  render(){
    return (
        <Grid container spacing={24}>
          <Grid item xs={9}>
            <Input
                autoFocus
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                onKeyPress={(e) => this.handleKeyPress(e)}
                placeholder="New Dinner"
            />
          </Grid>
          <Grid item xs={1}>
            <EditIcon
                onClick={e => this.props.editDinner(this.props.dinner.id)}
            />        
          </Grid>
          <Grid item xs={1}>
            <DeleteIcon
              onClick={e => this.props.deleteDinner(this.props.dinner.id)}
            />
          </Grid>
        </Grid>
      );
    }
  }
  