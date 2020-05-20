import React from 'react'
import './Nav2.css'
import { NavLink, Redirect } from 'react-router-dom'


class Nav2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputSearch: '',
      redirect: null
    }
  }

  // ===========
  // methods
  // ===========
  handleChange = (e) => {
    this.setState({
      inputSearch: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('handle submit')
    // go to a different page  
    this.setState({
      inputSearch: '',
      redirect: <Redirect to={`/productsearch/${this.state.inputSearch}`} />
    })
  }

  // ===========
  // render
  // ===========
  render() {
    const toggleCart = this.props.toggleCart

    if (this.state.redirect) {
      const redirect = this.state.redirect
      this.setState({
        redirect: null
      })
      return redirect
    } else {
      return (
        <nav>
          <div className="nav2-container">
            <NavLink
              to="/">
              <img
                className="logo"
                src="https://i.imgur.com/xWUha06.png"
                alt="boxed-logo"
              />
            </NavLink>

            <form className="search-form" onSubmit={this.handleSubmit}>
              <input
                className="search-input"
                name="search"
                placeholder="Search for your favorites in bulk"
                type="text"
                value={this.state.inputSearch}
                onChange={this.handleChange}
              />
            </form>

            <NavLink
              to="/">
              <img
                className="freeShippingLogo"
                src="https://i.imgur.com/rlnhOR6.png"
                alt="free-shipping-logo"
              />
            </NavLink>

            <div className="rightLink2">
              <NavLink
                to="#">
                <img
                  className="ellipse"
                  src="https://i.imgur.com/bLXjQTs.png"
                  alt="ellipse" />
              </NavLink>

              <a
                href="#"
                className="zipcode">10019</a>

              <NavLink
                className="login"
                to="/login">Login</NavLink>

              <NavLink
                className="createAccount"
                to="/login">Create Account</NavLink>

              <a
                href="#" onClick={toggleCart}>
                <img
                  className="cartImage"
                  src="https://i.imgur.com/3LYIYEJ.png"
                  alt="cart image"
                />
              </a>
            </div>
          </div>
        </nav>
      )
    }
  }
}

export default Nav2