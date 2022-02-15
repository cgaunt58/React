import React from 'react'
import { Component } from 'react'




class SocialList extends Component {
    render() {

        const SocialGroup = this.props.allSocials.map((social, index) => {

            return <li className='social' key = {index}>{social.numOfcomments} {social.name} {social.secondName} {social.numOflikes}</li>
               
        
        })

        return (
            <div>
            
                <ul>
                    {SocialGroup}
                </ul>
            </div>
        )
    }
}


export default SocialList