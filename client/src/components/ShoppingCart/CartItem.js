import React from 'react'
import StarRating from '../StarRating'

export default function CartItem(props) {
  const item = props.item
  const product = item.product
  const itemIter = props.itemFuncs.cartQuantity
  const itemRem = props.itemFuncs.cartRemove

  return (
    <div className="cartItem">
      <img src={product.images[0]}
        alt={`Product info about ${product.name}`} />
      <div className="cartInfo">
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <StarRating rating={product.rating} />
        <h5>${product.price}</h5>
      </div>
      <div className="itemOptions">
        <div className="itemCounter">
          <button onClick={() => { itemIter(props.ind, -1) }}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => { itemIter(props.ind, 1) }}>+</button>
        </div>
        <div className="itemRemove">
          <a onClick={() => { itemRem(props.ind) }} >Remove Item</a>
        </div>
      </div>
    </div>
  )
}
