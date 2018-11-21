import React, { Component } from "react";
import Button from "./Button";
import GiphContainer from "./GiphContainer";
import Input from "./Input";
import { fetchGiph } from "./fetchUtils";

class GiphSearcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null
    };
  }

  setUrl = url => {
    this.setState({ url });
  };

  render() {
    return (
      <div className="GiphSearcher">
        <div>Giph Searcher for a {this.props.category}!</div>
        <Button
          category={this.props.category}
          onClickFunction={() => fetchGiph(this.props.category, this.setUrl)}
        />
        <GiphContainer url={this.state.url} />
      </div>
    );
  }
}

export default GiphSearcher;
