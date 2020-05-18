import React from 'react'
import './Nav3.css'
// import { NavLink } from 'react-router-dom'


const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav3-container">
        <a
          href="/products"
          className="categories">Categories</a>
        <a 
          href="#"
          className="expressDelivery">Express Delivery</a>
        <a
          href="#"
          className="allNew">All New</a>
        <a
          href="#"
          className="deals">Deals</a>
        <a
          href="#"
          className="favs">Favorites</a>
        <a
          href="#"
          className="featured">Featured Brands</a>
        <a
          href="#"
          className="covid">COVID-19 Response</a>
      </div>
    </nav>
  )
}

export default Nav