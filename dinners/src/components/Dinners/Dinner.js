import React from "react";
import {
  Grid,
  Input,
  Icon,
  IconButton,
  Typography,
  withStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  display1: {
    ...theme.typography.display1
  },
  root: {
    flexGrow: 1
  },
  rightButtons: {
    marginLeft: "auto"
  }
});

const Dinners = props => {
  const focusOnTextIngredients = () => {}; // tood: grab ref for the first ingredient, then focus
  const { classes } = props;
  const header = props.expanded ? (
    <Input
      fullWidth
      autoFocus
      className={classes.display1}
      type="text"
      value={props.dinner.name}
      onChange={e => props.updateDinnerName(props.dinner.id, e.target.value)}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          e.stopPropagation();
          focusOnTextIngredients();
        }
      }}
      placeholder="New Dinner"
    />
  ) : (
    <Typography variant="display1">{props.dinner.name}</Typography>
  );

  return (
    <Grid container spacing={24} justify="space-between">
      <Grid item xs={10}>
        {header}
      </Grid>
      <Grid item xs={2}>
        <IconButton>
          {props.dinner.favorited ? (
            <Icon>star</Icon>
          ) : (
            <Icon>star_border</Icon>
          )}
        </IconButton>
        <IconButton
          onClick={e => {
            e.stopPropagation();
            props.removeDinner(props.dinner.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Dinners);
