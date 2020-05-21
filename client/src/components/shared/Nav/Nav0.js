import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav0.css'

class Nav0 extends Component {
  constructor() {
    super()
    this.state = {
      show: true
    }
  }

  // ===========
  // methods
  // ===========
  handleClick = () => {
    this.setState({
      show: false
    })
  }

  // ===========
  // render 
  // ===========
  render() {

    if (this.state.show) {
      return (
        <div className="nav0-container">
          <p className="nav0-exit" onClick={this.handleClick}>x</p>
          {`<!> LIMITED DELIVERY TIMES: `}
          <Link to="/login"> Log in </Link> to see available dates.
        </div>
      )
    } else {
      return null
    }

  }
}

export default Nav0
