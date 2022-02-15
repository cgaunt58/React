import React from 'react'
import { Component } from 'react'




class ReviewsList extends Component {
    render() {

        const ReviewsNames = this.props.allReviews.map((review, index) => {

            return <li className='review' key = {index}><b>{review.title}</b><br></br> {review.body}</li>
               
        
        })

        return (
            <div>
            
                <ul>
                    {ReviewsNames}
                </ul>
            </div>
        )
    }
}


export default ReviewsList