import React, { Component } from "react";
import Dinner from "./Dinner";
import AddDiner from "./AddDinner";
import uuid from "../utils/uuid";

import { List, ListItem, Typography, Paper } from "@material-ui/core";

class DinnerList extends Component {
  render() {
    let dinners = this.props.dinners.map(dinner => {
      return (
        <ListItem key={dinner.id}>
          <Dinner
            dinner={dinner}
            addDinner={this.props.addDinner}
            editDinner={this.props.editDinner}
            deleteDinner={this.props.deleteDinner}
            updateDinner={this.props.updateDinner}
          />
        </ListItem>
      );
    });

    return (
      <Paper>
        <Typography variant="display2">Dinners for the week</Typography>
        <List>{dinners}</List>
      </Paper>
    );
  }
}

export default DinnerList;
