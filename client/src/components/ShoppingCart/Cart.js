import React from 'react'
import CartItem from './CartItem'

export default function Cart(props) {

  const items = props.items || []
  const total = items ? items.reduce((accum, item) => {
    if (!isNaN(Number(item.product.price))) {
      return accum + (Number(item.product.price) * item.quantity)
    } else {
      return accum
    }
  }, 0) : 0

  return (
    <div className="cart" style={props.addStyle}>
      <div className="cartTitle">
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
      </div>
      <p className="cartType">Your {props.cartType} Cart</p>
      <div className="cartItems">
        {
          items.length > 0 ? items.map((item, ind) => {
            return <CartItem item={item} itemFuncs={props.itemFuncs}
              ind={ind}
              key={ind} />
          }) : <h3>This cart is empty.</h3>
        }
      </div>
      <div className="cartTotal">
        <p>CHECKOUT - ${total.toFixed(2)}</p>
      </div>
    </div>
  )
}
