import React, { Component } from "react";
import GiphSearcher from "./GiphSearcher";
import "./App.css";
import Input from "./Input";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["cat", "dog"],
      newCategories: "",
      newInput: ""
    };
    // this.onValueAdded = this.onValueAdded.bind(this)
  }

  onValueAdded = newInput => {
    const newCategories = this.state.categories;
    newCategories.push(newInput);
    this.setState({ categories: newCategories });
    console.log(newCategories);
  };

  render() {
    return (
      <div className="App">
        <Input onSubmit={this.onValueAdded} value={this.props.inputValue} />
        {this.state.categories.map((category, index) => {
          return <GiphSearcher key={index} category={category} />;
        })}
      </div>
    );
  }
}

export default App;
