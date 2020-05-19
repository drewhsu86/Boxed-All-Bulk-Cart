import React from 'react'
import CartItem from './CartItem'

export default function Cart(props) {

  const items = props.items

  return (
    <div className="cart" style={props.addStyle}>
      <div className="cartTitle">
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
      </div>
      <p>Your {props.cartType} Cart</p>
      <div className="cartItems">
        {
          items.map((item, ind) => {
            return <CartItem item={item} itemFuncs={props.itemFuncs}
              ind={ind}
              key={ind} />
          })
        }
      </div>
    </div>
  )
}
