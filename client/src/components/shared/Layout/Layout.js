import React from 'react'
import './Layout.css'
import Nav1 from '../Nav/Nav1'
import Nav2 from '../Nav/Nav2'
import Nav3 from '../Nav/Nav3'



const Layout = (props) => (
  <div className='layout'>
    <Nav1 />
    <Nav2 />
    <Nav3 />
    <div className='layout-children'>
      {props.children}
    </div>
  </div>

)

export default Layout