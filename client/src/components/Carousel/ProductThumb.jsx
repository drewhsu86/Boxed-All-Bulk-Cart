import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProductThumb.css'
import StarRating from '../StarRating'

class ProductThumb extends Component {

  handleClick = (prodID) => {
    const addToCart = this.props.addToCart || function (id) { console.log('add to cart: ' + id) }

    addToCart(prodID)
  }

  render() {

    const product = this.props.product || {
      name: "No product available",
      images: [],
      description: "No product information available"
    }

    return (
      <div className="productThumb">
        <Link to={`/productdetails/${product['_id']}`}>

          {product.images[0] ? <img src={product.images[0]}
            alt="Product Image" /> : <h5>No Image Available</h5>}

          <h4>{product.name}</h4>
        </Link>

        <p>{product.description}</p>
        <StarRating rating={product.rating} />
        <h3>${product.price}</h3>
        <p>Save 12% vs retail</p>
        <button onClick={() => { this.handleClick(product['_id']) }}>Add to cart</button>
      </div>
    )
  }
}


export default ProductThumb