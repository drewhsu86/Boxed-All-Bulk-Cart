import React from 'react'
import Nav0 from './Nav0'
import Nav1 from './Nav1'
import Nav2 from './Nav2'
import Nav3 from './Nav3'


export default function Nav(props) {
  return (
    <div>
      <Nav0 />
      <Nav1 />
      <Nav2 toggleCart={props.toggleCart} />
      <Nav3 />
    </div>
  )
}
