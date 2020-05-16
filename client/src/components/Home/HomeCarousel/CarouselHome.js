import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel/'
import './CarouselHome.css'



export default class CarouselHome extends Component {
  render() {
    return (
      <div className="carousel-container">
        <Carousel>

          <Carousel.Item>
            <img
              className="slide1"
              src="https://i.imgur.com/BHUrVZ1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="slide-title1">Don't Run Out</h3>
              <p className="slide-description1`">Stock up on snacks, supplies, and more in bulk.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="slide2"
              src="https://i.imgur.com/HliC00g.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="slide-title2">Big Sizes, Big Savings</h3>
              <p className="slide-description2">Stock up on all the essentials you need from all your favorite brands.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="slide3"
              src="https://i.imgur.com/NRUtCWB.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="slide-title3">Free Hand Soap</h3>
              <p className="slide-description3">Get this freebie with your order $100+ order. Use code: FREESOAP</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="slide4"
              src="https://i.imgur.com/D8xDFgu.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3 className="slide-title4">Sip, Sip Hooray</h3>
              <p className="slide-description4">Waters, sodas, juices and more that are just from first sip to last drop.</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div >
    )
  }
}
