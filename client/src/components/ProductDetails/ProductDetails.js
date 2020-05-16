import React, { Component } from 'react'
import Reviews from '../ProductDetails/Reviews/Reviews'
import Info from './Info/Info'
import Images from './Image/Images'
import RelatedItems from './RelatedItems/RelatedItems'

const data = require('../data.json')

export default class ProductDetails extends Component {
  constructor() {
    super()

    this.state = {
      items: data
    }
  }


  render() {
    console.log(this.state.items)
    return (
      <div className="detail-container">
        <div className="prodColumn">
          <Images images={this.state.items[0].images} altText={this.state.items[0].name} />
          <Reviews />
        </div>
        <div className="prodColumn">
          <Info items={this.state.items} />
          <RelatedItems items={this.state.items} />
        </div>
      </div>
    )
  }
}




