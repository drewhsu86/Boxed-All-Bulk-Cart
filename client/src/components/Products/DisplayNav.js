import React from 'react'
import { Link } from 'react-router-dom'

export default function DisplayNav(props) {
  return (
    <div className="displayNav">
      <Link to="/products">Home</Link>
      {props.category ? <p>></p> : null}
      <Link to={`/products/${props.category}`}>{props.category ? props.category[0].toUpperCase() + props.category.slice(1) : null}</Link>
      {props.subcategory ? <p>></p> : null}
      <Link to={`/products/${props.category}/${props.subcategory}`}> {props.subcategory ? props.subcategory[0].toUpperCase() + props.subcategory.slice(1) : null}</Link>
    </div>
  )
}

