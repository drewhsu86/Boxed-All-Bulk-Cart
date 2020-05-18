import React from 'react'
import { Link } from 'react-router-dom'
import LoginStatus from './LoginStatus'

export default function AdminNav(props) {
  // show a bunch of links to use for the admin features 
  // buttons for: create, edit/delete (manage), login, logout, signup
  return (
    <nav className="adminNav">
      <LoginStatus username={props.username} />

      <div>
        <Link to="/admin/create">
          <button>
            Create an item
        </button>
        </Link>

        <Link to="/admin/manage">
          <button>
            Manage an item
          </button>
        </Link>

        <Link to="/admin/signup">
          <button>
            Create Account
        </button>
        </Link>

        <Link to="/admin/signin">
          <button>
            Sign in
        </button>
        </Link>

        <button onClick={() => { props.removeToken() }}>
          Sign Out
      </button>
      </div>
    </nav>
  )
}
