import React, { Component } from 'react'
import SideNav from '../SideNav/SideNav'
import SideFilter from '../SideFilter/SideFilter'

class SideBar extends Component {
  render() {
    return (
      <div>
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