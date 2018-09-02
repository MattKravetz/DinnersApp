import React from "react";

import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import {
  Checkbox,
  IconButton,
  TextField,
  Menu,
  MenuItem
} from "@material-ui/core";
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

class Ingredient extends React.Component {
  state = {
    anchorEl: null,
    newUnitName: ""
  };

  render() {
    const { classes } = this.props;

    return (
      <form>
        <Menu
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
        >
          <MenuItem
            onClick={e => {
              this.setState({ anchorEl: null, newUnitName: "" });
              this.props.updateUnitName(this.props.unitName);
            }}
          >
            {this.props.unitName || "No Unit"}
          </MenuItem>
          <MenuItem
            onClick={e => {
              this.props.updateUnitName(this.state.newUnitName);
              this.setState({ anchorEl: null, newUnitName: "" });
            }}
          >
            <TextField
              autoFocus
              type="text"
              placeholder="Enter new unit"
              value={this.state.newUnitName}
              onClick={e => {
                if (!Boolean(this.state.newUnitName)) e.stopPropagation();
              }}
              onChange={e => this.setState({ newUnitName: e.target.value })}
              onKeyDown={e => {
                if (e.keyCode === 13) {
                  this.props.updateUnitName(this.state.newUnitName);
                  this.setState({ anchorEl: null, newUnitName: "" });
                }
              }}
            />
          </MenuItem>
        </Menu>

        <Grid container spacing={16}>
          <Grid item xs={3}>
            <TextField
              autoFocus
              fullWidth
              type="text"
              name="name"
              value={this.props.name}
              onChange={this.props.updateName}
              onKeyDown={this.props.onKeyPress}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              type="text"
              name="quantity"
              value={this.props.quantity}
              onChange={this.props.updateQuantity}
              helperText={this.props.unitName || "No Unit"}
              FormHelperTextProps={{
                onClick: e => this.setState({ anchorEl: e.currentTarget })
              }}
              onKeyDown={this.props.onKeyPress}
            />
          </Grid>
          <Grid item xs={1}>
            <Checkbox
              checked={this.props.bought}
              onChange={this.props.toggleBought}
              classes={{
                root: classes.root,
                checked: classes.checked
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={this.props.removeIngredient}
              disabled={this.props.bought}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(Ingredient);
