import { render } from '@testing-library/react'
import React, {Component} from 'react'

class FavePlaces extends Component{

    constructor() {

        super()

        this.state = {
            name: '',
            place: ''
        }
    }


handleNameChanged = (e) => {

    this.setState({
        name: e.target.value
    })

    console.log('handleNameChanged')
}

handlePlaceChanged = (e) => {

    this.setState({
        place: e.target.value
    })
    console.log('handlePlaceChanged')
}

handleSubmit = () => {
    console.log(this.state.name)
    console.log(this.state.place)
}

render() {

    return (
        <div>
            <h1>Enter your favorite place</h1>
            <input type='text' onChange = {this.handleNameChanged} />
            <input type='text' onChange = {this.handlePlaceChanged} />
            <button onClick = {this.handleSubmit}>Submit</button>
        </div>
    )
}
}


export default FavePlaces