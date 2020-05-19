import React from 'react'
import './Nav2.css'
import { NavLink } from 'react-router-dom'


const Nav = ({ user, toggleCart }) => {
  return (
    <nav>
      <div className="nav2-container">
        <NavLink
          to="/">
          <img
            className="logo"
            src="https://i.imgur.com/xWUha06.png"
            alt="boxed-logo"
          />
        </NavLink>

        <form className="search-form">
          <input
            className="search-input"
            name="search"
            placeholder="Search for your favorites in bulk"
            type="text"
          />
        </form>

        <NavLink
          to="/">
          <img
            className="freeShippingLogo"
            src="https://i.imgur.com/rlnhOR6.png"
            alt="free-shipping-logo"
          />
        </NavLink>

        <div className="rightLink2">
          <NavLink
            to="#">
            <img
              className="ellipse"
              src="https://i.imgur.com/bLXjQTs.png"
              alt="ellipse" />
          </NavLink>

          <a
            href="#"
            className="zipcode">10019</a>

          <NavLink
            className="login"
            to="admin/signin">Login</NavLink>

          <NavLink
            className="createAccount"
            to="admin/signup">Create Account</NavLink>

          <a
            href="#" onClick={toggleCart}>
            <img
              className="cartImage"
              src="https://i.imgur.com/3LYIYEJ.png"
              alt="cart image"
            />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav