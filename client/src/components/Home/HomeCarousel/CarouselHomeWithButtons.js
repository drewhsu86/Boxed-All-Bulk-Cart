import React, { Component } from 'react'
import './CarouselHomeWithButtons.css'

export default class CarouselHomeWithButtons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currIndex: 0,
      banners: require('./banners.json')
    }
  }

  // =========
  // methods
  // =========

  // method to set the current index of the carousel
  handleSetIndex = (ind) => {
    this.setState({
      currIndex: ind
    })
  }

  // method to set the index to the current plus a moveBy value 
  handleMoveIndex = (moveBy) => {
    const len = this.state.banners.length

    let nextIndex = this.state.currIndex + moveBy
    // handle if the value is over the array limit 
    nextIndex = nextIndex % len
    // handle if the value is negative 
    if (nextIndex < 0) nextIndex += len

    // set the state 
    this.handleSetIndex(nextIndex)
  }

  // =========
  // render
  // =========

  render() {
    console.log(this.state.banners)
    return (
      <div className="carousel-container">
        <img className="carousel-img"
          src={this.state.banners[this.state.currIndex].imgURL}
          alt="Banner for our sale"
        />

        <div className="carousel-fade"
          key={new Date()}
        ></div>

        <div className="carousel-buttons">
          {
            this.state.banners.map((banner, ind) => {
              return (
                <div className="carousel-button"
                  style={ind === this.state.currIndex ? { backgroundColor: "lightblue" } : { backgroundColor: "white" }}
                  onClick={() => { this.handleSetIndex(ind) }}>
                  {banner.title}
                </div>
              )
            })
          }
        </div>

        <div className="carousel-arrow left"
          onClick={() => { this.handleMoveIndex(-1) }}
        >
          {`<`}
        </div>
        <div className="carousel-arrow right"
          onClick={() => { this.handleMoveIndex(1) }}
        >
          {`>`}
        </div>
      </div>

    )
  }
}
