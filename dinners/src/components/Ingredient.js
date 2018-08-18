import React, { Component } from "react";
import { Input, TableRow, TableCell } from "@material-ui/core";

export default class Ingredient extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TableRow>
        <TableCell>
          <Input
            autoFocus
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.handleChange}
            onKeyDown={this.props.onKeyPress}
          />
        </TableCell>
        <TableCell>
          <Input
            type="text"
            name="quantity"
            value={this.props.quantity}
            onChange={this.props.handleChange}
            onKeyDown={this.props.onKeyPress}
          />
        </TableCell>
      </TableRow>
    );
  }
}
