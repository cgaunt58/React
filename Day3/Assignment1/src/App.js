
import React, { Component } from 'react'
import Name from './components/Name'


class App extends Component {

  constructor() {

    super()

    this.state = { 
      name: ''
    }

  }


  handleOnNameAdded = (name) => {
    this.setState({
      name: name 
    })
  }

  render() {

    return (
      <div>

          <h1>{this.state.name}</h1>
        <Name onNameAdded = {this.handleOnNameAdded} />
        
      </div>
    )
  }


}



export default App;
