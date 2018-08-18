import React, { Component } from "react";
import Dinner from "./Dinner";
import AddDinerButton from "./AddDinnerButton";
import uuid from '../utils/uuid'

import {List, ListItem} from "@material-ui/core";

class DinnerList extends Component {
  render() {
    let dinners = this.props.dinners.map((dinner) => {
      return (
        <ListItem key={uuid()}>
          <Dinner dinner={dinner} onClick={this.props.editDinner}/>
        </ListItem>
      );
    });

    return (
      <div className="dinner-list">
        <h1 className="main-header">Dinners for the week</h1>
        <div className="dinner-boxes">
          <List>{dinners}</List>
        </div>
        <AddDinerButton handleSubmit={this.props.addDinner} />
      </div>
    );
  }
}

export default DinnerList;
