import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <button className="btn wrapper" onClick={this.props.onClickFunction}>
          {this.props.category}
        </button>
      </div>
    );
  }
}
export default Button;
