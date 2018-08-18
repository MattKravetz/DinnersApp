import React, { Component } from "react";
import Dinner from "./Dinner";
import AddDiner from "./AddDinner";
import uuid from '../utils/uuid'

import {List, ListItem, Typography, Paper} from "@material-ui/core";

class DinnerList extends Component {
  
    render() {
    let dinners = this.props.dinners.map((dinner) => {
      return (
        <ListItem key={uuid()}>
          <Dinner dinner={dinner} onClick={this.props.editDinner} deleteDinner={this.props.deleteDinner}/>
        </ListItem>
      );
    });

    return (
      <Paper>
        <Typography variant="display2">Dinners for the week</Typography>
        <List>{dinners}</List>
        <AddDiner handleSubmit={this.props.addDinner} />
      </Paper>
    );
  }
}

export default DinnerList;
