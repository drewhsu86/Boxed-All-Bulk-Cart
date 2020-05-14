import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function StarRating(props) {

  // fontAwesome icons for react 
  // https://www.npmjs.com/package/@fortawesome/react-fontawesome

  // filled star
  const fStar = <FontAwesomeIcon icon={faStar} style={{ color: "#dddd00" }} />
  // empty star
  const eStar = <FontAwesomeIcon icon={faStar} style={{ color: "black" }} />

  // rating should be between 0 and 5 
  // we have to make it into a number 
  let rating = typeof props.rating === "number" || typeof props.rating === "string" ? Math.round(Number(props.rating)) : 3
  if (rating > 5) { rating = 5 }
  if (rating < 0) { rating = 0 }

  // make an array of star jsx either full or empty
  // use for loop and compare star number 
  let stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? fStar : eStar)
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {
        stars
      }
    </div>
  )
}
