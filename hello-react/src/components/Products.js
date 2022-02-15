import React from 'react'
import { Component } from 'react'




class ProductsList extends Component {
    render() {

        const ProductsNames = this.props.allProducts.map((product, index) => {

            return <li className='product' key = {index}><b>{product.title1}</b> {product.body1}</li>
               
        
        })

        return (
            <div>
            
                <ul>
                    {ProductsNames}
                </ul>
            </div>
        )
    }
}


export default ProductsList