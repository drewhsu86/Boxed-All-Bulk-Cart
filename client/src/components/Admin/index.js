import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Admin.css'
import api from '../../services/apiConfig'
import AdminNav from './AdminNav'
import Signup from './Signup'
import Signin from './Signin'
import Create from './Create'

class Index extends Component {
  // component to hold the routes for all admin stuff
  constructor() {
    super()

    this.state = {
      token: localStorage.getItem('token') || '',
      user: null
    }
  }
  // ============
  // methods 
  // ============

  async componentDidMount() {
    // check for a user to see if logged in already 
    const response = await api.get('/verifyuser')
    console.log('admin mount response: ', response)
    this.setState({
      user: response.data
    })
  }

  // method to set a token to both state and localstore
  setToken = (token, user) => {
    this.setState({
      token,
      user
    })
    localStorage.setItem('token', token)
    console.log('add token state: ', this.state.token)
    this.forceUpdate()
  }

  // method to remove the token from state and localstore
  removeToken = async () => {
    await this.setState({
      token: '',
      user: null
    })
    localStorage.removeItem('token')
    console.log('remove token state: ', this.state.token)
    this.forceUpdate()
  }


  render() {
    console.log('admin user: ', this.state.user)
    return (
      <div className="admin">
        <AdminNav username={this.state.user ? this.state.user.username : null} removeToken={this.removeToken} />

        <Route path="/admin/signup">
          <Signup setToken={this.setToken} />
        </Route>

        <Route path="/admin/signin">
          <Signin setToken={this.setToken} />
        </Route>

        <Route path="/admin/create">
          <Create />
        </Route>
      </div>
    )
  }
}

export default Index
