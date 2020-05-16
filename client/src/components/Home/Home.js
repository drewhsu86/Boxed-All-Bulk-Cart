import React from 'react'
import './Home.css'
import Layout from '../shared/Layout/Layout'
import Carousel from 'react-bootstrap/Carousel/'
import 'bootstrap/dist/css/bootstrap.min.css';    


const Home = (props) => {
  return (
    <Layout>
      <div className="home">
        <Carousel>
          <Carousel.Item>
            <img
              className="slide1"
              src="https://i.imgur.com/BHUrVZ1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide2"
              src="https://i.imgur.com/HliC00g.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide3"
              src="https://i.imgur.com/NRUtCWB.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide4"
              src="https://i.imgur.com/D8xDFgu.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <img
          className='bottom-banner'
          src="https://i.imgur.com/7geb1p2.png"
          alt="bottom-banner"
          path="/products"
        />
      </div>
    </Layout>
  )
}

export default Home