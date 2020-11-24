import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncreaseBe = this.handleIncreaseBe.bind(this);
    this.handleDecreaseBe = this.handleDecreaseBe.bind(this);
  }
  state = {
    number: 0
  };

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

  handleDecrease = () => {
    this.setState(({ number }) => ({
      number: this.state.number - 1
    }));
  };

  handleDecreaseBe() {
    this.setState({
      number: this.state.number - 1
    });
  }

  handleIncreaseBe() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Counter의 값</h1>
        <div> : {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <button onClick={this.handleIncreaseBe}>+</button>
        <button onClick={this.handleDecreaseBe}>-</button>
      </div>
    );
  }
}
