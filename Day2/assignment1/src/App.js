

import React, {Component} from 'react'


class StepperView extends Component{

  constructor() {
    super()

    this.state= {
      counter:0
    }
  }

  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter -1
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick = {this.handleIncrement}>Increase</button>
        <button onClick = {this.handleDecrease}> Decrease </button>
        
      </div>
    )
  }

}

export default StepperView