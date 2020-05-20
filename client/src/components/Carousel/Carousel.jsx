import React, { Component } from 'react'
import './Carousel.css'
import ProductThumb from './ProductThumb'

// ============
// notes
// ============
// We want to make a carousel that 
// shows 3 thumbnails at a time 
// and when you press left, it shifts left
// and when you press right, it shifts right
// maybe with css and javascript animations 

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currIndex: 0
    }
  }


  // ============
  // methods
  // ============

  // on click handler that changes the index 
  // so that it either goes left or right
  // left is lower by 1, right is greater by 1
  // moveBy is the movement amount; -1 for left, 1 for right
  // length is products.length
  handleLeftRight = (moveBy, length) => {
    // change the current index
    let currentIndex = this.state.currIndex + moveBy
    // if the value goes too high above the array's last index
    currentIndex = currentIndex % length
    // if the value is negative (going left) we shift it back up by the length
    // -1 would be going to the last index from the first index
    // -1 + products.length = products.length - 1
    if (currentIndex < 0) { currentIndex += length }

    this.setState({
      currIndex: currentIndex
    })
  }


  // ============
  // render
  // ============ 
  render() {

    // as long as this.props.products doesn't change the index won't be wrong
    // if this.props.products becomes a new array that's too short we will reset the index to zero
    const products = this.props.products
    const displayIndex = this.state.currIndex < products.length - 1 ? this.state.currIndex : 0

    // calculate the next 2 after displayIndex, taking into account overflowing the array 
    const displayIndices = [displayIndex]
    const nextNum = (displayIndex + 1) % products.length
    const nextNextNum = (displayIndex + 2) % products.length
    // push the next one if its not a repeat 
    if (!displayIndices.includes(nextNum)) {
      displayIndices.push(nextNum)
    }
    // push the next next one if its not a repeat 
    if (!displayIndices.includes(nextNextNum)) {
      displayIndices.push(nextNextNum)
    }

    if (products) {
      if (products.length > 0) {
        return (
          <div className="carousel">
            <button className="carousel-move left"
              onClick={() => { this.handleLeftRight(-1, products.length) }} >

              {`<`}

            </button>

            {displayIndices.map((displayIndex) => {
              // for each display index, show the thumbnail
              return <ProductThumb product={products[displayIndex]} />
            })}

            <button className="carousel-move right"
              onClick={() => { this.handleLeftRight(1, products.length) }} >

              {`>`}

            </button>
          </div>
        )
      } else {
        return (
          <div className="carousel">
            Nothing to display in carousel
          </div>
        )
      }
    } else {
      return null
    }
  }
}


export default Carousel