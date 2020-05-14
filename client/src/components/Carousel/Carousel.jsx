import React, { Component } from 'react'
import './Carousel.css'

class Carousel extends Component {
  render() {
    return (
      <div className="carousel">
        <h3>{this.props.name}</h3>
        <img src={this.props.img}></img>
        <p>{this.props.description}</p>
      </div>
    )
  }
}


export default Carousel