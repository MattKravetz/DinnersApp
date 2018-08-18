import React, { Component } from "react";
import Dinner from "./Dinner";
import AddDinerButton from "./AddDinnerButton";

class DinnerList extends Component {
  render() {
    let dinners = this.props.dinners.map((dinner, num) => {
      return (
        <li key={num}>
          <Dinner dinner={dinner} onClick={this.props.editDinner} />
        </li>
      );
    });

    return (
      <div className="dinner-list">
        <h1 className="main-header">Dinners for the week</h1>
        <div className="dinner-boxes">
          <ol>{dinners}</ol>
        </div>
        <AddDinerButton handleSubmit={this.props.addDinner} />
      </div>
    );
  }
}

export default DinnerList;
