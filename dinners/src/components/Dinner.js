import React, { Component } from "react";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";

export default function Dinner(props) {
  const MAX_LENGTH = 12;
  let dinner_name = props.dinner.name.slice(0, MAX_LENGTH);
  if (dinner_name.length < props.dinner.name.length) {
    dinner_name += "...";
  }

  return (
    <Grid container spacing={24}>
      <Grid item xs={9}>
        <Button className="" onClick={e => props.onClick(props.dinner.id)}>
          {dinner_name}
        </Button>
      </Grid>
      <Grid item xs={3}>
        <DeleteIcon
          className="dinner-list-item-icon"
          onClick={e => props.deleteDinner(props.dinner.id)}
        />
      </Grid>
    </Grid>
  );
}
