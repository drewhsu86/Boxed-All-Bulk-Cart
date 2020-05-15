import React from 'react'
import './Home.css'
import Layout from '../shared/Layout/Layout'
import CarouselHome from './HomeCarousel/CarouselHome'

const Home = (props) => {
  return (
    <Layout>
      <div className="home">
        <CarouselHome />
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