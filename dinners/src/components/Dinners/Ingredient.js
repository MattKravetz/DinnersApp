import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { Input, Checkbox, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

class Ingredient extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item xs={3}>
          <Input
            autoFocus
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handleChange}
            onKeyDown={this.props.onKeyPress}
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            type="text"
            name="quantity"
            value={this.props.quantity}
            onChange={this.props.handleChange}
            onKeyDown={this.props.onKeyPress}
          />
        </Grid>
        <Grid item xs={1}>
          <Checkbox
            checked={this.props.isBought}
            onChange={this.props.flipBoughtState}
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={e => this.props.deleteIngredient(this.props.id)}
            disabled={this.props.isBought}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Ingredient);
