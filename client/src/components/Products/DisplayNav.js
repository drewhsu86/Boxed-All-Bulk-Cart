import React from 'react'

export default function DisplayNav(props) {
  return (
    <div style={styler}>
      <p>Home</p>
      {props.category ? <p>></p> : null}
      <p>{props.category}</p>
      {props.subcategory ? <p>></p> : null}
      <p>{props.subcategory}</p>
    </div>
  )
}


const styler = {
  display: 'flex'
}