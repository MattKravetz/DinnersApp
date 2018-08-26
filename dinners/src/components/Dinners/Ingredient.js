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

function Ingredient(props) {
    const { classes } = props;
    return (
      <Grid container spacing={16}>
        <Grid item xs={3}>
          <Input
            autoFocus
            type="text"
            name="name"
            value={props.name}
            onChange={props.updateName}
            onKeyDown={props.onKeyPress}
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            type="text"
            name="quantity"
            value={props.quantity}
            onChange={props.updateQuantity}
            onKeyDown={props.onKeyPress}
          />
        </Grid>
        <Grid item xs={1}>
          <Checkbox
            checked={props.bought}
            onChange={props.toggleBought}
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={props.removeIngredient}
            disabled={props.bought}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
}

export default withStyles(styles)(Ingredient);
