import React, { Component } from 'react'
import api from '../../services/apiConfig'

export default class Signup extends Component {
  // required states: text to match input fields
  // required props: setToken for if successful api call 
  constructor(props) {
    super(props)
    this.state = {
      inputEmail: '',
      inputUsername: '',
      inputPassword: '',
      inputInviteCode: '',
      errMsg: '',
      creationSuccess: false,
      canSubmit: false
    }
  }

  // ============
  // methods 
  // ============

  // set the state with the state name and e.target.value 
  handleChange = async (e, stateName) => {
    await this.setState({
      [stateName]: e.target.value
    })
    await this.setState({
      canSubmit: this.canSubmit()
    })
  }

  // handle on submit => what happens when form is submitted
  handleSubmit = async (e) => {
    e.preventDefault()

    if (this.canSubmit) {
      // when form is submitted, do api call and set the token if successful
      // if successful, then set creationSuccess to true
      try {
        const response = await api.post('/signup', {
          email: this.state.inputEmail,
          username: this.state.inputUsername,
          password: this.state.inputPassword,
          invite_code: this.state.inputInviteCode
        })

        console.log(response)
        this.props.setToken(response.data.token, response.data.user)
        this.setState({ creationSuccess: true })
      } catch (er) {
        console.log(er)
        this.setState({
          errMsg: er.message || 'The api call failed'
        })
      }
    } else {
      // either password or email is wrong 
      this.setState({
        errMsg: "Please make sure the email and password are valid"
      })
    }
  }

  // check if we can submit
  canSubmit = () => {
    // check inputs to see if we can submit 
    // email address needs an @ 
    // password needs to be 6 letters (we are lax for testing)
    if (!this.state.inputEmail.includes('@')) {
      this.setState({
        errMsg: "Email address needs an '@'"
      })
      return false
    }

    if (this.state.inputPassword.length < 6) {
      this.setState({
        errMsg: "Passwords need to be at least 6 characters"
      })
      return false
    }

    this.setState({
      errMsg: ""
    })
    return true
  }

  // ============
  // render
  // ============
  render() {
    if (localStorage.getItem('token')) {
      return (<div>
        <h3>Create an Account</h3>
        <h1>You are logged in.</h1>
      </div>)
    } else if (this.state.creationSuccess) {
      return (<div>
        <h1>Thank you for signing up!</h1>
      </div>)
    } else {

      return (
        <div>
          <ul>
            <h3>Create an Account</h3>
            <li>Email address needs to contain '@'</li>
            <li>Password needs to be at least 6 characters</li>
          </ul>
          <form onSubmit={this.handleSubmit}>
            {this.state.errMsg ? <p className="error">{this.state.errMsg}</p> : null}

            <label>Email</label>
            <input type="text" value={this.state.inputEmail}
              onChange={e => this.handleChange(e, 'inputEmail')}
            />

            <label>Username</label>
            <input type="text" value={this.state.inputUsername}
              onChange={e => this.handleChange(e, 'inputUsername')}
            />

            <label>Password</label>
            <input type="password" value={this.state.inputPassword}
              onChange={e => this.handleChange(e, 'inputPassword')}
            />

            <label>Invite Code</label>
            <input type="text" value={this.state.inputInviteCode}
              onChange={e => this.handleChange(e, 'inputInviteCode')}
            />

            <button disabled={!this.state.canSubmit}>Submit</button>
          </form>
        </div>
      )
    }
  }
}
