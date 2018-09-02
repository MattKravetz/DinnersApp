import React from "react";
import {
  Checkbox,
  withStyles,
  Typography,
  TableRow,
  TableCell
} from "@material-ui/core";
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
    <TableRow key={props.id}>
      <TableCell>
        <Typography variant="body2">{props.name}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">
          {props.quantity ? props.quantity : ""}{" "}
          {props.unitName ? props.unitName : ""}
        </Typography>
      </TableCell>
      <TableCell>
        <Checkbox
          checked={props.isBought}
          classes={{
            root: classes.root,
            checked: classes.checked
          }}
          onChange={e => props.updateIngredientBoughtState(props.name)}
        />
      </TableCell>
    </TableRow>
  );
}

export default withStyles(styles)(ShoppingListItem);
