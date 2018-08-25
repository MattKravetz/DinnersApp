import React, { Component } from "react";
import { Input } from "@material-ui/core";

export default class AddDinner extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key === "Enter" && this.state.value !== "") {
      this.props.handleSubmit(this.state.value);
      this.clearInput();
    }
  }

  clearInput() {
    this.setState({ value: "" });
  }

  render() {
    return (
      <Input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyPress={(e) => this.handleKeyPress(e)}
        placeholder="New Dinner"
      />
    );
  }
}
