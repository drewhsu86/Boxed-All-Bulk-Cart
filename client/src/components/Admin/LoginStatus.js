import React from 'react'


export default class LoginStatus extends React.Component {
  // simple component that shows the user  
  // if you logged in 

  // ============
  // render 
  // ============
  render() {
    if (this.props.username) {
      return (
        <div>
          You are logged in as {this.props.username}.
        </div>
      )

    } else {
      return (
        <div>
          You are not logged in.
        </div>
      )
    }
  }
}
