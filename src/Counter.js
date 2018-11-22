import React from "react";

class Counter extends React.Component {
  state = {
    number: this.props.startValue
  };

  incHandler = () => {
    if (this.state.number >= this.props.max) return;

    this.setState({ number: this.state.number + 1 });
  };

  decHandler = () => {
    if (this.state.number <= this.props.min) return;

    this.setState({ number: this.state.number - 1 });
  };

  render() {
    let info;

    if (this.state.number === this.props.max) {
      info = <h1>You try to exceed the max limit!</h1>;
    }

    if (this.state.number === this.props.min) {
      info = <h1>You try to exceed the min limit!</h1>;
    }
    return (
      <div>
        <div>
          <h1>Initial value: {this.state.number}</h1>
        </div>
        <div>
          <h1>Max value: {this.props.max}</h1>
        </div>
        <div>
          <h1>Min value: {this.props.min}</h1>
        </div>
        <div>
          <button onClick={this.incHandler}>+</button>
          <button onClick={this.decHandler}>-</button>
        </div>
        <div>{info}</div>
      </div>
    );
  }
}
Counter.defaultProps = {
  startValue: 0,
  min: -5,
  max: 5
};


export default Counter;
