import React, { Component } from 'react'
import './RelatedItems.css'
import { Link } from 'react-router-dom'
import StarRating from '../../StarRating'
const data = require('../../RelatedItemsDummyData.json')




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

const RelatedItems = () => {
  const item = data
  return (
    <div className="related_component">
      <div>
      <h1 className="related-items-title">Related Items</h1>
      </div>
      {item.map(item => {
        return (
          <>
            <div className="related-container">
              <div key={item.name} className="related-box">
                <div className="item-one">
                  <img className="related-image" alt="related item image" src={item.images[0]} />
                  <div className="item-info">
                    <h1 className="item-title">{item.name}</h1>
                    <h2 className="item-size">{item.size}</h2>
                    <h1 className="related-price">${item.price}</h1>
                    <StarRating className="rating" rating={item.rating} />
                  </div>                 
                </div>
              </div>
            </div>
          </>
        )
      })}
    </div>
  )
}


export default RelatedItems