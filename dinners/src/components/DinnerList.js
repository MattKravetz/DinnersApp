import React, { Component } from "react";
import Dinner from "./Dinner";
import EditDinner from "./EditDinner";

import {
  Paper,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class DinnerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
        expanded: null
    }

    this.handleExpand = this.handleExpand.bind(this)
  }

  handleExpand(dinner_id) {
    this.setState({
        expanded: dinner_id
    })
  }

  render() {
    const dinners = this.props.dinners.map(dinner => {
      return (
        <ExpansionPanel
          key={dinner.id}
          expanded={this.state.expanded == dinner.id}
          onChange={() => this.handleExpand(dinner.id)}
        >        
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
            <Dinner
              dinner={dinner}
              addDinner={this.props.addDinner}
              editDinner={this.props.editDinner}
              deleteDinner={this.props.deleteDinner}
              updateDinner={this.props.updateDinner}
              expanded={this.state.expanded}
            />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <EditDinner
              dinner={dinner}
              updateDinner={this.props.updateDinner}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });

    return <Paper>{dinners}</Paper>;
  }
}

export default DinnerList;
