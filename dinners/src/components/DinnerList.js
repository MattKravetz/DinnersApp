import React, { Component } from "react";
import Dinner from "./Dinner";

import { List, ListItem, ListSubheader, Paper } from "@material-ui/core";


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

export default DinnerList;
