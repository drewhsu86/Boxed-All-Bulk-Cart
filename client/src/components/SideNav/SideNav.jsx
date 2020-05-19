import React, { Component } from 'react'
import './SideNav.css'
import categories from '../../categories.json'
import { Link } from 'react-router-dom'

class SideNav extends Component {
  constructor() {
    super()

    this.state = {
      catIndex: -1
    }
  }


  linkClicked = (ind) => {
    this.setState({
      catIndex: ind
    })
  }

  render() {

    const CATEGORIES = categories.map((cat, ind) => (
      <div>
        <Link to={`/products/${cat.url}`}>
          <p onClick={() => this.linkClicked(ind)}>
            {cat.name}
          </p>
        </Link>
        {this.state.catIndex === ind ?
          cat.subcat.map((sc) => (
            <Link to={`/products/${cat.url}/${sc.url}`}>
              {sc.name}
            </Link>
          ))
          : null}
      </div>
    ))

    return (
      <nav className="nav">
        <h3>Categories</h3>
        {CATEGORIES}
      </nav>
    )
  }
}


export default SideNav