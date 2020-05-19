import React, { Component } from 'react'
// shopping cart that pulls array of products in localStorage
// and populates the cart (in all-bulk side) with items
// we can use stringify and parse from JSON 
// we also want to keep the number of products ordered in storage
// we will export a function that updates localStorage so that 
// any other component can click their way to here 
import products from '../../products.json'
import './ShoppingCart.css'
import Cart from './Cart'

export default class Index extends Component {
  constructor() {
    super()

    // first 3 products used as demo for shopping cart 
    const products3 = products.slice(0, 3)
    const items3 = products3.map(prod => {
      return {
        product: prod,
        quantity: 1
      }
    })

    if (!localStorage.getItem('cartContents')) {
      localStorage.setItem('cartContents', JSON.stringify(items3))
    }

    this.state = {
      show: true,
      cartContents: JSON.parse(localStorage.getItem('cartContents'))
    }
  }

  // =============
  // methods
  // =============

  // toggle cart 
  toggleCart = () => {
    const show = !this.state.show
    this.setState({
      show
    })
  }

  // add an item to the cart 
  cartPush = (product) => {
    // always push 1 item for now 
    // product will go into our item object {product, quantity}
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || []

    // check for an item of the same id
    let sameIDindex = -1
    cartContents.forEach((item, ind) => {
      if (item.product['_id'] === product['_id']) {
        sameIDindex = ind
      }
    })

    // if we have a duplicate, iterate the quantity
    // else, add the item object
    if (sameIDindex > -1) {
      cartContents[sameIDindex].quantity++
    } else {
      cartContents.push({
        product,
        quantity: 1
      })
    }

    // use this to set the state and also stringify and send back to localstorage
    this.setState({
      cartContents
    })

    localStorage.setItem('cartContents', JSON.stringify(cartContents))
  }

  // remove an item from the cart 
  cartRemove = (ind) => {
    let cartContents = JSON.parse(localStorage.getItem('cartContents')) || []

    try {
      cartContents.splice(ind, 1)

      this.setState({
        cartContents
      })

      localStorage.setItem('cartContents', JSON.stringify(cartContents))
    } catch (er) {
      console.log(er)
    }
  }

  // change the quantity (cannot be less than 1)
  cartQuantity = (ind, amt) => {
    // ind is the index of the item 
    const cartContents = this.state.cartContents

    let currItem = cartContents[ind]

    if (currItem.quantity + amt > 0) {
      currItem.quantity += amt
    }

    this.setState({
      cartContents
    })
    localStorage.setItem('cartContents', JSON.stringify(cartContents))
  }

  // =============
  // render
  // =============
  render() {
    // console.log(this.state.cartContents)

    return (
      <div className="shoppingCart" style={this.state.show ? {} : { display: 'none' }}>

        <div className="shopHeader">
          <button
            className="shopHide"
            onClick={this.toggleCart}
          >x</button>
        </div>

        <div className="carts">
          <Cart
            title="Boxed Bulk Order"
            subtitle="Order $29.99 for FREE SHIPPING or try BOXED UP"
            cartType="Bulk"
            items={this.state.cartContents}
            itemFuncs={{
              cartQuantity: this.cartQuantity,
              cartRemove: this.cartRemove
            }}
          />

          <Cart
            title="Boxed Express Order"
            subtitle="Order $19.99 for FREE SHIPPING"
            cartType="Express"
            items={[]}
            itemFuncs={{
              cartQuantity: this.cartQuantity,
              cartRemove: this.cartRemove
            }}
          />
        </div>

      </div>
    )
  }
}
