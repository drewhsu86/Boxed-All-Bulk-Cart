import React, { Component } from 'react'
import "./Sort.css"

const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }

// one liner
// const compareKey = key => (a, b) => a[key] == b[key]? (a[key] < b[key] ? -1 : 1) : 0

export const AZ = arr => arr.sort(compareKey('name'))
export const ZA = arr => arr.sort(compareKey('name')).reverse()
export const lowestFirst = arr => arr.sort((a, b) => parseInt(a.price) - parseInt(b.price))
export const highestFirst = arr => arr.sort((a, b) => parseInt(b.price) - parseInt(a.price))
export const rating = arr => arr.sort((a, b) => parseInt(b.rating) - parseInt(a.rating))






class Sort extends Component {




  handleSubmit = event => event.preventDefault()


  render() {
    return (
      <form className="sort-container" onSubmit={this.handleSubmit}>
        <select className="sort" value={this.props.selectedValue} onChange={this.props.handleSortChange}>
          <option className="option" value="title-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
          <option value="title-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
          <option value="highestFirst">&nbsp; Highest Price &nbsp;</option>
          <option value="lowestFirst">&nbsp; Lowest Price &nbsp;</option>
          <option value="rating">&nbsp; Top Rated &nbsp;</option>
        </select>
      </form>
    )
  }
}




export default Sort