import React from "react";
import { ListItem, Grid, Checkbox, withStyles } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

function ShoppingListItem(props) {
  const { classes } = props;
  return (
    <ListItem>
      <Grid container spacing={16}>
        <Grid item xs={3}>
          {props.name}
        </Grid>
        <Grid item xs={3}>
          {props.quantity}
        </Grid>
        <Grid item xs={1}>
          <Checkbox
            checked={props.isBought}
            onChange={props.flipBoughtState}
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            onChange={e =>
                props.updateBoughtState(props.name)
              }
          />
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default withStyles(styles)(ShoppingListItem);
