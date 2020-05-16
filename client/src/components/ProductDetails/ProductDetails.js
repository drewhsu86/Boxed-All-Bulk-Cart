import React, { Component } from 'react'
import Reviews from '../ProductDetails/Reviews/Reviews'
import Info from './Info/Info'
import Images from './Image/Images'
import RelatedItems from './RelatedItems/RelatedItems'
import './ProductDetails.css'

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
        <div className="prodColumn left">
          <div className="topRow">
            <Images images={this.state.items[0].images} altText={this.state.items[0].name} />
          </div>
          <Reviews />
        </div>
        <div className="prodColumn right">
          <div className="topRow">
            <Info items={this.state.items} />
          </div>
          <RelatedItems items={this.state.items} />
        </div>
      </div>
    )
  }
}




