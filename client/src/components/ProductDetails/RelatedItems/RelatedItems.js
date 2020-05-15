import React, { Component } from 'react'
import './RelatedItems.css'
import { Link } from 'react-router-dom'

// const data = require('../../data.json')




// export default class RelatedItems extends Component {



//   render() {
//     const id = this.props.match.params.id;
//     const data = data.find(item => item.id === id);


//     return (
//       <div className="related-details">

//         <h3>Related: </h3>
//         {items.map(item => (
//             <div>
//               <h4>{data.name}</h4>
//               <h4>{data.id}</h4>
//             </div>
//           ))}

//         <Link
//           to={{
//             pathname: "/",
//             state: this.props.location.state
//           }}
//         >
//         </Link>
//       </div>
//     );
//   }
// }

const RelatedItems = ({ items }) => {
  return (
    <>
      {items.map(item => {
        return (
          <>
            <div className="component-title">
              <h1>Related Items</h1>
            </div>
            <div key={item.name} className="related-container">
              <div className="one-item">
                <img className="related-image" alt="related item image" src={item.images[1]} />
                <h1 className="item-title">{item.name}</h1>
                <h2 className="item-size">{item.size}</h2>
                <h1 className="item-price">${item.price}</h1>
                <h3 className="rating">Rating: {item.rating}</h3>
              </div>
              <div className="one-item">
                <img className="related-image" alt="related item image" src={item.images[2]} />
                <h1 className="item-title">{item.name}</h1>
                <h2 className="item-size">{item.size}</h2>
                <h1 className="item-price">${item.price}</h1>
                <h3 className="rating">Rating: {item.rating}</h3>
              </div>
              <div className="one-item">
                <img className="related-image" alt="related item image" src={item.images[3]} />
                <h1 className="item-title">{item.name}</h1>
                <h2 className="item-size">{item.size}</h2>
                <h1 className="item-price">${item.price}</h1>
                <h3 className="rating">Rating: {item.rating}</h3>
              </div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default RelatedItems