import React, { Component } from "react";
import Dinner from "./Dinner";

import { List, ListItem, ListSubheader, Paper } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: green[500],
  }
});

function DinnerList(props) {
  const classes = props;
  let dinners = props.dinners.map(dinner => {
    return (
      <ListItem key={dinner.id}>
        <Dinner
          dinner={dinner}
          addDinner={props.addDinner}
          editDinner={props.editDinner}
          deleteDinner={props.deleteDinner}
          updateDinner={props.updateDinner}
        />
      </ListItem>
    );
  });

  return (
    <Paper className={classes.root}>
      <List subheader={<ListSubheader>Dinners for the week</ListSubheader>}>
        {dinners}
      </List>
    </Paper>
  );
}

export default withStyles(styles)(DinnerList);
