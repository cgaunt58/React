
import React, { Component } from 'react'

class Name extends Component {

    constructor() {
        super() 

        this.state = {
            name: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value 
        })
    }

    handleSubmit = () => {
        this.props.onNameAdded(this.state.name)
    }

    render() {
        return (
            <div>
                <h1>Name</h1>
                <input onChange = {this.handleNameChange} type = "text" placeholder = "Enter name" />
                <button onClick = {this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Name 