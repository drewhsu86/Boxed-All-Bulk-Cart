import React, { Component } from 'react'
import './SideNav.css'
import { Link } from 'react-router-dom'

class SideNav extends Component {
  render() {
    return (
      <nav className="nav">
        <h3>Categories</h3>
        <Link to="/products/snacks">LINK</Link>
        <li>All Bulk</li>
        <li>Snacks</li>
        <li>Beverages</li>
        <li>Grocery</li>
        <li>Household Essentials</li>
        <li>Personal Care</li>
        <li>Health and Wellness</li>
        <li>Baby</li>
        <li>Home</li>
        <li>School and Office</li>
        <li>Pets</li>
        <li>Wine</li>
      </nav>
    )
  }
}


export default SideNav