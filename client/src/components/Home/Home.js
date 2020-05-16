import React from 'react'
import './Home.css'
import Layout from '../shared/Layout/Layout'
import Carousel from 'react-bootstrap/Carousel/'
import 'bootstrap/dist/css/bootstrap.min.css';    
import CarouselHomeWithButtons from './HomeCarousel/CarouselHomeWithButtons'


const Home = (props) => {
  return (
    <Layout>
      <div className="home">

        <CarouselHomeWithButtons />

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