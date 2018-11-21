import React, { Component } from "react";

class GiphContainer extends Component {
  render() {
    return (
      <div className="GiphContainer">
        <img src={this.props.url} alt={""} />
      </div>
    );
  }
}

export default GiphContainer;
