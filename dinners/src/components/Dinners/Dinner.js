import React, { Component } from "react";
import {
  Grid,
  Input,
  IconButton,
  Typography,
  withStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const styles = theme => ({
  root: {
    ...theme.typography.display1
  }
});

class Dinners extends Component {
  constructor(props) {
    super(props);
    this.state = { editing_dinner_name:  this.props.dinner.name === "" ? true : false};
  }

  handleChange(val) {
    //this.setState({ value: event.target.value });
    const new_dinner = {
      ...this.props.dinner,
      name: val
    };
    this.props.updateDinner(new_dinner);
  }

  setEditingState(state) {
    this.setState({
      editing_dinner_name: state || !this.state.editing_dinner_name
    });
  }

  render() {
    const { classes } = this.props;
    const header = this.state.editing_dinner_name ? (
      <Input
        autoFocus
        className={classes.root}
        type="text"
        value={this.props.dinner.name}
        onChange={e => this.handleChange(e.target.value)}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            e.stopPropagation();
            this.setEditingState();
          }
        }}
        placeholder="New Dinner"
      />
    ) : (
      <Typography variant="display1">{this.props.dinner.name}</Typography>
    );
    
    return (
      <Grid container spacing={24}>
        <Grid item xs={10}>
          {header}
        </Grid>
        <Grid item xs={1}>
          <IconButton
            disabled={this.props.expanded}
            onClick={e => {
              e.stopPropagation();
              if (this.props.dinner.name === "" && this.state.editing_dinner_name) {
                return
              }
              this.setEditingState();
            }}
          >
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={e => {
              e.stopPropagation();
              this.props.deleteDinner(this.props.dinner.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Dinners);