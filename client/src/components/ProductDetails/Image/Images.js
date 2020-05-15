import React, { Component } from 'react'
import './Images.css'

export default class Images extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currIndex: 0
    }
  }


  render() {

    // images is an array of image urls 
    const images = this.props.images || []
    // alt text should just come from name of the product 
    const altText = this.props.altText || "No images available"

    if (images.length < 1) {
      // if no images return a big "no images"
      return (
        <div className="imageChooser">
          <div className="imageColumn">
          </div>

          <div className="imageMain">
            <h1>No Images Available</h1>
          </div>
        </div>
      )

    } else {

      return (
        <div className="imageChooser">
          <div className="imageColumn">

          </div>

          <div className="imageMain">
            <img src={images[this.state.currIndex]} alt={this.state.altText} />
          </div>
        </div>
      )
    }
  }
}
