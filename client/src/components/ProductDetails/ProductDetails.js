import React, { Component } from 'react'
import Reviews from '../ProductDetails/Reviews/Reviews'
import Info from './Info/Info'
import Images from './Image/Images'
import RelatedItems from './RelatedItems/RelatedItems'
import './ProductDetails.css'

import { getProduct, deleteProduct } from '../../services/products'
import { withRouter, Link } from 'react-router-dom'
import CheckoutModal from './CheckoutModal/CheckoutModal'

// const data = require('../../products.json')

class ProductDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: null,
      items: [],
      openModal: null,
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
    console.log('cartMethods')
  }

  setModal = (func) => {
    this.setState({
      openModal: func
    })
  }

  render() {
    console.log(this.state.openModal)
    const { product } = this.state
    console.log(this.state)
    if (!product) {
      return null
    } else {
      return (
        <div className="detail-container">
          <CheckoutModal setModal={this.setModal} handleAddToCart={this.handleAddToCart} />
          <div className="prodColumnLeft">
            <div className="topRow">
              <Images images={this.state.product.images} altText={this.state.product.name} />
            </div>
            <Reviews />
          </div>
          <div className="prodColumnRight">
            <div className="topRow">
              <Info
                openModal={this.state.openModal}
                product={this.state.product}
              />
            </div>
            <RelatedItems items={this.state.product} />
          </div>
        </div>
      )
    }
  }
}





export default withRouter(ProductDetails)