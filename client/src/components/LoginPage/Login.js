import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
  render() {
    return (
      <>
        <div className="already-a-customer">
          <h1 className="login-title">Already a Customer</h1>
          <div className="form-container">
            <h2 className="form-title">EMAIL ADDRESS</h2>
            <form>
              <input
                className="login-input"
                input="text"
              />
            </form>
            <h2 className="form-title">PASSWORD</h2>
            <form>
              <input
                className="login-input"
                input="text"
              />
            </form>
            <a
              className="forgot-password"
              href="#">Forgot password?</a>
            <button className="login-button">LOG IN</button>
            <button className="facebook-button">
              <img
                className="facebook-icon"
                src="https://i.imgur.com/t1qNWc5.png"
                alt="facebook icon" />
              Continue with Facebook</button>
            <button className="google-button">
              <img
                className="google-icon"
                src="https://i.imgur.com/53KKLHI.png"
                alt="google icon" />
              Continue with Google</button>
          </div>
        </div>


        <div className="create-an-account">
          <h1 className="login-title">Create An Account</h1>
          <button className="create-button">CREATE ACCOUNT</button>
        </div>
      </>
    )
  }
}
