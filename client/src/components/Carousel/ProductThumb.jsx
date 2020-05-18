import React, { Component } from 'react'
import './ProductThumb.css'

class ProductThumb extends Component {
  render() {

    const product = this.props.product || {
      name: "No product available",
      images: [],
      description: "No product information available"
    }

    return (
      <div className="productThumb">
        <h3>{product.name}</h3>
        {product.images[0] ? <img src={product.images[0]} alt="Product Image" /> : <h5>No Image Available</h5>}
        <p>{product.description}</p>
      </div>
    )
  }
}


export default ProductThumb