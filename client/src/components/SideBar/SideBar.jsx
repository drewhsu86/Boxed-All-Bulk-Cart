import React, { Component } from 'react'
import './SideBar.css'
import SideNav from '../SideNav/SideNav'
import SideFilter from '../SideFilter/SideFilter'

class SideBar extends Component {
  render() {
    return (
      <div className="sidebar" >
        <div>
          <SideNav />
        </div>
        <div>
          <SideFilter />
        </div>
      </div>
    )
  }
}



export default SideBar