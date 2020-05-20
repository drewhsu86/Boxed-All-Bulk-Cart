import React, { Component } from 'react'
import Reviews from '../ProductDetails/Reviews/Reviews'
import Info from './Info/Info'
import Images from './Image/Images'
import RelatedItems from './RelatedItems/RelatedItems'
import './ProductDetails.css'
import DisplayNav from '../Products/DisplayNav'

import { getProduct, deleteProduct } from '../../services/products'
import { withRouter, Link } from 'react-router-dom'

// const data = require('../../products.json')

class ProductDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: null,
      items: [],
    }
  }

  async componentDidMount() {
    let id = this.props.match.params.id
    const product = await getProduct(id)
    this.setState({ product })
  }

  handleAddToCart = () => {
    const cartMethods = this.props.cartMethods

    // method passed from App.js to add something to the cart
    // which is stored in localStorage 
    this.props.cartMethods.cartPush(this.state.product)
    this.props.cartMethods.toggleCart(true)
  }

  render() {
    const { product } = this.state
    console.log(this.state)
    if (!product) {
      return null
    } else {
      return (
        <div className="product-details">
          <DisplayNav
            category={product.categories || ''}
            subcategory={product.subcategories || ''}
          />
          <div className="detail-container">
            <div className="prodColumnLeft">
              <div className="topRow">
                <Images images={this.state.product.images} altText={this.state.product.name} />
              </div>
              <Reviews />
            </div>
            <div className="prodColumnRight">
              <div className="topRow">
                <Info
                  product={this.state.product}
                  handleAddToCart={this.handleAddToCart}
                />
              </div>
              <RelatedItems items={this.state.product} />
            </div>
          </div>
        </div>
      )
    }
  }
}





export default withRouter(ProductDetails)