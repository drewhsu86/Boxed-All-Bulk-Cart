import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHomeWithButtons from './HomeCarousel/CarouselHomeWithButtons'
import HomeModal from './HomeModal/HomeModal'


const Home = (props) => {
  return (
    <div className="home">
      <HomeModal />

      <CarouselHomeWithButtons />

      <img
        className='bottom-banner'
        src="https://i.imgur.com/7geb1p2.png"
        alt="bottom-banner"
        path="/products"
      />
    </div>
  )
}

export default Home