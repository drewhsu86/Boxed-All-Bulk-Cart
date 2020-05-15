import React, { Component } from 'react'
import './Info.css'
import { withRouter } from 'react-router-dom'

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
            <h1 className="item-name">{item.name}</h1>
            <h4 className="item-rating">Rating: {item.rating}</h4>
            <p className="stock-date">Stocked on: 4/4/20</p>
            <p className="expiration">Experiation date: 5/4/25</p>
            <p className="order-free">Orders over $49.00 ship free</p>
            <p className="delivery-zip">On-demand delivery to 10019</p>
            <h2 className="item-price">${item.price}</h2>
            <button className="cart-button">Add to BULK Cart</button>
            {/* <img src={item.images[1]} /> */}
          </div>
        )
      })}
    </>
  )
}

export default Info