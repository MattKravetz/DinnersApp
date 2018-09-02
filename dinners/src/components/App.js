import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import { getInitialState } from "../actions/initialStateFromFirebase";
import { connect } from "react-redux";

import User from "./User/User";
import ShoppingList from "./ShoppingList/ShoppingList";
import Dinners from "./Dinners/Dinners";
import ButtonAppBar from "./AppBar";

const styles = theme => {};

const mapStateToProps = state => {
  return {
    ...state,
    loading: state.loading !== undefined ? state.loading : true
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInitialState: () => dispatch(getInitialState())
  };
};

class App extends Component {

  componentWillMount() {
    console.log(this.props);
    console.log("hi!");
    this.props.getInitialState();
  }

  render() {
    console.log(this.props.loading);
    const content = this.props.loading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <div>
          <ButtonAppBar />
        </div>
        <Switch>
          <Route exact path="/" component={Dinners} />
          <Route exact path="/dinners" component={Dinners} />
          <Route exact path="/shoppinglist" component={ShoppingList} />
          <Route exact path="/user" component={User} />
        </Switch>
      </div>
    );
    return content;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
