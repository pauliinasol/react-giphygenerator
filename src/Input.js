import React, { Component } from "react";
import Button from "./Button";
import App from "./App";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
    this.props.onSubmit(this.state.inputValue);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Input">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
          </label>
          <Button type="Submit" category="Add" />
        </form>
      </div>
    );
  }
}

export default Input;
