import React from 'react'
import './Nav1.css'
import { NavLink } from 'react-router-dom'


const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav1-container">
        <div className="leftLink">
          <a
            href="#"
            className="shipping">Free Shipping on Orders $49+ / Express $99+</a>
        </div>
        <div className="rightLink">
          <a
            href="#"
            className="favorites">Favorites</a>
          <a
            href="#"
            className="groupOrder">Start A Group Order</a>
          <a
            href="#"
            className="boxedBusiness">Boxed for Business</a>
        </div >
      </div >
    </nav >
  )
}

export default Nav