import React, { Component } from 'react'
import './Info.css'
import { withRouter } from 'react-router-dom'
import StarRating from '../../StarRating'

// export default class Info extends Component {
//   constructor() {
//     super()

//     this.state = {
//       item: {}
//     }
//   }


//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }


const Info = ({ items }) => {
  return (
    <>
      {items.map(item => {
        return (
          <div key={item.name} className="item-div">
            <h2 className="item-name">{item.name}</h2>
            {/* <h4 className="item-rating">Rating: {item.rating}</h4> */}
            <StarRating rating={item.rating} />
            <h3 className="item-price">${item.price}</h3>
            <button className="ounces">32 oz</button>
            <h4 className="stock">in stock</h4>
            <p className="stock-date">Stocked on: {item.stockDate}</p>
            <p className="expiration">Experiation date: {item.expirationDate}</p>
            <p className="order-free">Orders over $49.00 ship free</p>
            <p className="delivery-zip">On-demand delivery to 10019</p>
            <button className="cart-button">Add to BULK Cart</button>
            {/* <img src={item.images[1]} /> */}
          </div>
        )
      })}
    </>
  )
}

export default Info