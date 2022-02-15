import React from 'react'
import { Component } from 'react'




class HeadingList extends Component {
    render() {

        const headingNames = this.props.allHeadings.map((heading, index) => {

            return <li className= 'header' key = {index}><b>{heading.name1}</b> <strong>{heading.name2}</strong> {heading.name3}</li>
        })

        return (
            <div>
            
                <ul>
                    {headingNames}
                </ul>
            </div>
        )
    }
}



export default HeadingList