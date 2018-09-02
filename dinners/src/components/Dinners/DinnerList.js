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
    };

    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand(dinner_id) {
    if (this.state.expanded === dinner_id) {
      this.setState({
        expanded: null
      });
    } else {
      this.setState({
        expanded: dinner_id
      });
    }
  }

  render() {
    const dinners = this.props.dinners.map(dinner => {
      return (
        <ExpansionPanel
          key={dinner.id}
          expanded={this.state.expanded === dinner.id}
          onChange={() => this.handleExpand(dinner.id)}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Dinner
              dinner={dinner}
              updateDinnerName={this.props.updateDinnerName}
              removeDinner={this.props.removeDinner}
              updateDinner={this.props.updateDinner}
              expanded={this.state.expanded === dinner.id}
              favorited={this.props.favorited}
              toggleFavorite={this.props.toggleFavorite}
            />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <EditDinner
              dinner={dinner}
              ingredients={this.props.ingredients}
              updateDinner={this.props.updateDinner}
              updateIngredientName={this.props.updateIngredientName}
              updateIngredientQuantity={this.props.updateIngredientQuantity}
              addIngredient={this.props.addIngredient}
              addIngredientToDinner={this.props.addIngredientToDinner}
              removeIngredient={this.props.removeIngredient}
              toggleBought={this.props.toggleBought}
              updateUnitName={this.props.updateUnitName}
              unitName={dinner.unitName}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });

    return <Paper>{dinners}</Paper>;
  }
}

export default DinnerList;
