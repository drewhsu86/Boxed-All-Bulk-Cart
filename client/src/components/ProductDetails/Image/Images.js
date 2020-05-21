import React, { Component } from 'react'
import './Images.css'

export default class Images extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currIndex: 0
    }
  }

  // =========
  // methods
  // =========

  handleCurrIndex = (ind) => {
    this.setState({
      currIndex: ind
    })
  }

  // =========
  // render
  // =========
  render() {

    // images is an array of image urls 
    const images = this.props.images || []
    // alt text should just come from name of the product 
    const altText = this.props.altText || "No images available"

    if (!images) {
      return null
    } else if (images.length < 1) {
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
        <div className="image-container">
          <div className="imageChooser">
            <div className="imageColumn">
              {
                images.map((image, ind) => {
                  // if we click each button then the currIndex
                  // should become the index of the button
                  // since we mapped from images 
                  return <img className="imageButton"
                    src={image} alt="button for showing images" onClick={() => { this.handleCurrIndex(ind) }} />
                })
              }
            </div>

            <div className="imageMain">
              <img className="imageImg"
                src={images[this.state.currIndex]} alt={altText} />
            </div>
          </div>
        </div>
      )
    }
  }
}
