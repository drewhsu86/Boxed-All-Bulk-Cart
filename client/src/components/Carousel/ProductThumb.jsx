import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProductThumb.css'
import StarRating from '../StarRating'

class ProductThumb extends Component {

  handleClick = (prodID) => {
    console.log('add to cart: ' + prodID)

    // method passed from App.js to add something to the cart
    // which is stored in localStorage 
    this.props.cartMethods.cartPush(this.props.product)
    this.props.cartMethods.toggleCart(true)
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
        {
          product.stock > 0 ? <button onClick={() => { this.handleClick(product['_id']) }}>Add to cart</button> : <button disabled>Out of stock</button>
        }
      </div>
    )
  }
}


export default ProductThumb